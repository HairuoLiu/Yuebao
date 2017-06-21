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
var Template = Package['templating-runtime'].Template;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/gwendall_body-events/packages/gwendall_body-events.js                                             //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
(function () {                                                                                                // 1
                                                                                                              // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                      //    // 4
// packages/gwendall:body-events/lib.js                                                                 //    // 5
//                                                                                                      //    // 6
//////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                        //    // 8
Template.body.events = function(events) {                                                               // 1  // 9
  for (var eventMap in events) {                                                                        // 2  // 10
    (function(events, eventMap) {                                                                       // 3  // 11
      var handler = events[eventMap];                                                                   // 4  // 12
      var maps = eventMap.split(",");                                                                   // 5  // 13
      maps.forEach(function(map) {                                                                      // 6  // 14
        map = $.trim(map);                                                                              // 7  // 15
        var split = map.split(" ");                                                                     // 8  // 16
        var event = split[0];                                                                           // 9  // 17
        if (split.length === 1) {                                                                       // 10
          $(document).on(event, function(e) {                                                           // 11
            var data = {};                                                                              // 12
            handler.apply(this, [e, data]);                                                             // 13
          });                                                                                           // 14
        } else {                                                                                        // 15
          var selector = split.slice(1).join(" ");                                                      // 16
          $(document).delegate(selector, event, function(e) {                                           // 17
            var el = $(e.currentTarget).get(0);                                                         // 18
            var data = Blaze.getData(el);                                                               // 19
            var tpl = (Blaze.getView(el) && Meteor._get(Blaze.getView(el), "_templateInstance")) || {}; // 20
            handler.apply(this, [e, data, tpl]);                                                        // 21
          });                                                                                           // 22
        }                                                                                               // 23
      });                                                                                               // 24
    })(events, eventMap);                                                                               // 25
  }                                                                                                     // 26
}                                                                                                       // 27
                                                                                                        // 28
//////////////////////////////////////////////////////////////////////////////////////////////////////////    // 37
                                                                                                              // 38
}).call(this);                                                                                                // 39
                                                                                                              // 40
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['gwendall:body-events'] = {};

})();
