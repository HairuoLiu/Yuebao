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
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MeteorToysDict, ToyKit, _0xb817x1, MeteorToys;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// packages/meteortoys_throttle/client/template.main.js                                      //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
                                                                                             // 1
Template.__checkName("MeteorToys_throttle");                                                 // 2
Template["MeteorToys_throttle"] = new Template("Template.MeteorToys_throttle", (function() {
  var view = this;                                                                           // 4
  return HTML.DIV({                                                                          // 5
    class: "MeteorToys_orb  MeteorToys_button MeteorToys_Throttle",                          // 6
    id: "MeteorToys_throttle",                                                               // 7
    oncontextmenu: "return false;"                                                           // 8
  }, "\t\n\t\t", HTML.DIV({                                                                  // 9
    class: function() {                                                                      // 10
      return [ "MeteorToys_icon ", Spacebars.mustache(view.lookup("icon_type")) ];           // 11
    }                                                                                        // 12
  }), HTML.Raw('\n\t\t<div class="MeteorToys_orb_filler_wrapper"></div>\n\t'));              // 13
}));                                                                                         // 14
                                                                                             // 15
///////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// packages/meteortoys_throttle/client/main.js                                               //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
var _0x88d7=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x69\x63\x74","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x71","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x20\x45\x72\x72\x6F\x72","\x6C\x6F\x67","\x54\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x20\x61\x63\x74\x69\x76\x61\x74\x69\x6E\x67\x20\x54\x68\x72\x6F\x74\x74\x6C\x65\x2E\x20\x50\x6C\x65\x61\x73\x65\x20\x73\x65\x65\x20\x63\x6F\x6E\x73\x6F\x6C\x65\x20\x66\x6F\x72\x20\x74\x68\x65\x20\x4D\x65\x74\x65\x6F\x72\x20\x65\x72\x72\x6F\x72\x2E","\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x54\x68\x72\x6F\x74\x74\x6C\x65\x20\x68\x61\x73\x20\x62\x65\x65\x6E\x20\x74\x6F\x67\x67\x6C\x65\x64\x2E\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x3C\x62\x72\x3E\x20\x50\x6C\x65\x61\x73\x65\x20\x6E\x6F\x74\x65\x20\x79\x6F\x75\x20\x6D\x75\x73\x74\x20\x72\x65\x73\x74\x61\x72\x74\x20\x74\x68\x65\x20\x4D\x65\x74\x65\x6F\x72\x20\x73\x65\x72\x76\x65\x72\x20\x66\x6F\x72\x20\x74\x68\x65\x20\x63\x68\x61\x6E\x67\x65\x20\x74\x6F\x20\x74\x61\x6B\x65\x20\x65\x66\x66\x65\x63\x74\x2E","\x63\x6F\x75\x6E\x74\x65\x72","\x63\x61\x6C\x6C","\x66\x6F\x63\x75\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x74\x68\x72\x6F\x74\x74\x6C\x65","\x73\x65\x74","\x54\x6F\x79\x4B\x69\x74","\x65\x76\x65\x6E\x74\x73","\x66\x69\x6E\x64\x4F\x6E\x65","\x54\x68\x72\x6F\x74\x74\x6C\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x61\x74\x61","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x74\x68\x72\x6F\x74\x74\x6C\x65\x5F\x65\x6E\x61\x62\x6C\x65\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x74\x68\x72\x6F\x74\x74\x6C\x65\x5F\x64\x69\x73\x61\x62\x6C\x65\x64","\x68\x65\x6C\x70\x65\x72\x73"];MeteorToysDict=Package[_0x88d7[1]][_0x88d7[0]];Template[_0x88d7[10]][_0x88d7[13]]({"\x63\x6C\x69\x63\x6B":function(_0xa33cx1,_0xa33cx2){Meteor[_0x88d7[8]](_0x88d7[2],function(_0xa33cx1,_0xa33cx3){if(_0xa33cx1){console[_0x88d7[4]](_0x88d7[3]);console[_0x88d7[4]](_0xa33cx1);Package[_0x88d7[1]].Note(_0x88d7[5]);}else {Package[_0x88d7[1]].Note(_0x88d7[6],_0x88d7[7])}})},"\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72":function(){Package[_0x88d7[1]][_0x88d7[12]][_0x88d7[11]](_0x88d7[9],_0x88d7[10])},"\x6D\x6F\x75\x73\x65\x6F\x75\x74":function(){Package[_0x88d7[1]][_0x88d7[12]][_0x88d7[11]](_0x88d7[9])}});Template[_0x88d7[10]][_0x88d7[19]]({"\x69\x63\x6F\x6E\x5F\x74\x79\x70\x65":function(){if(Package[_0x88d7[1]][_0x88d7[16]][_0x88d7[15]][_0x88d7[14]]()){return _0x88d7[17]}else {return _0x88d7[18]}}});
///////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// packages/meteortoys_throttle/config/config.js                                             //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
var _0xd6d6=["\x54\x68\x72\x6F\x74\x74\x6C\x65","\x31\x2E\x30\x2E\x30","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x74\x68\x72\x6F\x74\x74\x6C\x65","\x63\x61\x6C\x6C","\x73\x6C\x69\x63\x65","\x61\x70\x70\x6C\x79","\x73\x65\x72\x76\x65\x72","\x73\x74\x72\x65\x61\x6D\x5F\x73\x65\x72\x76\x65\x72","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x77\x72\x69\x74\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x73\x74\x61\x72\x74\x75\x70"];ToyKit={name:_0xd6d6[0],version:_0xd6d6[1],template:_0xd6d6[2],ToyKit:_0xd6d6[1],onStartup:function(){_0xb817x1=function _0xb817x1(_0xb817x2,_0xb817x3,_0xb817x4){var _0xb817x5=_0xb817x2[_0xb817x3];_0xb817x2[_0xb817x3]=function(){var _0xb817x6=[][_0xd6d6[4]][_0xd6d6[3]](arguments);var _0xb817x7=this;_0xb817x4[_0xd6d6[3]](_0xb817x7,_0xb817x6,function(_0xb817x8){_0xb817x5[_0xd6d6[5]](_0xb817x7,_0xb817x8||_0xb817x6)});};};_0xb817x1(Meteor[_0xd6d6[6]][_0xd6d6[7]][_0xd6d6[6]]._events,_0xd6d6[8],function(_0xb817x6,_0xb817x9){_0xb817x1(_0xb817x6[0],_0xd6d6[9],function(_0xb817x6,_0xb817x9){setTimeout(_0xb817x9,1000)});_0xb817x9();});}};Meteor[_0xd6d6[12]](function(){MeteorToys=Package[_0xd6d6[11]][_0xd6d6[10]]});
///////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:throttle'] = {};

})();
