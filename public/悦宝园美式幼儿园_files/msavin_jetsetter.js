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
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Session = Package.session.Session;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MeteorToysDict, JetSetter, value, stringed, colorize, targetDict, target, varName, currentDict, name, contents, Dictionaries, DictNames, dictionaryName, currentSession;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/msavin_jetsetter/client/template.main.js                                                               //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("JetSetter");                                                                                 // 2
Template["JetSetter"] = new Template("Template.JetSetter", (function() {                                           // 3
  var view = this;                                                                                                 // 4
  return HTML.DIV({                                                                                                // 5
    id: "JetSetter",                                                                                               // 6
    class: function() {                                                                                            // 7
      return [ "MeteorToys ", Spacebars.mustache(view.lookup("expanded")), " MeteorToys_hide_JetSetter MeteorToysReset" ];
    },                                                                                                             // 9
    oncontextmenu: 'Package["meteortoys:toykit"].MeteorToys.set("JetSetter_current"); return false;'               // 10
  }, "\n\t\t\n\t\t", Blaze.If(function() {                                                                         // 11
    return Spacebars.call(view.lookup("MeteorToys_Pro"));                                                          // 12
  }, function() {                                                                                                  // 13
    return [ "\t\n\t\t\t", Spacebars.include(view.lookupTemplate("JetSetter_header_pro")), "\n\t\t" ];             // 14
  }, function() {                                                                                                  // 15
    return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("JetSetter_header")), "\n\t\t" ];                   // 16
  }), "\n\t\t\n\t\t", Blaze.If(function() {                                                                        // 17
    return Spacebars.call(view.lookup("JetSetter_oldSession"));                                                    // 18
  }, function() {                                                                                                  // 19
    return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("JetSetterSession")), "\n\t\t" ];                   // 20
  }), "\n\t\t\n\t\t", Spacebars.include(view.lookupTemplate("JetSetter_reactive")), "\n\n\t");                     // 21
}));                                                                                                               // 22
                                                                                                                   // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/msavin_jetsetter/client/main.js                                                                        //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _0xb777=["\x61\x6C\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x63\x75\x72\x72\x65\x6E\x74","\x67\x65\x74","\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x65\x78\x70\x61\x6E\x64","\x66\x75\x6E\x63\x74\x69\x6F\x6E","\x68\x65\x6C\x70\x65\x72\x73","\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x70\x72\x65\x76\x69\x65\x77\x4D\x6F\x64\x65","\x61\x64\x64\x43\x6C\x61\x73\x73","\x23\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73","\x65\x76\x65\x6E\x74\x73","\x63\x6C\x6F\x73\x65","\x73\x65\x74"];delete Session[_0xb777[0]];MeteorToysDict=Package[_0xb777[2]][_0xb777[1]];Template[_0xb777[8]][_0xb777[7]]({expanded:function(){var _0xc51ax1=MeteorToysDict[_0xb777[4]](_0xb777[3]);if(_0xc51ax1){return _0xb777[5]};},JetSetter_oldSession:function(){if( typeof Session[_0xb777[0]]==_0xb777[6]){return false}else {return true}}});Template[_0xb777[8]][_0xb777[13]]({"\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72":function(){$(_0xb777[11])[_0xb777[10]](_0xb777[9])},"\x6D\x6F\x75\x73\x65\x6F\x75\x74":function(){$(_0xb777[11])[_0xb777[12]](_0xb777[9])}});JetSetter={};JetSetter[_0xb777[14]]=function(){Package[_0xb777[2]][_0xb777[1]][_0xb777[15]](_0xb777[3])};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/msavin_jetsetter/client/row/template.main.js                                                           //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("JetSetter_reactiveVar_row");                                                                 // 2
Template["JetSetter_reactiveVar_row"] = new Template("Template.JetSetter_reactiveVar_row", (function() {           // 3
  var view = this;                                                                                                 // 4
  return Blaze._TemplateWith(function() {                                                                          // 5
    return {                                                                                                       // 6
      name: Spacebars.call(view.lookup("componentName"))                                                           // 7
    };                                                                                                             // 8
  }, function() {                                                                                                  // 9
    return Spacebars.include(view.lookupTemplate("JetSetter_Component"), function() {                              // 10
      return [ "\n\t\t", HTML.DIV({                                                                                // 11
        class: "JetSetter_dictTitle"                                                                               // 12
      }, "\n\t\t\t", Blaze.View("lookup:..key", function() {                                                       // 13
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "key"));                                         // 14
      }), HTML.SPAN({                                                                                              // 15
        class: "JetSetter_value_preview"                                                                           // 16
      }, ": ", Blaze.View("lookup:value", function() {                                                             // 17
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("value")));                                        // 18
      })), "\n\t\t"), "\n\t\t", Spacebars.include(view.lookupTemplate("JetSetter_reactiveVar_editor")), "\n\t" ];  // 19
    });                                                                                                            // 20
  });                                                                                                              // 21
}));                                                                                                               // 22
                                                                                                                   // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/msavin_jetsetter/client/row/main.js                                                                    //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.JetSetter_reactiveVar_row.helpers({                                                                       // 2
	'value': function () {                                                                                            // 3
		value = window[this.parent].get(this.key);                                                                       // 4
		return JSON.stringify(value);                                                                                    // 5
		// return this.parent;                                                                                           // 6
	},                                                                                                                // 7
	'componentName': function () {                                                                                    // 8
		return this.parent + "_" + this.key;                                                                             // 9
	}                                                                                                                 // 10
})                                                                                                                 // 11
                                                                                                                   // 12
                                                                                                                   // 13
                                                                                                                   // 14
                                                                                                                   // 15
                                                                                                                   // 16
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/msavin_jetsetter/client/functions.js                                                                   //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
// Initialize Dict                                                                                                 // 1
MeteorToysDict = Package["meteortoys:toykit"].MeteorToysDict;                                                      // 2
                                                                                                                   // 3
