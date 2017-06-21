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
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var _ = Package.underscore._;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

/* Package-scope variables */
var __coffeescriptShare, ReactiveField;

(function(){

////////////////////////////////////////////////////////////////////////////////////
//                                                                                //
// packages/peerlibrary_reactive-field/packages/peerlibrary_reactive-field.js     //
//                                                                                //
////////////////////////////////////////////////////////////////////////////////////
                                                                                  //
(function () {                                                                    // 1
                                                                                  // 2
/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// packages/peerlibrary:reactive-field/lib.coffee.js                           //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
                                                                                  // 10
                                                                                  // 11
ReactiveField = (function() {                                                     // 12
  function ReactiveField(initialValue, equalsFunc, storePrevious) {               // 13
    var getterSetter, previousValue, value;                                       // 14
    if (!_.isFunction(equalsFunc) && arguments.length === 2) {                    // 15
      storePrevious = equalsFunc;                                                 // 16
      equalsFunc = null;                                                          // 17
    }                                                                             // 18
    previousValue = void 0;                                                       // 19
    value = new ReactiveVar(initialValue, equalsFunc);                            // 20
    getterSetter = function(newValue) {                                           // 21
      if (arguments.length > 0) {                                                 // 22
        if (storePrevious) {                                                      // 23
          Tracker.nonreactive((function(_this) {                                  // 24
            return function() {                                                   // 25
              var oldValue;                                                       // 26
              oldValue = value.get();                                             // 27
              if (!(equalsFunc || ReactiveVar._isEqual)(oldValue, newValue)) {    // 28
                return previousValue = oldValue;                                  // 29
              }                                                                   // 30
            };                                                                    // 31
          })(this));                                                              // 32
        }                                                                         // 33
        value.set(newValue);                                                      // 34
        return Tracker.nonreactive((function(_this) {                             // 35
          return function() {                                                     // 36
            return value.get();                                                   // 37
          };                                                                      // 38
        })(this));                                                                // 39
      }                                                                           // 40
      return value.get();                                                         // 41
    };                                                                            // 42
    if (Object.setPrototypeOf) {                                                  // 43
      Object.setPrototypeOf(getterSetter, this.constructor.prototype);            // 44
    } else {                                                                      // 45
      getterSetter.__proto__ = this.constructor.prototype;                        // 46
    }                                                                             // 47
    getterSetter.toString = function() {                                          // 48
      return "ReactiveField{" + (this()) + "}";                                   // 49
    };                                                                            // 50
    getterSetter.apply = function(obj, args) {                                    // 51
      if ((args != null ? args.length : void 0) > 0) {                            // 52
        return getterSetter(args[0]);                                             // 53
      } else {                                                                    // 54
        return getterSetter();                                                    // 55
      }                                                                           // 56
    };                                                                            // 57
    getterSetter.call = function(obj, arg) {                                      // 58
      if (arguments.length > 1) {                                                 // 59
        return getterSetter(arg);                                                 // 60
      } else {                                                                    // 61
        return getterSetter();                                                    // 62
      }                                                                           // 63
    };                                                                            // 64
    getterSetter.previous = function() {                                          // 65
      if (!storePrevious) {                                                       // 66
        throw new Error("Storing previous value is not enabled.");                // 67
      }                                                                           // 68
      return previousValue;                                                       // 69
    };                                                                            // 70
    return getterSetter;                                                          // 71
  }                                                                               // 72
                                                                                  // 73
  return ReactiveField;                                                           // 74
                                                                                  // 75
})();                                                                             // 76
/////////////////////////////////////////////////////////////////////////////////
                                                                                  // 78
}).call(this);                                                                    // 79
                                                                                  // 80
////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['peerlibrary:reactive-field'] = {}, {
  ReactiveField: ReactiveField
});

})();
