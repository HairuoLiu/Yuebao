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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var EJSON = Package.ejson.EJSON;
var Spacebars = Package.spacebars.Spacebars;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var BaseComponent = Package['peerlibrary:base-component'].BaseComponent;
var BaseComponentDebug = Package['peerlibrary:base-component'].BaseComponentDebug;
var assert = Package['peerlibrary:assert'].assert;
var ReactiveField = Package['peerlibrary:reactive-field'].ReactiveField;
var ComputedField = Package['peerlibrary:computed-field'].ComputedField;
var DataLookup = Package['peerlibrary:data-lookup'].DataLookup;
var HTML = Package.htmljs.HTML;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

/* Package-scope variables */
var __coffeescriptShare, Template, AttributeHandler, ElementAttributesUpdater, BlazeComponent, BlazeComponentDebug;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/template.coffee.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template = Blaze.Template;                                                                                             // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/templating.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* This file is needed to backport this pull request: https://github.com/meteor/meteor/pull/5903                       // 1
   If it is a copy of templating.js file wrapped into a condition.                                                     // 2
                                                                                                                       // 3
   TODO: Remove this file eventually.                                                                                  // 4
 */                                                                                                                    // 5
                                                                                                                       // 6
if (!Blaze.Template.__checkName) {                                                                                     // 7
  // Packages and apps add templates on to this object.                                                                // 8
                                                                                                                       // 9
  /**                                                                                                                  // 10
   * @summary The class for defining templates                                                                         // 11
   * @class                                                                                                            // 12
   * @instanceName Template.myTemplate                                                                                 // 13
   */                                                                                                                  // 14
  Template = Blaze.Template;                                                                                           // 15
                                                                                                                       // 16
  var RESERVED_TEMPLATE_NAMES = "__proto__ name".split(" ");                                                           // 17
                                                                                                                       // 18
  // Check for duplicate template names and illegal names that won't work.                                             // 19
  Template.__checkName = function (name) {                                                                             // 20
    // Some names can't be used for Templates. These include:                                                          // 21
    //  - Properties Blaze sets on the Template object.                                                                // 22
    //  - Properties that some browsers don't let the code to set.                                                     // 23
    //    These are specified in RESERVED_TEMPLATE_NAMES.                                                              // 24
    if (name in Template || _.contains(RESERVED_TEMPLATE_NAMES, name)) {                                               // 25
      if ((Template[name] instanceof Template) && name !== "body")                                                     // 26
        throw new Error("There are multiple templates named '" + name + "'. Each template needs a unique name.");      // 27
      throw new Error("This template name is reserved: " + name);                                                      // 28
    }                                                                                                                  // 29
  };                                                                                                                   // 30
                                                                                                                       // 31
  // XXX COMPAT WITH 0.8.3                                                                                             // 32
  Template.__define__ = function (name, renderFunc) {                                                                  // 33
    Template.__checkName(name);                                                                                        // 34
    Template[name] = new Template("Template." + name, renderFunc);                                                     // 35
    // Exempt packages built pre-0.9.0 from warnings about using old                                                   // 36
    // helper syntax, because we can.  It's not very useful to get a                                                   // 37
    // warning about someone else's code (like a package on Atmosphere),                                               // 38
    // and this should at least put a bit of a dent in number of warnings                                              // 39
    // that come from packages that haven't been updated lately.                                                       // 40
    Template[name]._NOWARN_OLDSTYLE_HELPERS = true;                                                                    // 41
  };                                                                                                                   // 42
                                                                                                                       // 43
  // Define a template `Template.body` that renders its                                                                // 44
  // `contentRenderFuncs`.  `<body>` tags (of which there may be                                                       // 45
  // multiple) will have their contents added to it.                                                                   // 46
                                                                                                                       // 47
  /**                                                                                                                  // 48
   * @summary The [template object](#templates_api) representing your `<body>`                                         // 49
   * tag.                                                                                                              // 50
   * @locus Client                                                                                                     // 51
   */                                                                                                                  // 52
  Template.body = new Template('body', function () {                                                                   // 53
    var view = this;                                                                                                   // 54
    return _.map(Template.body.contentRenderFuncs, function (func) {                                                   // 55
      return func.apply(view);                                                                                         // 56
    });                                                                                                                // 57
  });                                                                                                                  // 58
  Template.body.contentRenderFuncs = []; // array of Blaze.Views                                                       // 59
  Template.body.view = null;                                                                                           // 60
                                                                                                                       // 61
  Template.body.addContent = function (renderFunc) {                                                                   // 62
    Template.body.contentRenderFuncs.push(renderFunc);                                                                 // 63
  };                                                                                                                   // 64
                                                                                                                       // 65
  // This function does not use `this` and so it may be called                                                         // 66
  // as `Meteor.startup(Template.body.renderIntoDocument)`.                                                            // 67
  Template.body.renderToDocument = function () {                                                                       // 68
    // Only do it once.                                                                                                // 69
    if (Template.body.view)                                                                                            // 70
      return;                                                                                                          // 71
                                                                                                                       // 72
    var view = Blaze.render(Template.body, document.body);                                                             // 73
    Template.body.view = view;                                                                                         // 74
  };                                                                                                                   // 75
                                                                                                                       // 76
  // XXX COMPAT WITH 0.9.0                                                                                             // 77
  UI.body = Template.body;                                                                                             // 78
                                                                                                                       // 79
  // XXX COMPAT WITH 0.9.0                                                                                             // 80
  // (<body> tags in packages built with 0.9.0)                                                                        // 81
  Template.__body__ = Template.body;                                                                                   // 82
  Template.__body__.__contentParts = Template.body.contentViews;                                                       // 83
  Template.__body__.__instantiate = Template.body.renderToDocument;                                                    // 84
}                                                                                                                      // 85
                                                                                                                       // 86
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/template.dynamic.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("__dynamicBackport");                                                                             // 2
Template["__dynamicBackport"] = new Template("Template.__dynamicBackport", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return [ Blaze.View("lookup:checkContext", function() {                                                              // 5
    return Spacebars.mustache(view.lookup("checkContext"));                                                            // 6
  }), "\n  ", Blaze.If(function() {                                                                                    // 7
    return Spacebars.call(view.lookup("dataContextPresent"));                                                          // 8
  }, function() {                                                                                                      // 9
    return [ "\n    ", Spacebars.include(view.lookupTemplate("__dynamicWithDataContext"), function() {                 // 10
      return Blaze._InOuterTemplateScope(view, function() {                                                            // 11
        return Spacebars.include(function() {                                                                          // 12
          return Spacebars.call(view.templateContentBlock);                                                            // 13
        });                                                                                                            // 14
      });                                                                                                              // 15
    }), "\n  " ];                                                                                                      // 16
  }, function() {                                                                                                      // 17
    return [ "\n    \n    ", Blaze._TemplateWith(function() {                                                          // 18
      return {                                                                                                         // 19
        template: Spacebars.call(view.lookup("template")),                                                             // 20
        data: Spacebars.call(view.lookup(".."))                                                                        // 21
      };                                                                                                               // 22
    }, function() {                                                                                                    // 23
      return Spacebars.include(view.lookupTemplate("__dynamicWithDataContext"), function() {                           // 24
        return Blaze._InOuterTemplateScope(view, function() {                                                          // 25
          return Spacebars.include(function() {                                                                        // 26
            return Spacebars.call(view.templateContentBlock);                                                          // 27
          });                                                                                                          // 28
        });                                                                                                            // 29
      });                                                                                                              // 30
    }), "\n  " ];                                                                                                      // 31
  }) ];                                                                                                                // 32
}));                                                                                                                   // 33
                                                                                                                       // 34
Template.__checkName("__dynamicWithDataContextBackport");                                                              // 35
Template["__dynamicWithDataContextBackport"] = new Template("Template.__dynamicWithDataContextBackport", (function() {
  var view = this;                                                                                                     // 37
  return Spacebars.With(function() {                                                                                   // 38
    return Spacebars.dataMustache(view.lookup("chooseTemplate"), view.lookup("template"));                             // 39
  }, function() {                                                                                                      // 40
    return [ "\n    \n    ", Blaze._TemplateWith(function() {                                                          // 41
      return Spacebars.call(Spacebars.dot(view.lookup(".."), "data"));                                                 // 42
    }, function() {                                                                                                    // 43
      return Spacebars.include(view.lookupTemplate(".."), function() {                                                 // 44
        return Blaze._InOuterTemplateScope(view, function() {                                                          // 45
          return Spacebars.include(function() {                                                                        // 46
            return Spacebars.call(view.templateContentBlock);                                                          // 47
          });                                                                                                          // 48
        });                                                                                                            // 49
      });                                                                                                              // 50
    }), "\n  " ];                                                                                                      // 51
  });                                                                                                                  // 52
}));                                                                                                                   // 53
                                                                                                                       // 54
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/dynamic.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* This file is needed to backport this pull request: https://github.com/meteor/meteor/pull/5903                       // 1
   If it is a copy of dynamic.js file wrapped into a condition with renaming of backported templates.                  // 2
                                                                                                                       // 3
   TODO: Remove this file eventually.                                                                                  // 4
 */                                                                                                                    // 5
                                                                                                                       // 6
if (!Blaze.Template.__dynamicWithDataContext) {                                                                        // 7
  Blaze.Template.__dynamicWithDataContext = Blaze.Template.__dynamicWithDataContextBackport;                           // 8
  Blaze.Template.__dynamicWithDataContext.viewName = 'Template.__dynamicWithDataContext';                              // 9
  Blaze.Template.__dynamic = Blaze.Template.__dynamicBackport;                                                         // 10
  Blaze.Template.__dynamic.viewName = 'Template.__dynamic';                                                            // 11
                                                                                                                       // 12
  var Template = Blaze.Template;                                                                                       // 13
                                                                                                                       // 14
  /**                                                                                                                  // 15
   * @isTemplate true                                                                                                  // 16
   * @memberOf Template                                                                                                // 17
   * @function dynamic                                                                                                 // 18
   * @summary Choose a template to include dynamically, by name.                                                       // 19
   * @locus Templates                                                                                                  // 20
   * @param {String} template The name of the template to include.                                                     // 21
   * @param {Object} [data] Optional. The data context in which to include the                                         // 22
   * template.                                                                                                         // 23
   */                                                                                                                  // 24
                                                                                                                       // 25
  Template.__dynamicWithDataContext.helpers({                                                                          // 26
    chooseTemplate: function (name) {                                                                                  // 27
      return Blaze._getTemplate(name, function () {                                                                    // 28
        return Template.instance();                                                                                    // 29
      });                                                                                                              // 30
    }                                                                                                                  // 31
  });                                                                                                                  // 32
                                                                                                                       // 33
  Template.__dynamic.helpers({                                                                                         // 34
    dataContextPresent: function () {                                                                                  // 35
      return _.has(this, "data");                                                                                      // 36
    },                                                                                                                 // 37
    checkContext: function () {                                                                                        // 38
      if (!_.has(this, "template")) {                                                                                  // 39
        throw new Error("Must specify name in the 'template' argument " +                                              // 40
          "to {{> Template.dynamic}}.");                                                                               // 41
      }                                                                                                                // 42
                                                                                                                       // 43
      _.each(this, function (v, k) {                                                                                   // 44
        if (k !== "template" && k !== "data") {                                                                        // 45
          throw new Error("Invalid argument to {{> Template.dynamic}}: " +                                             // 46
            k);                                                                                                        // 47
        }                                                                                                              // 48
      });                                                                                                              // 49
    }                                                                                                                  // 50
  });                                                                                                                  // 51
}                                                                                                                      // 52
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/lookup.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* This file backports Blaze lookup.js from Meteor 1.2 so that required Blaze features to support Blaze                // 1
   Components are available also in older Meteor versions.                                                             // 2
   It is a copy of lookup.js file from Meteor 1.2 with lexical scope lookup commented out.                             // 3
                                                                                                                       // 4
   TODO: Remove this file eventually.                                                                                  // 5
 */                                                                                                                    // 6
                                                                                                                       // 7
// Check if we are not running Meteor 1.2+.                                                                            // 8
if (! Blaze._getTemplate) {                                                                                            // 9
  // If `x` is a function, binds the value of `this` for that function                                                 // 10
  // to the current data context.                                                                                      // 11
  var bindDataContext = function (x) {                                                                                 // 12
    if (typeof x === 'function') {                                                                                     // 13
      return function () {                                                                                             // 14
        var data = Blaze.getData();                                                                                    // 15
        if (data == null)                                                                                              // 16
          data = {};                                                                                                   // 17
        return x.apply(data, arguments);                                                                               // 18
      };                                                                                                               // 19
    }                                                                                                                  // 20
    return x;                                                                                                          // 21
  };                                                                                                                   // 22
                                                                                                                       // 23
  Blaze._getTemplateHelper = function (template, name, tmplInstanceFunc) {                                             // 24
    // XXX COMPAT WITH 0.9.3                                                                                           // 25
    var isKnownOldStyleHelper = false;                                                                                 // 26
                                                                                                                       // 27
    if (template.__helpers.has(name)) {                                                                                // 28
      var helper = template.__helpers.get(name);                                                                       // 29
      if (helper === Blaze._OLDSTYLE_HELPER) {                                                                         // 30
        isKnownOldStyleHelper = true;                                                                                  // 31
      } else if (helper != null) {                                                                                     // 32
        return wrapHelper(bindDataContext(helper), tmplInstanceFunc);                                                  // 33
      } else {                                                                                                         // 34
        return null;                                                                                                   // 35
      }                                                                                                                // 36
    }                                                                                                                  // 37
                                                                                                                       // 38
    // old-style helper                                                                                                // 39
    if (name in template) {                                                                                            // 40
      // Only warn once per helper                                                                                     // 41
      if (!isKnownOldStyleHelper) {                                                                                    // 42
        template.__helpers.set(name, Blaze._OLDSTYLE_HELPER);                                                          // 43
        if (!template._NOWARN_OLDSTYLE_HELPERS) {                                                                      // 44
          Blaze._warn('Assigning helper with `' + template.viewName + '.' +                                            // 45
            name + ' = ...` is deprecated.  Use `' + template.viewName +                                               // 46
            '.helpers(...)` instead.');                                                                                // 47
        }                                                                                                              // 48
      }                                                                                                                // 49
      if (template[name] != null) {                                                                                    // 50
        return wrapHelper(bindDataContext(template[name]), tmplInstanceFunc);                                          // 51
      }                                                                                                                // 52
    }                                                                                                                  // 53
                                                                                                                       // 54
    return null;                                                                                                       // 55
  };                                                                                                                   // 56
                                                                                                                       // 57
  var wrapHelper = function (f, templateFunc) {                                                                        // 58
    // XXX COMPAT WITH METEOR 1.0.3.2                                                                                  // 59
    if (!Blaze.Template._withTemplateInstanceFunc) {                                                                   // 60
      return Blaze._wrapCatchingExceptions(f, 'template helper');                                                      // 61
    }                                                                                                                  // 62
                                                                                                                       // 63
    if (typeof f !== "function") {                                                                                     // 64
      return f;                                                                                                        // 65
    }                                                                                                                  // 66
                                                                                                                       // 67
    return function () {                                                                                               // 68
      var self = this;                                                                                                 // 69
      var args = arguments;                                                                                            // 70
                                                                                                                       // 71
      return Blaze.Template._withTemplateInstanceFunc(templateFunc, function () {                                      // 72
        return Blaze._wrapCatchingExceptions(f, 'template helper').apply(self, args);                                  // 73
      });                                                                                                              // 74
    };                                                                                                                 // 75
  };                                                                                                                   // 76
                                                                                                                       // 77
  // templateInstance argument is provided to be available for possible                                                // 78
  // alternative implementations of this function by 3rd party packages.                                               // 79
  Blaze._getTemplate = function (name, templateInstance) {                                                             // 80
    if ((name in Blaze.Template) && (Blaze.Template[name] instanceof Blaze.Template)) {                                // 81
      return Blaze.Template[name];                                                                                     // 82
    }                                                                                                                  // 83
    return null;                                                                                                       // 84
  };                                                                                                                   // 85
                                                                                                                       // 86
  Blaze._getGlobalHelper = function (name, templateInstance) {                                                         // 87
    if (Blaze._globalHelpers[name] != null) {                                                                          // 88
      return wrapHelper(bindDataContext(Blaze._globalHelpers[name]), templateInstance);                                // 89
    }                                                                                                                  // 90
    return null;                                                                                                       // 91
  };                                                                                                                   // 92
                                                                                                                       // 93
  Blaze.View.prototype.lookup = function (name, _options) {                                                            // 94
    var template = this.template;                                                                                      // 95
    var lookupTemplate = _options && _options.template;                                                                // 96
    var helper;                                                                                                        // 97
    var binding;                                                                                                       // 98
    var boundTmplInstance;                                                                                             // 99
    var foundTemplate;                                                                                                 // 100
                                                                                                                       // 101
    if (this.templateInstance) {                                                                                       // 102
      boundTmplInstance = _.bind(this.templateInstance, this);                                                         // 103
    }                                                                                                                  // 104
                                                                                                                       // 105
    // 0. looking up the parent data context with the special "../" syntax                                             // 106
    if (/^\./.test(name)) {                                                                                            // 107
      // starts with a dot. must be a series of dots which maps to an                                                  // 108
      // ancestor of the appropriate height.                                                                           // 109
      if (!/^(\.)+$/.test(name))                                                                                       // 110
        throw new Error("id starting with dot must be a series of dots");                                              // 111
                                                                                                                       // 112
      return Blaze._parentData(name.length - 1, true /*_functionWrapped*/);                                            // 113
                                                                                                                       // 114
    }                                                                                                                  // 115
                                                                                                                       // 116
    // 1. look up a helper on the current template                                                                     // 117
    if (template && ((helper = Blaze._getTemplateHelper(template, name, boundTmplInstance)) != null)) {                // 118
      return helper;                                                                                                   // 119
    }                                                                                                                  // 120
                                                                                                                       // 121
    // 2. look up a binding by traversing the lexical view hierarchy inside the                                        // 122
    // current template                                                                                                // 123
    /*if (template && (binding = Blaze._lexicalBindingLookup(Blaze.currentView, name)) != null) {                      // 124
      return binding;                                                                                                  // 125
    }*/                                                                                                                // 126
                                                                                                                       // 127
    // 3. look up a template by name                                                                                   // 128
    if (lookupTemplate && ((foundTemplate = Blaze._getTemplate(name, boundTmplInstance)) != null)) {                   // 129
      return foundTemplate;                                                                                            // 130
    }                                                                                                                  // 131
                                                                                                                       // 132
    // 4. look up a global helper                                                                                      // 133
    if ((helper = Blaze._getGlobalHelper(name, boundTmplInstance)) != null) {                                          // 134
      return helper;                                                                                                   // 135
    }                                                                                                                  // 136
                                                                                                                       // 137
    // 5. look up in a data context                                                                                    // 138
    return function () {                                                                                               // 139
      var isCalledAsFunction = (arguments.length > 0);                                                                 // 140
      var data = Blaze.getData();                                                                                      // 141
      var x = data && data[name];                                                                                      // 142
      if (!x) {                                                                                                        // 143
        if (lookupTemplate) {                                                                                          // 144
          throw new Error("No such template: " + name);                                                                // 145
        } else if (isCalledAsFunction) {                                                                               // 146
          throw new Error("No such function: " + name);                                                                // 147
        } /*else if (name.charAt(0) === '@' && ((x === null) ||                                                        // 148
          (x === undefined))) {                                                                                        // 149
          // Throw an error if the user tries to use a `@directive`                                                    // 150
          // that doesn't exist.  We don't implement all directives                                                    // 151
          // from Handlebars, so there's a potential for confusion                                                     // 152
          // if we fail silently.  On the other hand, we want to                                                       // 153
          // throw late in case some app or package wants to provide                                                   // 154
          // a missing directive.                                                                                      // 155
          throw new Error("Unsupported directive: " + name);                                                           // 156
        }*/                                                                                                            // 157
      }                                                                                                                // 158
      if (!data) {                                                                                                     // 159
        return null;                                                                                                   // 160
      }                                                                                                                // 161
      if (typeof x !== 'function') {                                                                                   // 162
        if (isCalledAsFunction) {                                                                                      // 163
          throw new Error("Can't call non-function: " + x);                                                            // 164
        }                                                                                                              // 165
        return x;                                                                                                      // 166
      }                                                                                                                // 167
      return x.apply(data, arguments);                                                                                 // 168
    };                                                                                                                 // 169
  };                                                                                                                   // 170
}                                                                                                                      // 171
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/attrs.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* This file is needed to backport this pull request: https://github.com/meteor/meteor/pull/5893                       // 1
   It is a copy of attrs.js file with the changes from the above pull request merged in.                               // 2
                                                                                                                       // 3
   TODO: Remove this file eventually.                                                                                  // 4
 */                                                                                                                    // 5
                                                                                                                       // 6
