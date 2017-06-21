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
var MeteorToysDict, MeteorToysGoTo, currentEmail, nextEmail, emailCount, lastEmail, resultCount, current, thing, doc, colorized, ToyKit, MeteorToys;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/meteortoys_email/client/template.main.js                                                   //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
                                                                                                       // 1
Template.__checkName("MeteorToys_email");                                                              // 2
Template["MeteorToys_email"] = new Template("Template.MeteorToys_email", (function() {                 // 3
  var view = this;                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                              // 5
    return {                                                                                           // 6
      name: Spacebars.call("MeteorToys_email")                                                         // 7
    };                                                                                                 // 8
  }, function() {                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                            // 10
      return [ "\n\t\t", Spacebars.include(view.lookupTemplate("MeteorToys_email_header")), "\n\t\t", Spacebars.include(view.lookupTemplate("MeteorToys_email_content")), "\n\t" ];
    });                                                                                                // 12
  });                                                                                                  // 13
}));                                                                                                   // 14
                                                                                                       // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/meteortoys_email/client/main.js                                                            //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
// JavaScript                                                                                          // 1
MeteorToysDict  = Package["meteortoys:toykit"].MeteorToysDict;                                         // 2
MeteorToysDict.set("currentEmail", 0);                                                                 // 3
                                                                                                       // 4
// Mark Emails as read                                                                                 // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/meteortoys_email/client/template.header.js                                                 //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
                                                                                                       // 1
Template.__checkName("MeteorToys_email_header");                                                       // 2
Template["MeteorToys_email_header"] = new Template("Template.MeteorToys_email_header", (function() {   // 3
  var view = this;                                                                                     // 4
  return HTML.DIV({                                                                                    // 5
    class: "MeteorToys_email_header MeteorToys-background-overlay1"                                    // 6
  }, "\n\t\t", Blaze.If(function() {                                                                   // 7
    return Spacebars.call(view.lookup("hasData"));                                                     // 8
  }, function() {                                                                                      // 9
    return [ "\n\t\t\t", HTML.DIV({                                                                    // 10
      class: "MeteorToys_email_button MeteorToys_email_next MeteorToys_action"                         // 11
    }, HTML.CharRef({                                                                                  // 12
      html: "&rsaquo;",                                                                                // 13
      str: "›"                                                                                         // 14
    })), "\n\t\t\t", HTML.DIV({                                                                        // 15
      class: "MeteorToys_email_button MeteorToys_email_prev MeteorToys_action"                         // 16
    }, HTML.CharRef({                                                                                  // 17
      html: "&lsaquo;",                                                                                // 18
      str: "‹"                                                                                         // 19
    })), "\n\t\t" ];                                                                                   // 20
  }), "\n\t\t", HTML.DIV({                                                                             // 21
    class: "MeteorToys_name"                                                                           // 22
  }, HTML.Raw("<strong>Email</strong>"), " ", Blaze.If(function() {                                    // 23
    return Spacebars.call(view.lookup("hasData"));                                                     // 24
  }, function() {                                                                                      // 25
    return [ Blaze.View("lookup:current", function() {                                                 // 26
      return Spacebars.mustache(view.lookup("current"));                                               // 27
    }), " of ", Blaze.View("lookup:total", function() {                                                // 28
      return Spacebars.mustache(view.lookup("total"));                                                 // 29
    }) ];                                                                                              // 30
  })), "\n\t");                                                                                        // 31
}));                                                                                                   // 32
                                                                                                       // 33
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/meteortoys_email/client/header.js                                                          //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
var _0x382b=["\x63\x75\x72\x72\x65\x6E\x74\x45\x6D\x61\x69\x6C","\x67\x65\x74","\x73\x65\x74","\x63\x6F\x75\x6E\x74","\x66\x69\x6E\x64","\x45\x6D\x61\x69\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x61\x74\x61","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x6C\x61\x73\x74","\x70\x72\x65\x76","\x66\x69\x72\x73\x74","\x6E\x65\x78\x74","\x65\x76\x65\x6E\x74\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x65\x6D\x61\x69\x6C\x5F\x68\x65\x61\x64\x65\x72","\x68\x65\x6C\x70\x65\x72\x73"];MeteorToysGoTo={"\x6E\x65\x78\x74":function(){currentEmail=MeteorToysDict[_0x382b[1]](_0x382b[0])+1;nextEmail=MeteorToysDict[_0x382b[1]](_0x382b[0])+1;MeteorToysDict[_0x382b[2]](_0x382b[0],nextEmail);},"\x70\x72\x65\x76":function(){nextEmail=MeteorToysDict[_0x382b[1]](_0x382b[0])-1;MeteorToysDict[_0x382b[2]](_0x382b[0],nextEmail);},"\x66\x69\x72\x73\x74":function(){MeteorToysDict[_0x382b[2]](_0x382b[0],0)},"\x6C\x61\x73\x74":function(){emailCount=Package[_0x382b[7]][_0x382b[6]][_0x382b[5]][_0x382b[4]]()[_0x382b[3]]();lastEmail=emailCount-1;MeteorToysDict[_0x382b[2]](_0x382b[0],lastEmail);}};Template[_0x382b[13]][_0x382b[12]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x65\x6D\x61\x69\x6C\x5F\x70\x72\x65\x76":function(_0x7dbex1,_0x7dbex2){currentEmail=MeteorToysDict[_0x382b[1]](_0x382b[0]);if(currentEmail===0){MeteorToysGoTo[_0x382b[8]]()}else {MeteorToysGoTo[_0x382b[9]]()};},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x65\x6D\x61\x69\x6C\x5F\x6E\x65\x78\x74":function(){emailCount=Package[_0x382b[7]][_0x382b[6]][_0x382b[5]][_0x382b[4]]()[_0x382b[3]]();currentEmail=MeteorToysDict[_0x382b[1]](_0x382b[0])+1;if(emailCount===currentEmail){MeteorToysGoTo[_0x382b[10]]()}else {MeteorToysGoTo[_0x382b[11]]()};}});Template[_0x382b[13]][_0x382b[14]]({current:function(){currentEmail=MeteorToysDict[_0x382b[1]](_0x382b[0])+1;return currentEmail;},total:function(){emailCount=Package[_0x382b[7]][_0x382b[6]][_0x382b[5]][_0x382b[4]]()[_0x382b[3]]();return emailCount;},hasData:function(){resultCount=Package[_0x382b[7]][_0x382b[6]][_0x382b[5]][_0x382b[4]]()[_0x382b[3]]();if(resultCount<=1){return false}else {return true};}});
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/meteortoys_email/client/template.content.js                                                //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
                                                                                                       // 1