JetSetter = {                                                                                                      // 4
    getKeys: function () {                                                                                         // 5
                                                                                                                   // 6
        var keys = Object.getOwnPropertyNames(Session.keys);                                                       // 7
        keys = JetSetter.arrayCleaner(keys, "Meteor.");                                                            // 8
        MeteorToysDict.set("JetSetter", keys);                                                                     // 9
                                                                                                                   // 10
    },                                                                                                             // 11
    arrayCleaner: function(array, toRemove) {                                                                      // 12
                                                                                                                   // 13
        var length = toRemove.length;                                                                              // 14
                                                                                                                   // 15
        for (var i = 0; i < array.length; i++) {                                                                   // 16
            if(array[i].substr(0, length) === toRemove) {                                                          // 17
                array.splice(i, 1);                                                                                // 18
                i--;                                                                                               // 19
            }                                                                                                      // 20
        }                                                                                                          // 21
                                                                                                                   // 22
        return array;                                                                                              // 23
                                                                                                                   // 24
    }                                                                                                              // 25
}                                                                                                                  // 26
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/msavin_jetsetter/client/row_editor/template.JetSetter_editor.js                                        //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("JetSetter_reactiveVar_editor");                                                              // 2
Template["JetSetter_reactiveVar_editor"] = new Template("Template.JetSetter_reactiveVar_editor", (function() {     // 3
  var view = this;                                                                                                 // 4
  return HTML.DIV({                                                                                                // 5
    class: "JetSetter_editor"                                                                                      // 6
  }, "\n\t\t\t\n\t\t\t", Blaze.If(function() {                                                                     // 7
    return Spacebars.call(view.lookup("editing"));                                                                 // 8
  }, function() {                                                                                                  // 9
    return [ "\n\t\t\t\t", HTML.DIV({                                                                              // 10
      class: "JetSetter_editor_header"                                                                             // 11
    }, "\n\t\t\t\t\t", HTML.DIV({                                                                                  // 12
      class: "JetSetter_editor_button JetSetter_button_save"                                                       // 13
    }, "Save"), "\n\t\t\t\t\t", HTML.DIV({                                                                         // 14
      class: "JetSetter_editor_button JetSetter_button_cancel"                                                     // 15
    }, "Cancel"), "\n\t\t\t\t\tValue \n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                        // 16
      class: "JetSetter_editor_content JetSetter_editor_content_editing",                                          // 17
      id: function() {                                                                                             // 18
        return [ "JetSetter_editor_", Spacebars.mustache(view.lookup("editorName")) ];                             // 19
      },                                                                                                           // 20
      contenteditable: "true"                                                                                      // 21
    }, "\n\t\t\t\t\t", HTML.PRE(Blaze.View("lookup:content", function() {                                          // 22
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("content")));                                        // 23
    })), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                              // 24
  }, function() {                                                                                                  // 25
    return [ "\n\t\t\t\t", HTML.DIV({                                                                              // 26
      class: "JetSetter_editor_header"                                                                             // 27
    }, "\n\t\t\t\t\t", HTML.DIV({                                                                                  // 28
      class: "JetSetter_editor_button JetSetter_button_edit MeteorToys_action"                                     // 29
    }, "Edit"), "\n\t\t\t\t\t", HTML.DIV({                                                                         // 30
      class: "JetSetter_editor_button JetSetter_button_drop MeteorToys_action"                                     // 31
    }, "Nullify"), "\n\t\t\t\t\tValue \n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                       // 32
      class: "JetSetter_editor_content"                                                                            // 33
    }, "\n\t\t\t\t\t", HTML.PRE(Blaze.View("lookup:content", function() {                                          // 34
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("content")));                                        // 35
    })), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                              // 36
  }), "\n\t\t");                                                                                                   // 37
}));                                                                                                               // 38
                                                                                                                   // 39
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/msavin_jetsetter/client/row_editor/JetSetter_editor.js                                                 //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Template.JetSetter_reactiveVar_editor.helpers({                                                                    // 1
	'content': function () {                                                                                          // 2
		value    = window[this.parent].get(this.key);                                                                    // 3
		stringed = JSON.stringify(value, null, 2);                                                                       // 4
		colorize  = Package["meteortoys:toykit"].MeteorToys.colorize(stringed);                                          // 5
		return colorize;                                                                                                 // 6
	},                                                                                                                // 7
	'editing': function () {                                                                                          // 8
		return MeteorToysDict.get("JetSetter_settings_edit");                                                            // 9
	},                                                                                                                // 10
	'editorName': function () {                                                                                       // 11
		return this.parent + "_" + this.key;                                                                             // 12
	}                                                                                                                 // 13
})                                                                                                                 // 14
                                                                                                                   // 15
