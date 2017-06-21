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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var Bert;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/themeteorchef_bert/packages/themeteorchef_bert.js                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
(function () {                                                                                                      // 1
                                                                                                                    // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                           //     // 4
// packages/themeteorchef:bert/lib/template.bert-alert.js                                                    //     // 5
//                                                                                                           //     // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                             //     // 8
                                                                                                             // 1   // 9
Template.__checkName("bertAlert");                                                                           // 2   // 10
Template["bertAlert"] = new Template("Template.bertAlert", (function() {                                     // 3   // 11
  var view = this;                                                                                           // 4   // 12
  return [ HTML.DIV({                                                                                        // 5   // 13
    "class": function() {                                                                                    // 6   // 14
      return [ "bert-alert ", Spacebars.mustache(Spacebars.dot(view.lookup("alert"), "style")), " ", Spacebars.mustache(Spacebars.dot(view.lookup("alert"), "type")), " clearfix" ];
    }                                                                                                        // 8   // 16
  }, "\n    ", HTML.DIV({                                                                                    // 9   // 17
    "class": "container"                                                                                     // 10  // 18
  }, "\n      ", HTML.P(Blaze.View("lookup:alert.message", function() {                                      // 11  // 19
    return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(view.lookup("alert"), "message")));            // 12  // 20
  })), "\n      ", Blaze.If(function() {                                                                     // 13  // 21
    return Spacebars.call(Spacebars.dot(view.lookup("alert"), "dismissable"));                               // 14  // 22
  }, function() {                                                                                            // 15  // 23
    return [ "\n        ", HTML.SPAN(HTML.CharRef({                                                          // 16  // 24
      html: "&times;",                                                                                       // 17  // 25
      str: "×"                                                                                               // 18  // 26
    })), "\n      " ];                                                                                       // 19  // 27
  }), "\n    "), " ", HTML.Raw("<!-- end .container -->"), "\n  "), HTML.Raw(" <!-- end .bert-alert -->") ]; // 20  // 28
}));                                                                                                         // 21  // 29
                                                                                                             // 22  // 30
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 31
                                                                                                                    // 32
}).call(this);                                                                                                      // 33
                                                                                                                    // 34
                                                                                                                    // 35
                                                                                                                    // 36
                                                                                                                    // 37
                                                                                                                    // 38
                                                                                                                    // 39
