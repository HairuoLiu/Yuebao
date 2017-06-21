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
var MeteorToysDict, current, thing, DaData, colorized, MeteorToysGoTo, currentResult, nextResult, resultCount, lastResult, MeteorToys_Result, resultObject, ToyKit;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/meteortoys_result/client/template.main.js                                                    //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
                                                                                                         // 1
Template.__checkName("MeteorToys_result");                                                               // 2
Template["MeteorToys_result"] = new Template("Template.MeteorToys_result", (function() {                 // 3
  var view = this;                                                                                       // 4
  return Blaze._TemplateWith(function() {                                                                // 5
    return {                                                                                             // 6
      name: Spacebars.call("MeteorToys_result")                                                          // 7
    };                                                                                                   // 8
  }, function() {                                                                                        // 9
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                              // 10
      return [ "\n\t\t", Spacebars.include(view.lookupTemplate("MeteorToys_result_header")), "\n\t\t", Spacebars.include(view.lookupTemplate("MeteorToys_result_content")), "\n\t" ];
    });                                                                                                  // 12
  });                                                                                                    // 13
}));                                                                                                     // 14
                                                                                                         // 15
Template.__checkName("MeteorToys_result_header");                                                        // 16
Template["MeteorToys_result_header"] = new Template("Template.MeteorToys_result_header", (function() {   // 17
  var view = this;                                                                                       // 18
  return HTML.DIV({                                                                                      // 19
    class: "MeteorToys_result_header MeteorToys-background-overlay1"                                     // 20
  }, "\n\t\t", Blaze.If(function() {                                                                     // 21
    return Spacebars.call(view.lookup("hasData"));                                                       // 22
  }, function() {                                                                                        // 23
    return [ "\n\t\t", HTML.DIV({                                                                        // 24
      class: "MeteorToys_result_button MeteorToys_result_next MeteorToys_action"                         // 25
    }, HTML.CharRef({                                                                                    // 26
      html: "&rsaquo;",                                                                                  // 27
      str: "›"                                                                                           // 28
    })), "\n\t\t", HTML.DIV({                                                                            // 29
      class: "MeteorToys_result_button MeteorToys_result_prev MeteorToys_action"                         // 30
    }, HTML.CharRef({                                                                                    // 31
      html: "&lsaquo;",                                                                                  // 32
      str: "‹"                                                                                           // 33
    })), "\n\t\t" ];                                                                                     // 34
  }), "\n\t\t", HTML.DIV({                                                                               // 35
    class: "MeteorToys_name"                                                                             // 36
  }, HTML.Raw("<strong>Result</strong>"), " ", Blaze.If(function() {                                     // 37
    return Spacebars.call(view.lookup("hasData"));                                                       // 38
  }, function() {                                                                                        // 39
    return [ " ", Blaze.View("lookup:current", function() {                                              // 40
      return Spacebars.mustache(view.lookup("current"));                                                 // 41
    }), " of ", Blaze.View("lookup:total", function() {                                                  // 42
      return Spacebars.mustache(view.lookup("total"));                                                   // 43
    }) ];                                                                                                // 44
  })), "\n\t");                                                                                          // 45
}));                                                                                                     // 46
                                                                                                         // 47
