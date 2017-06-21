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
var Mongo = Package.mongo.Mongo;
var Accounts = Package['accounts-base'].Accounts;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MeteorToys, userId, ToyKit;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/meteortoys_authenticate/client/template.main.js                                                  //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
                                                                                                             // 1
Template.__checkName("MeteorToys_accounts");                                                                 // 2
Template["MeteorToys_accounts"] = new Template("Template.MeteorToys_accounts", (function() {                 // 3
  var view = this;                                                                                           // 4
  return Blaze._TemplateWith(function() {                                                                    // 5
    return {                                                                                                 // 6
      name: Spacebars.call("MeteorToys_accounts")                                                            // 7
    };                                                                                                       // 8
  }, function() {                                                                                            // 9
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                                  // 10
      return [ "\n\t\t", Spacebars.include(view.lookupTemplate("MeteorToys_accounts_header")), "\n\t\t", Spacebars.include(view.lookupTemplate("MeteorToys_accounts_content")), "\n\t" ];
    });                                                                                                      // 12
  });                                                                                                        // 13
}));                                                                                                         // 14
                                                                                                             // 15
Template.__checkName("MeteorToys_accounts_header");                                                          // 16
Template["MeteorToys_accounts_header"] = new Template("Template.MeteorToys_accounts_header", (function() {   // 17
  var view = this;                                                                                           // 18
  return HTML.DIV({                                                                                          // 19
    class: "MeteorToys_accounts_header MeteorToys-background-overlay1"                                       // 20
  }, "\n\t\t", Blaze.If(function() {                                                                         // 21
    return Spacebars.call(view.lookup("currentUser"));                                                       // 22
  }, function() {                                                                                            // 23
    return [ "\n\t\t\t", HTML.DIV({                                                                          // 24
      class: "MeteorToys_sub_button MeteorToys_action"                                                       // 25
    }, "Temporary Logout"), "\n\t\t" ];                                                                      // 26
  }), HTML.Raw('\n\t\t<div class="MeteorToys_name"><strong>Authenticate</strong></div>\n\t'));               // 27
}));                                                                                                         // 28
                                                                                                             // 29
Template.__checkName("MeteorToys_accounts_content");                                                         // 30
Template["MeteorToys_accounts_content"] = new Template("Template.MeteorToys_accounts_content", (function() {
  var view = this;                                                                                           // 32
  return HTML.DIV({                                                                                          // 33
    class: "MeteorToys_accounts_content"                                                                     // 34
  }, "\n\t\t", Blaze.Each(function() {                                                                       // 35
    return Spacebars.call(view.lookup("account"));                                                           // 36
  }, function() {                                                                                            // 37
    return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("MeteorToys_accounts_account")), "\n\t\t" ];  // 38
  }, function() {                                                                                            // 39
    return [ "\n\t\t\t", HTML.DIV({                                                                          // 40
      style: "padding-top: 4px"                                                                              // 41
    }, "\n\t\t\t\tWhen you sign in or sign up an account, they will be displayed here. Then, you will be able to authenticate as it  with just a click.\n\t\t\t"), "\n\t\t" ];
  }), "\n\t");                                                                                               // 43
}));                                                                                                         // 44
                                                                                                             // 45
Template.__checkName("MeteorToys_accounts_account");                                                         // 46
Template["MeteorToys_accounts_account"] = new Template("Template.MeteorToys_accounts_account", (function() {
  var view = this;                                                                                           // 48
  return HTML.DIV({                                                                                          // 49
    class: function() {                                                                                      // 50
      return [ "MeteorToys_row MeteorToys_row_hoverable ", Spacebars.mustache(view.lookup("active")) ];      // 51
    }                                                                                                        // 52
  }, "\n\t\t", Blaze.If(function() {                                                                         // 53
    return Spacebars.call(view.lookup("active"));                                                            // 54
  }, function() {                                                                                            // 55
    return [ "\n\t\t\t", HTML.DIV({                                                                          // 56
      class: "MeteorToys_impersonate_check MeteorToys-background-green"                                      // 57
    }, "\n\t\t\t"), "\n\t\t" ];                                                                              // 58
  }), "\n\t\t", Blaze.View("lookup:identifier", function() {                                                 // 59
    return Spacebars.mustache(view.lookup("identifier"));                                                    // 60
  }), HTML.Raw("<br>\n\t\t_id: "), Blaze.View("lookup:userID", function() {                                  // 61
    return Spacebars.mustache(view.lookup("userID"));                                                        // 62
  }), HTML.Raw("<br>\n\t"));                                                                                 // 63
}));                                                                                                         // 64
                                                                                                             // 65
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/meteortoys_authenticate/client/main.js                                                           //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
// Todo                                                                                                      // 1
// - Switch to Tracker                                                                                       // 2
// - Fix document not loaded case                                                                            // 3
                                                                                                             // 4
                                                                                                             // 5