Template.JetSetter_reactiveVar_editor.events({                                                                     // 16
	'click .JetSetter_button_save':   function () {                                                                   // 17
		                                                                                                                 // 18
		// data the data                                                                                                 // 19
		var data = $("#JetSetter_editor_" + String(this.parent) + "_" + String(this.key)).text();                        // 20
                                                                                                                   // 21
		// Parse it                                                                                                      // 22
		var newObject = false;                                                                                           // 23
                                                                                                                   // 24
		try {                                                                                                            // 25
		  newObject = JSON.parse(data);                                                                                  // 26
		} catch (error) {                                                                                                // 27
		  var newObject = "JetSetter_failed_change"                                                                      // 28
		  // alert("There was an error with your input.")                                                                // 29
		}                                                                                                                // 30
                                                                                                                   // 31
		if (newObject === "JetSetter_failed_change") {                                                                   // 32
			// Do nothing                                                                                                   // 33
		} else {                                                                                                         // 34
			targetDict = window[this.parent];                                                                               // 35
			window[this.parent].set(this.key, newObject)	                                                                   // 36
		}                                                                                                                // 37
                                                                                                                   // 38
		MeteorToysDict.set("JetSetter_settings_edit", false);                                                            // 39
                                                                                                                   // 40
	},                                                                                                                // 41
	'click .JetSetter_button_cancel': function () {                                                                   // 42
		MeteorToysDict.set("JetSetter_settings_edit", false);                                                            // 43
	},                                                                                                                // 44
	'click .JetSetter_button_edit':   function () {                                                                   // 45
		MeteorToysDict.set("JetSetter_settings_edit", true);                                                             // 46
	},                                                                                                                // 47
	'click .JetSetter_button_drop':   function () {                                                                   // 48
		target = window[this.parent];                                                                                    // 49
                                                                                                                   // 50
		if (target.get(this.key) === null) {                                                                             // 51
			MeteorToysDict.set("JetSetter_current", false);                                                                 // 52
		} else {                                                                                                         // 53
			target.set(this.key, null);                                                                                     // 54
		}                                                                                                                // 55
	}                                                                                                                 // 56
})                                                                                                                 // 57
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/msavin_jetsetter/client/row_header/template.JetSetter_header.js                                        //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("JetSetter_header");                                                                          // 2
Template["JetSetter_header"] = new Template("Template.JetSetter_header", (function() {                             // 3
  var view = this;                                                                                                 // 4
  return Blaze._TemplateWith(function() {                                                                          // 5
    return {                                                                                                       // 6
      name: Spacebars.call("header")                                                                               // 7
    };                                                                                                             // 8
  }, function() {                                                                                                  // 9
    return Spacebars.include(view.lookupTemplate("JetSetter_Component"), function() {                              // 10
      return [ "\n\t\t", HTML.STRONG("JetSetter"), "\n\t\t", HTML.DIV({                                            // 11
        class: "JetSetter_editor"                                                                                  // 12
      }, "\n\t\t\t", HTML.DIV({                                                                                    // 13
        class: "JetSetter_editor_header"                                                                           // 14
      }, "\n\t\t\t\tIn-App Session Editor\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                        // 15
        class: "JetSetter_editor_content"                                                                          // 16
      }, "\n", HTML.PRE({                                                                                          // 17
        class: "MeteorToys-off"                                                                                    // 18
      }, "{ \n  ", HTML.SPAN({                                                                                     // 19
        class: "MeteorToys_key"                                                                                    // 20
      }, '"created_by"'), ': "', HTML.A({                                                                          // 21
        href: "http://maxsavin.com"                                                                                // 22
      }, "Max Savin"), '",\n  ', HTML.SPAN({                                                                       // 23
        class: "MeteorToys_key"                                                                                    // 24
      }, '"docs_at"'), ':    "', HTML.A({                                                                          // 25
        href: "https://meteor.toys"                                                                                // 26
      }, "Meteor Toys"), '",\n  ', HTML.SPAN({                                                                     // 27
        class: "MeteorToys_key"                                                                                    // 28
      }, '"license"'), ':    "', HTML.A({                                                                          // 29
        href: "https://github.com/MeteorToys/allthings/blob/master/LICENSE.md"                                     // 30
      }, "MT License"), '",\n}\n'), "\n\t\t\t"), "\n\t\t"), "\n\t" ];                                              // 31
    });                                                                                                            // 32
  });                                                                                                              // 33
}));                                                                                                               // 34
                                                                                                                   // 35
