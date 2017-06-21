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
var MeteorToysDict, MeteorToys_Sub, p, displayStatus, ToyKit, MeteorToys;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/meteortoys_sub/client/template.main.js                                                             //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
                                                                                                               // 1
Template.__checkName("MeteorToys_pubsub");                                                                     // 2
Template["MeteorToys_pubsub"] = new Template("Template.MeteorToys_pubsub", (function() {                       // 3
  var view = this;                                                                                             // 4
  return Blaze._TemplateWith(function() {                                                                      // 5
    return {                                                                                                   // 6
      name: Spacebars.call("MeteorToys_pubsub")                                                                // 7
    };                                                                                                         // 8
  }, function() {                                                                                              // 9
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                                    // 10
      return [ "\n\t\t", Blaze.Unless(function() {                                                             // 11
        return Spacebars.call(view.lookup("editing"));                                                         // 12
      }, function() {                                                                                          // 13
        return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("MeteorToys_pubsub_header")), "\n\t\t\t", Spacebars.include(view.lookupTemplate("MeteorToys_pubsub_content")), "\n\t\t" ];
      }, function() {                                                                                          // 15
        return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("MeteorToys_pubsub_new_header")), "\n\t\t\t", Spacebars.include(view.lookupTemplate("MeteorToys_pubsub_new")), "\n\t\t" ];
      }), "\n\t" ];                                                                                            // 17
    });                                                                                                        // 18
  });                                                                                                          // 19
}));                                                                                                           // 20
                                                                                                               // 21
Template.__checkName("MeteorToys_pubsub_header");                                                              // 22
Template["MeteorToys_pubsub_header"] = new Template("Template.MeteorToys_pubsub_header", (function() {         // 23
  var view = this;                                                                                             // 24
  return HTML.Raw('<div class="MeteorToys_pubsub_header MeteorToys-background-overlay1">\n\t\t<!-- <div class="MeteorToys_pubsub_button">New</div> -->\n\t\t<div class="MeteorToys_name"><strong>Subscriptions</strong></div>\n\t</div>');
}));                                                                                                           // 26
                                                                                                               // 27
Template.__checkName("MeteorToys_pubsub_new_header");                                                          // 28
Template["MeteorToys_pubsub_new_header"] = new Template("Template.MeteorToys_pubsub_new_header", (function() {
  var view = this;                                                                                             // 30
  return HTML.Raw('<div class="MeteorToys_pubsub_header">\n\t\t<div class="MeteorToys_pubsub_button">Cancel</div>\n\t\t<div class="MeteorToys_name"><strong>Create New Subscription</strong></div>\n\t</div>');
}));                                                                                                           // 32
                                                                                                               // 33
Template.__checkName("MeteorToys_pubsub_content");                                                             // 34
Template["MeteorToys_pubsub_content"] = new Template("Template.MeteorToys_pubsub_content", (function() {       // 35
  var view = this;                                                                                             // 36
  return HTML.DIV({                                                                                            // 37
    class: "MeteorToys_pubsub_content"                                                                         // 38
  }, "\n\t\t", Blaze.Each(function() {                                                                         // 39
    return Spacebars.call(view.lookup("subscription"));                                                        // 40
  }, function() {                                                                                              // 41
    return [ "\n\t\t\t", HTML.DIV({                                                                            // 42
      class: "MeteorToys_row "                                                                                 // 43
    }, "\n\t\t\t\t", HTML.DIV({                                                                                // 44
      class: function() {                                                                                      // 45
        return [ "MeteorToys_pubsub_row_toggle MeteorToys_pubsub_row_toggle_", Spacebars.mustache(view.lookup("name")) ];
      }                                                                                                        // 47
    }, HTML.CharRef({                                                                                          // 48
      html: "&times;",                                                                                         // 49
      str: "×"                                                                                                 // 50
    })), "\n\t\t\t\t", HTML.DIV({                                                                              // 51
      class: "MeteorToys_pubsub_row_name"                                                                      // 52
    }, Blaze.View("lookup:name", function() {                                                                  // 53
      return Spacebars.mustache(view.lookup("name"));                                                          // 54
    })), "\n\t\t\t\t", Blaze.If(function() {                                                                   // 55
      return Spacebars.call(view.lookup("parameters"));                                                        // 56
    }, function() {                                                                                            // 57
      return [ "\n\t\t\t\t\tParams: ", Blaze.View("lookup:parameters", function() {                            // 58
        return Spacebars.mustache(view.lookup("parameters"));                                                  // 59
      }), "\n\t\t\t\t" ];                                                                                      // 60
    }, function() {                                                                                            // 61
      return "\n\t\t\t\t\tNo Parameters\n\t\t\t\t";                                                            // 62
    }), "\n\t\t\t"), "\n\t\t" ];                                                                               // 63
  }, function() {                                                                                              // 64
    return [ "\n\t\t\t", HTML.DIV({                                                                            // 65
      style: "padding-top: 4px"                                                                                // 66
    }, "No subscriptions available"), "\n\t\t" ];                                                              // 67
  }), "\n\t");                                                                                                 // 68
}));                                                                                                           // 69
                                                                                                               // 70