var jsUrlsAllowed = false;                                                                                             // 7
Blaze._allowJavascriptUrls = function () {                                                                             // 8
  jsUrlsAllowed = true;                                                                                                // 9
};                                                                                                                     // 10
Blaze._javascriptUrlsAllowed = function () {                                                                           // 11
  return jsUrlsAllowed;                                                                                                // 12
};                                                                                                                     // 13
                                                                                                                       // 14
// An AttributeHandler object is responsible for updating a particular attribute                                       // 15
// of a particular element.  AttributeHandler subclasses implement                                                     // 16
// browser-specific logic for dealing with particular attributes across                                                // 17
// different browsers.                                                                                                 // 18
//                                                                                                                     // 19
// To define a new type of AttributeHandler, use                                                                       // 20
// `var FooHandler = AttributeHandler.extend({ update: function ... })`                                                // 21
// where the `update` function takes arguments `(element, oldValue, value)`.                                           // 22
// The `element` argument is always the same between calls to `update` on                                              // 23
// the same instance.  `oldValue` and `value` are each either `null` or                                                // 24
// a Unicode string of the type that might be passed to the value argument                                             // 25
// of `setAttribute` (i.e. not an HTML string with character references).                                              // 26
// When an AttributeHandler is installed, an initial call to `update` is                                               // 27
// always made with `oldValue = null`.  The `update` method can access                                                 // 28
// `this.name` if the AttributeHandler class is a generic one that applies                                             // 29
// to multiple attribute names.                                                                                        // 30
//                                                                                                                     // 31
// AttributeHandlers can store custom properties on `this`, as long as they                                            // 32
// don't use the names `element`, `name`, `value`, and `oldValue`.                                                     // 33
//                                                                                                                     // 34
// AttributeHandlers can't influence how attributes appear in rendered HTML,                                           // 35
// only how they are updated after materialization as DOM.                                                             // 36
                                                                                                                       // 37
AttributeHandler = function (name, value) {                                                                            // 38
  this.name = name;                                                                                                    // 39
  this.value = value;                                                                                                  // 40
};                                                                                                                     // 41
Blaze._AttributeHandler = AttributeHandler;                                                                            // 42
                                                                                                                       // 43
AttributeHandler.prototype.update = function (element, oldValue, value) {                                              // 44
  if (value === null) {                                                                                                // 45
    if (oldValue !== null)                                                                                             // 46
      element.removeAttribute(this.name);                                                                              // 47
  } else {                                                                                                             // 48
    element.setAttribute(this.name, value);                                                                            // 49
  }                                                                                                                    // 50
};                                                                                                                     // 51
                                                                                                                       // 52
AttributeHandler.extend = function (options) {                                                                         // 53
  var curType = this;                                                                                                  // 54
  var subType = function AttributeHandlerSubtype(/*arguments*/) {                                                      // 55
    AttributeHandler.apply(this, arguments);                                                                           // 56
  };                                                                                                                   // 57
  subType.prototype = new curType;                                                                                     // 58
  subType.extend = curType.extend;                                                                                     // 59
  if (options)                                                                                                         // 60
    _.extend(subType.prototype, options);                                                                              // 61
  return subType;                                                                                                      // 62
};                                                                                                                     // 63
                                                                                                                       // 64
/// Apply the diff between the attributes of "oldValue" and "value" to "element."                                      // 65
//                                                                                                                     // 66
// Each subclass must implement a parseValue method which takes a string                                               // 67
// as an input and returns a dict of attributes. The keys of the dict                                                  // 68
// are unique identifiers (ie. css properties in the case of styles), and the                                          // 69
// values are the entire attribute which will be injected into the element.                                            // 70
//                                                                                                                     // 71
// Extended below to support classes, SVG elements and styles.                                                         // 72
                                                                                                                       // 73
Blaze._DiffingAttributeHandler = AttributeHandler.extend({                                                             // 74
  update: function (element, oldValue, value) {                                                                        // 75
    if (!this.getCurrentValue || !this.setValue || !this.parseValue)                                                   // 76
      throw new Error("Missing methods in subclass of 'DiffingAttributeHandler'");                                     // 77
                                                                                                                       // 78
    var oldAttrsMap = oldValue ? this.parseValue(oldValue) : {};                                                       // 79
    var newAttrsMap = value ? this.parseValue(value) : {};                                                             // 80
                                                                                                                       // 81
    // the current attributes on the element, which we will mutate.                                                    // 82
                                                                                                                       // 83
    var attrString = this.getCurrentValue(element);                                                                    // 84
    var attrsMap = attrString ? this.parseValue(attrString) : {};                                                      // 85
                                                                                                                       // 86
    _.each(_.keys(oldAttrsMap), function (t) {                                                                         // 87
      if (! (t in newAttrsMap))                                                                                        // 88
        delete attrsMap[t];                                                                                            // 89
    });                                                                                                                // 90
                                                                                                                       // 91
    _.each(_.keys(newAttrsMap), function (t) {                                                                         // 92
      attrsMap[t] = newAttrsMap[t];                                                                                    // 93
    });                                                                                                                // 94
                                                                                                                       // 95
    this.setValue(element, _.values(attrsMap).join(' '));                                                              // 96
  }                                                                                                                    // 97
});                                                                                                                    // 98
                                                                                                                       // 99
var ClassHandler = Blaze._DiffingAttributeHandler.extend({                                                             // 100
  // @param rawValue {String}                                                                                          // 101
  getCurrentValue: function (element) {                                                                                // 102
    return element.className;                                                                                          // 103
  },                                                                                                                   // 104
  setValue: function (element, className) {                                                                            // 105
    element.className = className;                                                                                     // 106
  },                                                                                                                   // 107
  parseValue: function (attrString) {                                                                                  // 108
    var tokens = {};                                                                                                   // 109
                                                                                                                       // 110
    _.each(attrString.split(' '), function(token) {                                                                    // 111
      if (token)                                                                                                       // 112
        tokens[token] = token;                                                                                         // 113
    });                                                                                                                // 114
    return tokens;                                                                                                     // 115
  }                                                                                                                    // 116
});                                                                                                                    // 117
                                                                                                                       // 118
var SVGClassHandler = ClassHandler.extend({                                                                            // 119
  getCurrentValue: function (element) {                                                                                // 120
    return element.className.baseVal;                                                                                  // 121
  },                                                                                                                   // 122
  setValue: function (element, className) {                                                                            // 123
    element.setAttribute('class', className);                                                                          // 124
  }                                                                                                                    // 125
});                                                                                                                    // 126
                                                                                                                       // 127