Template.__checkName("JetSetter_header_pro");                                                                      // 36
Template["JetSetter_header_pro"] = new Template("Template.JetSetter_header_pro", (function() {                     // 37
  var view = this;                                                                                                 // 38
  return Blaze._TemplateWith(function() {                                                                          // 39
    return {                                                                                                       // 40
      name: Spacebars.call("header2")                                                                              // 41
    };                                                                                                             // 42
  }, function() {                                                                                                  // 43
    return Spacebars.include(view.lookupTemplate("JetSetter_Component"), function() {                              // 44
      return [ "\n\n\t\t", HTML.STRONG("JetSetter Pro"), "\n\t\t", HTML.DIV({                                      // 45
        class: "JetSetter_editor"                                                                                  // 46
      }, "\n\t\t\t", HTML.DIV({                                                                                    // 47
        class: "JetSetter_editor_header"                                                                           // 48
      }, "\n\t\t\t\t", HTML.DIV({                                                                                  // 49
        class: "JetSetter_editor_button JetSetter_button_drop"                                                     // 50
      }, "\n\t\t\t\t\tAdd\n\t\t\t\t"), "\n\t\t\t\tReactive Dictionaries\n\t\t\t"), "\n\t\t\t", HTML.DIV({          // 51
        class: "JetSetter_editor_content",                                                                         // 52
        style: "padding-top: 4px"                                                                                  // 53
      }, "\n\t\t\t\t", Blaze.Each(function() {                                                                     // 54
        return Spacebars.call(view.lookup("ReactiveVar"));                                                         // 55
      }, function() {                                                                                              // 56
        return [ "\n\t\t\t\t\t", HTML.DIV({                                                                        // 57
          class: "MeteorToys_row"                                                                                  // 58
        }, "\n\t\t\t\t\t\t", HTML.DIV({                                                                            // 59
          class: "MeteorToys_row_remove"                                                                           // 60
        }, HTML.CharRef({                                                                                          // 61
          html: "&times;",                                                                                         // 62
          str: "×"                                                                                                 // 63
        })), "\n\t\t\t\t\t\t", Blaze.View("lookup:name", function() {                                              // 64
          return Spacebars.mustache(view.lookup("name"));                                                          // 65
        }), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                       // 66
      }, function() {                                                                                              // 67
        return [ "\n\t\t\t\t\tYou are not watching any", HTML.BR(), " reactive dictionaries.\n\t\t\t\t\tTo watch,", HTML.BR(), ' simply press the "Add" button.', HTML.BR(), "\n\t\t\t\t" ];
      }), "\n\t\t\t"), "\n\t\t"), "\n\t\t\n\t" ];                                                                  // 69
    });                                                                                                            // 70
  });                                                                                                              // 71
}));                                                                                                               // 72
                                                                                                                   // 73
Template.__checkName("JetSetter_reactiveDict_header");                                                             // 74
Template["JetSetter_reactiveDict_header"] = new Template("Template.JetSetter_reactiveDict_header", (function() {   // 75
  var view = this;                                                                                                 // 76
  return Blaze._TemplateWith(function() {                                                                          // 77
    return {                                                                                                       // 78
      name: Spacebars.call(view.lookup("componentName"))                                                           // 79
    };                                                                                                             // 80
  }, function() {                                                                                                  // 81
    return Spacebars.include(view.lookupTemplate("JetSetter_Component"), function() {                              // 82
      return [ "\n\t\t\n\t\t", HTML.DIV({                                                                          // 83
        class: "JetSetter_dictTitle"                                                                               // 84
      }, "\n\t\t\t", HTML.STRONG(Blaze.View("lookup:..name", function() {                                          // 85
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "name"));                                        // 86
      })), "\n\t\t\t", HTML.DIV("\n\t\t\t\t", HTML.STRONG("+"), "\n\t\t\t"), "\n\t\t"), "\n\t\t\n\t\t", HTML.DIV({
        class: "JetSetter_editor"                                                                                  // 88
      }, "\n\t\t\t", HTML.DIV({                                                                                    // 89
        class: "JetSetter_editor_header"                                                                           // 90
      }, "\n\t\t\t\t", HTML.Comment(' <div class="JetSetter_create_name"></div> '), "\n\t\t\t\t", HTML.INPUT({     // 91
        type: "text",                                                                                              // 92
        class: "JetSetter_editor_title",                                                                           // 93
        id: function() {                                                                                           // 94
          return [ "JetSetter_new_name_", Spacebars.mustache(Spacebars.dot(view.lookup("."), "name")) ];           // 95
        },                                                                                                         // 96
        placeholder: "Enter Name"                                                                                  // 97
      }), HTML.CharRef({                                                                                           // 98
        html: "&nbsp;",                                                                                            // 99
        str: " "                                                                                                   // 100
      }), "\n\t\t\t\t", HTML.DIV({                                                                                 // 101
        class: "JetSetter_editor_button JetSetter_button_new MeteorToys_action"                                    // 102
      }, "\n\t\t\t\t\tSet\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                         // 103
        class: "JetSetter_editor_content JetSetter_editor_create",                                                 // 104
        id: function() {                                                                                           // 105
          return [ "JetSetter_new_", Spacebars.mustache(Spacebars.dot(view.lookup("."), "name")) ];                // 106
        },                                                                                                         // 107
        contenteditable: "true",                                                                                   // 108
        style: "cursor: text"                                                                                      // 109
      }), "\n\t\t"), "\n\n\t" ];                                                                                   // 110
    });                                                                                                            // 111
  });                                                                                                              // 112
}));                                                                                                               // 113
                                                                                                                   // 114
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/msavin_jetsetter/client/row_header/JetSetter_header.js                                                 //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Template.JetSetter_header_pro.events({                                                                             // 1
	'click .JetSetter_editor_button': function () {                                                                   // 2
		                                                                                                                 // 3
		varName = prompt("What's it called?");                                                                           // 4
		target  = window[varName];                                                                                       // 5
                                                                                                                   // 6
		if (typeof target === "undefined") {                                                                             // 7
			alert("The variable you specified does not exist. Please try again.");                                          // 8
			return;                                                                                                         // 9
		}                                                                                                                // 10
		                                                                                                                 // 11
		if (typeof target.all === "undefined") {                                                                         // 12
			alert("Invalid variable specified. Please try again");                                                          // 13
		} else {                                                                                                         // 14
			Package["meteortoys:toykit"].MeteorToysData.JetSetter.insert({                                                  // 15
				'name': varName                                                                                                // 16
			});                                                                                                             // 17
		}                                                                                                                // 18
                                                                                                                   // 19
	},                                                                                                                // 20
	'click .MeteorToys_row': function () {                                                                            // 21
                                                                                                                   // 22
		var varID = Package["meteortoys:toykit"].MeteorToysData.JetSetter.findOne({                                      // 23
			'name': this.name                                                                                               // 24
		})._id;                                                                                                          // 25
                                                                                                                   // 26
		Package["meteortoys:toykit"].MeteorToysData.JetSetter.remove(varID);                                             // 27
                                                                                                                   // 28
	}                                                                                                                 // 29
});                                                                                                                // 30
                                                                                                                   // 31
Template.JetSetter_header_pro.helpers({                                                                            // 32
	ReactiveVar: function () {                                                                                        // 33
		return Package["meteortoys:toykit"].MeteorToysData.JetSetter.find();                                             // 34
	}                                                                                                                 // 35
});                                                                                                                // 36
                                                                                                                   // 37