Template.__checkName("MeteorToys_email_content");                                                      // 2
Template["MeteorToys_email_content"] = new Template("Template.MeteorToys_email_content", (function() {
  var view = this;                                                                                     // 4
  return HTML.DIV({                                                                                    // 5
    class: "MeteorToys_email_content"                                                                  // 6
  }, "\n", Blaze.If(function() {                                                                       // 7
    return Spacebars.call(view.lookup("content"));                                                     // 8
  }, function() {                                                                                      // 9
    return [ "\n", Spacebars.With(function() {                                                         // 10
      return Spacebars.call(view.lookup("content"));                                                   // 11
    }, function() {                                                                                    // 12
      return [ "\n\t", HTML.DIV({                                                                      // 13
        class: "MeteorToys_content"                                                                    // 14
      }, "\n\t\t", HTML.DIV({                                                                          // 15
        class: "MeteorToys_content_name"                                                               // 16
      }, "To "), "\n\t\t", HTML.DIV({                                                                  // 17
        class: "MeteorToys_content_content"                                                            // 18
      }, Blaze.View("lookup:to", function() {                                                          // 19
        return Spacebars.mustache(view.lookup("to"));                                                  // 20
      })), "\n\t"), "\n\t", HTML.DIV({                                                                 // 21
        class: "MeteorToys_content"                                                                    // 22
      }, "\n\t\t", HTML.DIV({                                                                          // 23
        class: "MeteorToys_content_name"                                                               // 24
      }, "From "), "\n\t\t", HTML.DIV({                                                                // 25
        class: "MeteorToys_content_content"                                                            // 26
      }, Blaze.View("lookup:from", function() {                                                        // 27
        return Spacebars.mustache(view.lookup("from"));                                                // 28
      })), "\n\t"), "\n\t", HTML.DIV({                                                                 // 29
        class: "MeteorToys_content"                                                                    // 30
      }, "\n\t\t", HTML.DIV({                                                                          // 31
        class: "MeteorToys_content_name"                                                               // 32
      }, "Subject "), "\n\t\t", HTML.DIV({                                                             // 33
        class: "MeteorToys_content_content"                                                            // 34
      }, Blaze.View("lookup:subject", function() {                                                     // 35
        return Spacebars.mustache(view.lookup("subject"));                                             // 36
      })), "\n\t"), "\n\t", HTML.DIV({                                                                 // 37
        class: "MeteorToys_content"                                                                    // 38
      }, "\n\t\t", HTML.DIV({                                                                          // 39
        class: "MeteorToys_content_name"                                                               // 40
      }, "Time "), "\n\t\t", HTML.DIV({                                                                // 41
        class: "MeteorToys_content_content"                                                            // 42
      }, Blaze.View("lookup:timestamp", function() {                                                   // 43
        return Spacebars.mustache(view.lookup("timestamp"));                                           // 44
      })), "\n\t"), "\n\t", HTML.DIV({                                                                 // 45
        class: "MeteorToys_content"                                                                    // 46
      }, "\n\t\t", HTML.DIV({                                                                          // 47
        class: "MeteorToys_content_name"                                                               // 48
      }, "Body "), "\n\t\t", HTML.DIV({                                                                // 49
        class: "MeteorToys_content_content"                                                            // 50
      }, Blaze.View("lookup:body", function() {                                                        // 51
        return Spacebars.mustache(view.lookup("body"));                                                // 52
      })), "\n\t"), "\n" ];                                                                            // 53
    }), "\n\t", HTML.Comment(" <pre>{{{content}}}</pre> "), "\n" ];                                    // 54
  }, function() {                                                                                      // 55
    return [ "\n\t", HTML.DIV({                                                                        // 56
      style: "padding: 5px 8px"                                                                        // 57
    }, "\n\t\tWhenever your application sends", HTML.BR(), "\n\t\tan email, it will be captured", HTML.BR(), "\n\t\tand displayed here.\n\t"), "\n" ];
  }), "\n\t");                                                                                         // 59
}));                                                                                                   // 60
                                                                                                       // 61
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/meteortoys_email/client/content.js                                                         //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
var _0x7377=["\x63\x75\x72\x72\x65\x6E\x74\x45\x6D\x61\x69\x6C","\x67\x65\x74","\x66\x69\x6E\x64","\x45\x6D\x61\x69\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x61\x74\x61","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x66\x65\x74\x63\x68","\x63\x6F\x75\x6E\x74","\x63\x6F\x6C\x6F\x72\x69\x7A\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4A\x53\x4F\x4E","\x68\x74\x6D\x6C","\x74\x65\x78\x74","\x74\x69\x6D\x65\x73\x74\x61\x6D\x70","\x74\x6F\x4C\x6F\x63\x61\x6C\x65\x54\x69\x6D\x65\x53\x74\x72\x69\x6E\x67","\x68\x65\x6C\x70\x65\x72\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x65\x6D\x61\x69\x6C\x5F\x63\x6F\x6E\x74\x65\x6E\x74"];Template[_0x7377[15]][_0x7377[14]]({"\x63\x6F\x6E\x74\x65\x6E\x74":function(){current=MeteorToysDict[_0x7377[1]](_0x7377[0]);thing=Package[_0x7377[5]][_0x7377[4]][_0x7377[3]][_0x7377[2]]({},{sort:{"\x74\x69\x6D\x65\x73\x74\x61\x6D\x70":-1}});doc=thing[_0x7377[6]]()[current];return doc;if(thing[_0x7377[7]]()===0){return false}else {colorized=Package[_0x7377[5]][_0x7377[9]][_0x7377[8]](doc);return colorized;};},"\x62\x6F\x64\x79":function(){current=MeteorToysDict[_0x7377[1]](_0x7377[0]);thing=Package[_0x7377[5]][_0x7377[4]][_0x7377[3]][_0x7377[2]]({},{sort:{"\x74\x69\x6D\x65\x73\x74\x61\x6D\x70":-1}});doc=thing[_0x7377[6]]()[current];if(doc[_0x7377[10]]){return doc[_0x7377[10]]}else {return doc[_0x7377[11]]};},"\x74\x69\x6D\x65\x73\x74\x61\x6D\x70":function(){var _0x5fa1x1=this[_0x7377[12]];return _0x5fa1x1[_0x7377[13]]();}});
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/meteortoys_email/config/config.js                                                          //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
var _0xcba3=["\x45\x6D\x61\x69\x6C","\x31\x2E\x30\x2E\x30","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x65\x6D\x61\x69\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x73\x74\x61\x72\x74\x75\x70"];ToyKit={name:_0xcba3[0],version:_0xcba3[1],template:_0xcba3[2],ToyKit:_0xcba3[1]};Meteor[_0xcba3[5]](function(){MeteorToys=Package[_0xcba3[4]][_0xcba3[3]]});
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:email'] = {};

})();