var StyleHandler = Blaze._DiffingAttributeHandler.extend({                                                             // 128
  getCurrentValue: function (element) {                                                                                // 129
    return element.getAttribute('style');                                                                              // 130
  },                                                                                                                   // 131
  setValue: function (element, style) {                                                                                // 132
    if (style === '') {                                                                                                // 133
      element.removeAttribute('style');                                                                                // 134
    } else {                                                                                                           // 135
      element.setAttribute('style', style);                                                                            // 136
    }                                                                                                                  // 137
  },                                                                                                                   // 138
                                                                                                                       // 139
  // Parse a string to produce a map from property to attribute string.                                                // 140
  //                                                                                                                   // 141
  // Example:                                                                                                          // 142
  // "color:red; foo:12px" produces a token {color: "color:red", foo:"foo:12px"}                                       // 143
  parseValue: function (attrString) {                                                                                  // 144
    var tokens = {};                                                                                                   // 145
                                                                                                                       // 146
    // Regex for parsing a css attribute declaration, taken from css-parse:                                            // 147
    // https://github.com/reworkcss/css-parse/blob/7cef3658d0bba872cde05a85339034b187cb3397/index.js#L219              // 148
    var regex = /(\*?[-#\/\*\\\w]+(?:\[[0-9a-z_-]+\])?)\s*:\s*(?:\'(?:\\\'|.)*?\'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+[;\s]*/g;
    var match = regex.exec(attrString);                                                                                // 150
    while (match) {                                                                                                    // 151
      // match[0] = entire matching string                                                                             // 152
      // match[1] = css property                                                                                       // 153
      // Prefix the token to prevent conflicts with existing properties.                                               // 154
                                                                                                                       // 155
      // XXX No `String.trim` on Safari 4. Swap out $.trim if we want to                                               // 156
      // remove strong dep on jquery.                                                                                  // 157
      tokens[' ' + match[1]] = match[0].trim ?                                                                         // 158
        match[0].trim() : $.trim(match[0]);                                                                            // 159
                                                                                                                       // 160
      match = regex.exec(attrString);                                                                                  // 161
    }                                                                                                                  // 162
                                                                                                                       // 163
    return tokens;                                                                                                     // 164
  }                                                                                                                    // 165
});                                                                                                                    // 166
                                                                                                                       // 167
var BooleanHandler = AttributeHandler.extend({                                                                         // 168
  update: function (element, oldValue, value) {                                                                        // 169
    var name = this.name;                                                                                              // 170
    if (value == null) {                                                                                               // 171
      if (oldValue != null)                                                                                            // 172
        element[name] = false;                                                                                         // 173
    } else {                                                                                                           // 174
      element[name] = true;                                                                                            // 175
    }                                                                                                                  // 176
  }                                                                                                                    // 177
});                                                                                                                    // 178
                                                                                                                       // 179
var DOMPropertyHandler = AttributeHandler.extend({                                                                     // 180
  update: function (element, oldValue, value) {                                                                        // 181
    var name = this.name;                                                                                              // 182
    if (value !== element[name])                                                                                       // 183
      element[name] = value;                                                                                           // 184
  }                                                                                                                    // 185
});                                                                                                                    // 186
                                                                                                                       // 187
// attributes of the type 'xlink:something' should be set using                                                        // 188
// the correct namespace in order to work                                                                              // 189
var XlinkHandler = AttributeHandler.extend({                                                                           // 190
  update: function(element, oldValue, value) {                                                                         // 191
    var NS = 'http://www.w3.org/1999/xlink';                                                                           // 192
    if (value === null) {                                                                                              // 193
      if (oldValue !== null)                                                                                           // 194
        element.removeAttributeNS(NS, this.name);                                                                      // 195
    } else {                                                                                                           // 196
      element.setAttributeNS(NS, this.name, this.value);                                                               // 197
    }                                                                                                                  // 198
  }                                                                                                                    // 199
});                                                                                                                    // 200
                                                                                                                       // 201
// cross-browser version of `instanceof SVGElement`                                                                    // 202
var isSVGElement = function (elem) {                                                                                   // 203
  return 'ownerSVGElement' in elem;                                                                                    // 204
};                                                                                                                     // 205
                                                                                                                       // 206
var isUrlAttribute = function (tagName, attrName) {                                                                    // 207
  // Compiled from http://www.w3.org/TR/REC-html40/index/attributes.html                                               // 208
  // and                                                                                                               // 209
  // http://www.w3.org/html/wg/drafts/html/master/index.html#attributes-1                                              // 210
  var urlAttrs = {                                                                                                     // 211
    FORM: ['action'],                                                                                                  // 212
    BODY: ['background'],                                                                                              // 213
    BLOCKQUOTE: ['cite'],                                                                                              // 214
    Q: ['cite'],                                                                                                       // 215
    DEL: ['cite'],                                                                                                     // 216
    INS: ['cite'],                                                                                                     // 217
    OBJECT: ['classid', 'codebase', 'data', 'usemap'],                                                                 // 218
    APPLET: ['codebase'],                                                                                              // 219
    A: ['href'],                                                                                                       // 220
    AREA: ['href'],                                                                                                    // 221
    LINK: ['href'],                                                                                                    // 222
    BASE: ['href'],                                                                                                    // 223
    IMG: ['longdesc', 'src', 'usemap'],                                                                                // 224
    FRAME: ['longdesc', 'src'],                                                                                        // 225
    IFRAME: ['longdesc', 'src'],                                                                                       // 226
    HEAD: ['profile'],                                                                                                 // 227
    SCRIPT: ['src'],                                                                                                   // 228
    INPUT: ['src', 'usemap', 'formaction'],                                                                            // 229
    BUTTON: ['formaction'],                                                                                            // 230
    BASE: ['href'],                                                                                                    // 231
    MENUITEM: ['icon'],                                                                                                // 232
    HTML: ['manifest'],                                                                                                // 233
    VIDEO: ['poster']                                                                                                  // 234
  };                                                                                                                   // 235
                                                                                                                       // 236
  if (attrName === 'itemid') {                                                                                         // 237
    return true;                                                                                                       // 238
  }                                                                                                                    // 239
                                                                                                                       // 240
  var urlAttrNames = urlAttrs[tagName] || [];                                                                          // 241
  return _.contains(urlAttrNames, attrName);                                                                           // 242
};                                                                                                                     // 243
                                                                                                                       // 244
// To get the protocol for a URL, we let the browser normalize it for                                                  // 245
// us, by setting it as the href for an anchor tag and then reading out                                                // 246
// the 'protocol' property.                                                                                            // 247
if (Meteor.isClient) {                                                                                                 // 248
  var anchorForNormalization = document.createElement('A');                                                            // 249
}                                                                                                                      // 250
                                                                                                                       // 251
var getUrlProtocol = function (url) {                                                                                  // 252
  if (Meteor.isClient) {                                                                                               // 253
    anchorForNormalization.href = url;                                                                                 // 254
    return (anchorForNormalization.protocol || "").toLowerCase();                                                      // 255
  } else {                                                                                                             // 256
    throw new Error('getUrlProtocol not implemented on the server');                                                   // 257
  }                                                                                                                    // 258
};                                                                                                                     // 259
                                                                                                                       // 260
// UrlHandler is an attribute handler for all HTML attributes that take                                                // 261
// URL values. It disallows javascript: URLs, unless                                                                   // 262
// Blaze._allowJavascriptUrls() has been called. To detect javascript:                                                 // 263
// urls, we set the attribute on a dummy anchor element and then read                                                  // 264
// out the 'protocol' property of the attribute.                                                                       // 265
var origUpdate = AttributeHandler.prototype.update;                                                                    // 266
var UrlHandler = AttributeHandler.extend({                                                                             // 267
  update: function (element, oldValue, value) {                                                                        // 268
    var self = this;                                                                                                   // 269
    var args = arguments;                                                                                              // 270
                                                                                                                       // 271
    if (Blaze._javascriptUrlsAllowed()) {                                                                              // 272
      origUpdate.apply(self, args);                                                                                    // 273
    } else {                                                                                                           // 274
      var isJavascriptProtocol = (getUrlProtocol(value) === "javascript:");                                            // 275
      if (isJavascriptProtocol) {                                                                                      // 276
        Blaze._warn("URLs that use the 'javascript:' protocol are not " +                                              // 277
                    "allowed in URL attribute values. " +                                                              // 278
                    "Call Blaze._allowJavascriptUrls() " +                                                             // 279
                    "to enable them.");                                                                                // 280
        origUpdate.apply(self, [element, oldValue, null]);                                                             // 281
      } else {                                                                                                         // 282
        origUpdate.apply(self, args);                                                                                  // 283
      }                                                                                                                // 284
    }                                                                                                                  // 285
  }                                                                                                                    // 286
});                                                                                                                    // 287
                                                                                                                       // 288
// XXX make it possible for users to register attribute handlers!                                                      // 289
Blaze._makeAttributeHandler = function (elem, name, value) {                                                           // 290
  // generally, use setAttribute but certain attributes need to be set                                                 // 291
  // by directly setting a JavaScript property on the DOM element.                                                     // 292
  if (name === 'class') {                                                                                              // 293
    if (isSVGElement(elem)) {                                                                                          // 294
      return new SVGClassHandler(name, value);                                                                         // 295
    } else {                                                                                                           // 296
      return new ClassHandler(name, value);                                                                            // 297
    }                                                                                                                  // 298
  } else if (name === 'style') {                                                                                       // 299
    return new StyleHandler(name, value);                                                                              // 300
  } else if ((elem.tagName === 'OPTION' && name === 'selected') ||                                                     // 301
             (elem.tagName === 'INPUT' && name === 'checked')) {                                                       // 302
    return new BooleanHandler(name, value);                                                                            // 303
  } else if ((elem.tagName === 'TEXTAREA' || elem.tagName === 'INPUT')                                                 // 304
             && name === 'value') {                                                                                    // 305
    // internally, TEXTAREAs tracks their value in the 'value'                                                         // 306
    // attribute just like INPUTs.                                                                                     // 307
    return new DOMPropertyHandler(name, value);                                                                        // 308
  } else if (name.substring(0,6) === 'xlink:') {                                                                       // 309
    return new XlinkHandler(name.substring(6), value);                                                                 // 310
  } else if (isUrlAttribute(elem.tagName, name)) {                                                                     // 311
    return new UrlHandler(name, value);                                                                                // 312
  } else {                                                                                                             // 313
    return new AttributeHandler(name, value);                                                                          // 314
  }                                                                                                                    // 315
                                                                                                                       // 316
  // XXX will need one for 'style' on IE, though modern browsers                                                       // 317
  // seem to handle setAttribute ok.                                                                                   // 318
};                                                                                                                     // 319
                                                                                                                       // 320
                                                                                                                       // 321
ElementAttributesUpdater = function (elem) {                                                                           // 322
  this.elem = elem;                                                                                                    // 323
  this.handlers = {};                                                                                                  // 324
};                                                                                                                     // 325
                                                                                                                       // 326
// Update attributes on `elem` to the dictionary `attrs`, whose                                                        // 327
// values are strings.                                                                                                 // 328
ElementAttributesUpdater.prototype.update = function(newAttrs) {                                                       // 329
  var elem = this.elem;                                                                                                // 330
  var handlers = this.handlers;                                                                                        // 331
                                                                                                                       // 332
  for (var k in handlers) {                                                                                            // 333
    if (! _.has(newAttrs, k)) {                                                                                        // 334
      // remove attributes (and handlers) for attribute names                                                          // 335
      // that don't exist as keys of `newAttrs` and so won't                                                           // 336
      // be visited when traversing it.  (Attributes that                                                              // 337
      // exist in the `newAttrs` object but are `null`                                                                 // 338
      // are handled later.)                                                                                           // 339
      var handler = handlers[k];                                                                                       // 340
      var oldValue = handler.value;                                                                                    // 341
      handler.value = null;                                                                                            // 342
      handler.update(elem, oldValue, null);                                                                            // 343
      delete handlers[k];                                                                                              // 344
    }                                                                                                                  // 345
  }                                                                                                                    // 346
                                                                                                                       // 347
  for (var k in newAttrs) {                                                                                            // 348
    var handler = null;                                                                                                // 349
    var oldValue;                                                                                                      // 350
    var value = newAttrs[k];                                                                                           // 351
    if (! _.has(handlers, k)) {                                                                                        // 352
      if (value !== null) {                                                                                            // 353
        // make new handler                                                                                            // 354
        handler = Blaze._makeAttributeHandler(elem, k, value);                                                         // 355
        handlers[k] = handler;                                                                                         // 356
        oldValue = null;                                                                                               // 357
      }                                                                                                                // 358
    } else {                                                                                                           // 359
      handler = handlers[k];                                                                                           // 360
      oldValue = handler.value;                                                                                        // 361
    }                                                                                                                  // 362
    if (oldValue !== value) {                                                                                          // 363
      handler.value = value;                                                                                           // 364
      handler.update(elem, oldValue, value);                                                                           // 365
      if (value === null)                                                                                              // 366
        delete handlers[k];                                                                                            // 367
    }                                                                                                                  // 368
  }                                                                                                                    // 369
};                                                                                                                     // 370
                                                                                                                       // 371
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/compatibility/materializer.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* This file is needed to backport this pull request: https://github.com/meteor/meteor/pull/5893                       // 1
   It is a copy of the materializer.js file and is needed because it references symbols from attrs.js.                 // 2
                                                                                                                       // 3
   TODO: Remove this file eventually.                                                                                  // 4
 */                                                                                                                    // 5
                                                                                                                       // 6
// Turns HTMLjs into DOM nodes and DOMRanges.                                                                          // 7
//                                                                                                                     // 8
// - `htmljs`: the value to materialize, which may be any of the htmljs                                                // 9
//   types (Tag, CharRef, Comment, Raw, array, string, boolean, number,                                                // 10
//   null, or undefined) or a View or Template (which will be used to                                                  // 11
//   construct a View).                                                                                                // 12
// - `intoArray`: the array of DOM nodes and DOMRanges to push the output                                              // 13
//   into (required)                                                                                                   // 14
// - `parentView`: the View we are materializing content for (optional)                                                // 15
// - `_existingWorkStack`: optional argument, only used for recursive                                                  // 16
//   calls when there is some other _materializeDOM on the call stack.                                                 // 17
//   If _materializeDOM called your function and passed in a workStack,                                                // 18
//   pass it back when you call _materializeDOM (such as from a workStack                                              // 19
//   task).                                                                                                            // 20
//                                                                                                                     // 21
// Returns `intoArray`, which is especially useful if you pass in `[]`.                                                // 22
Blaze._materializeDOM = function (htmljs, intoArray, parentView,                                                       // 23
                                  _existingWorkStack) {                                                                // 24
  // In order to use fewer stack frames, materializeDOMInner can push                                                  // 25
  // tasks onto `workStack`, and they will be popped off                                                               // 26
  // and run, last first, after materializeDOMInner returns.  The                                                      // 27
  // reason we use a stack instead of a queue is so that we recurse                                                    // 28
  // depth-first, doing newer tasks first.                                                                             // 29
  var workStack = (_existingWorkStack || []);                                                                          // 30
  materializeDOMInner(htmljs, intoArray, parentView, workStack);                                                       // 31
                                                                                                                       // 32
  if (! _existingWorkStack) {                                                                                          // 33
    // We created the work stack, so we are responsible for finishing                                                  // 34
    // the work.  Call each "task" function, starting with the top                                                     // 35
    // of the stack.                                                                                                   // 36
    while (workStack.length) {                                                                                         // 37
      // Note that running task() may push new items onto workStack.                                                   // 38
      var task = workStack.pop();                                                                                      // 39
      task();                                                                                                          // 40
    }                                                                                                                  // 41
  }                                                                                                                    // 42
                                                                                                                       // 43
  return intoArray;                                                                                                    // 44
};                                                                                                                     // 45
                                                                                                                       // 46
var materializeDOMInner = function (htmljs, intoArray, parentView, workStack) {                                        // 47
  if (htmljs == null) {                                                                                                // 48
    // null or undefined                                                                                               // 49
    return;                                                                                                            // 50
  }                                                                                                                    // 51
                                                                                                                       // 52
  switch (typeof htmljs) {                                                                                             // 53
  case 'string': case 'boolean': case 'number':                                                                        // 54
    intoArray.push(document.createTextNode(String(htmljs)));                                                           // 55
    return;                                                                                                            // 56
  case 'object':                                                                                                       // 57
    if (htmljs.htmljsType) {                                                                                           // 58
      switch (htmljs.htmljsType) {                                                                                     // 59
      case HTML.Tag.htmljsType:                                                                                        // 60
        intoArray.push(materializeTag(htmljs, parentView, workStack));                                                 // 61
        return;                                                                                                        // 62
      case HTML.CharRef.htmljsType:                                                                                    // 63
        intoArray.push(document.createTextNode(htmljs.str));                                                           // 64
        return;                                                                                                        // 65
      case HTML.Comment.htmljsType:                                                                                    // 66
        intoArray.push(document.createComment(htmljs.sanitizedValue));                                                 // 67
        return;                                                                                                        // 68
      case HTML.Raw.htmljsType:                                                                                        // 69
        // Get an array of DOM nodes by using the browser's HTML parser                                                // 70
        // (like innerHTML).                                                                                           // 71
        var nodes = Blaze._DOMBackend.parseHTML(htmljs.value);                                                         // 72
        for (var i = 0; i < nodes.length; i++)                                                                         // 73
          intoArray.push(nodes[i]);                                                                                    // 74
        return;                                                                                                        // 75
      }                                                                                                                // 76
    } else if (HTML.isArray(htmljs)) {                                                                                 // 77
      for (var i = htmljs.length-1; i >= 0; i--) {                                                                     // 78
        workStack.push(_.bind(Blaze._materializeDOM, null,                                                             // 79
                              htmljs[i], intoArray, parentView, workStack));                                           // 80
      }                                                                                                                // 81
      return;                                                                                                          // 82
    } else {                                                                                                           // 83
      if (htmljs instanceof Blaze.Template) {                                                                          // 84
        htmljs = htmljs.constructView();                                                                               // 85
        // fall through to Blaze.View case below                                                                       // 86
      }                                                                                                                // 87
      if (htmljs instanceof Blaze.View) {                                                                              // 88
        Blaze._materializeView(htmljs, parentView, workStack, intoArray);                                              // 89
        return;                                                                                                        // 90
      }                                                                                                                // 91
    }                                                                                                                  // 92
  }                                                                                                                    // 93
                                                                                                                       // 94
  throw new Error("Unexpected object in htmljs: " + htmljs);                                                           // 95
};                                                                                                                     // 96
                                                                                                                       // 97
var materializeTag = function (tag, parentView, workStack) {                                                           // 98
  var tagName = tag.tagName;                                                                                           // 99
  var elem;                                                                                                            // 100
  if ((HTML.isKnownSVGElement(tagName) || isSVGAnchor(tag))                                                            // 101
      && document.createElementNS) {                                                                                   // 102
    // inline SVG                                                                                                      // 103
    elem = document.createElementNS('http://www.w3.org/2000/svg', tagName);                                            // 104
  } else {                                                                                                             // 105
    // normal elements                                                                                                 // 106
    elem = document.createElement(tagName);                                                                            // 107
  }                                                                                                                    // 108
                                                                                                                       // 109
  var rawAttrs = tag.attrs;                                                                                            // 110
  var children = tag.children;                                                                                         // 111
  if (tagName === 'textarea' && tag.children.length &&                                                                 // 112
      ! (rawAttrs && ('value' in rawAttrs))) {                                                                         // 113
    // Provide very limited support for TEXTAREA tags with children                                                    // 114
    // rather than a "value" attribute.                                                                                // 115
    // Reactivity in the form of Views nested in the tag's children                                                    // 116
    // won't work.  Compilers should compile textarea contents into                                                    // 117
    // the "value" attribute of the tag, wrapped in a function if there                                                // 118
    // is reactivity.                                                                                                  // 119
    if (typeof rawAttrs === 'function' ||                                                                              // 120
        HTML.isArray(rawAttrs)) {                                                                                      // 121
      throw new Error("Can't have reactive children of TEXTAREA node; " +                                              // 122
                      "use the 'value' attribute instead.");                                                           // 123
    }                                                                                                                  // 124
    rawAttrs = _.extend({}, rawAttrs || null);                                                                         // 125
    rawAttrs.value = Blaze._expand(children, parentView);                                                              // 126
    children = [];                                                                                                     // 127
  }                                                                                                                    // 128
                                                                                                                       // 129
  if (rawAttrs) {                                                                                                      // 130
    var attrUpdater = new ElementAttributesUpdater(elem);                                                              // 131
    var updateAttributes = function () {                                                                               // 132
      var expandedAttrs = Blaze._expandAttributes(rawAttrs, parentView);                                               // 133
      var flattenedAttrs = HTML.flattenAttributes(expandedAttrs);                                                      // 134
      var stringAttrs = {};                                                                                            // 135
      for (var attrName in flattenedAttrs) {                                                                           // 136
        stringAttrs[attrName] = Blaze._toText(flattenedAttrs[attrName],                                                // 137
                                              parentView,                                                              // 138
                                              HTML.TEXTMODE.STRING);                                                   // 139
      }                                                                                                                // 140
      attrUpdater.update(stringAttrs);                                                                                 // 141
    };                                                                                                                 // 142
    var updaterComputation;                                                                                            // 143
    if (parentView) {                                                                                                  // 144
      updaterComputation =                                                                                             // 145
        parentView.autorun(updateAttributes, undefined, 'updater');                                                    // 146
    } else {                                                                                                           // 147
      updaterComputation = Tracker.nonreactive(function () {                                                           // 148
        return Tracker.autorun(function () {                                                                           // 149
          Tracker._withCurrentView(parentView, updateAttributes);                                                      // 150
        });                                                                                                            // 151
      });                                                                                                              // 152
    }                                                                                                                  // 153
    Blaze._DOMBackend.Teardown.onElementTeardown(elem, function attrTeardown() {                                       // 154
      updaterComputation.stop();                                                                                       // 155
    });                                                                                                                // 156
  }                                                                                                                    // 157
                                                                                                                       // 158
  if (children.length) {                                                                                               // 159
    var childNodesAndRanges = [];                                                                                      // 160
    // push this function first so that it's done last                                                                 // 161
    workStack.push(function () {                                                                                       // 162
      for (var i = 0; i < childNodesAndRanges.length; i++) {                                                           // 163
        var x = childNodesAndRanges[i];                                                                                // 164
        if (x instanceof Blaze._DOMRange)                                                                              // 165
          x.attach(elem);                                                                                              // 166
        else                                                                                                           // 167
          elem.appendChild(x);                                                                                         // 168
      }                                                                                                                // 169
    });                                                                                                                // 170
    // now push the task that calculates childNodesAndRanges                                                           // 171
    workStack.push(_.bind(Blaze._materializeDOM, null,                                                                 // 172
                          children, childNodesAndRanges, parentView,                                                   // 173
                          workStack));                                                                                 // 174
  }                                                                                                                    // 175
                                                                                                                       // 176
  return elem;                                                                                                         // 177
};                                                                                                                     // 178
                                                                                                                       // 179
                                                                                                                       // 180
var isSVGAnchor = function (node) {                                                                                    // 181
  // We generally aren't able to detect SVG <a> elements because                                                       // 182
  // if "A" were in our list of known svg element names, then all                                                      // 183
  // <a> nodes would be created using                                                                                  // 184
  // `document.createElementNS`. But in the special case of <a                                                         // 185
  // xlink:href="...">, we can at least detect that attribute and                                                      // 186
  // create an SVG <a> tag in that case.                                                                               // 187
  //                                                                                                                   // 188
  // However, we still have a general problem of knowing when to                                                       // 189
  // use document.createElementNS and when to use                                                                      // 190
  // document.createElement; for example, font tags will always                                                        // 191
  // be created as SVG elements which can cause other                                                                  // 192
  // problems. #1977                                                                                                   // 193
  return (node.tagName === "a" &&                                                                                      // 194
          node.attrs &&                                                                                                // 195
          node.attrs["xlink:href"] !== undefined);                                                                     // 196
};                                                                                                                     // 197
                                                                                                                       // 198
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/lib.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var ComponentsNamespaceReference,                                                                                      // 2
    HTMLJSExpander,                                                                                                    // 2
    REQUIRE_RENDERED_INSTANCE,                                                                                         // 2
    SUPPORTS_REACTIVE_INSTANCE,                                                                                        // 2
    addEvents,                                                                                                         // 2
    argumentsConstructor,                                                                                              // 2
    bindComponent,                                                                                                     // 2
    bindDataContext,                                                                                                   // 2
    callTemplateBaseHooks,                                                                                             // 2
    contentAsFunc,                                                                                                     // 2
    contentAsView,                                                                                                     // 2
    createMatcher,                                                                                                     // 2
    currentViewIfRendering,                                                                                            // 2
    expand,                                                                                                            // 2
    expandView,                                                                                                        // 2
    getTemplateBase,                                                                                                   // 2
    getTemplateInstance,                                                                                               // 2
    getTemplateInstanceFunction,                                                                                       // 2
    method,                                                                                                            // 2
    methodName,                                                                                                        // 2
    originalDot,                                                                                                       // 2
    originalFlattenAttributes,                                                                                         // 2
    originalGetTemplate,                                                                                               // 2
    originalInclude,                                                                                                   // 2
    originalVisitTag,                                                                                                  // 2
    ref,                                                                                                               // 2
    registerFirstCreatedHook,                                                                                          // 2
    registerHooks,                                                                                                     // 2
    templateInstanceToComponent,                                                                                       // 2
    withTemplateInstanceFunc,                                                                                          // 2
    wrapHelper,                                                                                                        // 2
    wrapViewAndTemplate,                                                                                               // 2
    slice = [].slice,                                                                                                  // 2
    extend = function (child, parent) {                                                                                // 2
  for (var key in meteorBabelHelpers.sanitizeForInObject(parent)) {                                                    // 3
    if (hasProp.call(parent, key)) child[key] = parent[key];                                                           // 3
  }                                                                                                                    // 3
                                                                                                                       //
  function ctor() {                                                                                                    // 3
    this.constructor = child;                                                                                          // 3
  }                                                                                                                    // 3
                                                                                                                       //
  ctor.prototype = parent.prototype;                                                                                   // 3
  child.prototype = new ctor();                                                                                        // 3
  child.__super__ = parent.prototype;                                                                                  // 3
  return child;                                                                                                        // 3
},                                                                                                                     // 3
    hasProp = {}.hasOwnProperty,                                                                                       // 2
    indexOf = [].indexOf || function (item) {                                                                          // 2
  for (var i = 0, l = this.length; i < l; i++) {                                                                       // 5
    if (i in this && this[i] === item) return i;                                                                       // 5
  }                                                                                                                    // 5
                                                                                                                       //
  return -1;                                                                                                           // 5
};                                                                                                                     // 5
                                                                                                                       //
createMatcher = function (propertyOrMatcherOrFunction, checkMixins) {                                                  // 2
  var matcher, property;                                                                                               // 3
                                                                                                                       //
  if (_.isString(propertyOrMatcherOrFunction)) {                                                                       // 3
    property = propertyOrMatcherOrFunction;                                                                            // 4
                                                                                                                       //
    propertyOrMatcherOrFunction = function (_this) {                                                                   // 5
      return function (child, parent) {                                                                                // 12
        if (checkMixins && child !== parent && child.getFirstWith) {                                                   // 8
          return !!child.getFirstWith(null, property);                                                                 // 14
        } else {                                                                                                       // 8
          return property in child;                                                                                    // 16
        }                                                                                                              // 17
      };                                                                                                               // 5
    }(this);                                                                                                           // 5
  } else if (!_.isFunction(propertyOrMatcherOrFunction)) {                                                             // 3
    assert(_.isObject(propertyOrMatcherOrFunction));                                                                   // 14
    matcher = propertyOrMatcherOrFunction;                                                                             // 15
                                                                                                                       //
    propertyOrMatcherOrFunction = function (_this) {                                                                   // 16
      return function (child, parent) {                                                                                // 24
        var childWithProperty, value;                                                                                  // 17
                                                                                                                       //
        for (property in meteorBabelHelpers.sanitizeForInObject(matcher)) {                                            // 17
          value = matcher[property];                                                                                   // 27
                                                                                                                       //
          if (checkMixins && child !== parent && child.getFirstWith) {                                                 // 20
            childWithProperty = child.getFirstWith(null, property);                                                    // 21
          } else {                                                                                                     // 20
            if (property in child) {                                                                                   // 23
              childWithProperty = child;                                                                               // 23
            }                                                                                                          // 20
          }                                                                                                            // 34
                                                                                                                       //
          if (!childWithProperty) {                                                                                    // 24
            return false;                                                                                              // 24
          }                                                                                                            // 37
                                                                                                                       //
          if (_.isFunction(childWithProperty[property])) {                                                             // 26
            if (childWithProperty[property]() !== value) {                                                             // 27
              return false;                                                                                            // 27
            }                                                                                                          // 26
          } else {                                                                                                     // 26
            if (childWithProperty[property] !== value) {                                                               // 29
              return false;                                                                                            // 29
            }                                                                                                          // 26
          }                                                                                                            // 46
        }                                                                                                              // 17
                                                                                                                       //
        return true;                                                                                                   // 48
      };                                                                                                               // 16
    }(this);                                                                                                           // 16
  }                                                                                                                    // 51
                                                                                                                       //
  return propertyOrMatcherOrFunction;                                                                                  // 52
};                                                                                                                     // 2
                                                                                                                       //
getTemplateInstance = function (view, skipBlockHelpers) {                                                              // 35
  while (view && !view._templateInstance) {                                                                            // 36
    if (skipBlockHelpers) {                                                                                            // 37
      view = view.parentView;                                                                                          // 38
    } else {                                                                                                           // 37
      view = view.originalParentView || view.parentView;                                                               // 40
    }                                                                                                                  // 61
  }                                                                                                                    // 36
                                                                                                                       //
  return view != null ? view._templateInstance : void 0;                                                               // 63
};                                                                                                                     // 35
                                                                                                                       //
templateInstanceToComponent = function (templateInstanceFunc, skipBlockHelpers) {                                      // 48
  var templateInstance;                                                                                                // 49
  templateInstance = typeof templateInstanceFunc === "function" ? templateInstanceFunc() : void 0;                     // 49
  templateInstance = getTemplateInstance(templateInstance != null ? templateInstance.view : void 0, skipBlockHelpers);
                                                                                                                       //
  while (templateInstance) {                                                                                           // 55
    if ('component' in templateInstance) {                                                                             // 56
      return templateInstance.component;                                                                               // 56
    }                                                                                                                  // 73
                                                                                                                       //
    if (skipBlockHelpers) {                                                                                            // 58
      templateInstance = getTemplateInstance(templateInstance.view.parentView, skipBlockHelpers);                      // 59
    } else {                                                                                                           // 58
      templateInstance = getTemplateInstance(templateInstance.view.originalParentView || templateInstance.view.parentView, skipBlockHelpers);
    }                                                                                                                  // 78
  }                                                                                                                    // 55
                                                                                                                       //
  return null;                                                                                                         // 80
};                                                                                                                     // 48
                                                                                                                       //
getTemplateInstanceFunction = function (view, skipBlockHelpers) {                                                      // 65
  var templateInstance;                                                                                                // 66
  templateInstance = getTemplateInstance(view, skipBlockHelpers);                                                      // 66
  return function () {                                                                                                 // 86
    return templateInstance;                                                                                           // 87
  };                                                                                                                   // 67
};                                                                                                                     // 65
                                                                                                                       //
ComponentsNamespaceReference = function () {                                                                           // 70
  function ComponentsNamespaceReference(namespace, templateInstance1) {                                                // 71
    this.namespace = namespace;                                                                                        // 71
    this.templateInstance = templateInstance1;                                                                         // 71
  }                                                                                                                    // 71
                                                                                                                       //
  return ComponentsNamespaceReference;                                                                                 // 97
}();                                                                                                                   // 99
                                                                                                                       //
originalDot = Spacebars.dot;                                                                                           // 75
                                                                                                                       //
Spacebars.dot = function () {                                                                                          // 76
  var args, value;                                                                                                     // 77
  value = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];                                  // 76
                                                                                                                       //
  if (value instanceof ComponentsNamespaceReference) {                                                                 // 77
    return Blaze._getTemplate(value.namespace + "." + args.join('.'), value.templateInstance);                         // 78
  }                                                                                                                    // 108
                                                                                                                       //
  return originalDot.apply(null, [value].concat(slice.call(args)));                                                    // 109
};                                                                                                                     // 76
                                                                                                                       //
originalInclude = Spacebars.include;                                                                                   // 82
                                                                                                                       //
Spacebars.include = function () {                                                                                      // 83
  var args, templateOrFunction;                                                                                        // 88
  templateOrFunction = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];                     // 83
                                                                                                                       //
  if (templateOrFunction instanceof ComponentsNamespaceReference) {                                                    // 88
    templateOrFunction = Blaze._getTemplate(templateOrFunction.namespace, templateOrFunction.templateInstance);        // 89
  }                                                                                                                    // 119
                                                                                                                       //
  return originalInclude.apply(null, [templateOrFunction].concat(slice.call(args)));                                   // 120
};                                                                                                                     // 83
                                                                                                                       //