Template.JetSetter_reactiveDict_header.events({                                                                    // 38
	'click .JetSetter_dictTitle': function() {                                                                        // 39
		$("#JetSetter_new_name_" + this.name).focus();                                                                   // 40
	},                                                                                                                // 41
	'click .JetSetter_button_new': function () {                                                                      // 42
		                                                                                                                 // 43
		// Capture the Reactive Dictionary                                                                               // 44
		currentDict = window[this.name];                                                                                 // 45
                                                                                                                   // 46
		// Get all the values                                                                                            // 47
		name     = $('#JetSetter_new_name_' + this.name).val();                                                          // 48
		contents = $('#JetSetter_new_' + this.name).text();                                                              // 49
		value 	 = Package["meteortoys:toykit"].MeteorToys_JSON.parse(contents);                                          // 50
                                                                                                                   // 51
		// Set the value                                                                                                 // 52
		currentDict.set(name, value);                                                                                    // 53
                                                                                                                   // 54
		// Open the box                                                                                                  // 55
		var item    = "JetSetter_" + String(this.name) + "_" + name;                                                     // 56
		MeteorToysDict.set("JetSetter_current", item);                                                                   // 57
                                                                                                                   // 58
		// Clear the inputs                                                                                              // 59
		$('#JetSetter_new_name_' + this.name).val("");                                                                   // 60
		$('#JetSetter_new_' + this.name).html = "";                                                                      // 61
                                                                                                                   // 62
	}                                                                                                                 // 63
})                                                                                                                 // 64
                                                                                                                   // 65
Template.JetSetter_reactiveDict_header.helpers({                                                                   // 66
	'componentName': function () {                                                                                    // 67
		return "header_" + this.name;                                                                                    // 68
	}                                                                                                                 // 69
})                                                                                                                 // 70
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/msavin_jetsetter/client/row_dict/template.main.js                                                      //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("JetSetter_reactive");                                                                        // 2
Template["JetSetter_reactive"] = new Template("Template.JetSetter_reactive", (function() {                         // 3
  var view = this;                                                                                                 // 4
  return Blaze.Each(function() {                                                                                   // 5
    return Spacebars.call(view.lookup("ReactiveDrill"));                                                           // 6
  }, function() {                                                                                                  // 7
    return [ "\n\t\t", Spacebars.include(view.lookupTemplate("JetSetter_reactiveDict_header")), "\n\t\t", Blaze.Each(function() {
      return Spacebars.call(view.lookup("keys"));                                                                  // 9
    }, function() {                                                                                                // 10
      return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("JetSetter_reactiveVar_row")), "\n\t\t" ];        // 11
    }), "\n\t" ];                                                                                                  // 12
  });                                                                                                              // 13
}));                                                                                                               // 14
                                                                                                                   // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/msavin_jetsetter/client/row_dict/main.js                                                               //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Template.JetSetter_reactive.helpers({                                                                              // 1
	ReactiveDrill: function () {                                                                                      // 2
		Dictionaries = [];                                                                                               // 3
                                                                                                                   // 4
		if (Package["session"]) {                                                                                        // 5
			if (typeof Session.all == 'function') {                                                                         // 6
			    var referencedKeys = [];                                                                                    // 7
			    var originalKeys = Object.keys(Session.all());                                                              // 8
                                                                                                                   // 9
			    originalKeys.forEach(function(targetKey) {                                                                  // 10
			    		referencedKeys.push({                                                                                     // 11
			    			parent: "Session",                                                                                       // 12
			    			key:    targetKey                                                                                        // 13
			    		})                                                                                                        // 14
			    	})                                                                                                         // 15
                                                                                                                   // 16
			    Dictionaries.push({                                                                                         // 17
			    	name: "Session",                                                                                           // 18
			    	keys: referencedKeys                                                                                       // 19
			    });                                                                                                         // 20
			}                                                                                                               // 21
		}                                                                                                                // 22
		                                                                                                                 // 23
		if (Package["meteortoys:toykit"].ToyKit.equals("authenticated", true)) {                                         // 24
			DictNames    = Package["meteortoys:toykit"].MeteorToysData.JetSetter.find().fetch();                            // 25
			                                                                                                                // 26
			DictNames.forEach(function(targetDict) {                                                                        // 27
				                                                                                                               // 28
				dictionaryName = targetDict.name;                                                                              // 29
				referencedKeys = [];                                                                                           // 30
				originalKeys   = Object.keys(window[targetDict.name].all());                                                   // 31
                                                                                                                   // 32
				originalKeys.forEach(function(targetKey) {                                                                     // 33
					referencedKeys.push({                                                                                         // 34
						parent: dictionaryName,                                                                                      // 35
						key:    targetKey                                                                                            // 36
					})                                                                                                            // 37
				})                                                                                                             // 38
                                                                                                                   // 39
				Dictionaries.push({                                                                                            // 40
					name: dictionaryName,                                                                                         // 41
					keys: referencedKeys                                                                                          // 42
				});                                                                                                            // 43
                                                                                                                   // 44
			});                                                                                                             // 45
		}                                                                                                                // 46
                                                                                                                   // 47
		return Dictionaries;                                                                                             // 48
	}                                                                                                                 // 49
});                                                                                                                // 50
                                                                                                                   // 51
                                                                                                                   // 52
                                                                                                                   // 53
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/msavin_jetsetter/client/_component/template.component.js                                               //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("JetSetter_Component");                                                                       // 2
Template["JetSetter_Component"] = new Template("Template.JetSetter_Component", (function() {                       // 3
  var view = this;                                                                                                 // 4
  return HTML.DIV({                                                                                                // 5
    class: function() {                                                                                            // 6
      return [ "JetSetter_row ", Spacebars.mustache(view.lookup("expand")) ];                                      // 7
    },                                                                                                             // 8
    id: function() {                                                                                               // 9
      return [ "JetSetter_", Spacebars.mustache(view.lookup("name")) ];                                            // 10
    }                                                                                                              // 11
  }, "\n\t\t", Blaze._InOuterTemplateScope(view, function() {                                                      // 12
    return Spacebars.include(function() {                                                                          // 13
      return Spacebars.call(view.templateContentBlock);                                                            // 14
    });                                                                                                            // 15
  }), "\n\t");                                                                                                     // 16
}));                                                                                                               // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/msavin_jetsetter/client/_component/component.js                                                        //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _0x5655=["\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x63\x75\x72\x72\x65\x6E\x74","\x67\x65\x74","\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F","\x6E\x61\x6D\x65","\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x72\x6F\x77\x5F\x65\x78\x70\x61\x6E\x64","\x68\x65\x6C\x70\x65\x72\x73","\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74","\x73\x65\x74","\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x73\x65\x74\x74\x69\x6E\x67\x73\x5F\x65\x64\x69\x74","\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x70\x72\x65\x76\x69\x65\x77\x4D\x6F\x64\x65","\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73","\x23\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E","\x65\x76\x65\x6E\x74\x73"];Template[_0x5655[6]][_0x5655[5]]({expand:function(){var _0xce7dx1=String(MeteorToysDict[_0x5655[1]](_0x5655[0]));var _0xce7dx2=_0x5655[2]+String(this[_0x5655[3]]);if(_0xce7dx1===_0xce7dx2){return _0x5655[4]};}});Template[_0x5655[6]][_0x5655[13]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x72\x6F\x77":function(){var _0xce7dx1=String(MeteorToysDict[_0x5655[1]](_0x5655[0]));var _0xce7dx3=_0x5655[2]+String(this[_0x5655[3]]);if(_0xce7dx1===_0xce7dx3){MeteorToysDict[_0x5655[7]](_0x5655[0],null)}else {MeteorToysDict[_0x5655[7]](_0x5655[0],_0xce7dx3)};MeteorToysDict[_0x5655[7]](_0x5655[8],false);$(_0x5655[11])[_0x5655[10]](_0x5655[9]);},"\x63\x6C\x69\x63\x6B\x20\x2E\x4A\x65\x74\x53\x65\x74\x74\x65\x72\x5F\x65\x64\x69\x74\x6F\x72":function(_0xce7dx4,_0xce7dx5){_0xce7dx4[_0x5655[12]]()}});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/msavin_jetsetter/client/dirtySession/template.main.js                                                  //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("JetSetterSession");                                                                          // 2
Template["JetSetterSession"] = new Template("Template.JetSetterSession", (function() {                             // 3
  var view = this;                                                                                                 // 4
  return [ Spacebars.include(view.lookupTemplate("JetSetter_create")), "\n\t", Blaze.Each(function() {             // 5
    return Spacebars.call(view.lookup("SessionItems"));                                                            // 6
  }, function() {                                                                                                  // 7
    return [ "\n\t\t", Spacebars.include(view.lookupTemplate("JetSetter_row")), "\n\t" ];                          // 8
  }) ];                                                                                                            // 9
}));                                                                                                               // 10
                                                                                                                   // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/msavin_jetsetter/client/dirtySession/main.js                                                           //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