(function () {                                                                                                      // 40
                                                                                                                    // 41
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 42
//                                                                                                           //     // 43
// packages/themeteorchef:bert/lib/bert.js                                                                   //     // 44
//                                                                                                           //     // 45
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 46
                                                                                                             //     // 47
/*                                                                                                           // 1   // 48
* Bert                                                                                                       // 2   // 49
* Client-side curmudgeon for Meteor.                                                                         // 3   // 50
* http://github.com/themeteorchef/bert                                                                       // 4   // 51
*/                                                                                                           // 5   // 52
                                                                                                             // 6   // 53
// Define the global Bert object.                                                                            // 7   // 54
Bert = {                                                                                                     // 8   // 55
 acceptedStyles: [                                                                                           // 9   // 56
  'fixed-top',                                                                                               // 10  // 57
  'fixed-bottom',                                                                                            // 11  // 58
  'growl-top-left',                                                                                          // 12  // 59
  'growl-top-right',                                                                                         // 13  // 60
  'growl-bottom-left',                                                                                       // 14  // 61
  'growl-bottom-right'                                                                                       // 15  // 62
 ],                                                                                                          // 16  // 63
 acceptedTypes: [                                                                                            // 17  // 64
  'default',                                                                                                 // 18  // 65
  'success',                                                                                                 // 19  // 66
  'info',                                                                                                    // 20  // 67
  'warning',                                                                                                 // 21  // 68
  'danger'                                                                                                   // 22  // 69
 ],                                                                                                          // 23  // 70
 defaults: {                                                                                                 // 24  // 71
  animated: true,                                                                                            // 25  // 72
  // Accepts: true or false.                                                                                 // 26  // 73
  animationSpeed: 300,                                                                                       // 27  // 74
  // Accepts: integer value in milliseconds.                                                                 // 28  // 75
  // Note: this value needs to match the speed of the CSS transition-duration                                // 29  // 76
  // property on the .bert-alert.animated class. If it doesn't, Bert will freak.                             // 30  // 77
  autoHide: true,                                                                                            // 31  // 78
  // Accepts: true or false.                                                                                 // 32  // 79
  dismissable: true,                                                                                         // 33  // 80
  // Accepts: true or false.                                                                                 // 34  // 81
  hideDelay: 3500,                                                                                           // 35  // 82
  // Accepts: integer value in milliseconds.                                                                 // 36  // 83
  style: "fixed-top",                                                                                        // 37  // 84
  // Accepts: fixed-top, fixed-bottom, growl-top-left, growl-top-right,                                      // 38  // 85
  // growl-bottom-left, growl-bottom-right.                                                                  // 39  // 86
  type: "default"                                                                                            // 40  // 87
  // Accepts: default, success, info, warning, danger.                                                       // 41  // 88
 }                                                                                                           // 42  // 89
}                                                                                                            // 43  // 90
                                                                                                             // 44  // 91
// Method: Bert.open()                                                                                       // 45  // 92
Bert.open = function(bert) {                                                                                 // 46  // 93
  // Toggle visible class on Bert.                                                                           // 47  // 94
  bert.addClass('visible');                                                                                  // 48  // 95
                                                                                                             // 49  // 96
  // If Bert is animated, toggle the class and then run the animation.                                       // 50  // 97
  if ( Bert.defaults.animated ){                                                                             // 51  // 98
    bert.addClass('animated');                                                                               // 52  // 99
    setTimeout(function(){                                                                                   // 53  // 100
      bert.addClass('move');                                                                                 // 54  // 101
    }, 100);                                                                                                 // 55  // 102
  }                                                                                                          // 56  // 103
                                                                                                             // 57  // 104
  // Reset our timer.                                                                                        // 58  // 105
  clearTimeout(Bert.timer);                                                                                  // 59  // 106
}                                                                                                            // 60  // 107
                                                                                                             // 61  // 108
// Method: Bert.close()                                                                                      // 62  // 109
Bert.close = function(bert) {                                                                                // 63  // 110
  // Remove animated class.                                                                                  // 64  // 111
  bert.removeClass('move');                                                                                  // 65  // 112
                                                                                                             // 66  // 113
  // Define a function to call to handle closing Bert.                                                       // 67  // 114
  var handleClose = function(bert){                                                                          // 68  // 115
    // Toggle visible class on Bert.                                                                         // 69  // 116
    bert.removeClass('visible');                                                                             // 70  // 117
                                                                                                             // 71  // 118
    // Reset bertAlert session variable.                                                                     // 72  // 119
    Session.set("bertAlert", null);                                                                          // 73  // 120
                                                                                                             // 74  // 121
    // Reset our timer.                                                                                      // 75  // 122
    clearTimeout(Bert.timer);                                                                                // 76  // 123
  }                                                                                                          // 77  // 124
                                                                                                             // 78  // 125
  // If Bert is animated, wrap our call to handleClose in a setTimeout.                                      // 79  // 126
  if ( Bert.defaults.animated ){                                                                             // 80  // 127
    setTimeout(function(){                                                                                   // 81  // 128
      handleClose(bert);                                                                                     // 82  // 129
      bert.removeClass('animated');                                                                          // 83  // 130
    }, Bert.defaults.animationSpeed);                                                                        // 84  // 131
  } else {                                                                                                   // 85  // 132
    handleClose(bert);                                                                                       // 86  // 133
  }                                                                                                          // 87  // 134
}                                                                                                            // 88  // 135
                                                                                                             // 89  // 136
// Method: Bert.dismiss()                                                                                    // 90  // 137
Bert.dismiss = function(bert){                                                                               // 91  // 138
  // Add a click event to Bert.                                                                              // 92  // 139
  bert.on('click', 'span', function(){                                                                       // 93  // 140
    Bert.close(bert);                                                                                        // 94  // 141
  });                                                                                                        // 95  // 142
}                                                                                                            // 96  // 143
                                                                                                             // 97  // 144
// Method: Bert.alert()                                                                                      // 98  // 145
Bert.alert = function(message, type, style){                                                                 // 99  // 146
  // Get access to Bert in the DOM.                                                                          // 100
  var bertAlert = $('.bert-alert');                                                                          // 101
                                                                                                             // 102
  // Wrap all of our reveal functions and settings in a function that can be                                 // 103
  // called based on Bert's current visibility.                                                              // 104
  var setupBert = function(bertAlert){                                                                       // 105
    // Set some defauls for our type and style checks.                                                       // 106
    var hasType  = true;                                                                                     // 107
    var hasStyle = true;                                                                                     // 108
                                                                                                             // 109
    // Double check our type argument to make sure it's accepted by Bert.                                    // 110
    if ( Bert.acceptedTypes.indexOf(type) == -1 ){                                                           // 111
      hasType = false;                                                                                       // 112
    }                                                                                                        // 113
                                                                                                             // 114
    // Double check our style argument to make sure it's accepted by Bert.                                   // 115
    if ( Bert.acceptedStyles.indexOf(style) == -1 ){                                                         // 116
      hasStyle = false;                                                                                      // 117
    }                                                                                                        // 118
                                                                                                             // 119
    // Set Bert's contents based on our arguments and settings.                                              // 120
    Session.set("bertAlert", {                                                                               // 121
      dismissable: Bert.defaults.dismissable,                                                                // 122
      message: message || null,                                                                              // 123
      style: hasStyle == true ? style : Bert.defaults.style,                                                 // 124
      type: hasType == true ? type : Bert.defaults.type                                                      // 125
    });                                                                                                      // 126
                                                                                                             // 127
    // Wake up, Bert.                                                                                        // 128
    Bert.open(bertAlert);                                                                                    // 129
                                                                                                             // 130
    // If we defined autoHide, get our delay and run a setTimeout.                                           // 131
    // Set our timeout equal to a variable on the global object so                                           // 132
    // we can reset it if we change our alert during a previous loop.                                        // 133
    if ( Bert.defaults.autoHide ) {                                                                          // 134
      Bert.timer = setTimeout(function(){                                                                    // 135
        // Go to bed, Bert.                                                                                  // 136
        Bert.close(bertAlert);                                                                               // 137
      }, Bert.defaults.hideDelay);                                                                           // 138
    }                                                                                                        // 139
                                                                                                             // 140
    // If Bert is dismissable, call to add our click event.                                                  // 141
    if ( Bert.defaults.dismissable ){                                                                        // 142
      Bert.dismiss(bertAlert);                                                                               // 143
    }                                                                                                        // 144
  }                                                                                                          // 145
                                                                                                             // 146
  // If Bert is already visible in the DOM, go ahead and close him up before we                              // 147
  // update him with our new message.                                                                        // 148
  if ( bertAlert.is(':visible') ){                                                                           // 149
    // If Bert is visible, close him up.                                                                     // 150
    Bert.close(bertAlert);                                                                                   // 151
                                                                                                             // 152
    // After waiting a second, go ahead and open Bert back up.                                               // 153
    if ( Bert.defaults.animated ){                                                                           // 154
      setTimeout(function(){                                                                                 // 155
        setupBert(bertAlert);                                                                                // 156
      }, Bert.defaults.animationSpeed + 300);                                                                // 157
    } else {                                                                                                 // 158
      setupBert(bertAlert);                                                                                  // 159
    }                                                                                                        // 160
  } else {                                                                                                   // 161
    // If Bert isn't on screen yet, just go ahead and reveal him.                                            // 162
    setupBert(bertAlert);                                                                                    // 163
  }                                                                                                          // 164
}                                                                                                            // 165
                                                                                                             // 166
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 214
                                                                                                                    // 215
}).call(this);                                                                                                      // 216
                                                                                                                    // 217
                                                                                                                    // 218
                                                                                                                    // 219
                                                                                                                    // 220
                                                                                                                    // 221
                                                                                                                    // 222