Blaze._getTemplateHelper = function (template, name, templateInstance) {                                               // 111
  var component, helper, isKnownOldStyleHelper, mixinOrComponent, ref, ref1, ref2;                                     // 112
  isKnownOldStyleHelper = false;                                                                                       // 112
                                                                                                                       //
  if (template.__helpers.has(name)) {                                                                                  // 113
    helper = template.__helpers.get(name);                                                                             // 114
                                                                                                                       //
    if (helper === Blaze._OLDSTYLE_HELPER) {                                                                           // 115
      isKnownOldStyleHelper = true;                                                                                    // 116
    } else if (helper != null) {                                                                                       // 115
      return wrapHelper(bindDataContext(helper), templateInstance);                                                    // 118
    } else {                                                                                                           // 117
      return null;                                                                                                     // 120
    }                                                                                                                  // 113
  }                                                                                                                    // 135
                                                                                                                       //
  if (name in template) {                                                                                              // 123
    if (!isKnownOldStyleHelper) {                                                                                      // 125
      template.__helpers.set(name, Blaze._OLDSTYLE_HELPER);                                                            // 126
                                                                                                                       //
      if (!template._NOWARN_OLDSTYLE_HELPERS) {                                                                        // 127
        Blaze._warn("Assigning helper with `" + template.viewName + "." + name + " = ...` is deprecated.  Use `" + template.viewName + ".helpers(...)` instead.");
      }                                                                                                                // 125
    }                                                                                                                  // 142
                                                                                                                       //
    if (template[name] != null) {                                                                                      // 129
      return wrapHelper(bindDataContext(template[name]), templateInstance);                                            // 130
    } else {                                                                                                           // 129
      return null;                                                                                                     // 132
    }                                                                                                                  // 123
  }                                                                                                                    // 148
                                                                                                                       //
  if (!templateInstance) {                                                                                             // 134
    return null;                                                                                                       // 134
  }                                                                                                                    // 151
                                                                                                                       //
  if ((ref = template.viewName) === 'Template.__dynamicWithDataContext' || ref === 'Template.__dynamic') {             // 140
    return null;                                                                                                       // 140
  }                                                                                                                    // 154
                                                                                                                       //
  component = Tracker.nonreactive(function () {                                                                        // 144
    return templateInstanceToComponent(templateInstance, true);                                                        // 156
  });                                                                                                                  // 144
                                                                                                                       //
  if (component) {                                                                                                     // 150
    if (mixinOrComponent = component.getFirstWith(null, name)) {                                                       // 152
      return wrapHelper(bindComponent(mixinOrComponent, mixinOrComponent[name]), templateInstance);                    // 153
    }                                                                                                                  // 150
  }                                                                                                                    // 162
                                                                                                                       //
  if (name && name in BlazeComponent.components) {                                                                     // 158
    return new ComponentsNamespaceReference(name, templateInstance);                                                   // 159
  }                                                                                                                    // 165
                                                                                                                       //
  if (component) {                                                                                                     // 162
    if ((helper = (ref1 = component._componentInternals) != null ? (ref2 = ref1.templateBase) != null ? ref2.__helpers.get(name) : void 0 : void 0) != null) {
      return wrapHelper(bindDataContext(helper), templateInstance);                                                    // 165
    }                                                                                                                  // 162
  }                                                                                                                    // 170
                                                                                                                       //
  return null;                                                                                                         // 171
};                                                                                                                     // 111
                                                                                                                       //
share.inExpandAttributes = false;                                                                                      // 169
                                                                                                                       //
bindComponent = function (component, helper) {                                                                         // 171
  if (_.isFunction(helper)) {                                                                                          // 172
    return function () {                                                                                               // 178
      var args, name, result, value;                                                                                   // 174
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                                    // 173
      result = helper.apply(component, args);                                                                          // 174
                                                                                                                       //
      if (share.inExpandAttributes && _.isObject(result)) {                                                            // 178
        for (name in meteorBabelHelpers.sanitizeForInObject(result)) {                                                 // 179
          value = result[name];                                                                                        // 184
                                                                                                                       //
          if (share.EVENT_HANDLER_REGEX.test(name)) {                                                                  // 185
            if (_.isFunction(value)) {                                                                                 // 180
              result[name] = _.bind(value, component);                                                                 // 181
            } else if (_.isArray(value)) {                                                                             // 180
              result[name] = _.map(value, function (fun) {                                                             // 183
                if (_.isFunction(fun)) {                                                                               // 184
                  return _.bind(fun, component);                                                                       // 191
                } else {                                                                                               // 184
                  return fun;                                                                                          // 193
                }                                                                                                      // 194
              });                                                                                                      // 183
            }                                                                                                          // 196
          }                                                                                                            // 197
        }                                                                                                              // 178
      }                                                                                                                // 199
                                                                                                                       //
      return result;                                                                                                   // 200
    };                                                                                                                 // 173
  } else {                                                                                                             // 172
    return helper;                                                                                                     // 203
  }                                                                                                                    // 204
};                                                                                                                     // 171
                                                                                                                       //
bindDataContext = function (helper) {                                                                                  // 193
  if (_.isFunction(helper)) {                                                                                          // 194
    return function () {                                                                                               // 209
      var data;                                                                                                        // 196
      data = Blaze.getData();                                                                                          // 196
                                                                                                                       //
      if (data == null) {                                                                                              // 212
        data = {};                                                                                                     // 197
      }                                                                                                                // 214
                                                                                                                       //
      return helper.apply(data, arguments);                                                                            // 215
    };                                                                                                                 // 195
  } else {                                                                                                             // 194
    return helper;                                                                                                     // 218
  }                                                                                                                    // 219
};                                                                                                                     // 193
                                                                                                                       //
wrapHelper = function (f, templateFunc) {                                                                              // 202
  if (!Blaze.Template._withTemplateInstanceFunc) {                                                                     // 204
    return Blaze._wrapCatchingExceptions(f, 'template helper');                                                        // 204
  }                                                                                                                    // 225
                                                                                                                       //
  if (!_.isFunction(f)) {                                                                                              // 206
    return f;                                                                                                          // 206
  }                                                                                                                    // 228
                                                                                                                       //
  return function () {                                                                                                 // 229
    var args, self;                                                                                                    // 209
    self = this;                                                                                                       // 209
    args = arguments;                                                                                                  // 210
    return Blaze.Template._withTemplateInstanceFunc(templateFunc, function () {                                        // 233
      return Blaze._wrapCatchingExceptions(f, 'template helper').apply(self, args);                                    // 234
    });                                                                                                                // 212
  };                                                                                                                   // 208
};                                                                                                                     // 202
                                                                                                                       //
if (Blaze.Template._withTemplateInstanceFunc) {                                                                        // 215
  withTemplateInstanceFunc = Blaze.Template._withTemplateInstanceFunc;                                                 // 216
} else {                                                                                                               // 215
  withTemplateInstanceFunc = function (templateInstance, f) {                                                          // 219
    return f();                                                                                                        // 243
  };                                                                                                                   // 219
}                                                                                                                      // 245
                                                                                                                       //
getTemplateBase = function (component) {                                                                               // 222
  return Tracker.nonreactive(function () {                                                                             // 248
    var componentTemplate, templateBase;                                                                               // 225
    componentTemplate = component.template();                                                                          // 225
                                                                                                                       //
    if (_.isString(componentTemplate)) {                                                                               // 226
      templateBase = Template[componentTemplate];                                                                      // 227
                                                                                                                       //
      if (!templateBase) {                                                                                             // 228
        throw new Error("Template '" + componentTemplate + "' cannot be found.");                                      // 228
      }                                                                                                                // 226
    } else if (componentTemplate) {                                                                                    // 226
      templateBase = componentTemplate;                                                                                // 230
    } else {                                                                                                           // 229
      throw new Error("Template for the component '" + (component.componentName() || 'unnamed') + "' not provided.");  // 232
    }                                                                                                                  // 260
                                                                                                                       //
    return templateBase;                                                                                               // 261
  });                                                                                                                  // 224
};                                                                                                                     // 222
                                                                                                                       //
callTemplateBaseHooks = function (component, hookName) {                                                               // 236
  var callbacks, templateInstance;                                                                                     // 238
                                                                                                                       //
  if (component !== component.component()) {                                                                           // 238
    return;                                                                                                            // 238
  }                                                                                                                    // 269
                                                                                                                       //
  templateInstance = Tracker.nonreactive(function () {                                                                 // 240
    return component._componentInternals.templateInstance();                                                           // 271
  });                                                                                                                  // 240
  callbacks = component._componentInternals.templateBase._getCallbacks(hookName);                                      // 242
                                                                                                                       //
  Template._withTemplateInstanceFunc(function () {                                                                     // 243
    return templateInstance;                                                                                           // 275
  }, function () {                                                                                                     // 243
    var callback, i, len, results;                                                                                     // 248
    results = [];                                                                                                      // 248
                                                                                                                       //
    for (i = 0, len = callbacks.length; i < len; i++) {                                                                // 279
      callback = callbacks[i];                                                                                         // 280
      results.push(callback.call(templateInstance));                                                                   // 281
    }                                                                                                                  // 248
                                                                                                                       //
    return results;                                                                                                    // 283
  });                                                                                                                  // 243
};                                                                                                                     // 236
                                                                                                                       //
wrapViewAndTemplate = function (currentView, f) {                                                                      // 254
  var templateInstance;                                                                                                // 259
  templateInstance = getTemplateInstanceFunction(currentView, true);                                                   // 259
  return withTemplateInstanceFunc(templateInstance, function () {                                                      // 290
    return Blaze._withCurrentView(currentView, function () {                                                           // 291
      return f();                                                                                                      // 292
    });                                                                                                                // 271
  });                                                                                                                  // 265
};                                                                                                                     // 254
                                                                                                                       //