// Initialize Dict                                                                                                 // 1
MeteorToysDict = Package["meteortoys:toykit"].MeteorToysDict;                                                      // 2
                                                                                                                   // 3
JetSetter = {                                                                                                      // 4
    getKeys: function () {                                                                                         // 5
                                                                                                                   // 6
        var keys = Object.getOwnPropertyNames(Session.keys);                                                       // 7
        keys = JetSetter.arrayCleaner(keys, "Meteor.");                                                            // 8
        MeteorToysDict.set("JetSetter", keys);                                                                     // 9
                                                                                                                   // 10
    },                                                                                                             // 11
    arrayCleaner: function(array, toRemove) {                                                                      // 12
                                                                                                                   // 13
        var length = toRemove.length;                                                                              // 14
                                                                                                                   // 15
        for (var i = 0; i < array.length; i++) {                                                                   // 16
            if(array[i].substr(0, length) === toRemove) {                                                          // 17
                array.splice(i, 1);                                                                                // 18
                i--;                                                                                               // 19
            }                                                                                                      // 20
        }                                                                                                          // 21
                                                                                                                   // 22
        return array;                                                                                              // 23
                                                                                                                   // 24
    }                                                                                                              // 25
}                                                                                                                  // 26
                                                                                                                   // 27
                                                                                                                   // 28
if (!Object.observe) {                                                                                             // 29
  setInterval(function(){                                                                                          // 30
    JetSetter.getKeys();                                                                                           // 31
  }, 3000);                                                                                                        // 32
} else {                                                                                                           // 33
  Object.observe(Session.keys, function () {                                                                       // 34
    JetSetter.getKeys();                                                                                           // 35
  })                                                                                                               // 36
}                                                                                                                  // 37
                                                                                                                   // 38
