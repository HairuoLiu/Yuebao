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
var Mongo = Package.mongo.Mongo;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MeteorToysDict, ToyKit, MeteorToys;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/meteortoys_status/client/template.main.js                                    //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
                                                                                         // 1
Template.__checkName("MeteorToys_status");                                               // 2
Template["MeteorToys_status"] = new Template("Template.MeteorToys_status", (function() {
  var view = this;                                                                       // 4
  return HTML.DIV({                                                                      // 5
    class: "MeteorToys_orb MeteorToys_button",                                           // 6
    id: "MeteorToys_status",                                                             // 7
    oncontextmenu: "return false;"                                                       // 8
  }, "\t\n\t\t", Blaze.If(function() {                                                   // 9
    return Spacebars.call(view.lookup("online"));                                        // 10
  }, function() {                                                                        // 11
    return [ "\n\t\t\t", HTML.DIV({                                                      // 12
      class: "MeteorToys_icon MeteorToys_icon_online"                                    // 13
    }), "\n\t\t" ];                                                                      // 14
  }), "\n\t\t", Blaze.If(function() {                                                    // 15
    return Spacebars.call(view.lookup("connecting"));                                    // 16
  }, function() {                                                                        // 17
    return [ "\n\t\t\t", HTML.DIV({                                                      // 18
      class: "MeteorToys_icon MeteorToys_icon_connecting"                                // 19
    }), "\n\t\t" ];                                                                      // 20
  }), "\n\t\t", Blaze.If(function() {                                                    // 21
    return Spacebars.call(view.lookup("offline"));                                       // 22
  }, function() {                                                                        // 23
    return [ "\n\t\t\t", HTML.DIV({                                                      // 24
      class: "MeteorToys_icon MeteorToys_icon_offline"                                   // 25
    }), "\n\t\t" ];                                                                      // 26
  }), HTML.Raw('\n\t\t<div class="MeteorToys_orb_filler_wrapper"></div>\n\t'));          // 27
}));                                                                                     // 28
                                                                                         // 29
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/meteortoys_status/client/main.js                                             //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
var _0x2436=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x69\x63\x74","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x63\x6F\x6E\x6E\x65\x63\x74\x65\x64","\x73\x74\x61\x74\x75\x73","\x64\x69\x73\x63\x6F\x6E\x6E\x65\x63\x74","\x72\x65\x63\x6F\x6E\x6E\x65\x63\x74","\x66\x6F\x63\x75\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x74\x61\x74\x75\x73","\x73\x65\x74","\x54\x6F\x79\x4B\x69\x74","\x65\x76\x65\x6E\x74\x73","\x6F\x66\x66\x6C\x69\x6E\x65","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6E\x67","\x68\x65\x6C\x70\x65\x72\x73"];MeteorToysDict=Package[_0x2436[1]][_0x2436[0]];Template[_0x2436[7]][_0x2436[10]]({"\x63\x6C\x69\x63\x6B":function(_0xaa9ax1,_0xaa9ax2){if(Meteor[_0x2436[3]]()[_0x2436[2]]){Meteor[_0x2436[4]]()}else {Meteor[_0x2436[5]]()}},"\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72":function(){Package[_0x2436[1]][_0x2436[9]][_0x2436[8]](_0x2436[6],_0x2436[7])},"\x6D\x6F\x75\x73\x65\x6F\x75\x74":function(){Package[_0x2436[1]][_0x2436[9]][_0x2436[8]](_0x2436[6])}});Template[_0x2436[7]][_0x2436[13]]({online:function(){if(Meteor[_0x2436[3]]()[_0x2436[3]]===_0x2436[2]){return true}},offline:function(){if(Meteor[_0x2436[3]]()[_0x2436[3]]===_0x2436[11]){return true}},connecting:function(){if(Meteor[_0x2436[3]]()[_0x2436[3]]===_0x2436[12]){return true}}});
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/meteortoys_status/config/config.js                                           //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
var _0x33ef=["\x53\x74\x61\x74\x75\x73","\x31\x2E\x30\x2E\x30","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x74\x61\x74\x75\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x73\x74\x61\x72\x74\x75\x70"];ToyKit={name:_0x33ef[0],version:_0x33ef[1],template:_0x33ef[2],ToyKit:_0x33ef[1]};Meteor[_0x33ef[5]](function(){MeteorToys=Package[_0x33ef[4]][_0x33ef[3]]});
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:status'] = {};

})();