Template.__checkName("MeteorToys_result_content");                                                       // 48
Template["MeteorToys_result_content"] = new Template("Template.MeteorToys_result_content", (function() {
  var view = this;                                                                                       // 50
  return HTML.DIV({                                                                                      // 51
    class: "MeteorToys_result_content"                                                                   // 52
  }, "\n", Blaze.If(function() {                                                                         // 53
    return Spacebars.call(view.lookup("content"));                                                       // 54
  }, function() {                                                                                        // 55
    return HTML.PRE(Blaze.View("lookup:content", function() {                                            // 56
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("content")));                              // 57
    }));                                                                                                 // 58
  }, function() {                                                                                        // 59
    return "\n\tWhen you execute code through the Shell or Method toy, if they return data, it will be displayed here.\n";
  }), "\n\t");                                                                                           // 61
}));                                                                                                     // 62
                                                                                                         // 63
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/meteortoys_result/client/main.js                                                             //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
var _0x6f56=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x69\x63\x74","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x63\x75\x72\x72\x65\x6E\x74\x52\x65\x73\x75\x6C\x74","\x73\x65\x74","\x67\x65\x74","\x66\x65\x74\x63\x68","\x66\x69\x6E\x64","\x52\x65\x73\x75\x6C\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x61\x74\x61","\x72\x65\x73\x75\x6C\x74","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x63\x6F\x6C\x6F\x72\x69\x7A\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x68\x65\x6C\x70\x65\x72\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x65\x73\x75\x6C\x74\x5F\x63\x6F\x6E\x74\x65\x6E\x74"];MeteorToysDict=Package[_0x6f56[1]][_0x6f56[0]];MeteorToysDict[_0x6f56[3]](_0x6f56[2],0);Template[_0x6f56[14]][_0x6f56[13]]({"\x63\x6F\x6E\x74\x65\x6E\x74":function(){current=MeteorToysDict[_0x6f56[4]](_0x6f56[2]);thing=Package[_0x6f56[1]][_0x6f56[8]][_0x6f56[7]][_0x6f56[6]]({},{sort:{"\x74\x69\x6D\x65\x73\x74\x61\x6D\x70":-1}})[_0x6f56[5]]()[current];if(thing){DaData=JSON[_0x6f56[10]](thing[_0x6f56[9]],null,2);colorized=Package[_0x6f56[1]][_0x6f56[12]][_0x6f56[11]](DaData);return colorized;};}});
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/meteortoys_result/client/header.js                                                           //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
var _0xffd8=["\x63\x75\x72\x72\x65\x6E\x74\x52\x65\x73\x75\x6C\x74","\x67\x65\x74","\x73\x65\x74","\x63\x6F\x75\x6E\x74","\x66\x69\x6E\x64","\x52\x65\x73\x75\x6C\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x61\x74\x61","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x6C\x61\x73\x74","\x70\x72\x65\x76","\x66\x69\x72\x73\x74","\x6E\x65\x78\x74","\x65\x76\x65\x6E\x74\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x65\x73\x75\x6C\x74\x5F\x68\x65\x61\x64\x65\x72","\x68\x65\x6C\x70\x65\x72\x73"];MeteorToysGoTo={"\x6E\x65\x78\x74":function(){currentResult=MeteorToysDict[_0xffd8[1]](_0xffd8[0])+1;nextResult=MeteorToysDict[_0xffd8[1]](_0xffd8[0])+1;MeteorToysDict[_0xffd8[2]](_0xffd8[0],nextResult);},"\x70\x72\x65\x76":function(){nextResult=MeteorToysDict[_0xffd8[1]](_0xffd8[0])-1;MeteorToysDict[_0xffd8[2]](_0xffd8[0],nextResult);},"\x66\x69\x72\x73\x74":function(){MeteorToysDict[_0xffd8[2]](_0xffd8[0],0)},"\x6C\x61\x73\x74":function(){resultCount=Package[_0xffd8[7]][_0xffd8[6]][_0xffd8[5]][_0xffd8[4]]()[_0xffd8[3]]();lastResult=resultCount-1;MeteorToysDict[_0xffd8[2]](_0xffd8[0],lastResult);}};Template[_0xffd8[13]][_0xffd8[12]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x65\x73\x75\x6C\x74\x5F\x70\x72\x65\x76":function(_0x17afx1,_0x17afx2){currentResult=MeteorToysDict[_0xffd8[1]](_0xffd8[0]);if(currentResult===0){MeteorToysGoTo[_0xffd8[8]]()}else {MeteorToysGoTo[_0xffd8[9]]()};},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x65\x73\x75\x6C\x74\x5F\x6E\x65\x78\x74":function(){resultCount=Package[_0xffd8[7]][_0xffd8[6]][_0xffd8[5]][_0xffd8[4]]()[_0xffd8[3]]();currentResult=MeteorToysDict[_0xffd8[1]](_0xffd8[0])+1;if(resultCount===currentResult){MeteorToysGoTo[_0xffd8[10]]()}else {MeteorToysGoTo[_0xffd8[11]]()};}});Template[_0xffd8[13]][_0xffd8[14]]({current:function(){currentResult=MeteorToysDict[_0xffd8[1]](_0xffd8[0])+1;return currentResult;},total:function(){resultCount=Package[_0xffd8[7]][_0xffd8[6]][_0xffd8[5]][_0xffd8[4]]()[_0xffd8[3]]();return resultCount;},"\x68\x61\x73\x44\x61\x74\x61":function(){resultCount=Package[_0xffd8[7]][_0xffd8[6]][_0xffd8[5]][_0xffd8[4]]()[_0xffd8[3]]();if(resultCount<=1){return false}else {return true};}});
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/meteortoys_result/client/function.js                                                         //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
var _0x9a4a=["\x69\x6E\x73\x65\x72\x74","\x52\x65\x73\x75\x6C\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x61\x74\x61","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x63\x6C\x69\x63\x6B","\x23\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x65\x73\x75\x6C\x74","\x63\x75\x72\x72\x65\x6E\x74\x52\x65\x73\x75\x6C\x74","\x73\x65\x74"];MeteorToys_Result={"\x69\x6E\x73\x65\x72\x74":function(_0x80c0x1){resultObject={"\x72\x65\x73\x75\x6C\x74":_0x80c0x1,"\x74\x69\x6D\x65\x73\x74\x61\x6D\x70": new Date()};Package[_0x9a4a[3]][_0x9a4a[2]][_0x9a4a[1]][_0x9a4a[0]](resultObject);$(_0x9a4a[5])[_0x9a4a[4]]();MeteorToysDict[_0x9a4a[7]](_0x9a4a[6],0);}};
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/meteortoys_result/config/config.js                                                           //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
ToyKit = {                                                                                               // 1
	name:     "Result",                                                                                     // 2
	version:  "1.0.0",                                                                                      // 3
	template: "MeteorToys_result",                                                                          // 4
	ToyKit:   "1.0.0"                                                                                       // 5
};                                                                                                       // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['meteortoys:result'] = {}, {
  MeteorToys_Result: MeteorToys_Result
});

})();