Template.JetSetterSession.helpers({                                                                                // 39
    expanded: function () {                                                                                        // 40
        var current = MeteorToysDict.get("JetSetter_current");                                                     // 41
        if (current) {                                                                                             // 42
            return "JetSetter_expand"                                                                              // 43
        }                                                                                                          // 44
    },                                                                                                             // 45
    SessionItems: function () {                                                                                    // 46
        var array = MeteorToysDict.get("JetSetter");                                                               // 47
        return array;                                                                                              // 48
    }                                                                                                              // 49
});                                                                                                                // 50
                                                                                                                   // 51
                                                                                                                   // 52
                                                                                                                   // 53
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/msavin_jetsetter/client/dirtySession/editor/template.main.js                                           //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("JetSetter_editor");                                                                          // 2
Template["JetSetter_editor"] = new Template("Template.JetSetter_editor", (function() {                             // 3
  var view = this;                                                                                                 // 4
  return HTML.DIV({                                                                                                // 5
    class: "JetSetter_editor"                                                                                      // 6
  }, "\n\t\t\n\t\t", Blaze.If(function() {                                                                         // 7
    return Spacebars.call(view.lookup("editing"));                                                                 // 8
  }, function() {                                                                                                  // 9
    return [ "\n\t\t\t", HTML.DIV({                                                                                // 10
      class: "JetSetter_editor_header"                                                                             // 11
    }, "\n\t\t\t\t", HTML.DIV({                                                                                    // 12
      class: "JetSetter_editor_button JetSetter_button_save"                                                       // 13
    }, "Save"), "\n\t\t\t\t", HTML.DIV({                                                                           // 14
      class: "JetSetter_editor_button JetSetter_button_cancel"                                                     // 15
    }, "Cancel"), "\n\t\t\t\tValue \n\t\t\t"), "\n\t\t\t", HTML.DIV({                                              // 16
      class: "JetSetter_editor_content JetSetter_editor_content_editing",                                          // 17
      id: function() {                                                                                             // 18
        return [ "JetSetter_editor_", Spacebars.mustache(view.lookup(".")) ];                                      // 19
      },                                                                                                           // 20
      contenteditable: "true"                                                                                      // 21
    }, "\n\t\t\t\t", HTML.PRE(Blaze.View("lookup:content", function() {                                            // 22
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("content")));                                        // 23
    })), "\n\t\t\t"), "\n\t\t" ];                                                                                  // 24
  }, function() {                                                                                                  // 25
    return [ "\n\t\t\t", HTML.DIV({                                                                                // 26
      class: "JetSetter_editor_header"                                                                             // 27
    }, "\n\t\t\t\t", HTML.DIV({                                                                                    // 28
      class: "JetSetter_editor_button JetSetter_button_edit"                                                       // 29
    }, "Edit"), "\n\t\t\t\t", HTML.DIV({                                                                           // 30
      class: "JetSetter_editor_button JetSetter_button_drop"                                                       // 31
    }, "Drop"), "\n\t\t\t\tValue \n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                // 32
      class: "JetSetter_editor_content"                                                                            // 33
    }, "\n\t\t\t\t", HTML.PRE(Blaze.View("lookup:content", function() {                                            // 34
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("content")));                                        // 35
    })), "\n\t\t\t"), "\n\t\t" ];                                                                                  // 36
  }), "\n\n\t");                                                                                                   // 37
}));                                                                                                               // 38
                                                                                                                   // 39
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/msavin_jetsetter/client/dirtySession/editor/main.js                                                    //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Template.JetSetter_editor.events({                                                                                 // 1
	'click .JetSetter_button_edit': function () {                                                                     // 2
		MeteorToysDict.set("JetSetter_settings_edit", true)                                                              // 3
	},                                                                                                                // 4
	'click .JetSetter_button_save': function () {                                                                     // 5
		                                                                                                                 // 6
		// data the data                                                                                                 // 7
		var data = $("#JetSetter_editor_" + String(this)).text();                                                        // 8
                                                                                                                   // 9
		// Parse it                                                                                                      // 10
                                                                                                                   // 11
		var newObject = false;                                                                                           // 12
                                                                                                                   // 13
		try {                                                                                                            // 14
		  newObject = JSON.parse(data);                                                                                  // 15
		} catch (error) {                                                                                                // 16
		  var newObject = "JetSetter_failed_change"                                                                      // 17
		  // alert("There was an error with your input.")                                                                // 18
		}                                                                                                                // 19
                                                                                                                   // 20
		if (newObject === "JetSetter_failed_change") {                                                                   // 21
			// Do nothing                                                                                                   // 22
		} else {                                                                                                         // 23
			Session.set(this, newObject)	                                                                                   // 24
		}                                                                                                                // 25
                                                                                                                   // 26
		MeteorToysDict.set("JetSetter_settings_edit", false);                                                            // 27
                                                                                                                   // 28
	},                                                                                                                // 29
	'click .JetSetter_button_cancel': function () {                                                                   // 30
		MeteorToysDict.set("JetSetter_settings_edit", false)                                                             // 31
	},                                                                                                                // 32
	'click .JetSetter_editor': function (e, t) {                                                                      // 33
		e.stopPropagation();                                                                                             // 34
	},                                                                                                                // 35
	'click .JetSetter_button_drop': function () {                                                                     // 36
		                                                                                                                 // 37
		MeteorToysDict.set("JetSetter_current", null)                                                                    // 38
		currentSession = this;                                                                                           // 39
                                                                                                                   // 40
		window.setTimeout(function() {                                                                                   // 41
			delete Session.keys[currentSession];                                                                            // 42
			JetSetter.getKeys();                                                                                            // 43
		}, 300);                                                                                                         // 44
		                                                                                                                 // 45
                                                                                                                   // 46
	}                                                                                                                 // 47
});                                                                                                                // 48
                                                                                                                   // 49
