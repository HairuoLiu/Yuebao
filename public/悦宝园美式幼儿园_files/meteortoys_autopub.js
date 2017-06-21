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
var MeteorToysDict, ToyKit;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/meteortoys_autopub/client/template.main.js                                                  //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
                                                                                                        // 1
Template.__checkName("MeteorToys_autopub");                                                             // 2
Template["MeteorToys_autopub"] = new Template("Template.MeteorToys_autopub", (function() {              // 3
  var view = this;                                                                                      // 4
  return HTML.DIV({                                                                                     // 5
    class: function() {                                                                                 // 6
      return [ "MeteorToys_orb MeteorToys_button ", Spacebars.mustache(view.lookup("autopub_state")) ];
    },                                                                                                  // 8
    id: "MeteorToys_autopub",                                                                           // 9
    oncontextmenu: "return false;"                                                                      // 10
  }, HTML.Raw('\t\n\t\t<div class="MeteorToys_icon"></div>\n\t\t<div class="MeteorToys_orb_filler_wrapper"></div>\n\t'));
}));                                                                                                    // 12
                                                                                                        // 13
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/meteortoys_autopub/client/main.js                                                           //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
var _0xd28c=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x69\x63\x74","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x63\x6F\x75\x6E\x74","\x66\x69\x6E\x64","\x41\x75\x74\x6F\x50\x75\x62","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x61\x74\x61","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x61\x75\x74\x6F\x70\x75\x62\x6C\x69\x73\x68\x5F\x70\x65\x72\x73\x69\x73\x74\x65\x6E\x74","\x73\x65\x74","\x61\x75\x74\x6F\x72\x75\x6E","\x67\x65\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x61\x75\x74\x6F\x70\x75\x62\x6C\x69\x73\x68\x5F\x69\x73\x6F\x6C\x61\x74\x65\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x61\x75\x74\x6F\x70\x75\x62\x6C\x69\x73\x68","\x63\x74\x72\x6C\x4B\x65\x79","\x6D\x65\x74\x61\x4B\x65\x79","\x73\x68\x69\x66\x74\x4B\x65\x79","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x66","\x54\x68\x65\x72\x65\x20\x68\x61\x73\x20\x62\x65\x65\x6E\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x20\x65\x6E\x61\x62\x6C\x69\x6E\x67\x20\x70\x65\x72\x73\x69\x73\x74\x65\x6E\x74\x20\x41\x75\x74\x6F\x50\x75\x62\x2E","\x63\x61\x6C\x6C","\x66\x6F\x63\x75\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x61\x75\x74\x6F\x70\x75\x62","\x54\x6F\x79\x4B\x69\x74","\x65\x76\x65\x6E\x74\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x41\x75\x74\x6F\x50\x75\x62\x5F\x70\x65\x72\x73\x69\x73\x74\x65\x6E\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x41\x75\x74\x6F\x50\x75\x62\x5F\x61\x63\x74\x69\x76\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x41\x75\x74\x6F\x50\x75\x62","\x68\x65\x6C\x70\x65\x72\x73"];MeteorToysDict=Package[_0xd28c[1]][_0xd28c[0]];Tracker[_0xd28c[8]](function(){if(Package[_0xd28c[1]][_0xd28c[5]][_0xd28c[4]][_0xd28c[3]]()[_0xd28c[2]]()===1){MeteorToysDict[_0xd28c[7]](_0xd28c[6],true)}else {MeteorToysDict[_0xd28c[7]](_0xd28c[6],false)}});Tracker[_0xd28c[8]](function(){var _0x3501x1=MeteorToysDict[_0xd28c[9]](_0xd28c[6]);var _0x3501x2=MeteorToysDict[_0xd28c[9]](_0xd28c[10]);if(_0x3501x1){MeteorToysDict[_0xd28c[7]](_0xd28c[11],true)}else {if(_0x3501x2){MeteorToysDict[_0xd28c[7]](_0xd28c[11],true)}else {MeteorToysDict[_0xd28c[7]](_0xd28c[11],false)}};});Template[_0xd28c[19]][_0xd28c[21]]({"\x63\x6C\x69\x63\x6B":function(_0x3501x3,_0x3501x4){if(_0x3501x3[_0xd28c[12]]||_0x3501x3[_0xd28c[13]]||_0x3501x3[_0xd28c[14]]){Meteor[_0xd28c[17]](_0xd28c[15],function(_0x3501x3,_0x3501x5){if(_0x3501x3){alert(_0xd28c[16])}})}else {if(MeteorToysDict[_0xd28c[9]](_0xd28c[10])){MeteorToysDict[_0xd28c[7]](_0xd28c[10],false)}else {MeteorToysDict[_0xd28c[7]](_0xd28c[10],true)}}},"\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72":function(){Package[_0xd28c[1]][_0xd28c[20]][_0xd28c[7]](_0xd28c[18],_0xd28c[19])},"\x6D\x6F\x75\x73\x65\x6F\x75\x74":function(){Package[_0xd28c[1]][_0xd28c[20]][_0xd28c[7]](_0xd28c[18])}});Template[_0xd28c[19]][_0xd28c[25]]({autopub_state:function(){if(MeteorToysDict[_0xd28c[9]](_0xd28c[6])){return _0xd28c[22]}else {if(MeteorToysDict[_0xd28c[9]](_0xd28c[10])){return _0xd28c[23]}else {return _0xd28c[24]}}}});
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/meteortoys_autopub/config/config.js                                                         //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
var _0xcc3f=["\x41\x75\x74\x6F\x50\x75\x62","\x31\x2E\x30\x2E\x30","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x61\x75\x74\x6F\x70\x75\x62"];ToyKit={name:_0xcc3f[0],version:_0xcc3f[1],template:_0xcc3f[2],ToyKit:_0xcc3f[1]};
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:autopub'] = {};

})();