addEvents = function (view, component) {                                                                               // 274
  var eventMap, events, eventsList, fn, handler, i, len, spec;                                                         // 275
  eventsList = component.events();                                                                                     // 275
                                                                                                                       //
  if (!_.isArray(eventsList)) {                                                                                        // 277
    throw new Error("'events' method from the component '" + (component.componentName() || 'unnamed') + "' did not return a list of event maps.");
  }                                                                                                                    // 302
                                                                                                                       //
  for (i = 0, len = eventsList.length; i < len; i++) {                                                                 // 279
    events = eventsList[i];                                                                                            // 304
    eventMap = {};                                                                                                     // 280
                                                                                                                       //
    fn = function (spec, handler) {                                                                                    // 306
      return eventMap[spec] = function () {                                                                            // 307
        var args, currentView, event;                                                                                  // 285
        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                                  // 284
        event = args[0];                                                                                               // 285
        currentView = Blaze.getView(event.currentTarget);                                                              // 287
        wrapViewAndTemplate(currentView, function () {                                                                 // 288
          return handler.apply(component, args);                                                                       // 313
        });                                                                                                            // 288
      };                                                                                                               // 284
    };                                                                                                                 // 283
                                                                                                                       //
    for (spec in meteorBabelHelpers.sanitizeForInObject(events)) {                                                     // 282
      handler = events[spec];                                                                                          // 318
      fn(spec, handler);                                                                                               // 319
    }                                                                                                                  // 282
                                                                                                                       //
    Blaze._addEventMap(view, eventMap, view);                                                                          // 295
  }                                                                                                                    // 279
};                                                                                                                     // 274
                                                                                                                       //
originalGetTemplate = Blaze._getTemplate;                                                                              // 299
                                                                                                                       //
Blaze._getTemplate = function (name, templateInstance) {                                                               // 300
  var template;                                                                                                        // 302
  template = Tracker.nonreactive(function () {                                                                         // 302
    var parentComponent, ref;                                                                                          // 303
                                                                                                                       //
    if (Blaze.currentView) {                                                                                           // 303
      parentComponent = BlazeComponent.currentComponent();                                                             // 304
    } else {                                                                                                           // 303
      parentComponent = templateInstanceToComponent(templateInstance, false);                                          // 308
    }                                                                                                                  // 335
                                                                                                                       //
    return (ref = BlazeComponent.getComponent(name)) != null ? ref.renderComponent(parentComponent) : void 0;          // 336
  });                                                                                                                  // 302
                                                                                                                       //
  if (template && (template instanceof Blaze.Template || _.isFunction(template))) {                                    // 311
    return template;                                                                                                   // 311
  }                                                                                                                    // 340
                                                                                                                       //
  return originalGetTemplate(name);                                                                                    // 341
};                                                                                                                     // 300
                                                                                                                       //
registerHooks = function (template, hooks) {                                                                           // 315
  if (template.onCreated) {                                                                                            // 316
    template.onCreated(hooks.onCreated);                                                                               // 317
    template.onRendered(hooks.onRendered);                                                                             // 318
    return template.onDestroyed(hooks.onDestroyed);                                                                    // 348
  } else {                                                                                                             // 316
    template.created = hooks.onCreated;                                                                                // 322
    template.rendered = hooks.onRendered;                                                                              // 323
    return template.destroyed = hooks.onDestroyed;                                                                     // 352
  }                                                                                                                    // 353
};                                                                                                                     // 315
                                                                                                                       //
registerFirstCreatedHook = function (template, onCreated) {                                                            // 326
  var oldCreated;                                                                                                      // 327
                                                                                                                       //
  if (template._callbacks) {                                                                                           // 327
    return template._callbacks.created.unshift(onCreated);                                                             // 359
  } else {                                                                                                             // 327
    oldCreated = template.created;                                                                                     // 331
    return template.created = function () {                                                                            // 362
      onCreated.call(this);                                                                                            // 333
      return oldCreated != null ? oldCreated.call(this) : void 0;                                                      // 364
    };                                                                                                                 // 332
  }                                                                                                                    // 366
};                                                                                                                     // 326
                                                                                                                       //
Template.__dynamicWithDataContext.__helpers.set('chooseTemplate', function (name) {                                    // 343
  return Blaze._getTemplate(name, function (_this) {                                                                   // 370
    return function () {                                                                                               // 371
      return Template.instance();                                                                                      // 372
    };                                                                                                                 // 344
  }(this));                                                                                                            // 344
});                                                                                                                    // 343
                                                                                                                       //
argumentsConstructor = function () {                                                                                   // 347
  return assert(false);                                                                                                // 378
};                                                                                                                     // 347
                                                                                                                       //
Template.registerHelper('args', function () {                                                                          // 353
  var obj;                                                                                                             // 354
  obj = {};                                                                                                            // 354
  obj.constructor = argumentsConstructor;                                                                              // 356
  obj._arguments = arguments;                                                                                          // 357
  return obj;                                                                                                          // 386
});                                                                                                                    // 353
share.EVENT_HANDLER_REGEX = /^on[A-Z]/;                                                                                // 360
                                                                                                                       //
share.isEventHandler = function (fun) {                                                                                // 362
  return _.isFunction(fun) && fun.eventHandler;                                                                        // 392
};                                                                                                                     // 362
                                                                                                                       //
originalFlattenAttributes = HTML.flattenAttributes;                                                                    // 367
                                                                                                                       //
HTML.flattenAttributes = function (attrs) {                                                                            // 368
  var name, value;                                                                                                     // 369
                                                                                                                       //
  if (attrs = originalFlattenAttributes(attrs)) {                                                                      // 369
    for (name in meteorBabelHelpers.sanitizeForInObject(attrs)) {                                                      // 370
      value = attrs[name];                                                                                             // 401
                                                                                                                       //
      if (!share.EVENT_HANDLER_REGEX.test(name)) {                                                                     // 402
        continue;                                                                                                      // 403
      }                                                                                                                // 404
                                                                                                                       //
      if (share.isEventHandler(value)) {                                                                               // 372
        continue;                                                                                                      // 372
      }                                                                                                                // 407
                                                                                                                       //
      if (_.isArray(value) && _.some(value, share.isEventHandler)) {                                                   // 373
        continue;                                                                                                      // 373
      }                                                                                                                // 410
                                                                                                                       //
      if (_.isArray(value)) {                                                                                          // 377
        attrs[name] = _.map(value, Spacebars.event);                                                                   // 378
      } else {                                                                                                         // 377
        attrs[name] = Spacebars.event(value);                                                                          // 380
      }                                                                                                                // 415
    }                                                                                                                  // 369
  }                                                                                                                    // 417
                                                                                                                       //
  return attrs;                                                                                                        // 418
};                                                                                                                     // 368
                                                                                                                       //
Spacebars.event = function () {                                                                                        // 384
  var args, eventHandler, fun;                                                                                         // 385
  eventHandler = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];                           // 384
                                                                                                                       //
  if (!_.isFunction(eventHandler)) {                                                                                   // 385
    throw new Error("Event handler not a function: " + eventHandler);                                                  // 385
  }                                                                                                                    // 426
                                                                                                                       //
  args = Spacebars.mustacheImpl.apply(Spacebars, [function () {                                                        // 388
    var xs;                                                                                                            // 388
    xs = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                                        // 388
    return xs;                                                                                                         // 430
  }].concat(slice.call(args)));                                                                                        // 388
                                                                                                                       //
  fun = function () {                                                                                                  // 390
    var currentView, event, eventArgs;                                                                                 // 391
    event = arguments[0], eventArgs = 2 <= arguments.length ? slice.call(arguments, 1) : [];                           // 390
    currentView = Blaze.getView(event.currentTarget);                                                                  // 391
    return wrapViewAndTemplate(currentView, function () {                                                              // 436
      return eventHandler.apply(null, [event].concat(args, eventArgs));                                                // 437
    });                                                                                                                // 392
  };                                                                                                                   // 390
                                                                                                                       //
  fun.eventHandler = true;                                                                                             // 398
  return fun;                                                                                                          // 441
};                                                                                                                     // 384
                                                                                                                       //
originalVisitTag = HTML.ToHTMLVisitor.prototype.visitTag;                                                              // 403
                                                                                                                       //
HTML.ToHTMLVisitor.prototype.visitTag = function (tag) {                                                               // 404
  var attrs, name;                                                                                                     // 405
                                                                                                                       //
  if (attrs = tag.attrs) {                                                                                             // 405
    attrs = HTML.flattenAttributes(attrs);                                                                             // 406
                                                                                                                       //
    for (name in meteorBabelHelpers.sanitizeForInObject(attrs)) {                                                      // 407
      if (share.EVENT_HANDLER_REGEX.test(name)) {                                                                      // 451
        delete attrs[name];                                                                                            // 408
      }                                                                                                                // 453
    }                                                                                                                  // 407
                                                                                                                       //
    tag.attrs = attrs;                                                                                                 // 409
  }                                                                                                                    // 456
                                                                                                                       //
  return originalVisitTag.call(this, tag);                                                                             // 457
};                                                                                                                     // 404
                                                                                                                       //
currentViewIfRendering = function () {                                                                                 // 413
  var view;                                                                                                            // 414
  view = Blaze.currentView;                                                                                            // 414
                                                                                                                       //
  if (view != null ? view._isInRender : void 0) {                                                                      // 415
    return view;                                                                                                       // 464
  } else {                                                                                                             // 415
    return null;                                                                                                       // 466
  }                                                                                                                    // 467
};                                                                                                                     // 413
                                                                                                                       //
contentAsFunc = function (content) {                                                                                   // 420
  if (!_.isFunction(content)) {                                                                                        // 423
    return function () {                                                                                               // 424
      return content;                                                                                                  // 473
    };                                                                                                                 // 424
  }                                                                                                                    // 475
                                                                                                                       //
  return content;                                                                                                      // 476
};                                                                                                                     // 420
                                                                                                                       //
contentAsView = function (content) {                                                                                   // 429
  if (content instanceof Blaze.Template) {                                                                             // 432
    return content.constructView();                                                                                    // 481
  } else if (content instanceof Blaze.View) {                                                                          // 432
    return content;                                                                                                    // 483
  } else {                                                                                                             // 434
    return Blaze.View('render', contentAsFunc(content));                                                               // 485
  }                                                                                                                    // 486
};                                                                                                                     // 429
                                                                                                                       //
HTMLJSExpander = Blaze._HTMLJSExpander.extend();                                                                       // 439
HTMLJSExpander.def({                                                                                                   // 440
  visitObject: function (x) {                                                                                          // 442
    if (x instanceof Blaze.Template) {                                                                                 // 443
      x = x.constructView();                                                                                           // 444
    }                                                                                                                  // 495
                                                                                                                       //
    if (x instanceof Blaze.View) {                                                                                     // 445
      return expandView(x, this.parentView);                                                                           // 446
    }                                                                                                                  // 498
                                                                                                                       //
    return HTML.TransformingVisitor.prototype.visitObject.call(this, x);                                               // 499
  }                                                                                                                    // 442
});                                                                                                                    // 442
                                                                                                                       //
expand = function (htmljs, parentView) {                                                                               // 451
  parentView = parentView || currentViewIfRendering();                                                                 // 452
  return new HTMLJSExpander({                                                                                          // 505
    parentView: parentView                                                                                             // 454
  }).visit(htmljs);                                                                                                    // 454
};                                                                                                                     // 451
                                                                                                                       //
expandView = function (view, parentView) {                                                                             // 457
  var htmljs, result;                                                                                                  // 458
                                                                                                                       //
  Blaze._createView(view, parentView, true);                                                                           // 458
                                                                                                                       //
  view._isInRender = true;                                                                                             // 460
  htmljs = Blaze._withCurrentView(view, function () {                                                                  // 461
    return view._render();                                                                                             // 515
  });                                                                                                                  // 461
  view._isInRender = false;                                                                                            // 463
  Tracker.flush();                                                                                                     // 465
  result = expand(htmljs, view);                                                                                       // 467
  Tracker.flush();                                                                                                     // 469
                                                                                                                       //
  if (Tracker.active) {                                                                                                // 471
    Tracker.onInvalidate(function () {                                                                                 // 472
      return Blaze._destroyView(view);                                                                                 // 523
    });                                                                                                                // 472
  } else {                                                                                                             // 471
    Blaze._destroyView(view);                                                                                          // 475
  }                                                                                                                    // 527
                                                                                                                       //
  Tracker.flush();                                                                                                     // 477
  return result;                                                                                                       // 529
};                                                                                                                     // 457
                                                                                                                       //
