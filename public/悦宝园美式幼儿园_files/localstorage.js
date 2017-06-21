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
var Random = Package.random.Random;

(function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// packages/localstorage/localstorage.js                                            //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
// Meteor._localStorage is not an ideal name, but we can change it later.           // 1
                                                                                    // 2
// Let's test to make sure that localStorage actually works. For example, in        // 3
// Safari with private browsing on, window.localStorage exists but actually         // 4
// trying to use it throws.                                                         // 5
// Accessing window.localStorage can also immediately throw an error in IE (#1291).
                                                                                    // 7
var hasOwn = Object.prototype.hasOwnProperty;                                       // 8
var key = '_localstorage_test_' + Random.id();                                      // 9
var retrieved;                                                                      // 10
var storage;                                                                        // 11
                                                                                    // 12
try {                                                                               // 13
  storage = global.localStorage;                                                    // 14
                                                                                    // 15
  if (storage) {                                                                    // 16
    storage.setItem(key, key);                                                      // 17
    retrieved = storage.getItem(key);                                               // 18
    storage.removeItem(key);                                                        // 19
  }                                                                                 // 20
} catch (ignored) {}                                                                // 21
                                                                                    // 22
if (key === retrieved) {                                                            // 23
  Meteor._localStorage = storage;                                                   // 24
}                                                                                   // 25
                                                                                    // 26
if (! Meteor._localStorage) {                                                       // 27
  if (Meteor.isClient) {                                                            // 28
    Meteor._debug(                                                                  // 29
      "You are running a browser with no localStorage or userData "                 // 30
        + "support. Logging in from one tab will not cause another "                // 31
        + "tab to be logged in.");                                                  // 32
  }                                                                                 // 33
                                                                                    // 34
  Meteor._localStorage = Object.create({                                            // 35
    setItem: function (key, val) {                                                  // 36
      this[key] = val;                                                              // 37
    },                                                                              // 38
                                                                                    // 39
    removeItem: function (key) {                                                    // 40
      delete this[key];                                                             // 41
    },                                                                              // 42
                                                                                    // 43
    getItem: function (key) {                                                       // 44
      return hasOwn.call(this, key) ? this[key] : null;                             // 45
    }                                                                               // 46
  });                                                                               // 47
}                                                                                   // 48
                                                                                    // 49
//////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package.localstorage = {};

})();