Template.__checkName("MeteorToys_pubsub_new");                                                                 // 71
Template["MeteorToys_pubsub_new"] = new Template("Template.MeteorToys_pubsub_new", (function() {               // 72
  var view = this;                                                                                             // 73
  return HTML.DIV({                                                                                            // 74
    class: "MeteorToys_pubsub_content"                                                                         // 75
  }, "\n\t\t", Blaze.Unless(function() {                                                                       // 76
    return Spacebars.call(view.lookup("newTarget"));                                                           // 77
  }, function() {                                                                                              // 78
    return [ "\n\t\t\t", Blaze.Each(function() {                                                               // 79
      return Spacebars.call(view.lookup("sub"));                                                               // 80
    }, function() {                                                                                            // 81
      return [ "\n\t\t\t\t", HTML.DIV({                                                                        // 82
        class: "MeteorToys_row MeteorToys_row_sub"                                                             // 83
      }, "\n\t\t\t\t\t", Blaze.View("lookup:.", function() {                                                   // 84
        return Spacebars.mustache(view.lookup("."));                                                           // 85
      }), HTML.CharRef({                                                                                       // 86
        html: "&nbsp;",                                                                                        // 87
        str: " "                                                                                               // 88
      }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                         // 89
    }), "\n\t\t" ];                                                                                            // 90
  }, function() {                                                                                              // 91
    return [ "\n\t\t\t", Spacebars.With(function() {                                                           // 92
      return Spacebars.call(view.lookup("newTarget"));                                                         // 93
    }, function() {                                                                                            // 94
      return [ "\n\t\t\t\t", HTML.DIV({                                                                        // 95
        class: "MeteorToys_row"                                                                                // 96
      }, "\n\t\t\t\t\tSubscription: ", Blaze.View("lookup:name", function() {                                  // 97
        return Spacebars.mustache(view.lookup("name"));                                                        // 98
      }), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.FORM("\n\t\t\t\t\t", Blaze.Each(function() {                       // 99
        return Spacebars.call(view.lookup("params"));                                                          // 100
      }, function() {                                                                                          // 101
        return [ "\n\t\t\t\t\t\t", HTML.DIV({                                                                  // 102
          class: "MeteorToys_row"                                                                              // 103
        }, "\n\t\t\t\t\t\t\t", Blaze.View("lookup:.", function() {                                             // 104
          return Spacebars.mustache(view.lookup("."));                                                         // 105
        }), "\n\t\t\t\t\t\t\t", HTML.INPUT({                                                                   // 106
          id: function() {                                                                                     // 107
            return [ "MeteorToys_pubsub_param_", Spacebars.mustache(view.lookup(".")) ];                       // 108
          },                                                                                                   // 109
          tabindex: "-1"                                                                                       // 110
        }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                               // 111
      }), "\n\t\t\t\t\t", HTML.INPUT({                                                                         // 112
        type: "submit",                                                                                        // 113
        value: "Start Subscription"                                                                            // 114
      }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                         // 115
    }), "\n\t\t" ];                                                                                            // 116
  }), "\n\t");                                                                                                 // 117
}));                                                                                                           // 118
                                                                                                               // 119
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/meteortoys_sub/client/main.js                                                                      //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
var _0xc9bc=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x72\x75\x6E\x50\x75\x62\x53\x75\x62","\x6F\x62\x73\x65\x72\x76\x65","\x64\x65\x66\x61\x75\x6C\x74\x5F\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x6D\x73\x61\x76\x69\x6E\x3A\x73\x75\x62","\x6D\x73\x61\x76\x69\x6E\x3A\x6D\x6F\x6E\x67\x6F\x6C","\x5F\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x73","\x6B\x65\x79\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2F\x50\x75\x62\x53\x75\x62","\x73\x65\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x65\x64\x69\x74\x69\x6E\x67","\x67\x65\x74","\x68\x65\x6C\x70\x65\x72\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62","\x65\x76\x65\x6E\x74\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x68\x65\x61\x64\x65\x72","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x74\x61\x72\x67\x65\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x6E\x65\x77\x5F\x68\x65\x61\x64\x65\x72","\x6E\x61\x6D\x65","","\x70\x61\x72\x61\x6D\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x63\x6F\x6E\x74\x65\x6E\x74","\x73\x74\x6F\x70","\x50\x6F\x6C\x6C\x69\x6E\x67\x20\x65\x76\x65\x72\x79\x20\x33\x20\x73\x65\x63\x6F\x6E\x64\x73","\x4F\x62\x73\x65\x72\x76\x69\x6E\x67\x20\x43\x68\x61\x6E\x67\x65\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x6E\x61\x6D\x65\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x6E\x65\x77","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x5F\x70\x75\x62\x6C\x69\x73\x68\x5F\x64\x65\x74\x61\x69\x6C\x73","\x63\x61\x6C\x6C","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x76\x61\x6C","\x23\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x70\x61\x72\x61\x6D\x5F","\x70\x75\x73\x68","\x27","\x27\x2C","\x65\x61\x63\x68","\x61\x70\x70\x6C\x79","\x73\x75\x62\x73\x63\x72\x69\x62\x65","\x50\x75\x62\x53\x75\x62\x20\x6A\x75\x73\x74\x20\x65\x78\x65\x63\x75\x74\x65\x64\x3A","\x6C\x6F\x67","\x4D\x65\x74\x65\x6F\x72\x2E\x73\x75\x62\x73\x63\x72\x69\x62\x65\x28","\x73\x6C\x69\x63\x65","\x29","\x4D\x65\x74\x65\x6F\x72\x2E\x73\x75\x62\x73\x63\x72\x69\x62\x65\x28\x27","\x27\x29","\x64\x69\x73\x70\x6C\x61\x79","\x54\x6F\x79\x4B\x69\x74","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x73\x74\x61\x72\x74\x75\x70"];MeteorToysDict=Package[_0xc9bc[1]][_0xc9bc[0]];MeteorToys_Sub={observe:function(){MeteorToys_Sub[_0xc9bc[2]]();if(!Object[_0xc9bc[3]]){setInterval(function(){MeteorToys_Sub[_0xc9bc[2]]()},3000)}else {Object[_0xc9bc[3]](Meteor[_0xc9bc[4]]._subscriptions,function(){MeteorToys_Sub[_0xc9bc[2]]()})};},runPubSub:function(){if(Package[_0xc9bc[5]]||Package[_0xc9bc[6]]){var _0x4542x1=Meteor[_0xc9bc[4]][_0xc9bc[7]],_0x4542x2=Object[_0xc9bc[8]](_0x4542x1);MeteorToysDict[_0xc9bc[10]](_0xc9bc[9],_0x4542x2);}}};MeteorToys_Sub[_0xc9bc[3]]();Template[_0xc9bc[14]][_0xc9bc[13]]({editing:function(){return MeteorToysDict[_0xc9bc[12]](_0xc9bc[11])}});Template[_0xc9bc[16]][_0xc9bc[15]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x62\x75\x74\x74\x6F\x6E":function(){MeteorToysDict[_0xc9bc[10]](_0xc9bc[11],true)}});Template[_0xc9bc[18]][_0xc9bc[15]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x62\x75\x74\x74\x6F\x6E":function(){MeteorToysDict[_0xc9bc[10]](_0xc9bc[11],false);MeteorToysDict[_0xc9bc[10]](_0xc9bc[17],false);}});Template[_0xc9bc[22]][_0xc9bc[13]]({subscription:function(){var _0x4542x3=MeteorToysDict[_0xc9bc[12]](_0xc9bc[9]);return _0x4542x3;},name:function(){return Meteor[_0xc9bc[4]][_0xc9bc[7]][this][_0xc9bc[19]];var _0x4542x4=_0xc9bc[20];if(Meteor[_0xc9bc[4]][_0xc9bc[7]][this][_0xc9bc[19]]){_0x4542x4=Meteor[_0xc9bc[4]][_0xc9bc[7]][this][_0xc9bc[19]]};return _0x4542x4;},parameters:function(){p=Meteor[_0xc9bc[4]][_0xc9bc[7]][this][_0xc9bc[21]];return p;}});Template[_0xc9bc[22]][_0xc9bc[15]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x72\x6F\x77\x5F\x74\x6F\x67\x67\x6C\x65":function(){Meteor[_0xc9bc[4]][_0xc9bc[7]][this][_0xc9bc[23]]()}});Template[_0xc9bc[16]][_0xc9bc[13]]({subType:function(){if(!Object[_0xc9bc[3]]){return _0xc9bc[24]}else {return _0xc9bc[25]}}});Template[_0xc9bc[27]][_0xc9bc[13]]({sub:function(){return MeteorToysDict[_0xc9bc[12]](_0xc9bc[26])},newTarget:function(){return MeteorToysDict[_0xc9bc[12]](_0xc9bc[17])}});Template[_0xc9bc[27]][_0xc9bc[15]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x6F\x77\x5F\x73\x75\x62":function(){var _0x4542x5=String(this);Meteor[_0xc9bc[29]](_0xc9bc[28],_0x4542x5,function(_0x4542x6,_0x4542x7){MeteorToysDict[_0xc9bc[10]](_0xc9bc[17],{"\x6E\x61\x6D\x65":_0x4542x5,"\x70\x61\x72\x61\x6D\x73":_0x4542x7})});},"\x73\x75\x62\x6D\x69\x74":function(_0x4542x6,_0x4542x8){_0x4542x6[_0xc9bc[30]]();var _0x4542x9=MeteorToysDict[_0xc9bc[12]](_0xc9bc[17]),_0x4542xa=_0x4542x9[_0xc9bc[21]],_0x4542x5=_0x4542x9[_0xc9bc[19]],_0x4542xb=[_0x4542x9[_0xc9bc[19]]],_0x4542xc=_0xc9bc[20];if(_0x4542xa){jQuery[_0xc9bc[36]](_0x4542xa,function(_0x4542xd,_0x4542xe){var _0x4542xf=$(_0xc9bc[32]+_0x4542xe)[_0xc9bc[31]]();_0x4542xb[_0xc9bc[33]](_0x4542xf);_0x4542xc+=_0xc9bc[34]+_0x4542xf+_0xc9bc[35];});Meteor[_0xc9bc[38]][_0xc9bc[37]](Meteor,_0x4542xb);console[_0xc9bc[40]](_0xc9bc[39]);console[_0xc9bc[40]](_0xc9bc[41]+_0x4542xc[_0xc9bc[42]](0,-1)+_0xc9bc[43]);}else {Meteor[_0xc9bc[38]](_0x4542x5);console[_0xc9bc[40]](_0xc9bc[39]);console[_0xc9bc[40]](_0xc9bc[44]+_0x4542x5+_0xc9bc[45]);};MeteorToysDict[_0xc9bc[10]](_0xc9bc[17],false);MeteorToysDict[_0xc9bc[10]](_0xc9bc[11],false);}});Meteor[_0xc9bc[49]](function(){displayStatus=Package[_0xc9bc[1]][_0xc9bc[47]][_0xc9bc[12]](_0xc9bc[46]);if( typeof displayStatus===_0xc9bc[48]){}else {MeteorToysDict[_0xc9bc[10]](_0xc9bc[9],null)};});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/meteortoys_sub/config/config.js                                                                    //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
var _0x8790=["\x53\x75\x62","\x31\x2E\x30\x2E\x30","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x73\x74\x61\x72\x74\x75\x70"];ToyKit={name:_0x8790[0],version:_0x8790[1],template:_0x8790[2],ToyKit:_0x8790[1]};Meteor[_0x8790[5]](function(){MeteorToys=Package[_0x8790[4]][_0x8790[3]]});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:sub'] = {};

})();