(function () {                                                                                                      // 223
                                                                                                                    // 224
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 225
//                                                                                                           //     // 226
// packages/themeteorchef:bert/lib/bert-alert.js                                                             //     // 227
//                                                                                                           //     // 228
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 229
                                                                                                             //     // 230
/*                                                                                                           // 1   // 231
* Controller: bertAlert                                                                                      // 2   // 232
* Template: /lib/bert-alert.html                                                                             // 3   // 233
*/                                                                                                           // 4   // 234
                                                                                                             // 5   // 235
/*                                                                                                           // 6   // 236
* Helpers                                                                                                    // 7   // 237
*/                                                                                                           // 8   // 238
                                                                                                             // 9   // 239
Template.bertAlert.helpers({                                                                                 // 10  // 240
  alert: function(){                                                                                         // 11  // 241
    // Get and return our bertAlert session variable to our alert template.                                  // 12  // 242
    var bert = Session.get('bertAlert');                                                                     // 13  // 243
    return bert;                                                                                             // 14  // 244
  }                                                                                                          // 15  // 245
});                                                                                                          // 16  // 246
                                                                                                             // 17  // 247
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 248
                                                                                                                    // 249
}).call(this);                                                                                                      // 250
                                                                                                                    // 251
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['themeteorchef:bert'] = {}, {
  Bert: Bert
});

})();