BlazeComponent = function (superClass) {                                                                               // 481
  extend(BlazeComponent, superClass);                                                                                  // 533
                                                                                                                       //
  function BlazeComponent() {                                                                                          // 535
    return BlazeComponent.__super__.constructor.apply(this, arguments);                                                // 536
  }                                                                                                                    // 537
                                                                                                                       //
  BlazeComponent.getComponentForElement = function (domElement) {                                                      // 483
    var templateInstance;                                                                                              // 484
                                                                                                                       //
    if (!domElement) {                                                                                                 // 484
      return null;                                                                                                     // 484
    }                                                                                                                  // 543
                                                                                                                       //
    if (domElement.nodeType !== Node.ELEMENT_NODE) {                                                                   // 487
      throw new Error("Expected DOM element.");                                                                        // 487
    }                                                                                                                  // 546
                                                                                                                       //
    templateInstance = getTemplateInstanceFunction(Blaze.getView(domElement), true);                                   // 493
    return templateInstanceToComponent(templateInstance, true);                                                        // 548
  };                                                                                                                   // 483
                                                                                                                       //
  BlazeComponent.prototype.childComponents = function (nameOrComponent) {                                              // 551
    var component;                                                                                                     // 497
                                                                                                                       //
    if ((component = this.component()) !== this) {                                                                     // 497
      return component.childComponents(nameOrComponent);                                                               // 554
    } else {                                                                                                           // 497
      return BlazeComponent.__super__.childComponents.apply(this, arguments);                                          // 556
    }                                                                                                                  // 557
  };                                                                                                                   // 496
                                                                                                                       //
  BlazeComponent.prototype.childComponentsWith = function (propertyOrMatcherOrFunction) {                              // 560
    var component;                                                                                                     // 505
                                                                                                                       //
    if ((component = this.component()) !== this) {                                                                     // 505
      return component.childComponentsWith(propertyOrMatcherOrFunction);                                               // 563
    } else {                                                                                                           // 505
      assert(propertyOrMatcherOrFunction);                                                                             // 508
      propertyOrMatcherOrFunction = createMatcher(propertyOrMatcherOrFunction, true);                                  // 510
      return BlazeComponent.__super__.childComponentsWith.call(this, propertyOrMatcherOrFunction);                     // 567
    }                                                                                                                  // 568
  };                                                                                                                   // 504
                                                                                                                       //
  BlazeComponent.prototype.parentComponent = function (parentComponent) {                                              // 571
    var component;                                                                                                     // 515
                                                                                                                       //
    if ((component = this.component()) !== this) {                                                                     // 515
      return component.parentComponent(parentComponent);                                                               // 574
    } else {                                                                                                           // 515
      return BlazeComponent.__super__.parentComponent.apply(this, arguments);                                          // 576
    }                                                                                                                  // 577
  };                                                                                                                   // 514
                                                                                                                       //
  BlazeComponent.prototype.addChildComponent = function (childComponent) {                                             // 580
    var component;                                                                                                     // 521
                                                                                                                       //
    if ((component = this.component()) !== this) {                                                                     // 521
      return component.addChildComponent(childComponent);                                                              // 583
    } else {                                                                                                           // 521
      return BlazeComponent.__super__.addChildComponent.apply(this, arguments);                                        // 585
    }                                                                                                                  // 586
  };                                                                                                                   // 520
                                                                                                                       //
  BlazeComponent.prototype.removeChildComponent = function (childComponent) {                                          // 589
    var component;                                                                                                     // 527
                                                                                                                       //
    if ((component = this.component()) !== this) {                                                                     // 527
      return component.removeChildComponent(childComponent);                                                           // 592
    } else {                                                                                                           // 527
      return BlazeComponent.__super__.removeChildComponent.apply(this, arguments);                                     // 594
    }                                                                                                                  // 595
  };                                                                                                                   // 526
                                                                                                                       //
  BlazeComponent.prototype.mixins = function () {                                                                      // 598
    return [];                                                                                                         // 599
  };                                                                                                                   // 532
                                                                                                                       //
  BlazeComponent.prototype.mixinParent = function (mixinParent) {                                                      // 602
    if (this._componentInternals == null) {                                                                            // 603
      this._componentInternals = {};                                                                                   // 539
    }                                                                                                                  // 605
                                                                                                                       //
    if (mixinParent) {                                                                                                 // 542
      this._componentInternals.mixinParent = mixinParent;                                                              // 543
      return this;                                                                                                     // 545
    }                                                                                                                  // 609
                                                                                                                       //
    return this._componentInternals.mixinParent || null;                                                               // 610
  };                                                                                                                   // 538
                                                                                                                       //
  BlazeComponent.prototype.requireMixin = function (nameOrMixin) {                                                     // 613
    var ref;                                                                                                           // 551
    assert((ref = this._componentInternals) != null ? ref.mixins : void 0);                                            // 551
    Tracker.nonreactive(function (_this) {                                                                             // 553
      return function () {                                                                                             // 617
        var base, component, mixinInstance, mixinInstanceComponent, ref1, ref2, ref3;                                  // 556
                                                                                                                       //
        if (_this.getMixin(nameOrMixin)) {                                                                             // 556
          return;                                                                                                      // 556
        }                                                                                                              // 621
                                                                                                                       //
        if (_.isString(nameOrMixin)) {                                                                                 // 558
          if (_this.constructor.getComponent) {                                                                        // 561
            mixinInstanceComponent = _this.constructor.getComponent(nameOrMixin);                                      // 562
          } else {                                                                                                     // 561
            mixinInstanceComponent = BlazeComponent.getComponent(nameOrMixin);                                         // 564
          }                                                                                                            // 627
                                                                                                                       //
          if (!mixinInstanceComponent) {                                                                               // 565
            throw new Error("Unknown mixin '" + nameOrMixin + "'.");                                                   // 565
          }                                                                                                            // 630
                                                                                                                       //
          mixinInstance = new mixinInstanceComponent();                                                                // 566
        } else if (_.isFunction(nameOrMixin)) {                                                                        // 558
          mixinInstance = new nameOrMixin();                                                                           // 568
        } else {                                                                                                       // 567
          mixinInstance = nameOrMixin;                                                                                 // 570
        }                                                                                                              // 636
                                                                                                                       //
        _this._componentInternals.mixins.push(mixinInstance);                                                          // 575
                                                                                                                       //
        if (mixinInstance.mixinParent) {                                                                               // 580
          mixinInstance.mixinParent(_this);                                                                            // 581
        }                                                                                                              // 640
                                                                                                                       //
        if (typeof mixinInstance.createMixins === "function") {                                                        // 641
          mixinInstance.createMixins();                                                                                // 584
        }                                                                                                              // 643
                                                                                                                       //
        if (component = _this.component()) {                                                                           // 586
          if (component._componentInternals == null) {                                                                 // 645
            component._componentInternals = {};                                                                        // 587
          }                                                                                                            // 647
                                                                                                                       //
          if ((base = component._componentInternals).templateInstance == null) {                                       // 648
            base.templateInstance = new ReactiveField(null, function (a, b) {                                          // 649
              return a === b;                                                                                          // 650
            });                                                                                                        // 588
          }                                                                                                            // 652
                                                                                                                       //
          if (!((ref1 = component._componentInternals.templateInstance()) != null ? ref1.view.isDestroyed : void 0)) {
            if (!component._componentInternals.inOnCreated && ((ref2 = component._componentInternals.templateInstance()) != null ? ref2.view.isCreated : void 0)) {
              if (typeof mixinInstance.onCreated === "function") {                                                     // 655
                mixinInstance.onCreated();                                                                             // 595
              }                                                                                                        // 595
            }                                                                                                          // 658
                                                                                                                       //
            if (!component._componentInternals.inOnRendered && ((ref3 = component._componentInternals.templateInstance()) != null ? ref3.view.isRendered : void 0)) {
              return typeof mixinInstance.onRendered === "function" ? mixinInstance.onRendered() : void 0;             // 660
            }                                                                                                          // 594
          }                                                                                                            // 586
        }                                                                                                              // 663
      };                                                                                                               // 553
    }(this));                                                                                                          // 553
    return this;                                                                                                       // 666
  };                                                                                                                   // 550
                                                                                                                       //
  BlazeComponent.prototype.createMixins = function () {                                                                // 669
    var i, len, mixin, ref;                                                                                            // 603
                                                                                                                       //
    if (this._componentInternals == null) {                                                                            // 671
      this._componentInternals = {};                                                                                   // 603
    }                                                                                                                  // 673
                                                                                                                       //
    if (this._componentInternals.mixins) {                                                                             // 606
      return;                                                                                                          // 606
    }                                                                                                                  // 676
                                                                                                                       //
    this._componentInternals.mixins = [];                                                                              // 607
    ref = this.mixins();                                                                                               // 609
                                                                                                                       //
    for (i = 0, len = ref.length; i < len; i++) {                                                                      // 609
      mixin = ref[i];                                                                                                  // 680
      this.requireMixin(mixin);                                                                                        // 610
    }                                                                                                                  // 609
                                                                                                                       //
    return this;                                                                                                       // 683
  };                                                                                                                   // 602
                                                                                                                       //
  BlazeComponent.prototype.getMixin = function (nameOrMixin) {                                                         // 686
    if (_.isString(nameOrMixin)) {                                                                                     // 616
      return this.getFirstWith(this, function (_this) {                                                                // 688
        return function (child, parent) {                                                                              // 689
          var mixinComponentName;                                                                                      // 621
          mixinComponentName = (typeof child.componentName === "function" ? child.componentName() : void 0) || null;   // 621
          return mixinComponentName && mixinComponentName === nameOrMixin;                                             // 622
        };                                                                                                             // 618
      }(this));                                                                                                        // 618
    } else {                                                                                                           // 616
      return this.getFirstWith(this, function (_this) {                                                                // 696
        return function (child, parent) {                                                                              // 697
          if (child.constructor === nameOrMixin) {                                                                     // 627
            return true;                                                                                               // 627
          }                                                                                                            // 700
                                                                                                                       //
          if (child === nameOrMixin) {                                                                                 // 630
            return true;                                                                                               // 630
          }                                                                                                            // 703
                                                                                                                       //
          return false;                                                                                                // 704
        };                                                                                                             // 625
      }(this));                                                                                                        // 625
    }                                                                                                                  // 707
  };                                                                                                                   // 615
                                                                                                                       //
  BlazeComponent.prototype.callFirstWith = function () {                                                               // 710
    var afterComponentOrMixin, args, componentOrMixin, propertyName;                                                   // 637
    afterComponentOrMixin = arguments[0], propertyName = arguments[1], args = 3 <= arguments.length ? slice.call(arguments, 2) : [];
    assert(_.isString(propertyName));                                                                                  // 637
    componentOrMixin = this.getFirstWith(afterComponentOrMixin, propertyName);                                         // 639
                                                                                                                       //
    if (!componentOrMixin) {                                                                                           // 642
      return;                                                                                                          // 642
    }                                                                                                                  // 717
                                                                                                                       //
    if (_.isFunction(componentOrMixin[propertyName])) {                                                                // 646
      return componentOrMixin[propertyName].apply(componentOrMixin, args);                                             // 647
    } else {                                                                                                           // 646
      return componentOrMixin[propertyName];                                                                           // 649
    }                                                                                                                  // 722
  };                                                                                                                   // 636
                                                                                                                       //
  BlazeComponent.prototype.getFirstWith = function (afterComponentOrMixin, propertyOrMatcherOrFunction) {              // 725
    var found, i, len, mixin, ref, ref1;                                                                               // 652
    assert((ref = this._componentInternals) != null ? ref.mixins : void 0);                                            // 652
    assert(propertyOrMatcherOrFunction);                                                                               // 653
    propertyOrMatcherOrFunction = createMatcher(propertyOrMatcherOrFunction, false);                                   // 656
                                                                                                                       //
    if (!afterComponentOrMixin) {                                                                                      // 659
      if (propertyOrMatcherOrFunction.call(this, this, this)) {                                                        // 660
        return this;                                                                                                   // 660
      }                                                                                                                // 733
                                                                                                                       //
      found = true;                                                                                                    // 662
    } else if (afterComponentOrMixin && afterComponentOrMixin === this) {                                              // 659
      found = true;                                                                                                    // 665
    } else {                                                                                                           // 664
      found = false;                                                                                                   // 667
    }                                                                                                                  // 739
                                                                                                                       //
    ref1 = this._componentInternals.mixins;                                                                            // 670
                                                                                                                       //
    for (i = 0, len = ref1.length; i < len; i++) {                                                                     // 670
      mixin = ref1[i];                                                                                                 // 742
                                                                                                                       //
      if (found && propertyOrMatcherOrFunction.call(this, mixin, this)) {                                              // 671
        return mixin;                                                                                                  // 671
      }                                                                                                                // 745
                                                                                                                       //
      if (mixin === afterComponentOrMixin) {                                                                           // 673
        found = true;                                                                                                  // 673
      }                                                                                                                // 748
    }                                                                                                                  // 670
                                                                                                                       //
    return null;                                                                                                       // 750
  };                                                                                                                   // 651
                                                                                                                       //
  BlazeComponent.renderComponent = function (parentComponent) {                                                        // 682
    return Tracker.nonreactive(function (_this) {                                                                      // 754
      return function () {                                                                                             // 755
        var componentClass, data;                                                                                      // 684
        componentClass = _this;                                                                                        // 684
                                                                                                                       //
        if (Blaze.currentView) {                                                                                       // 686
          data = Template.currentData();                                                                               // 692
        } else {                                                                                                       // 686
          data = null;                                                                                                 // 696
        }                                                                                                              // 762
                                                                                                                       //
        if ((data != null ? data.constructor : void 0) !== argumentsConstructor) {                                     // 698
          return wrapViewAndTemplate(Blaze.currentView, function () {                                                  // 701
            var component;                                                                                             // 702
            component = new componentClass();                                                                          // 702
            return component.renderComponent(parentComponent);                                                         // 704
          });                                                                                                          // 701
        }                                                                                                              // 769
                                                                                                                       //
        return function () {                                                                                           // 770
          var currentWith, nonreactiveArguments, reactiveArguments;                                                    // 711
          assert(Tracker.active);                                                                                      // 711
          currentWith = Blaze.getView('with');                                                                         // 716
          reactiveArguments = new ComputedField(function () {                                                          // 723
            data = currentWith.dataVar.get();                                                                          // 724
            assert.equal(data != null ? data.constructor : void 0, argumentsConstructor);                              // 725
            return data._arguments;                                                                                    // 777
          }, EJSON.equals);                                                                                            // 723
          nonreactiveArguments = reactiveArguments();                                                                  // 731
          return Tracker.nonreactive(function () {                                                                     // 780
            var template;                                                                                              // 736
            template = Blaze._withCurrentView(Blaze.currentView.parentView.parentView, function (_this) {              // 736
              return function () {                                                                                     // 783
                return wrapViewAndTemplate(Blaze.currentView, function () {                                            // 739
                  var component;                                                                                       // 741
                                                                                                                       //
                  component = function (func, args, ctor) {                                                            // 741
                    ctor.prototype = func.prototype;                                                                   // 787
                    var child = new ctor(),                                                                            // 788
                        result = func.apply(child, args);                                                              // 788
                    return Object(result) === result ? result : child;                                                 // 789
                  }(componentClass, nonreactiveArguments, function () {});                                             // 790
                                                                                                                       //
                  return component.renderComponent(parentComponent);                                                   // 743
                });                                                                                                    // 739
              };                                                                                                       // 736
            }(this));                                                                                                  // 736
            registerFirstCreatedHook(template, function () {                                                           // 746
              this.view.originalParentView = this.view.parentView;                                                     // 749
              return this.view.parentView = this.view.parentView.parentView.parentView;                                // 797
            });                                                                                                        // 746
            return template;                                                                                           // 799
          });                                                                                                          // 733
        };                                                                                                             // 710
      };                                                                                                               // 683
    }(this));                                                                                                          // 683
  };                                                                                                                   // 682
                                                                                                                       //
  BlazeComponent.prototype.renderComponent = function (parentComponent) {                                              // 806
    return Tracker.nonreactive(function (_this) {                                                                      // 807
      return function () {                                                                                             // 808
        var component, template, templateBase;                                                                         // 760
        component = _this.component();                                                                                 // 760
        component.createMixins();                                                                                      // 763
        templateBase = getTemplateBase(component);                                                                     // 765
        template = new Blaze.Template("BlazeComponent." + (component.componentName() || 'unnamed'), templateBase.renderFunction);
                                                                                                                       //
        if (component._componentInternals == null) {                                                                   // 814
          component._componentInternals = {};                                                                          // 776
        }                                                                                                              // 816
                                                                                                                       //
        component._componentInternals.templateBase = templateBase;                                                     // 777
        registerHooks(template, {                                                                                      // 779
          onCreated: function () {                                                                                     // 780
            var base, base1, base2, base3, componentOrMixin, results;                                                  // 783
                                                                                                                       //
            if (parentComponent) {                                                                                     // 783
              Tracker.nonreactive(function (_this) {                                                                   // 785
                return function () {                                                                                   // 823
                  var ref;                                                                                             // 787
                  assert(!component.parentComponent(), "Component '" + (component.componentName() || 'unnamed') + "' parent component '" + (((ref = component.parentComponent()) != null ? ref.componentName() : void 0) || 'unnamed') + "' already set.");
                  component.parentComponent(parentComponent);                                                          // 790
                  return parentComponent.addChildComponent(component);                                                 // 827
                };                                                                                                     // 785
              }(this));                                                                                                // 785
            }                                                                                                          // 830
                                                                                                                       //
            this.view._onViewRendered(function (_this) {                                                               // 793
              return function () {                                                                                     // 832
                var componentOrMixin, results;                                                                         // 795
                                                                                                                       //
                if (_this.view.renderCount !== 1) {                                                                    // 795
                  return;                                                                                              // 795
                }                                                                                                      // 836
                                                                                                                       //
                componentOrMixin = null;                                                                               // 798
                results = [];                                                                                          // 799
                                                                                                                       //
                while (componentOrMixin = _this.component.getFirstWith(componentOrMixin, 'events')) {                  // 839
                  results.push(addEvents(_this.view, componentOrMixin));                                               // 840
                }                                                                                                      // 799
                                                                                                                       //
                return results;                                                                                        // 842
              };                                                                                                       // 793
            }(this));                                                                                                  // 793
                                                                                                                       //
            this.component = component;                                                                                // 802
            assert(!Tracker.nonreactive(function (_this) {                                                             // 805
              return function () {                                                                                     // 847
                var base;                                                                                              // 805
                return typeof (base = _this.component._componentInternals).templateInstance === "function" ? base.templateInstance() : void 0;
              };                                                                                                       // 805
            }(this)));                                                                                                 // 805
                                                                                                                       //
            if ((base = this.component._componentInternals).templateInstance == null) {                                // 852
              base.templateInstance = new ReactiveField(this, function (a, b) {                                        // 853
                return a === b;                                                                                        // 854
              });                                                                                                      // 807
            }                                                                                                          // 856
                                                                                                                       //
            this.component._componentInternals.templateInstance(this);                                                 // 808
                                                                                                                       //
            if ((base1 = this.component._componentInternals).isCreated == null) {                                      // 858
              base1.isCreated = new ReactiveField(true);                                                               // 859
            }                                                                                                          // 860
                                                                                                                       //
            this.component._componentInternals.isCreated(true);                                                        // 811
                                                                                                                       //
            if ((base2 = this.component._componentInternals).isRendered == null) {                                     // 862
              base2.isRendered = new ReactiveField(false);                                                             // 863
            }                                                                                                          // 864
                                                                                                                       //
            this.component._componentInternals.isRendered(false);                                                      // 816
                                                                                                                       //
            if ((base3 = this.component._componentInternals).isDestroyed == null) {                                    // 866
              base3.isDestroyed = new ReactiveField(false);                                                            // 867
            }                                                                                                          // 868
                                                                                                                       //
            this.component._componentInternals.isDestroyed(false);                                                     // 819
                                                                                                                       //
            try {                                                                                                      // 821
              this.component._componentInternals.inOnCreated = true;                                                   // 826
              componentOrMixin = null;                                                                                 // 827
              results = [];                                                                                            // 828
                                                                                                                       //
              while (componentOrMixin = this.component.getFirstWith(componentOrMixin, 'onCreated')) {                  // 874
                results.push(componentOrMixin.onCreated());                                                            // 875
              }                                                                                                        // 828
                                                                                                                       //
              return results;                                                                                          // 877
            } finally {                                                                                                // 821
              delete this.component._componentInternals.inOnCreated;                                                   // 831
            }                                                                                                          // 880
          },                                                                                                           // 780
          onRendered: function () {                                                                                    // 833
            var base, componentOrMixin, results;                                                                       // 836
                                                                                                                       //
            if ((base = this.component._componentInternals).isRendered == null) {                                      // 884
              base.isRendered = new ReactiveField(true);                                                               // 885
            }                                                                                                          // 886
                                                                                                                       //
            this.component._componentInternals.isRendered(true);                                                       // 837
                                                                                                                       //
            Tracker.nonreactive(function (_this) {                                                                     // 839
              return function () {                                                                                     // 889
                return assert.equal(_this.component._componentInternals.isCreated(), true);                            // 890
              };                                                                                                       // 839
            }(this));                                                                                                  // 839
                                                                                                                       //
            try {                                                                                                      // 842
              this.component._componentInternals.inOnRendered = true;                                                  // 844
              componentOrMixin = null;                                                                                 // 845
              results = [];                                                                                            // 846
                                                                                                                       //
              while (componentOrMixin = this.component.getFirstWith(componentOrMixin, 'onRendered')) {                 // 897
                results.push(componentOrMixin.onRendered());                                                           // 898
              }                                                                                                        // 846
                                                                                                                       //
              return results;                                                                                          // 900
            } finally {                                                                                                // 842
              delete this.component._componentInternals.inOnRendered;                                                  // 849
            }                                                                                                          // 903
          },                                                                                                           // 780
          onDestroyed: function () {                                                                                   // 851
            return this.autorun(function (_this) {                                                                     // 906
              return function (computation) {                                                                          // 907
                if (_this.component.childComponents().length) {                                                        // 857
                  return;                                                                                              // 857
                }                                                                                                      // 910
                                                                                                                       //
                computation.stop();                                                                                    // 858
                return Tracker.nonreactive(function () {                                                               // 912
                  var base, base1, componentOrMixin;                                                                   // 861
                  assert.equal(_this.component._componentInternals.isCreated(), true);                                 // 861
                                                                                                                       //
                  _this.component._componentInternals.isCreated(false);                                                // 863
                                                                                                                       //
                  if ((base = _this.component._componentInternals).isRendered == null) {                               // 916
                    base.isRendered = new ReactiveField(false);                                                        // 917
                  }                                                                                                    // 918
                                                                                                                       //
                  _this.component._componentInternals.isRendered(false);                                               // 866
                                                                                                                       //
                  if ((base1 = _this.component._componentInternals).isDestroyed == null) {                             // 920
                    base1.isDestroyed = new ReactiveField(true);                                                       // 921
                  }                                                                                                    // 922
                                                                                                                       //
                  _this.component._componentInternals.isDestroyed(true);                                               // 869
                                                                                                                       //
                  componentOrMixin = null;                                                                             // 871
                                                                                                                       //
                  while (componentOrMixin = _this.component.getFirstWith(componentOrMixin, 'onDestroyed')) {           // 872
                    componentOrMixin.onDestroyed();                                                                    // 873
                  }                                                                                                    // 872
                                                                                                                       //
                  if (parentComponent) {                                                                               // 875
                    component.parentComponent(null);                                                                   // 877
                    parentComponent.removeChildComponent(component);                                                   // 878
                  }                                                                                                    // 931
                                                                                                                       //
                  return _this.component._componentInternals.templateInstance(null);                                   // 932
                });                                                                                                    // 860
              };                                                                                                       // 852
            }(this));                                                                                                  // 852
          }                                                                                                            // 780
        });                                                                                                            // 780
        return template;                                                                                               // 938
      };                                                                                                               // 759
    }(this));                                                                                                          // 759
  };                                                                                                                   // 754
                                                                                                                       //
  BlazeComponent.prototype.removeComponent = function () {                                                             // 943
    if (this.isRendered()) {                                                                                           // 886
      return Blaze.remove(this.component()._componentInternals.templateInstance().view);                               // 945
    }                                                                                                                  // 946
  };                                                                                                                   // 885
                                                                                                                       //
  BlazeComponent._renderComponentTo = function (visitor, parentComponent, parentView, data) {                          // 888
    var component;                                                                                                     // 889
    component = Tracker.nonreactive(function (_this) {                                                                 // 889
      return function () {                                                                                             // 952
        var componentClass;                                                                                            // 890
        componentClass = _this;                                                                                        // 890
        parentView = parentView || currentViewIfRendering() || (parentComponent != null ? parentComponent.isRendered() : void 0) && parentComponent._componentInternals.templateInstance().view || null;
        return wrapViewAndTemplate(parentView, function () {                                                           // 956
          return new componentClass();                                                                                 // 957
        });                                                                                                            // 894
      };                                                                                                               // 889
    }(this));                                                                                                          // 889
                                                                                                                       //
    if (arguments.length > 2) {                                                                                        // 897
      return component._renderComponentTo(visitor, parentComponent, parentView, data);                                 // 962
    } else {                                                                                                           // 897
      return component._renderComponentTo(visitor, parentComponent, parentView);                                       // 964
    }                                                                                                                  // 965
  };                                                                                                                   // 888
                                                                                                                       //
  BlazeComponent.renderComponentToHTML = function (parentComponent, parentView, data) {                                // 902
    if (arguments.length > 2) {                                                                                        // 903
      return this._renderComponentTo(new HTML.ToHTMLVisitor(), parentComponent, parentView, data);                     // 970
    } else {                                                                                                           // 903
      return this._renderComponentTo(new HTML.ToHTMLVisitor(), parentComponent, parentView);                           // 972
    }                                                                                                                  // 973
  };                                                                                                                   // 902
                                                                                                                       //
  BlazeComponent.prototype._renderComponentTo = function (visitor, parentComponent, parentView, data) {                // 976
    var expandedView, template;                                                                                        // 909
    template = Tracker.nonreactive(function (_this) {                                                                  // 909
      return function () {                                                                                             // 979
        parentView = parentView || currentViewIfRendering() || (parentComponent != null ? parentComponent.isRendered() : void 0) && parentComponent._componentInternals.templateInstance().view || null;
        return wrapViewAndTemplate(parentView, function () {                                                           // 981
          return _this.component().renderComponent(parentComponent);                                                   // 982
        });                                                                                                            // 912
      };                                                                                                               // 909
    }(this));                                                                                                          // 909
                                                                                                                       //
    if (arguments.length > 2) {                                                                                        // 915
      expandedView = expandView(Blaze._TemplateWith(data, contentAsFunc(template)), parentView);                       // 916
    } else {                                                                                                           // 915
      expandedView = expandView(contentAsView(template), parentView);                                                  // 918
    }                                                                                                                  // 990
                                                                                                                       //
    return visitor.visit(expandedView);                                                                                // 991
  };                                                                                                                   // 908
                                                                                                                       //
  BlazeComponent.prototype.renderComponentToHTML = function (parentComponent, parentView, data) {                      // 994
    if (arguments.length > 2) {                                                                                        // 923
      return this._renderComponentTo(new HTML.ToHTMLVisitor(), parentComponent, parentView, data);                     // 996
    } else {                                                                                                           // 923
      return this._renderComponentTo(new HTML.ToHTMLVisitor(), parentComponent, parentView);                           // 998
    }                                                                                                                  // 999
  };                                                                                                                   // 922
                                                                                                                       //
  BlazeComponent.prototype.template = function () {                                                                    // 1002
    return this.callFirstWith(this, 'template') || this.constructor.componentName();                                   // 1003
  };                                                                                                                   // 928
                                                                                                                       //
  BlazeComponent.prototype.onCreated = function () {                                                                   // 1006
    return callTemplateBaseHooks(this, 'created');                                                                     // 1007
  };                                                                                                                   // 931
                                                                                                                       //
  BlazeComponent.prototype.onRendered = function () {                                                                  // 1010
    return callTemplateBaseHooks(this, 'rendered');                                                                    // 1011
  };                                                                                                                   // 934
                                                                                                                       //
  BlazeComponent.prototype.onDestroyed = function () {                                                                 // 1014
    return callTemplateBaseHooks(this, 'destroyed');                                                                   // 1015
  };                                                                                                                   // 937
                                                                                                                       //
  BlazeComponent.prototype.isCreated = function () {                                                                   // 1018
    var base, component;                                                                                               // 941
    component = this.component();                                                                                      // 941
                                                                                                                       //
    if (component._componentInternals == null) {                                                                       // 1021
      component._componentInternals = {};                                                                              // 943
    }                                                                                                                  // 1023
                                                                                                                       //
    if ((base = component._componentInternals).isCreated == null) {                                                    // 1024
      base.isCreated = new ReactiveField(false);                                                                       // 1025
    }                                                                                                                  // 1026
                                                                                                                       //
    return component._componentInternals.isCreated();                                                                  // 1027
  };                                                                                                                   // 940
                                                                                                                       //
  BlazeComponent.prototype.isRendered = function () {                                                                  // 1030
    var base, component;                                                                                               // 949
    component = this.component();                                                                                      // 949
                                                                                                                       //
    if (component._componentInternals == null) {                                                                       // 1033
      component._componentInternals = {};                                                                              // 951
    }                                                                                                                  // 1035
                                                                                                                       //
    if ((base = component._componentInternals).isRendered == null) {                                                   // 1036
      base.isRendered = new ReactiveField(false);                                                                      // 1037
    }                                                                                                                  // 1038
                                                                                                                       //
    return component._componentInternals.isRendered();                                                                 // 1039
  };                                                                                                                   // 948
                                                                                                                       //
  BlazeComponent.prototype.isDestroyed = function () {                                                                 // 1042
    var base, component;                                                                                               // 957
    component = this.component();                                                                                      // 957
                                                                                                                       //
    if (component._componentInternals == null) {                                                                       // 1045
      component._componentInternals = {};                                                                              // 959
    }                                                                                                                  // 1047
                                                                                                                       //
    if ((base = component._componentInternals).isDestroyed == null) {                                                  // 1048
      base.isDestroyed = new ReactiveField(false);                                                                     // 1049
    }                                                                                                                  // 1050
                                                                                                                       //
    return component._componentInternals.isDestroyed();                                                                // 1051
  };                                                                                                                   // 956
                                                                                                                       //
  BlazeComponent.prototype.insertDOMElement = function (parent, node, before) {                                        // 1054
    if (before == null) {                                                                                              // 1055
      before = null;                                                                                                   // 965
    }                                                                                                                  // 1057
                                                                                                                       //
    if (parent && node && (node.parentNode !== parent || node.nextSibling !== before)) {                               // 966
      parent.insertBefore(node, before);                                                                               // 967
    }                                                                                                                  // 1060
  };                                                                                                                   // 964
                                                                                                                       //
  BlazeComponent.prototype.moveDOMElement = function (parent, node, before) {                                          // 1063
    if (before == null) {                                                                                              // 1064
      before = null;                                                                                                   // 972
    }                                                                                                                  // 1066
                                                                                                                       //
    if (parent && node && (node.parentNode !== parent || node.nextSibling !== before)) {                               // 973
      parent.insertBefore(node, before);                                                                               // 974
    }                                                                                                                  // 1069
  };                                                                                                                   // 971
                                                                                                                       //
  BlazeComponent.prototype.removeDOMElement = function (parent, node) {                                                // 1072
    if (parent && node && node.parentNode === parent) {                                                                // 979
      parent.removeChild(node);                                                                                        // 980
    }                                                                                                                  // 1075
  };                                                                                                                   // 978
                                                                                                                       //
  BlazeComponent.prototype.events = function () {                                                                      // 1078
    var eventMap, events, fn, handler, i, len, ref, results, spec, templateInstance, view;                             // 986
                                                                                                                       //
    if (this !== this.component()) {                                                                                   // 986
      return [];                                                                                                       // 986
    }                                                                                                                  // 1082
                                                                                                                       //
    if (this._componentInternals == null) {                                                                            // 1083
      this._componentInternals = {};                                                                                   // 988
    }                                                                                                                  // 1085
                                                                                                                       //
    view = Tracker.nonreactive(function (_this) {                                                                      // 990
      return function () {                                                                                             // 1087
        return _this._componentInternals.templateInstance().view;                                                      // 1088
      };                                                                                                               // 990
    }(this));                                                                                                          // 990
    templateInstance = getTemplateInstanceFunction(view, true);                                                        // 993
    ref = this._componentInternals.templateBase.__eventMaps;                                                           // 995
    results = [];                                                                                                      // 995
                                                                                                                       //
    for (i = 0, len = ref.length; i < len; i++) {                                                                      // 1094
      events = ref[i];                                                                                                 // 1095
      eventMap = {};                                                                                                   // 996
                                                                                                                       //
      fn = function (spec, handler) {                                                                                  // 1097
        return eventMap[spec] = function () {                                                                          // 1098
          var args;                                                                                                    // 1004
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                                // 1000
          return withTemplateInstanceFunc(templateInstance, function () {                                              // 1101
            return Blaze._withCurrentView(view, function () {                                                          // 1102
              return handler.apply(view, args);                                                                        // 1103
            });                                                                                                        // 1005
          });                                                                                                          // 1004
        };                                                                                                             // 1000
      };                                                                                                               // 999
                                                                                                                       //
      for (spec in meteorBabelHelpers.sanitizeForInObject(events)) {                                                   // 998
        handler = events[spec];                                                                                        // 1109
        fn(spec, handler);                                                                                             // 1110
      }                                                                                                                // 998
                                                                                                                       //
      results.push(eventMap);                                                                                          // 1112
    }                                                                                                                  // 995
                                                                                                                       //
    return results;                                                                                                    // 1114
  };                                                                                                                   // 984
                                                                                                                       //
  BlazeComponent.prototype.data = function (path, equalsFunc) {                                                        // 1117
    var base, component, ref, view;                                                                                    // 1015
    component = this.component();                                                                                      // 1015
                                                                                                                       //
    if (component._componentInternals == null) {                                                                       // 1120
      component._componentInternals = {};                                                                              // 1017
    }                                                                                                                  // 1122
                                                                                                                       //
    if ((base = component._componentInternals).templateInstance == null) {                                             // 1123
      base.templateInstance = new ReactiveField(null, function (a, b) {                                                // 1124
        return a === b;                                                                                                // 1125
      });                                                                                                              // 1018
    }                                                                                                                  // 1127
                                                                                                                       //
    if (view = (ref = component._componentInternals.templateInstance()) != null ? ref.view : void 0) {                 // 1020
      if (path != null) {                                                                                              // 1021
        return Blaze._withCurrentView(null, function (_this) {                                                         // 1026
          return function () {                                                                                         // 1131
            return DataLookup.get(function () {                                                                        // 1132
              return Blaze.getData(view);                                                                              // 1133
            }, path, equalsFunc);                                                                                      // 1027
          };                                                                                                           // 1026
        }(this));                                                                                                      // 1026
      } else {                                                                                                         // 1021
        return Blaze.getData(view);                                                                                    // 1032
      }                                                                                                                // 1020
    }                                                                                                                  // 1140
                                                                                                                       //
    return void 0;                                                                                                     // 1141
  };                                                                                                                   // 1014
                                                                                                                       //
  BlazeComponent.currentData = function (path, equalsFunc) {                                                           // 1043
    var currentView;                                                                                                   // 1044
                                                                                                                       //
    if (!Blaze.currentView) {                                                                                          // 1044
      return void 0;                                                                                                   // 1044
    }                                                                                                                  // 1148
                                                                                                                       //
    currentView = Blaze.currentView;                                                                                   // 1046
                                                                                                                       //
    if (_.isString(path)) {                                                                                            // 1048
      path = path.split('.');                                                                                          // 1049
    } else if (!_.isArray(path)) {                                                                                     // 1048
      return Blaze.getData(currentView);                                                                               // 1051
    }                                                                                                                  // 1154
                                                                                                                       //
    return Blaze._withCurrentView(null, function (_this) {                                                             // 1155
      return function () {                                                                                             // 1156
        return DataLookup.get(function () {                                                                            // 1157
          var lexicalData, result;                                                                                     // 1059
                                                                                                                       //
          if (Blaze._lexicalBindingLookup && (lexicalData = Blaze._lexicalBindingLookup(currentView, path[0]))) {      // 1059
            result = {};                                                                                               // 1062
            result[path[0]] = lexicalData;                                                                             // 1063
            return result;                                                                                             // 1064
          }                                                                                                            // 1163
                                                                                                                       //
          return Blaze.getData(currentView);                                                                           // 1164
        }, path, equalsFunc);                                                                                          // 1058
      };                                                                                                               // 1057
    }(this));                                                                                                          // 1057
  };                                                                                                                   // 1043
                                                                                                                       //
  BlazeComponent.prototype.currentData = function (path, equalsFunc) {                                                 // 1170
    return this.constructor.currentData(path, equalsFunc);                                                             // 1171
  };                                                                                                                   // 1071
                                                                                                                       //
  BlazeComponent.prototype.component = function () {                                                                   // 1174
    var component, mixinParent;                                                                                        // 1076
    component = this;                                                                                                  // 1076
                                                                                                                       //
    while (true) {                                                                                                     // 1078
      if (!component.mixinParent) {                                                                                    // 1080
        return null;                                                                                                   // 1080
      }                                                                                                                // 1180
                                                                                                                       //
      if (!(mixinParent = component.mixinParent())) {                                                                  // 1083
        return component;                                                                                              // 1083
      }                                                                                                                // 1183
                                                                                                                       //
      component = mixinParent;                                                                                         // 1084
    }                                                                                                                  // 1078
  };                                                                                                                   // 1075
                                                                                                                       //
  BlazeComponent.currentComponent = function () {                                                                      // 1090
    var templateInstance;                                                                                              // 1093
    templateInstance = getTemplateInstanceFunction(Blaze.currentView, false);                                          // 1093
    return templateInstanceToComponent(templateInstance, false);                                                       // 1191
  };                                                                                                                   // 1090
                                                                                                                       //
  BlazeComponent.prototype.currentComponent = function () {                                                            // 1194
    return this.constructor.currentComponent();                                                                        // 1195
  };                                                                                                                   // 1097
                                                                                                                       //
  BlazeComponent.prototype.firstNode = function () {                                                                   // 1198
    if (this.isRendered()) {                                                                                           // 1101
      return this.component()._componentInternals.templateInstance().view._domrange.firstNode();                       // 1101
    }                                                                                                                  // 1201
                                                                                                                       //
    return void 0;                                                                                                     // 1202
  };                                                                                                                   // 1100
                                                                                                                       //
  BlazeComponent.prototype.lastNode = function () {                                                                    // 1205
    if (this.isRendered()) {                                                                                           // 1106
      return this.component()._componentInternals.templateInstance().view._domrange.lastNode();                        // 1106
    }                                                                                                                  // 1208
                                                                                                                       //
    return void 0;                                                                                                     // 1209
  };                                                                                                                   // 1105
                                                                                                                       //
  BlazeComponent.prototype.autorun = function (runFunc) {                                                              // 1212
    var templateInstance;                                                                                              // 1112
    templateInstance = Tracker.nonreactive(function (_this) {                                                          // 1112
      return function () {                                                                                             // 1215
        var ref;                                                                                                       // 1113
        return (ref = _this.component()._componentInternals) != null ? typeof ref.templateInstance === "function" ? ref.templateInstance() : void 0 : void 0;
      };                                                                                                               // 1112
    }(this));                                                                                                          // 1112
                                                                                                                       //
    if (!templateInstance) {                                                                                           // 1115
      throw new Error("The component has to be created before calling 'autorun'.");                                    // 1115
    }                                                                                                                  // 1222
                                                                                                                       //
    return templateInstance.autorun(_.bind(runFunc, this));                                                            // 1223
  };                                                                                                                   // 1111
                                                                                                                       //
  return BlazeComponent;                                                                                               // 1226
}(BaseComponent);                                                                                                      // 1228
                                                                                                                       //
