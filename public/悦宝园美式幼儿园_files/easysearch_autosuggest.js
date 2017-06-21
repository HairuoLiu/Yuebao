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
var check = Package.check.check;
var Match = Package.check.Match;
var Template = Package['templating-runtime'].Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var EasySearch = Package['easysearch:components'].EasySearch;
var lodash = Package['erasaur:meteor-lodash'].lodash;
var _ = Package['erasaur:meteor-lodash']._;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var HTML = Package.htmljs.HTML;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;
var Spacebars = Package.spacebars.Spacebars;

var require = meteorInstall({"node_modules":{"meteor":{"easysearch:autosuggest":{"lib":{"template.autosuggest.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/easysearch_autosuggest/lib/template.autosuggest.js                                           //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
                                                                                                         // 1
Template.__checkName("EasySearch.Autosuggest");                                                          // 2
Template["EasySearch.Autosuggest"] = new Template("Template.EasySearch.Autosuggest", (function() {       // 3
  var view = this;                                                                                       // 4
  return HTML.SELECT(HTML.Attrs(function() {                                                             // 5
    return Spacebars.attrMustache(view.lookup("attributes"));                                            // 6
  }));                                                                                                   // 7
}));                                                                                                     // 8
                                                                                                         // 9
Template.__checkName("EasySearch_Autosuggest_DefaultRenderSuggestion");                                  // 10
Template["EasySearch_Autosuggest_DefaultRenderSuggestion"] = new Template("Template.EasySearch_Autosuggest_DefaultRenderSuggestion", (function() {
  var view = this;                                                                                       // 12
  return HTML.DIV("\n    ", HTML.SPAN({                                                                  // 13
    class: "autosuggest-title"                                                                           // 14
  }, HTML.SPAN({                                                                                         // 15
    class: "name"                                                                                        // 16
  }, Blaze.View("lookup:label", function() {                                                             // 17
    return Spacebars.mustache(view.lookup("label"));                                                     // 18
  }))), "\n  ");                                                                                         // 19
}));                                                                                                     // 20
                                                                                                         // 21
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"autosuggest.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/easysearch_autosuggest/lib/autosuggest.js                                                    //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                  //
                                                                                                         //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                         //
                                                                                                         //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");            //
                                                                                                         //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                   //
                                                                                                         //
var _inherits2 = require("babel-runtime/helpers/inherits");                                              //
                                                                                                         //
var _inherits3 = _interopRequireDefault(_inherits2);                                                     //
                                                                                                         //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }        //
                                                                                                         //
module.export({                                                                                          // 1
  AutosuggestComponent: function () {                                                                    // 1
    return AutosuggestComponent;                                                                         // 1
  }                                                                                                      // 1
});                                                                                                      // 1
var Template = void 0;                                                                                   // 1
module.watch(require("meteor/templating"), {                                                             // 1
  Template: function (v) {                                                                               // 1
    Template = v;                                                                                        // 1
  }                                                                                                      // 1
}, 0);                                                                                                   // 1
var SingleIndexComponent = void 0;                                                                       // 1
module.watch(require("meteor/easysearch:components"), {                                                  // 1
  SingleIndexComponent: function (v) {                                                                   // 1
    SingleIndexComponent = v;                                                                            // 1
  }                                                                                                      // 1
}, 1);                                                                                                   // 1
                                                                                                         //
var getDataValue = function (scope, val, defaultVal) {                                                   // 4
  return scope.getData()[val] || defaultVal;                                                             // 4
};                                                                                                       // 4
                                                                                                         //
var AutosuggestComponent = function (_SingleIndexComponent) {                                            //
  (0, _inherits3.default)(AutosuggestComponent, _SingleIndexComponent);                                  //
                                                                                                         //
  function AutosuggestComponent() {                                                                      //
    (0, _classCallCheck3.default)(this, AutosuggestComponent);                                           //
    return (0, _possibleConstructorReturn3.default)(this, _SingleIndexComponent.apply(this, arguments));
  }                                                                                                      //
                                                                                                         //
  /**                                                                                                    // 8
   * Search autosuggest by given string.                                                                 //
   *                                                                                                     //
   * @param {String} str                                                                                 //
   * @returns {Cursor}                                                                                   //
   */AutosuggestComponent.prototype.search = function () {                                               //
    function search(str) {                                                                               //
      var methods = this.index.getComponentMethods(this.name);                                           // 15
      methods.search(str);                                                                               // 17
      return methods.getCursor();                                                                        // 19
    }                                                                                                    // 20
                                                                                                         //
    return search;                                                                                       //
  }(); /**                                                                                               //
        * Setup autosuggest on rendered                                                                  //
        */                                                                                               //
                                                                                                         //
  AutosuggestComponent.prototype.onRendered = function () {                                              //
    function onRendered() {                                                                              //
      var _this2 = this;                                                                                 // 25
                                                                                                         //
      var handle = void 0;                                                                               // 26
      var computation = void 0;                                                                          // 27
      var valueField = getDataValue(this, 'valueField', '_id');                                          // 29
      var labelField = getDataValue(this, 'labelField', this.index.config.fields[0]);                    // 30
      var searchField = getDataValue(this, 'searchField', labelField);                                   // 31
      var changeConfiguration = getDataValue(this, 'changeConfiguration', function (c) {                 // 32
        return c;                                                                                        // 32
      });                                                                                                // 32
      var suggestionTemplate = Template[getDataValue(this, 'renderSuggestion', 'EasySearch_Autosuggest_DefaultRenderSuggestion')];
      var select = this.$('select').selectize(changeConfiguration({                                      // 41
        valueField: valueField,                                                                          // 42
        labelField: labelField,                                                                          // 43
        searchField: searchField,                                                                        // 44
        create: false,                                                                                   // 45
        preload: true,                                                                                   // 46
        render: {                                                                                        // 47
          option: function (item, escape) {                                                              // 48
            return Blaze.toHTMLWithData(suggestionTemplate, {                                            // 48
              doc: item,                                                                                 // 49
              _id: item._id,                                                                             // 50
              label: _.get(item, labelField)                                                             // 51
            });                                                                                          // 48
          }                                                                                              // 48
        },                                                                                               // 47
        load: function (query, callback) {                                                               // 54
          if (computation) {                                                                             // 55
            computation.stop();                                                                          // 56
          }                                                                                              // 57
                                                                                                         //
          computation = Tracker.autorun(function () {                                                    // 59
            var cursor = _this2.search(query);                                                           // 60
                                                                                                         //
            var docs = cursor.fetch();                                                                   // 61
                                                                                                         //
            if (handle) {                                                                                // 63
              clearTimeout(handle);                                                                      // 64
            }                                                                                            // 65
                                                                                                         //
            handle = setTimeout(function () {                                                            // 67
              select[0].selectize.clearOptions();                                                        // 68
              callback(docs);                                                                            // 69
            }, 100);                                                                                     // 70
          });                                                                                            // 71
        }                                                                                                // 72
      }));                                                                                               // 41
    }                                                                                                    // 74
                                                                                                         //
    return onRendered;                                                                                   //
  }();                                                                                                   //
                                                                                                         //
  return AutosuggestComponent;                                                                           //
}(SingleIndexComponent);                                                                                 //
                                                                                                         //
AutosuggestComponent.register('EasySearch.Autosuggest');                                                 // 77
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html"
  ]
});
require("./node_modules/meteor/easysearch:autosuggest/lib/template.autosuggest.js");
var exports = require("./node_modules/meteor/easysearch:autosuggest/lib/autosuggest.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['easysearch:autosuggest'] = exports;

})();