Template.JetSetter_editor.helpers({                                                                                // 50
	content: function () {                                                                                            // 51
		var value = Session.get(this);                                                                                   // 52
		var stringed = JSON.stringify(value, undefined, 2);                                                              // 53
		var result = Package["meteortoys:toykit"].MeteorToys_JSON.colorize(stringed)                                     // 54
		return result;                                                                                                   // 55
	},                                                                                                                // 56
	editing: function () {                                                                                            // 57
		return MeteorToysDict.get("JetSetter_settings_edit");                                                            // 58
	}                                                                                                                 // 59
});                                                                                                                // 60
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/msavin_jetsetter/client/dirtySession/session/template.main.js                                          //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("JetSetter_row");                                                                             // 2
Template["JetSetter_row"] = new Template("Template.JetSetter_row", (function() {                                   // 3
  var view = this;                                                                                                 // 4
  return Blaze._TemplateWith(function() {                                                                          // 5
    return {                                                                                                       // 6
      name: Spacebars.call(view.lookup("."))                                                                       // 7
    };                                                                                                             // 8
  }, function() {                                                                                                  // 9
    return Spacebars.include(view.lookupTemplate("JetSetter_Component"), function() {                              // 10
      return [ "\n\n\t\t", Blaze.View("lookup:.", function() {                                                     // 11
        return Spacebars.mustache(view.lookup("."));                                                               // 12
      }), HTML.SPAN({                                                                                              // 13
        class: "JetSetter_value_preview"                                                                           // 14
      }, ": ", Blaze.View("lookup:value", function() {                                                             // 15
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("value")));                                        // 16
      })), "\n\t\t", Spacebars.include(view.lookupTemplate("JetSetter_editor")), "\n\n\t" ];                       // 17
    });                                                                                                            // 18
  });                                                                                                              // 19
}));                                                                                                               // 20
                                                                                                                   // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/msavin_jetsetter/client/dirtySession/session/main.js                                                   //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.JetSetter_row.helpers({                                                                                   // 2
    value: function () {                                                                                           // 3
        var value = Session.get(this);                                                                             // 4
        var stringed = JSON.stringify(value, undefined, 0);                                                        // 5
        return stringed;                                                                                           // 6
   }                                                                                                               // 7
});                                                                                                                // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/msavin_jetsetter/client/dirtySession/create/template.main.js                                           //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("JetSetter_create");                                                                          // 2
Template["JetSetter_create"] = new Template("Template.JetSetter_create", (function() {                             // 3
  var view = this;                                                                                                 // 4
  return Blaze._TemplateWith(function() {                                                                          // 5
    return {                                                                                                       // 6
      name: Spacebars.call("create")                                                                               // 7
    };                                                                                                             // 8
  }, function() {                                                                                                  // 9
    return Spacebars.include(view.lookupTemplate("JetSetter_Component"), function() {                              // 10
      return [ "\n\t\t\n\t\t\n\t\t", HTML.DIV({                                                                    // 11
        class: "MeteorToys_right"                                                                                  // 12
      }, "\n\t\t\t", HTML.STRONG("+"), "\n\t\t"), "\n\t\t", HTML.STRONG("Session"), "\n\n\t\t", HTML.DIV({         // 13
        class: "JetSetter_editor"                                                                                  // 14
      }, "\n\t\t\t", HTML.DIV({                                                                                    // 15
        class: "JetSetter_editor_header"                                                                           // 16
      }, "\n\t\t\t\t", HTML.Comment(' <div class="JetSetter_create_name"></div> '), "\n\t\t\t\t", HTML.INPUT({     // 17
        type: "text",                                                                                              // 18
        class: "JetSetter_editor_title",                                                                           // 19
        placeholder: "Enter Name"                                                                                  // 20
      }), HTML.CharRef({                                                                                           // 21
        html: "&nbsp;",                                                                                            // 22
        str: " "                                                                                                   // 23
      }), "\n\t\t\t\t", HTML.DIV({                                                                                 // 24
        class: "JetSetter_editor_button JetSetter_button_new"                                                      // 25
      }, "\n\t\t\t\t\tSet"), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                   // 26
        class: "JetSetter_editor_content JetSetter_editor_create",                                                 // 27
        contenteditable: "true",                                                                                   // 28
        style: "cursor: text"                                                                                      // 29
      }, "\n\t\t\t"), "\n\t\t"), "\n\n\t" ];                                                                       // 30
    });                                                                                                            // 31
  });                                                                                                              // 32
}));                                                                                                               // 33
                                                                                                                   // 34
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/msavin_jetsetter/client/dirtySession/create/main.js                                                    //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Template.JetSetter_create.events({                                                                                 // 1
    'click .JetSetter_row': function () {                                                                          // 2
        // Focus on input                                                                                          // 3
        window.setTimeout(function() {                                                                             // 4
            $(".JetSetter_editor_title").focus();                                                                  // 5
        }, 300);                                                                                                   // 6
                                                                                                                   // 7
    },                                                                                                             // 8
    'click .JetSetter_button_new': function () {                                                                   // 9
                                                                                                                   // 10
        // get values                                                                                              // 11
        var js_key    = $(".JetSetter_editor_title").val(),                                                        // 12
            js_value  = $(".JetSetter_editor_create").text(),                                                      // 13
            js_result = "jetsetter_empty_value";                                                                   // 14
                                                                                                                   // 15
        // ensure key has value                                                                                    // 16
        if (!js_key) {                                                                                             // 17
            alert("Please enter a Session key");                                                                   // 18
            return false;                                                                                          // 19
        }                                                                                                          // 20
                                                                                                                   // 21
        // convert string to json                                                                                  // 22
                                                                                                                   // 23
        try {                                                                                                      // 24
          js_result = JSON.parse(js_value);                                                                        // 25
        } catch (error) {                                                                                          // 26
          alert("There was an error with your input.");                                                            // 27
          return false;                                                                                            // 28
        }                                                                                                          // 29
                                                                                                                   // 30
        // run magic                                                                                               // 31
                                                                                                                   // 32
        if (js_result === "jetsetter_empty_value") {                                                               // 33
            // do nothing                                                                                          // 34
        } else {                                                                                                   // 35
            // set session                                                                                         // 36
            Session.set(js_key, js_result);                                                                        // 37
                                                                                                                   // 38
            // rerun key fetch to seem instant                                                                     // 39
            JetSetter.getKeys()                                                                                    // 40
                                                                                                                   // 41
            // reset inputs                                                                                        // 42
            $(".JetSetter_editor_title").val("")                                                                   // 43
            $(".JetSetter_editor_create").text("")                                                                 // 44
        }                                                                                                          // 45
                                                                                                                   // 46
    }                                                                                                              // 47
});                                                                                                                // 48
                                                                                                                   // 49
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['msavin:jetsetter'] = {}, {
  JetSetter: JetSetter
});

})();