SUPPORTS_REACTIVE_INSTANCE = ['subscriptionsReady'];                                                                   // 1119
REQUIRE_RENDERED_INSTANCE = ['$', 'find', 'findAll'];                                                                  // 1123
ref = Blaze.TemplateInstance.prototype;                                                                                // 1131
                                                                                                                       //
for (methodName in meteorBabelHelpers.sanitizeForInObject(ref)) {                                                      // 1131
  method = ref[methodName];                                                                                            // 1236
                                                                                                                       //
  if (!(methodName in BlazeComponent.prototype)) {                                                                     // 1237
    (function (methodName, method) {                                                                                   // 1132
      if (indexOf.call(SUPPORTS_REACTIVE_INSTANCE, methodName) >= 0) {                                                 // 1133
        return BlazeComponent.prototype[methodName] = function () {                                                    // 1240
          var args, base, component, templateInstance;                                                                 // 1135
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                                // 1134
          component = this.component();                                                                                // 1135
                                                                                                                       //
          if (component._componentInternals == null) {                                                                 // 1244
            component._componentInternals = {};                                                                        // 1137
          }                                                                                                            // 1246
                                                                                                                       //
          if ((base = component._componentInternals).templateInstance == null) {                                       // 1247
            base.templateInstance = new ReactiveField(null, function (a, b) {                                          // 1248
              return a === b;                                                                                          // 1249
            });                                                                                                        // 1138
          }                                                                                                            // 1251
                                                                                                                       //
          if (templateInstance = component._componentInternals.templateInstance()) {                                   // 1140
            return templateInstance[methodName].apply(templateInstance, args);                                         // 1141
          }                                                                                                            // 1254
                                                                                                                       //
          return void 0;                                                                                               // 1255
        };                                                                                                             // 1134
      } else if (indexOf.call(REQUIRE_RENDERED_INSTANCE, methodName) >= 0) {                                           // 1133
        return BlazeComponent.prototype[methodName] = function () {                                                    // 1258
          var args, ref1;                                                                                              // 1147
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                                // 1146
                                                                                                                       //
          if (this.isRendered()) {                                                                                     // 1147
            return (ref1 = this.component()._componentInternals.templateInstance())[methodName].apply(ref1, args);     // 1147
          }                                                                                                            // 1263
                                                                                                                       //
          return void 0;                                                                                               // 1264
        };                                                                                                             // 1146
      } else {                                                                                                         // 1145
        return BlazeComponent.prototype[methodName] = function () {                                                    // 1267
          var args, templateInstance;                                                                                  // 1153
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                                // 1152
          templateInstance = Tracker.nonreactive(function (_this) {                                                    // 1153
            return function () {                                                                                       // 1271
              var ref1;                                                                                                // 1154
              return (ref1 = _this.component()._componentInternals) != null ? typeof ref1.templateInstance === "function" ? ref1.templateInstance() : void 0 : void 0;
            };                                                                                                         // 1153
          }(this));                                                                                                    // 1153
                                                                                                                       //
          if (!templateInstance) {                                                                                     // 1156
            throw new Error("The component has to be created before calling '" + methodName + "'.");                   // 1156
          }                                                                                                            // 1278
                                                                                                                       //
          return templateInstance[methodName].apply(templateInstance, args);                                           // 1279
        };                                                                                                             // 1152
      }                                                                                                                // 1281
    })(methodName, method);                                                                                            // 1132
  }                                                                                                                    // 1283
}                                                                                                                      // 1131
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/debug.coffee.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var extend = function (child, parent) {                                                                                // 1
  for (var key in meteorBabelHelpers.sanitizeForInObject(parent)) {                                                    // 1
    if (hasProp.call(parent, key)) child[key] = parent[key];                                                           // 1
  }                                                                                                                    // 1
                                                                                                                       //
  function ctor() {                                                                                                    // 1
    this.constructor = child;                                                                                          // 1
  }                                                                                                                    // 1
                                                                                                                       //
  ctor.prototype = parent.prototype;                                                                                   // 1
  child.prototype = new ctor();                                                                                        // 1
  child.__super__ = parent.prototype;                                                                                  // 1
  return child;                                                                                                        // 1
},                                                                                                                     // 1
    hasProp = {}.hasOwnProperty,                                                                                       // 1
    indexOf = [].indexOf || function (item) {                                                                          // 1
  for (var i = 0, l = this.length; i < l; i++) {                                                                       // 4
    if (i in this && this[i] === item) return i;                                                                       // 4
  }                                                                                                                    // 4
                                                                                                                       //
  return -1;                                                                                                           // 4
};                                                                                                                     // 4
                                                                                                                       //