MeteorToys = Package["meteortoys:toykit"].MeteorToys;                                                        // 6
                                                                                                             // 7
Template.MeteorToys_accounts_content.events({                                                                // 8
	'click .MeteorToys_row': function () {                                                                      // 9
		MeteorToys.set("MeteorToys_impersonate", false);                                                           // 10
		MeteorToys.set("MeteorToys_impersonate", this.userID);                                                     // 11
		MeteorToys.set("MeteorToys_current", null);                                                                // 12
		Package["meteortoys:toykit"].ToyKit.set("focus");                                                          // 13
	},                                                                                                          // 14
});                                                                                                          // 15
                                                                                                             // 16
Template.MeteorToys_accounts_header.events({                                                                 // 17
	'click .MeteorToys_sub_button': function () {                                                               // 18
		Meteor.connection.setUserId();                                                                             // 19
	}                                                                                                           // 20
});                                                                                                          // 21
Template.MeteorToys_accounts_content.helpers({                                                               // 22
	account: function () {                                                                                      // 23
		return Package["meteortoys:toykit"].MeteorToysData.Impersonate.find({}, {sort: {date: -1}});               // 24
	}                                                                                                           // 25
});                                                                                                          // 26
                                                                                                             // 27
Tracker.autorun(function () {                                                                                // 28
	                                                                                                            // 29
	userId = MeteorToys.get("MeteorToys_impersonate");                                                          // 30
	                                                                                                            // 31
	if (userId) {                                                                                               // 32
		Meteor.call("MeteorToys_i", userId, function (e,r) {                                                       // 33
			if (!e) {                                                                                                 // 34
				Meteor.connection.setUserId(userId);                                                                     // 35
				MeteorToys.closeToy();                                                                                   // 36
			}                                                                                                         // 37
		});                                                                                                        // 38
	}                                                                                                           // 39
});                                                                                                          // 40
                                                                                                             // 41
Accounts.onLogin(function () {                                                                               // 42
	window.setTimeout(function() {                                                                              // 43
		Meteor.call("MeteorToys_ia", function (e, r) {                                                             // 44
		});                                                                                                        // 45
	}, 2000);                                                                                                   // 46
});                                                                                                          // 47
                                                                                                             // 48
// Accounts.onLogout(function () {                                                                           // 49
// 	window.setTimeout(function() {                                                                           // 50
// 		Meteor.call("MeteorToys_impersonate_account", function (e, r) {                                         // 51
// 		});                                                                                                     // 52
// 	}, 2000);                                                                                                // 53
// });                                                                                                       // 54
                                                                                                             // 55
Template.MeteorToys_accounts_account.helpers({                                                               // 56
	active: function () {                                                                                       // 57
		if (MeteorToys.equals("MeteorToys_impersonate", this.userID) && Meteor.userId() === this.userID) {         // 58
			return true                                                                                               // 59
		}                                                                                                          // 60
	}                                                                                                           // 61
});                                                                                                          // 62
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/meteortoys_authenticate/config/config.js                                                         //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _0xc334=["\x41\x75\x74\x68\x65\x6E\x74\x69\x63\x61\x74\x65","\x31\x2E\x30\x2E\x30","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x61\x63\x63\x6F\x75\x6E\x74\x73"];ToyKit={name:_0xc334[0],version:_0xc334[1],template:_0xc334[2],ToyKit:_0xc334[1]};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:authenticate'] = {};

})();
