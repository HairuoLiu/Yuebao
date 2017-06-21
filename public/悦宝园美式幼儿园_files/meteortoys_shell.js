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
var Thing, ToyKit;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/meteortoys_shell/client/template.main.js                                                   //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
                                                                                                       // 1
Template.__checkName("MeteorToys_shell");                                                              // 2
Template["MeteorToys_shell"] = new Template("Template.MeteorToys_shell", (function() {                 // 3
  var view = this;                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                              // 5
    return {                                                                                           // 6
      name: Spacebars.call("MeteorToys_shell")                                                         // 7
    };                                                                                                 // 8
  }, function() {                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                            // 10
      return [ "\n\t\t", Spacebars.include(view.lookupTemplate("MeteorToys_shell_header")), "\n\t\t", Spacebars.include(view.lookupTemplate("MeteorToys_shell_content")), "\n\t" ];
    });                                                                                                // 12
  });                                                                                                  // 13
}));                                                                                                   // 14
                                                                                                       // 15
Template.__checkName("MeteorToys_shell_header");                                                       // 16
Template["MeteorToys_shell_header"] = new Template("Template.MeteorToys_shell_header", (function() {   // 17
  var view = this;                                                                                     // 18
  return HTML.Raw('<div class="MeteorToys_shell_header MeteorToys-background-overlay1">\n\t\t<div class="MeteorToys_shell_button">Run</div>\n\t\t<div class="MeteorToys_name"><strong>Shell</strong></div>\n\t</div>');
}));                                                                                                   // 20
                                                                                                       // 21
Template.__checkName("MeteorToys_shell_content");                                                      // 22
Template["MeteorToys_shell_content"] = new Template("Template.MeteorToys_shell_content", (function() {
  var view = this;                                                                                     // 24
  return HTML.DIV({                                                                                    // 25
    class: "MeteorToys_shell_content"                                                                  // 26
  }, "\n\t\t", Spacebars.include(view.lookupTemplate("MeteorToys_shell_input")), "\n\t");              // 27
}));                                                                                                   // 28
                                                                                                       // 29
Template.__checkName("MeteorToys_shell_input");                                                        // 30
Template["MeteorToys_shell_input"] = new Template("Template.MeteorToys_shell_input", (function() {     // 31
  var view = this;                                                                                     // 32
  return HTML.TEXTAREA({                                                                               // 33
    id: "MeteorToys_shell_input",                                                                      // 34
    tabindex: "-1",                                                                                    // 35
    placeholder: "Enter code here to run it as a method. Results will appear in console."              // 36
  });                                                                                                  // 37
}));                                                                                                   // 38
                                                                                                       // 39
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/meteortoys_shell/client/main.js                                                            //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
var _0x766b=["\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x76\x61\x6C","\x23\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x68\x65\x6C\x6C\x5F\x69\x6E\x70\x75\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72","\x54\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x2E","\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D","\x6C\x6F\x67","\x53\x68\x65\x6C\x6C\x20\x45\x72\x72\x6F\x72","\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x20\x72\x61\x6E\x20\x74\x68\x65\x20\x66\x6F\x6C\x6C\x6F\x77\x69\x6E\x67\x20\x6D\x65\x74\x68\x6F\x64\x3A","\x4D\x65\x74\x68\x6F\x64\x20\x3D\x20\x66\x75\x6E\x63\x74\x69\x6F\x6E\x20\x28\x29\x20\x7B\x20\x0A","\x0A\x7D","\x54\x68\x65\x20\x72\x65\x73\x75\x6C\x74\x73\x20\x61\x72\x65","","\x69\x6E\x73\x65\x72\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x52\x65\x73\x75\x6C\x74","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x72\x65\x73\x75\x6C\x74","\x63\x61\x6C\x6C","\x65\x76\x65\x6E\x74\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x68\x65\x6C\x6C\x5F\x68\x65\x61\x64\x65\x72","\x54\x6F\x79\x4B\x69\x74","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x63\x75\x72\x72\x65\x6E\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x68\x65\x6C\x6C","\x65\x71\x75\x61\x6C\x73","\x66\x6F\x63\x75\x73","\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74","\x61\x75\x74\x6F\x72\x75\x6E"];Template[_0x766b[18]][_0x766b[17]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x68\x65\x6C\x6C\x5F\x62\x75\x74\x74\x6F\x6E":function(_0xec47x1,_0xec47x2){_0xec47x1[_0x766b[0]]();var _0xec47x3=String($(_0x766b[2])[_0x766b[1]]());Meteor[_0x766b[16]](_0x766b[3],_0xec47x3,function(_0xec47x1,_0xec47x4){if(_0xec47x1){alert(_0x766b[4]);console[_0x766b[6]](_0x766b[5]);console[_0x766b[6]](_0x766b[7]);console[_0x766b[6]](_0xec47x1);console[_0x766b[6]](_0x766b[5]);}else {console[_0x766b[6]](_0x766b[5]);console[_0x766b[6]](_0x766b[8]);console[_0x766b[6]](_0x766b[9]+_0xec47x3+_0x766b[10]);console[_0x766b[6]](_0x766b[11]);console[_0x766b[6]](_0xec47x4);console[_0x766b[6]](_0x766b[5]);$(_0x766b[2])[_0x766b[1]](_0x766b[12]);Package[_0x766b[15]][_0x766b[14]][_0x766b[13]](_0xec47x4);}});}});Tracker[_0x766b[26]](function(){Thing=Package[_0x766b[20]][_0x766b[19]];if(Thing[_0x766b[23]](_0x766b[21],_0x766b[22])){window[_0x766b[25]](function(){$(_0x766b[2])[_0x766b[24]]()},300)};});
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/meteortoys_shell/config/config.js                                                          //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
var _0x1f7f=["\x53\x68\x65\x6C\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x68\x65\x6C\x6C","\x6F\x72\x62"];ToyKit={name:_0x1f7f[0],template:_0x1f7f[1],type:_0x1f7f[2]};
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:shell'] = {};

})();
