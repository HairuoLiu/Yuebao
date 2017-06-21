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
var __coffeescriptShare, ComputedField;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/peerlibrary_computed-field/lib.coffee.js                                                            //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
ComputedField = function () {                                                                                   // 1
  function ComputedField(func, equalsFunc, dontStop) {                                                          // 2
    var autorun, currentView, getter, handle, lastValue, ref, ref1, startAutorun;                               // 4
                                                                                                                //
    if (_.isBoolean(equalsFunc)) {                                                                              // 4
      dontStop = equalsFunc;                                                                                    // 5
      equalsFunc = null;                                                                                        // 6
    }                                                                                                           // 9
                                                                                                                //
    handle = null;                                                                                              // 8
    lastValue = null;                                                                                           // 9
                                                                                                                //
    if (currentView = (ref = Package.blaze) != null ? (ref1 = ref.Blaze) != null ? ref1.currentView : void 0 : void 0) {
      if (currentView._isInRender) {                                                                            // 14
        autorun = function (f) {                                                                                // 20
          var comp, stopComputation, templateInstanceFunc;                                                      // 21
          templateInstanceFunc = Package.blaze.Blaze.Template._currentTemplateInstanceFunc;                     // 21
          comp = Tracker.autorun(function (c) {                                                                 // 23
            return Package.blaze.Blaze._withCurrentView(currentView, function () {                              // 18
              return Package.blaze.Blaze.Template._withTemplateInstanceFunc(templateInstanceFunc, function () {
                return f.call(currentView, c);                                                                  // 20
              });                                                                                               // 25
            });                                                                                                 // 24
          });                                                                                                   // 23
                                                                                                                //
          stopComputation = function () {                                                                       // 28
            return comp.stop();                                                                                 // 25
          };                                                                                                    // 28
                                                                                                                //
          currentView.onViewDestroyed(stopComputation);                                                         // 30
          comp.onStop(function () {                                                                             // 31
            return currentView.removeViewDestroyedListener(stopComputation);                                    // 29
          });                                                                                                   // 31
          return comp;                                                                                          // 31
        };                                                                                                      // 20
      } else {                                                                                                  // 14
        autorun = function (f) {                                                                                // 37
          return currentView.autorun(f);                                                                        // 35
        };                                                                                                      // 37
      }                                                                                                         // 13
    } else {                                                                                                    // 13
      autorun = Tracker.autorun;                                                                                // 41
    }                                                                                                           // 40
                                                                                                                //
    startAutorun = function () {                                                                                // 43
      var originalStop;                                                                                         // 44
      handle = autorun(function (computation) {                                                                 // 44
        var value;                                                                                              // 45
        value = func();                                                                                         // 45
                                                                                                                //
        if (!lastValue) {                                                                                       // 47
          lastValue = new ReactiveVar(value, equalsFunc);                                                       // 48
        } else {                                                                                                // 47
          lastValue.set(value);                                                                                 // 50
        }                                                                                                       // 50
                                                                                                                //
        if (!dontStop) {                                                                                        // 52
          return Tracker.afterFlush(function () {                                                               // 52
            if (!lastValue.dep.hasDependents()) {                                                               // 56
              return getter.stop();                                                                             // 54
            }                                                                                                   // 55
          });                                                                                                   // 53
        }                                                                                                       // 57
      });                                                                                                       // 44
                                                                                                                //
      if (handle.onStop) {                                                                                      // 62
        return handle.onStop(function () {                                                                      // 60
          return handle = null;                                                                                 // 61
        });                                                                                                     // 63
      } else {                                                                                                  // 62
        originalStop = handle.stop;                                                                             // 67
        return handle.stop = function () {                                                                      // 65
          if (handle) {                                                                                         // 69
            originalStop.call(handle);                                                                          // 69
          }                                                                                                     // 68
                                                                                                                //
          return handle = null;                                                                                 // 69
        };                                                                                                      // 68
      }                                                                                                         // 71
    };                                                                                                          // 43
                                                                                                                //
    startAutorun();                                                                                             // 72
                                                                                                                //
    getter = function () {                                                                                      // 74
      getter.flush();                                                                                           // 76
      return lastValue.get();                                                                                   // 76
    };                                                                                                          // 74
                                                                                                                //
    if (Object.setPrototypeOf) {                                                                                // 80
      Object.setPrototypeOf(getter, this.constructor.prototype);                                                // 81
    } else {                                                                                                    // 80
      getter.__proto__ = this.constructor.prototype;                                                            // 83
    }                                                                                                           // 82
                                                                                                                //
    getter.toString = function () {                                                                             // 85
      return "ComputedField{" + this() + "}";                                                                   // 84
    };                                                                                                          // 85
                                                                                                                //
    getter.apply = function () {                                                                                // 88
      return getter();                                                                                          // 87
    };                                                                                                          // 88
                                                                                                                //
    getter.call = function () {                                                                                 // 91
      return getter();                                                                                          // 90
    };                                                                                                          // 91
                                                                                                                //
    getter.stop = function () {                                                                                 // 96
      if (handle != null) {                                                                                     // 93
        handle.stop();                                                                                          // 97
      }                                                                                                         // 95
                                                                                                                //
      return handle = null;                                                                                     // 96
    };                                                                                                          // 96
                                                                                                                //
    getter._isRunning = function () {                                                                           // 101
      return !!handle;                                                                                          // 99
    };                                                                                                          // 101
                                                                                                                //
    getter.flush = function () {                                                                                // 106
      return Tracker.nonreactive(function () {                                                                  // 102
        if (handle) {                                                                                           // 108
          return handle._recompute();                                                                           // 104
        } else {                                                                                                // 108
          return startAutorun();                                                                                // 106
        }                                                                                                       // 107
      });                                                                                                       // 107
    };                                                                                                          // 106
                                                                                                                //
    return getter;                                                                                              // 116
  }                                                                                                             // 2
                                                                                                                //
  return ComputedField;                                                                                         // 113
}();                                                                                                            // 115
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['peerlibrary:computed-field'] = {}, {
  ComputedField: ComputedField
});

})();