BlazeComponentDebug = function (superClass) {                                                                          // 1
  extend(BlazeComponentDebug, superClass);                                                                             // 7
                                                                                                                       //
  function BlazeComponentDebug() {                                                                                     // 9
    return BlazeComponentDebug.__super__.constructor.apply(this, arguments);                                           // 10
  }                                                                                                                    // 11
                                                                                                                       //
  BlazeComponentDebug.startComponent = function (component) {                                                          // 2
    BlazeComponentDebug.__super__.constructor.startComponent.apply(this, arguments);                                   // 3
                                                                                                                       //
    return console.log(component.data());                                                                              // 15
  };                                                                                                                   // 2
                                                                                                                       //
  BlazeComponentDebug.startMarkedComponent = function (component) {                                                    // 7
    BlazeComponentDebug.__super__.constructor.startMarkedComponent.apply(this, arguments);                             // 8
                                                                                                                       //
    return console.log(component.data());                                                                              // 20
  };                                                                                                                   // 7
                                                                                                                       //
  BlazeComponentDebug.dumpComponentSubtree = function (rootComponentOrElement) {                                       // 12
    if ('nodeType' in rootComponentOrElement && rootComponentOrElement.nodeType === Node.ELEMENT_NODE) {               // 13
      rootComponentOrElement = BlazeComponent.getComponentForElement(rootComponentOrElement);                          // 14
    }                                                                                                                  // 26
                                                                                                                       //
    return BlazeComponentDebug.__super__.constructor.dumpComponentSubtree.apply(this, arguments);                      // 27
  };                                                                                                                   // 12
                                                                                                                       //
  BlazeComponentDebug.dumpComponentTree = function (rootComponentOrElement) {                                          // 18
    if ('nodeType' in rootComponentOrElement && rootComponentOrElement.nodeType === Node.ELEMENT_NODE) {               // 19
      rootComponentOrElement = BlazeComponent.getComponentForElement(rootComponentOrElement);                          // 20
    }                                                                                                                  // 33
                                                                                                                       //
    return BlazeComponentDebug.__super__.constructor.dumpComponentTree.apply(this, arguments);                         // 34
  };                                                                                                                   // 18
                                                                                                                       //
  BlazeComponentDebug.dumpAllComponents = function () {                                                                // 24
    var allRootComponents, j, len, rootComponent;                                                                      // 25
    allRootComponents = [];                                                                                            // 25
    $('*').each(function (_this) {                                                                                     // 27
      return function (i, element) {                                                                                   // 41
        var component, rootComponent;                                                                                  // 28
        component = BlazeComponent.getComponentForElement(element);                                                    // 28
                                                                                                                       //
        if (!component) {                                                                                              // 29
          return;                                                                                                      // 29
        }                                                                                                              // 46
                                                                                                                       //
        rootComponent = _this.componentRoot(component);                                                                // 30
                                                                                                                       //
        if (indexOf.call(allRootComponents, rootComponent) < 0) {                                                      // 31
          return allRootComponents.push(rootComponent);                                                                // 49
        }                                                                                                              // 50
      };                                                                                                               // 27
    }(this));                                                                                                          // 27
                                                                                                                       //
    for (j = 0, len = allRootComponents.length; j < len; j++) {                                                        // 33
      rootComponent = allRootComponents[j];                                                                            // 54
      this.dumpComponentSubtree(rootComponent);                                                                        // 34
    }                                                                                                                  // 33
  };                                                                                                                   // 24
                                                                                                                       //
  return BlazeComponentDebug;                                                                                          // 59
}(BaseComponentDebug);                                                                                                 // 61
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/peerlibrary_blaze-components/client.coffee.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var EventHandler, WHITESPACE_REGEX, createUIHooks, originalDOMRangeAttach, originalExpandAttributes, originalInsertNodeWithHooks, originalMakeAttributeHandler, originalMoveNodeWithHooks, originalToText, propagateUIHooks;
                                                                                                                       //
propagateUIHooks = function (parent, node) {                                                                           // 1
  var childNode, i, len, ref;                                                                                          // 2
                                                                                                                       //
  if (!parent._uihooks || node._uihooks) {                                                                             // 2
    return;                                                                                                            // 2
  }                                                                                                                    // 7
                                                                                                                       //
  node._uihooks = _.extend({}, parent._uihooks, {                                                                      // 4
    parentNode: node                                                                                                   // 4
  });                                                                                                                  // 4
                                                                                                                       //
  if (!node.hasChildNodes()) {                                                                                         // 6
    return;                                                                                                            // 6
  }                                                                                                                    // 13
                                                                                                                       //
  ref = node.childNodes;                                                                                               // 8
                                                                                                                       //
  for (i = 0, len = ref.length; i < len; i++) {                                                                        // 8
    childNode = ref[i];                                                                                                // 16
                                                                                                                       //
    if (childNode.nodeType === Node.ELEMENT_NODE) {                                                                    // 17
      propagateUIHooks(node, childNode);                                                                               // 9
    }                                                                                                                  // 19
  }                                                                                                                    // 8
};                                                                                                                     // 1
                                                                                                                       //
originalInsertNodeWithHooks = Blaze._DOMRange._insertNodeWithHooks;                                                    // 14
                                                                                                                       //
Blaze._DOMRange._insertNodeWithHooks = function (node, parent, next) {                                                 // 15
  propagateUIHooks(parent, node);                                                                                      // 16
  return originalInsertNodeWithHooks(node, parent, next);                                                              // 27
};                                                                                                                     // 15
                                                                                                                       //
originalMoveNodeWithHooks = Blaze._DOMRange._moveNodeWithHooks;                                                        // 19
                                                                                                                       //
Blaze._DOMRange._moveNodeWithHooks = function (node, parent, next) {                                                   // 20
  propagateUIHooks(parent, node);                                                                                      // 21
  return originalMoveNodeWithHooks(node, parent, next);                                                                // 34
};                                                                                                                     // 20
                                                                                                                       //
createUIHooks = function (component, parentNode) {                                                                     // 24
  return {                                                                                                             // 38
    parentNode: parentNode,                                                                                            // 25
    insertElement: function (node, before) {                                                                           // 27
      return component.insertDOMElement(this.parentNode, node, before);                                                // 41
    },                                                                                                                 // 25
    moveElement: function (node, before) {                                                                             // 30
      return component.moveDOMElement(this.parentNode, node, before);                                                  // 44
    },                                                                                                                 // 25
    removeElement: function (node) {                                                                                   // 33
      return component.removeDOMElement(node.parentNode, node);                                                        // 47
    }                                                                                                                  // 25
  };                                                                                                                   // 25
};                                                                                                                     // 24
                                                                                                                       //
originalDOMRangeAttach = Blaze._DOMRange.prototype.attach;                                                             // 36
                                                                                                                       //
Blaze._DOMRange.prototype.attach = function (parentElement, nextNode, _isMove, _isReplace) {                           // 37
  var childNode, component, i, j, len, len1, member, oldUIHooks, ref, ref1, ref2, ref3;                                // 38
                                                                                                                       //
  if (component = (ref = this.view) != null ? (ref1 = ref._templateInstance) != null ? ref1.component : void 0 : void 0) {
    ref2 = this.members;                                                                                               // 39
                                                                                                                       //
    for (i = 0, len = ref2.length; i < len; i++) {                                                                     // 39
      member = ref2[i];                                                                                                // 59
                                                                                                                       //
      if (!!(member instanceof Blaze._DOMRange)) {                                                                     // 60
        continue;                                                                                                      // 61
      }                                                                                                                // 62
                                                                                                                       //
      member._uihooks = createUIHooks(component, member);                                                              // 40
                                                                                                                       //
      if (!member.hasChildNodes()) {                                                                                   // 42
        continue;                                                                                                      // 42
      }                                                                                                                // 66
                                                                                                                       //
      ref3 = member.childNodes;                                                                                        // 44
                                                                                                                       //
      for (j = 0, len1 = ref3.length; j < len1; j++) {                                                                 // 44
        childNode = ref3[j];                                                                                           // 69
                                                                                                                       //
        if (childNode.nodeType === Node.ELEMENT_NODE) {                                                                // 70
          propagateUIHooks(member, childNode);                                                                         // 45
        }                                                                                                              // 72
      }                                                                                                                // 44
    }                                                                                                                  // 39
                                                                                                                       //
    oldUIHooks = parentElement._uihooks;                                                                               // 47
                                                                                                                       //
    try {                                                                                                              // 48
      parentElement._uihooks = createUIHooks(component, parentElement);                                                // 49
      return originalDOMRangeAttach.apply(this, arguments);                                                            // 50
    } finally {                                                                                                        // 48
      if (oldUIHooks) {                                                                                                // 52
        parentElement._uihooks = oldUIHooks;                                                                           // 53
      } else {                                                                                                         // 52
        delete parentElement._uihooks;                                                                                 // 55
      }                                                                                                                // 48
    }                                                                                                                  // 38
  }                                                                                                                    // 86
                                                                                                                       //
  return originalDOMRangeAttach.apply(this, arguments);                                                                // 87
};                                                                                                                     // 37
                                                                                                                       //
WHITESPACE_REGEX = /^\s+$/;                                                                                            // 59
EventHandler = Blaze._AttributeHandler.extend({                                                                        // 61
  update: function (element, oldValue, value) {                                                                        // 62
    var $element, eventName, fun, i, j, len, len1, results;                                                            // 63
                                                                                                                       //
    if (!oldValue) {                                                                                                   // 63
      oldValue = [];                                                                                                   // 63
    }                                                                                                                  // 97
                                                                                                                       //
    if (!_.isArray(oldValue)) {                                                                                        // 64
      oldValue = [oldValue];                                                                                           // 64
    }                                                                                                                  // 100
                                                                                                                       //
    if (!value) {                                                                                                      // 66
      value = [];                                                                                                      // 66
    }                                                                                                                  // 103
                                                                                                                       //
    if (!_.isArray(value)) {                                                                                           // 67
      value = [value];                                                                                                 // 67
    }                                                                                                                  // 106
                                                                                                                       //
    assert(_.every(oldValue, share.isEventHandler), oldValue);                                                         // 69
    assert(_.every(value, share.isEventHandler), value);                                                               // 70
    $element = $(element);                                                                                             // 72
    eventName = this.name.substr(2).toLowerCase();                                                                     // 73
                                                                                                                       //
    for (i = 0, len = oldValue.length; i < len; i++) {                                                                 // 75
      fun = oldValue[i];                                                                                               // 112
      $element.off(eventName, fun);                                                                                    // 75
    }                                                                                                                  // 75
                                                                                                                       //
    results = [];                                                                                                      // 76
                                                                                                                       //
    for (j = 0, len1 = value.length; j < len1; j++) {                                                                  // 116
      fun = value[j];                                                                                                  // 117
      results.push($element.on(eventName, fun));                                                                       // 118
    }                                                                                                                  // 76
                                                                                                                       //
    return results;                                                                                                    // 120
  }                                                                                                                    // 62
});                                                                                                                    // 62
originalMakeAttributeHandler = Blaze._makeAttributeHandler;                                                            // 78
                                                                                                                       //
Blaze._makeAttributeHandler = function (elem, name, value) {                                                           // 79
  if (share.EVENT_HANDLER_REGEX.test(name)) {                                                                          // 80
    return new EventHandler(name, value);                                                                              // 128
  } else {                                                                                                             // 80
    return originalMakeAttributeHandler(elem, name, value);                                                            // 130
  }                                                                                                                    // 131
};                                                                                                                     // 79
                                                                                                                       //
originalToText = Blaze._toText;                                                                                        // 85
                                                                                                                       //
Blaze._toText = function (htmljs, parentView, textMode) {                                                              // 86
  if (share.isEventHandler(htmljs)) {                                                                                  // 89
    return htmljs;                                                                                                     // 138
  } else if (_.isArray(htmljs) && _.some(htmljs, share.isEventHandler)) {                                              // 89
    return _.filter(htmljs, function (fun) {                                                                           // 140
      if (share.isEventHandler(fun)) {                                                                                 // 94
        return true;                                                                                                   // 94
      }                                                                                                                // 143
                                                                                                                       //
      if (WHITESPACE_REGEX.test(fun)) {                                                                                // 95
        return false;                                                                                                  // 95
      }                                                                                                                // 146
                                                                                                                       //
      throw new Error("Invalid event handler: " + fun);                                                                // 98
    });                                                                                                                // 93
  } else {                                                                                                             // 91
    return originalToText(htmljs, parentView, textMode);                                                               // 150
  }                                                                                                                    // 151
};                                                                                                                     // 86
                                                                                                                       //
originalExpandAttributes = Blaze._expandAttributes;                                                                    // 102
                                                                                                                       //
Blaze._expandAttributes = function (attrs, parentView) {                                                               // 103
  var previousInExpandAttributes;                                                                                      // 104
  previousInExpandAttributes = share.inExpandAttributes;                                                               // 104
  share.inExpandAttributes = true;                                                                                     // 105
                                                                                                                       //
  try {                                                                                                                // 106
    return originalExpandAttributes(attrs, parentView);                                                                // 161
  } finally {                                                                                                          // 106
    share.inExpandAttributes = previousInExpandAttributes;                                                             // 109
  }                                                                                                                    // 164
};                                                                                                                     // 103
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['peerlibrary:blaze-components'] = {}, {
  Template: Template,
  BlazeComponent: BlazeComponent,
  BlazeComponentDebug: BlazeComponentDebug
});

})();
