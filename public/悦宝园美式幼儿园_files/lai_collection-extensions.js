//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Mongo = Package.mongo.Mongo;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;

/* Package-scope variables */
var CollectionExtensions;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/lai_collection-extensions/collection-extensions.js                                                   //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// The collection extensions namespace                                                                           // 1
CollectionExtensions = {};                                                                                       // 2
                                                                                                                 // 3
// Stores all the collection extensions                                                                          // 4
CollectionExtensions._extensions = [];                                                                           // 5
                                                                                                                 // 6
// This is where you would add custom functionality to                                                           // 7
// Mongo.Collection/Meteor.Collection                                                                            // 8
CollectionExtensions.addExtension = function(customFunction) {                                                   // 9
  if (typeof customFunction !== 'function') {                                                                    // 10
    throw new Meteor.Error(                                                                                      // 11
      'collection-extension-wrong-argument',                                                                     // 12
      'You must pass a function \
       into CollectionExtensions.addExtension().');                                                              // 14
  }                                                                                                              // 15
  CollectionExtensions._extensions.push(customFunction);                                                         // 16
  // If Meteor.users exists, apply the extension right away                                                      // 17
  if (typeof Meteor.users !== 'undefined') {                                                                     // 18
    customFunction.apply(Meteor.users, ['users']);                                                               // 19
  }                                                                                                              // 20
};                                                                                                               // 21
                                                                                                                 // 22
// Backwards compatibility                                                                                       // 23
Meteor.addCollectionExtension = function() {                                                                     // 24
  console.warn('`Meteor.addCollectionExtension` is deprecated, please use `CollectionExtensions.addExtension`');
  CollectionExtensions.addExtension.apply(null, arguments);                                                      // 26
};                                                                                                               // 27
                                                                                                                 // 28
// Utility function to add a prototype function to your                                                          // 29
// Meteor/Mongo.Collection object                                                                                // 30
CollectionExtensions.addPrototype = function(name, customFunction) {                                             // 31
  if (typeof name !== 'string') {                                                                                // 32
    throw new Meteor.Error(                                                                                      // 33
      'collection-extension-wrong-argument',                                                                     // 34
      'You must pass a string as the first argument \
       into CollectionExtensions.addPrototype().');                                                              // 36
  }                                                                                                              // 37
  if (typeof customFunction !== 'function') {                                                                    // 38
    throw new Meteor.Error(                                                                                      // 39
      'collection-extension-wrong-argument',                                                                     // 40
      'You must pass a function as the second argument \
       into CollectionExtensions.addPrototype().');                                                              // 42
  }                                                                                                              // 43
  (typeof Mongo !== 'undefined' ?                                                                                // 44
    Mongo.Collection :                                                                                           // 45
    Meteor.Collection).prototype[name] = customFunction;                                                         // 46
};                                                                                                               // 47
                                                                                                                 // 48
// Backwards compatibility                                                                                       // 49
Meteor.addCollectionPrototype = function() {                                                                     // 50
  console.warn('`Meteor.addCollectionPrototype` is deprecated, please use `CollectionExtensions.addPrototype`');
  CollectionExtensions.addPrototype.apply(null, arguments);                                                      // 52
};                                                                                                               // 53
                                                                                                                 // 54
// This is used to reassign the prototype of unfortunately                                                       // 55
// and unstoppably already instantiated Mongo instances                                                          // 56
// i.e. Meteor.users                                                                                             // 57
function reassignCollectionPrototype(instance, constr) {                                                         // 58
  var hasSetPrototypeOf = typeof Object.setPrototypeOf === 'function';                                           // 59
                                                                                                                 // 60
  if (!constr) constr = typeof Mongo !== 'undefined' ? Mongo.Collection : Meteor.Collection;                     // 61
                                                                                                                 // 62
  // __proto__ is not available in < IE11                                                                        // 63
  // Note: Assigning a prototype dynamically has performance implications                                        // 64
  if (hasSetPrototypeOf) {                                                                                       // 65
    Object.setPrototypeOf(instance, constr.prototype);                                                           // 66
  } else if (instance.__proto__) {                                                                               // 67
    instance.__proto__ = constr.prototype;                                                                       // 68
  }                                                                                                              // 69
};                                                                                                               // 70
                                                                                                                 // 71
// This monkey-patches the Collection constructor                                                                // 72
// This code is the same monkey-patching code                                                                    // 73
// that matb33:collection-hooks uses, which works pretty nicely                                                  // 74
function wrapCollection(ns, as) {                                                                                // 75
  // Save the original prototype                                                                                 // 76
  if (!as._CollectionPrototype) as._CollectionPrototype = new as.Collection(null);                               // 77
                                                                                                                 // 78
  var constructor = as.Collection;                                                                               // 79
  var proto = as._CollectionPrototype;                                                                           // 80
                                                                                                                 // 81
  ns.Collection = function () {                                                                                  // 82
    var ret = constructor.apply(this, arguments);                                                                // 83
    // This is where all the collection extensions get processed                                                 // 84
    processCollectionExtensions(this, arguments);                                                                // 85
    return ret;                                                                                                  // 86
  };                                                                                                             // 87
                                                                                                                 // 88
  ns.Collection.prototype = proto;                                                                               // 89
  ns.Collection.prototype.constructor = ns.Collection;                                                           // 90
                                                                                                                 // 91
  for (var prop in constructor) {                                                                                // 92
    if (constructor.hasOwnProperty(prop)) {                                                                      // 93
      ns.Collection[prop] = constructor[prop];                                                                   // 94
    }                                                                                                            // 95
  }                                                                                                              // 96
};                                                                                                               // 97
                                                                                                                 // 98
function processCollectionExtensions(self, args) {                                                               // 99
  // Using old-school operations for better performance                                                          // 100
  // Please don't judge me ;P                                                                                    // 101
  var args = args ? [].slice.call(args, 0) : undefined;                                                          // 102
  var extensions = CollectionExtensions._extensions;                                                             // 103
  for (var i = 0, len = extensions.length; i < len; i++) {                                                       // 104
    extensions[i].apply(self, args);                                                                             // 105
  }                                                                                                              // 106
};                                                                                                               // 107
                                                                                                                 // 108
if (typeof Mongo !== 'undefined') {                                                                              // 109
  wrapCollection(Meteor, Mongo);                                                                                 // 110
  wrapCollection(Mongo, Mongo);                                                                                  // 111
} else {                                                                                                         // 112
  wrapCollection(Meteor, Meteor);                                                                                // 113
}                                                                                                                // 114
                                                                                                                 // 115
if (typeof Meteor.users !== 'undefined') {                                                                       // 116
  // Ensures that Meteor.users instanceof Mongo.Collection                                                       // 117
  reassignCollectionPrototype(Meteor.users);                                                                     // 118
}                                                                                                                // 119
                                                                                                                 // 120
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['lai:collection-extensions'] = {}, {
  CollectionExtensions: CollectionExtensions
});

})();
