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
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Random = Package.random.Random;
var Hook = Package['callback-hook'].Hook;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var DDP = Package['ddp-client'].DDP;
var Mongo = Package.mongo.Mongo;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

/* Package-scope variables */
var Accounts, EXPIRE_TOKENS_INTERVAL_MS, CONNECTION_CLOSE_DELAY_MS;

var require = meteorInstall({"node_modules":{"meteor":{"accounts-base":{"client_main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-base/client_main.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
  AccountsClient: function () {                                                                                        // 1
    return AccountsClient;                                                                                             // 1
  },                                                                                                                   // 1
  AccountsTest: function () {                                                                                          // 1
    return AccountsTest;                                                                                               // 1
  }                                                                                                                    // 1
});                                                                                                                    // 1
var AccountsClient = void 0;                                                                                           // 1
module.watch(require("./accounts_client.js"), {                                                                        // 1
  AccountsClient: function (v) {                                                                                       // 1
    AccountsClient = v;                                                                                                // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var AccountsTest = void 0;                                                                                             // 1
module.watch(require("./url_client.js"), {                                                                             // 1
  AccountsTest: function (v) {                                                                                         // 1
    AccountsTest = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
module.watch(require("./localstorage_token.js"));                                                                      // 1
/**                                                                                                                    // 5
 * @namespace Accounts                                                                                                 //
 * @summary The namespace for all client-side accounts-related methods.                                                //
 */Accounts = new AccountsClient(); /**                                                                                //
                                     * @summary A [Mongo.Collection](#collections) containing user documents.          //
                                     * @locus Anywhere                                                                 //
                                     * @type {Mongo.Collection}                                                        //
                                     * @importFromPackage meteor                                                       //
                                     */                                                                                //
Meteor.users = Accounts.users;                                                                                         // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"accounts_client.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-base/accounts_client.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
module.export({                                                                                                        // 1
  AccountsClient: function () {                                                                                        // 1
    return AccountsClient;                                                                                             // 1
  }                                                                                                                    // 1
});                                                                                                                    // 1
var AccountsCommon = void 0;                                                                                           // 1
module.watch(require("./accounts_common.js"), {                                                                        // 1
  AccountsCommon: function (v) {                                                                                       // 1
    AccountsCommon = v;                                                                                                // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
                                                                                                                       //
var AccountsClient = function (_AccountsCommon) {                                                                      //
  (0, _inherits3.default)(AccountsClient, _AccountsCommon);                                                            //
                                                                                                                       //
  function AccountsClient(options) {                                                                                   // 14
    (0, _classCallCheck3.default)(this, AccountsClient);                                                               // 14
                                                                                                                       //
    var _this = (0, _possibleConstructorReturn3.default)(this, _AccountsCommon.call(this, options));                   // 14
                                                                                                                       //
    _this._loggingIn = new ReactiveVar(false);                                                                         // 17
    _this._loggingOut = new ReactiveVar(false);                                                                        // 18
    _this._loginServicesHandle = _this.connection.subscribe("meteor.loginServiceConfiguration");                       // 20
    _this._pageLoadLoginCallbacks = [];                                                                                // 23
    _this._pageLoadLoginAttemptInfo = null; // Defined in url_client.js.                                               // 24
                                                                                                                       //
    _this._initUrlMatching(); // Defined in localstorage_token.js.                                                     // 27
                                                                                                                       //
                                                                                                                       //
    _this._initLocalStorage(); // This is for .registerClientLoginFunction & .callLoginFunction.                       // 30
                                                                                                                       //
                                                                                                                       //
    _this._loginFuncs = {};                                                                                            // 33
    return _this;                                                                                                      // 14
  } ///                                                                                                                // 34
  /// CURRENT USER                                                                                                     // 37
  ///                                                                                                                  // 38
  // @override                                                                                                         // 40
                                                                                                                       //
                                                                                                                       //
  AccountsClient.prototype.userId = function () {                                                                      //
    function userId() {                                                                                                //
      return this.connection.userId();                                                                                 // 42
    }                                                                                                                  // 43
                                                                                                                       //
    return userId;                                                                                                     //
  }(); // This is mostly just called within this file, but Meteor.loginWithPassword                                    //
  // also uses it to make loggingIn() be true during the beginPasswordExchange                                         // 46
  // method call too.                                                                                                  // 47
                                                                                                                       //
                                                                                                                       //
  AccountsClient.prototype._setLoggingIn = function () {                                                               //
    function _setLoggingIn(x) {                                                                                        //
      this._loggingIn.set(x);                                                                                          // 49
    }                                                                                                                  // 50
                                                                                                                       //
    return _setLoggingIn;                                                                                              //
  }(); /**                                                                                                             //
        * @summary True if a login method (such as `Meteor.loginWithPassword`, `Meteor.loginWithFacebook`, or `Accounts.createUser`) is currently in progress. A reactive data source.
        * @locus Client                                                                                                //
        */                                                                                                             //
                                                                                                                       //
  AccountsClient.prototype.loggingIn = function () {                                                                   //
    function loggingIn() {                                                                                             //
      return this._loggingIn.get();                                                                                    // 57
    }                                                                                                                  // 58
                                                                                                                       //
    return loggingIn;                                                                                                  //
  }(); /**                                                                                                             //
        * @summary True if a logout method (such as `Meteor.logout`) is currently in progress. A reactive data source.
        * @locus Client                                                                                                //
        */                                                                                                             //
                                                                                                                       //
  AccountsClient.prototype.loggingOut = function () {                                                                  //
    function loggingOut() {                                                                                            //
      return this._loggingOut.get();                                                                                   // 65
    }                                                                                                                  // 66
                                                                                                                       //
    return loggingOut;                                                                                                 //
  }(); /**                                                                                                             //
        * @summary Register a new login function on the client. Intended for OAuth package authors. You can call the login function by using 
        `Accounts.callLoginFunction` or `Accounts.callLoginFunction`.                                                  //
        * @locus Client                                                                                                //
        * @param {String} funcName The name of your login function. Used by `Accounts.callLoginFunction` and `Accounts.applyLoginFunction`.
        Should be the OAuth provider name accordingly.                                                                 //
        * @param {Function} func The actual function you want to call. Just write it in the manner of `loginWithFoo`.  //
        */                                                                                                             //
                                                                                                                       //
  AccountsClient.prototype.registerClientLoginFunction = function () {                                                 //
    function registerClientLoginFunction(funcName, func) {                                                             //
      if (this._loginFuncs[funcName]) {                                                                                // 77
        throw new Error(funcName + " has been defined already");                                                       // 78
      }                                                                                                                // 79
                                                                                                                       //
      this._loginFuncs[funcName] = func;                                                                               // 80
    }                                                                                                                  // 81
                                                                                                                       //
    return registerClientLoginFunction;                                                                                //
  }(); /**                                                                                                             //
        * @summary Call a login function defined using `Accounts.registerClientLoginFunction`. Excluding the first argument, all remaining
        arguments are passed to the login function accordingly. Use `applyLoginFunction` if you want to pass in an arguments array that contains
        all arguments for the login function.                                                                          //
        * @locus Client                                                                                                //
        * @param {String} funcName The name of the login function you wanted to call.                                  //
        */                                                                                                             //
                                                                                                                       //
  AccountsClient.prototype.callLoginFunction = function () {                                                           //
    function callLoginFunction(funcName) {                                                                             //
      if (!this._loginFuncs[funcName]) {                                                                               // 91
        throw new Error(funcName + " was not defined");                                                                // 92
      }                                                                                                                // 93
                                                                                                                       //
      for (var _len = arguments.length, funcArgs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {    // 90
        funcArgs[_key - 1] = arguments[_key];                                                                          // 90
      }                                                                                                                // 90
                                                                                                                       //
      return this._loginFuncs[funcName].apply(this, funcArgs);                                                         // 94
    }                                                                                                                  // 95
                                                                                                                       //
    return callLoginFunction;                                                                                          //
  }(); /**                                                                                                             //
        * @summary Same as ``callLoginFunction` but accept an `arguments` which contains all arguments for the login   //
        function.                                                                                                      //
        * @locus Client                                                                                                //
        * @param {String} funcName The name of the login function you wanted to call.                                  //
        * @param {Array} funcArgs The `arguments` for the login function.                                              //
        */                                                                                                             //
                                                                                                                       //
  AccountsClient.prototype.applyLoginFunction = function () {                                                          //
    function applyLoginFunction(funcName, funcArgs) {                                                                  //
      if (!this._loginFuncs[funcName]) {                                                                               // 105
        throw new Error(funcName + " was not defined");                                                                // 106
      }                                                                                                                // 107
                                                                                                                       //
      return this._loginFuncs[funcName].apply(this, funcArgs);                                                         // 108
    }                                                                                                                  // 109
                                                                                                                       //
    return applyLoginFunction;                                                                                         //
  }(); /**                                                                                                             //
        * @summary Log the user out.                                                                                   //
        * @locus Client                                                                                                //
        * @param {Function} [callback] Optional callback. Called with no arguments on success, or with a single `Error` argument on failure.
        */                                                                                                             //
                                                                                                                       //
  AccountsClient.prototype.logout = function () {                                                                      //
    function logout(callback) {                                                                                        //
      var self = this;                                                                                                 // 117
                                                                                                                       //
      self._loggingOut.set(true);                                                                                      // 118
                                                                                                                       //
      self.connection.apply('logout', [], {                                                                            // 119
        wait: true                                                                                                     // 120
      }, function (error, result) {                                                                                    // 119
        self._loggingOut.set(false);                                                                                   // 122
                                                                                                                       //
        if (error) {                                                                                                   // 123
          callback && callback(error);                                                                                 // 124
        } else {                                                                                                       // 125
          self.makeClientLoggedOut();                                                                                  // 126
          callback && callback();                                                                                      // 127
        }                                                                                                              // 128
      });                                                                                                              // 129
    }                                                                                                                  // 130
                                                                                                                       //
    return logout;                                                                                                     //
  }(); /**                                                                                                             //
        * @summary Log out other clients logged in as the current user, but does not log out the client that calls this function.
        * @locus Client                                                                                                //
        * @param {Function} [callback] Optional callback. Called with no arguments on success, or with a single `Error` argument on failure.
        */                                                                                                             //
                                                                                                                       //
  AccountsClient.prototype.logoutOtherClients = function () {                                                          //
    function logoutOtherClients(callback) {                                                                            //
      var self = this; // We need to make two method calls: one to replace our current token,                          // 138
      // and another to remove all tokens except the current one. We want to                                           // 141
      // call these two methods one after the other, without any other                                                 // 142
      // methods running between them. For example, we don't want `logout`                                             // 143
      // to be called in between our two method calls (otherwise the second                                            // 144
      // method call would return an error). Another example: we don't want                                            // 145
      // logout to be called before the callback for `getNewToken`;                                                    // 146
      // otherwise we would momentarily log the user out and then write a                                              // 147
      // new token to localStorage.                                                                                    // 148
      //                                                                                                               // 149
      // To accomplish this, we make both calls as wait methods, and queue                                             // 150
      // them one after the other, without spinning off the event loop in                                              // 151
      // between. Even though we queue `removeOtherTokens` before                                                      // 152
      // `getNewToken`, we won't actually send the `removeOtherTokens` call                                            // 153
      // until the `getNewToken` callback has finished running, because they                                           // 154
      // are both wait methods.                                                                                        // 155
                                                                                                                       //
      self.connection.apply('getNewToken', [], {                                                                       // 156
        wait: true                                                                                                     // 159
      }, function (err, result) {                                                                                      // 159
        if (!err) {                                                                                                    // 161
          self._storeLoginToken(self.userId(), result.token, result.tokenExpires);                                     // 162
        }                                                                                                              // 167
      });                                                                                                              // 168
      self.connection.apply('removeOtherTokens', [], {                                                                 // 171
        wait: true                                                                                                     // 174
      }, function (err) {                                                                                              // 174
        callback && callback(err);                                                                                     // 176
      });                                                                                                              // 177
    }                                                                                                                  // 179
                                                                                                                       //
    return logoutOtherClients;                                                                                         //
  }();                                                                                                                 //
                                                                                                                       //
  return AccountsClient;                                                                                               //
}(AccountsCommon);                                                                                                     //
                                                                                                                       //
;                                                                                                                      // 180
var Ap = AccountsClient.prototype; /**                                                                                 // 182
                                    * @summary True if a login method (such as `Meteor.loginWithPassword`, `Meteor.loginWithFacebook`, or `Accounts.createUser`) is currently in progress. A reactive data source.
                                    * @locus Client                                                                    //
                                    * @importFromPackage meteor                                                        //
                                    */                                                                                 //
                                                                                                                       //
Meteor.loggingIn = function () {                                                                                       // 189
  return Accounts.loggingIn();                                                                                         // 190
}; /**                                                                                                                 // 191
    * @summary True if a logout method (such as `Meteor.logout`) is currently in progress. A reactive data source.     //
    * @locus Client                                                                                                    //
    * @importFromPackage meteor                                                                                        //
    */                                                                                                                 //
                                                                                                                       //
Meteor.loggingOut = function () {                                                                                      // 198
  return Accounts.loggingOut();                                                                                        // 199
}; ///                                                                                                                 // 200
/// LOGIN METHODS                                                                                                      // 203
///                                                                                                                    // 204
// Call a login method on the server.                                                                                  // 206
//                                                                                                                     // 207
// A login method is a method which on success calls `this.setUserId(id)` and                                          // 208
// `Accounts._setLoginToken` on the server and returns an object with fields                                           // 209
// 'id' (containing the user id), 'token' (containing a resume token), and                                             // 210
// optionally `tokenExpires`.                                                                                          // 211
//                                                                                                                     // 212
// This function takes care of:                                                                                        // 213
//   - Updating the Meteor.loggingIn() reactive data source                                                            // 214
//   - Calling the method in 'wait' mode                                                                               // 215
//   - On success, saving the resume token to localStorage                                                             // 216
//   - On success, calling Accounts.connection.setUserId()                                                             // 217
//   - Setting up an onReconnect handler which logs in with                                                            // 218
//     the resume token                                                                                                // 219
//                                                                                                                     // 220
// Options:                                                                                                            // 221
// - methodName: The method to call (default 'login')                                                                  // 222
// - methodArguments: The arguments for the method                                                                     // 223
// - validateResult: If provided, will be called with the result of the                                                // 224
//                 method. If it throws, the client will not be logged in (and                                         // 225
//                 its error will be passed to the callback).                                                          // 226
// - userCallback: Will be called with no arguments once the user is fully                                             // 227
//                 logged in, or with the error on error.                                                              // 228
//                                                                                                                     // 229
                                                                                                                       //
                                                                                                                       //
Ap.callLoginMethod = function (options) {                                                                              // 230
  var self = this;                                                                                                     // 231
  options = _.extend({                                                                                                 // 233
    methodName: 'login',                                                                                               // 234
    methodArguments: [{}],                                                                                             // 235
    _suppressLoggingIn: false                                                                                          // 236
  }, options); // Set defaults for callback arguments to no-op functions; make sure we                                 // 233
  // override falsey values too.                                                                                       // 240
                                                                                                                       //
  _.each(['validateResult', 'userCallback'], function (f) {                                                            // 241
    if (!options[f]) options[f] = function () {};                                                                      // 242
  }); // Prepare callbacks: user provided and onLogin/onLoginFailure hooks.                                            // 244
                                                                                                                       //
                                                                                                                       //
  var loginCallbacks = _.once(function (error) {                                                                       // 247
    if (!error) {                                                                                                      // 248
      self._onLoginHook.each(function (callback) {                                                                     // 249
        callback();                                                                                                    // 250
        return true;                                                                                                   // 251
      });                                                                                                              // 252
    } else {                                                                                                           // 253
      self._onLoginFailureHook.each(function (callback) {                                                              // 254
        callback({                                                                                                     // 255
          error: error                                                                                                 // 255
        });                                                                                                            // 255
        return true;                                                                                                   // 256
      });                                                                                                              // 257
    }                                                                                                                  // 258
                                                                                                                       //
    options.userCallback.apply(this, arguments);                                                                       // 259
  });                                                                                                                  // 260
                                                                                                                       //
  var reconnected = false; // We want to set up onReconnect as soon as we get a result token back from                 // 262
  // the server, without having to wait for subscriptions to rerun. This is                                            // 265
  // because if we disconnect and reconnect between getting the result and                                             // 266
  // getting the results of subscription rerun, we WILL NOT re-send this                                               // 267
  // method (because we never re-send methods whose results we've received)                                            // 268
  // but we WILL call loggedInAndDataReadyCallback at "reconnect quiesce"                                              // 269
  // time. This will lead to makeClientLoggedIn(result.id) even though we                                              // 270
  // haven't actually sent a login method!                                                                             // 271
  //                                                                                                                   // 272
  // But by making sure that we send this "resume" login in that case (and                                             // 273
  // calling makeClientLoggedOut if it fails), we'll end up with an accurate                                           // 274
  // client-side userId. (It's important that livedata_connection guarantees                                           // 275
  // that the "reconnect quiesce"-time call to loggedInAndDataReadyCallback                                            // 276
  // will occur before the callback from the resume login call.)                                                       // 277
                                                                                                                       //
  var onResultReceived = function (err, result) {                                                                      // 278
    if (err || !result || !result.token) {// Leave onReconnect alone if there was an error, so that if the user was    // 279
      // already logged in they will still get logged in on reconnect.                                                 // 281
      // See issue #4970.                                                                                              // 282
    } else {                                                                                                           // 283
      self.connection.onReconnect = function () {                                                                      // 284
        reconnected = true; // If our token was updated in storage, use the latest one.                                // 285
                                                                                                                       //
        var storedToken = self._storedLoginToken();                                                                    // 287
                                                                                                                       //
        if (storedToken) {                                                                                             // 288
          result = {                                                                                                   // 289
            token: storedToken,                                                                                        // 290
            tokenExpires: self._storedLoginTokenExpires()                                                              // 291
          };                                                                                                           // 289
        }                                                                                                              // 293
                                                                                                                       //
        if (!result.tokenExpires) result.tokenExpires = self._tokenExpiration(new Date());                             // 294
                                                                                                                       //
        if (self._tokenExpiresSoon(result.tokenExpires)) {                                                             // 296
          self.makeClientLoggedOut();                                                                                  // 297
        } else {                                                                                                       // 298
          self.callLoginMethod({                                                                                       // 299
            methodArguments: [{                                                                                        // 300
              resume: result.token                                                                                     // 300
            }],                                                                                                        // 300
            // Reconnect quiescence ensures that the user doesn't see an                                               // 301
            // intermediate state before the login method finishes. So we don't                                        // 302
            // need to show a logging-in animation.                                                                    // 303
            _suppressLoggingIn: true,                                                                                  // 304
            userCallback: function (error) {                                                                           // 305
              var storedTokenNow = self._storedLoginToken();                                                           // 306
                                                                                                                       //
              if (error) {                                                                                             // 307
                // If we had a login error AND the current stored token is the                                         // 308
                // one that we tried to log in with, then declare ourselves                                            // 309
                // logged out. If there's a token in storage but it's not the                                          // 310
                // token that we tried to log in with, we don't know anything                                          // 311
                // about whether that token is valid or not, so do nothing. The                                        // 312
                // periodic localStorage poll will decide if we are logged in or                                       // 313
                // out with this token, if it hasn't already. Of course, even                                          // 314
                // with this check, another tab could insert a new valid token                                         // 315
                // immediately before we clear localStorage here, which would                                          // 316
                // lead to both tabs being logged out, but by checking the token                                       // 317
                // in storage right now we hope to make that unlikely to happen.                                       // 318
                //                                                                                                     // 319
                // If there is no token in storage right now, we don't have to                                         // 320
                // do anything; whatever code removed the token from storage was                                       // 321
                // responsible for calling `makeClientLoggedOut()`, or the                                             // 322
                // periodic localStorage poll will call `makeClientLoggedOut`                                          // 323
                // eventually if another tab wiped the token from storage.                                             // 324
                if (storedTokenNow && storedTokenNow === result.token) {                                               // 325
                  self.makeClientLoggedOut();                                                                          // 326
                }                                                                                                      // 327
              } // Possibly a weird callback to call, but better than nothing if                                       // 328
              // there is a reconnect between "login result received" and "data                                        // 330
              // ready".                                                                                               // 331
                                                                                                                       //
                                                                                                                       //
              loginCallbacks(error);                                                                                   // 332
            }                                                                                                          // 333
          });                                                                                                          // 299
        }                                                                                                              // 334
      };                                                                                                               // 335
    }                                                                                                                  // 336
  }; // This callback is called once the local cache of the current-user                                               // 337
  // subscription (and all subscriptions, in fact) are guaranteed to be up to                                          // 340
  // date.                                                                                                             // 341
                                                                                                                       //
                                                                                                                       //
  var loggedInAndDataReadyCallback = function (error, result) {                                                        // 342
    // If the login method returns its result but the connection is lost                                               // 343
    // before the data is in the local cache, it'll set an onReconnect (see                                            // 344
    // above). The onReconnect will try to log in using the token, and *it*                                            // 345
    // will call userCallback via its own version of this                                                              // 346
    // loggedInAndDataReadyCallback. So we don't have to do anything here.                                             // 347
    if (reconnected) return; // Note that we need to call this even if _suppressLoggingIn is true,                     // 348
    // because it could be matching a _setLoggingIn(true) from a                                                       // 352
    // half-completed pre-reconnect login method.                                                                      // 353
                                                                                                                       //
    self._setLoggingIn(false);                                                                                         // 354
                                                                                                                       //
    if (error || !result) {                                                                                            // 355
      error = error || new Error("No result from call to " + options.methodName);                                      // 356
      loginCallbacks(error);                                                                                           // 358
      return;                                                                                                          // 359
    }                                                                                                                  // 360
                                                                                                                       //
    try {                                                                                                              // 361
      options.validateResult(result);                                                                                  // 362
    } catch (e) {                                                                                                      // 363
      loginCallbacks(e);                                                                                               // 364
      return;                                                                                                          // 365
    } // Make the client logged in. (The user data should already be loaded!)                                          // 366
                                                                                                                       //
                                                                                                                       //
    self.makeClientLoggedIn(result.id, result.token, result.tokenExpires);                                             // 369
    loginCallbacks();                                                                                                  // 370
  };                                                                                                                   // 371
                                                                                                                       //
  if (!options._suppressLoggingIn) self._setLoggingIn(true);                                                           // 373
  self.connection.apply(options.methodName, options.methodArguments, {                                                 // 375
    wait: true,                                                                                                        // 378
    onResultReceived: onResultReceived                                                                                 // 378
  }, loggedInAndDataReadyCallback);                                                                                    // 378
};                                                                                                                     // 380
                                                                                                                       //
Ap.makeClientLoggedOut = function () {                                                                                 // 382
  // Ensure client was successfully logged in before running logout hooks.                                             // 383
  if (this.connection._userId) {                                                                                       // 384
    this._onLogoutHook.each(function (callback) {                                                                      // 385
      callback();                                                                                                      // 386
      return true;                                                                                                     // 387
    });                                                                                                                // 388
  }                                                                                                                    // 389
                                                                                                                       //
  this._unstoreLoginToken();                                                                                           // 390
                                                                                                                       //
  this.connection.setUserId(null);                                                                                     // 391
  this.connection.onReconnect = null;                                                                                  // 392
};                                                                                                                     // 393
                                                                                                                       //
Ap.makeClientLoggedIn = function (userId, token, tokenExpires) {                                                       // 395
  this._storeLoginToken(userId, token, tokenExpires);                                                                  // 396
                                                                                                                       //
  this.connection.setUserId(userId);                                                                                   // 397
}; /**                                                                                                                 // 398
    * @summary Log the user out.                                                                                       //
    * @locus Client                                                                                                    //
    * @param {Function} [callback] Optional callback. Called with no arguments on success, or with a single `Error` argument on failure.
    * @importFromPackage meteor                                                                                        //
    */                                                                                                                 //
                                                                                                                       //
Meteor.logout = function (callback) {                                                                                  // 406
  return Accounts.logout(callback);                                                                                    // 407
}; /**                                                                                                                 // 408
    * @summary Log out other clients logged in as the current user, but does not log out the client that calls this function.
    * @locus Client                                                                                                    //
    * @param {Function} [callback] Optional callback. Called with no arguments on success, or with a single `Error` argument on failure.
    * @importFromPackage meteor                                                                                        //
    */                                                                                                                 //
                                                                                                                       //
Meteor.logoutOtherClients = function (callback) {                                                                      // 416
  return Accounts.logoutOtherClients(callback);                                                                        // 417
}; ///                                                                                                                 // 418
/// LOGIN SERVICES                                                                                                     // 422
///                                                                                                                    // 423
// A reactive function returning whether the loginServiceConfiguration                                                 // 425
// subscription is ready. Used by accounts-ui to hide the login button                                                 // 426
// until we have all the configuration loaded                                                                          // 427
//                                                                                                                     // 428
                                                                                                                       //
                                                                                                                       //
Ap.loginServicesConfigured = function () {                                                                             // 429
  return this._loginServicesHandle.ready();                                                                            // 430
}; // Some login services such as the redirect login flow or the resume                                                // 431
// login handler can log the user in at page load time.  The                                                           // 435
// Meteor.loginWithX functions have a callback argument, but the                                                       // 436
// callback function instance won't be in memory any longer if the                                                     // 437
// page was reloaded.  The `onPageLoadLogin` function allows a                                                         // 438
// callback to be registered for the case where the login was                                                          // 439
// initiated in a previous VM, and we now have the result of the login                                                 // 440
// attempt in a new VM.                                                                                                // 441
// Register a callback to be called if we have information about a                                                     // 443
// login attempt at page load time.  Call the callback immediately if                                                  // 444
// we already have the page load login attempt info, otherwise stash                                                   // 445
// the callback to be called if and when we do get the attempt info.                                                   // 446
//                                                                                                                     // 447
                                                                                                                       //
                                                                                                                       //
Ap.onPageLoadLogin = function (f) {                                                                                    // 448
  if (this._pageLoadLoginAttemptInfo) {                                                                                // 449
    f(this._pageLoadLoginAttemptInfo);                                                                                 // 450
  } else {                                                                                                             // 451
    this._pageLoadLoginCallbacks.push(f);                                                                              // 452
  }                                                                                                                    // 453
}; // Receive the information about the login attempt at page load time.                                               // 454
// Call registered callbacks, and also record the info in case                                                         // 458
// someone's callback hasn't been registered yet.                                                                      // 459
//                                                                                                                     // 460
                                                                                                                       //
                                                                                                                       //
Ap._pageLoadLogin = function (attemptInfo) {                                                                           // 461
  if (this._pageLoadLoginAttemptInfo) {                                                                                // 462
    Meteor._debug("Ignoring unexpected duplicate page load login attempt info");                                       // 463
                                                                                                                       //
    return;                                                                                                            // 464
  }                                                                                                                    // 465
                                                                                                                       //
  _.each(this._pageLoadLoginCallbacks, function (callback) {                                                           // 467
    callback(attemptInfo);                                                                                             // 468
  });                                                                                                                  // 469
                                                                                                                       //
  this._pageLoadLoginCallbacks = [];                                                                                   // 471
  this._pageLoadLoginAttemptInfo = attemptInfo;                                                                        // 472
}; ///                                                                                                                 // 473
/// HANDLEBARS HELPERS                                                                                                 // 477
///                                                                                                                    // 478
// If our app has a Blaze, register the {{currentUser}} and {{loggingIn}}                                              // 480
// global helpers.                                                                                                     // 481
                                                                                                                       //
                                                                                                                       //
if (Package.blaze) {                                                                                                   // 482
  /**                                                                                                                  // 483
   * @global                                                                                                           //
   * @name  currentUser                                                                                                //
   * @isHelper true                                                                                                    //
   * @summary Calls [Meteor.user()](#meteor_user). Use `{{#if currentUser}}` to check whether the user is logged in.   //
   */Package.blaze.Blaze.Template.registerHelper('currentUser', function () {                                          //
    return Meteor.user();                                                                                              // 490
  }); /**                                                                                                              // 491
       * @global                                                                                                       //
       * @name  loggingIn                                                                                              //
       * @isHelper true                                                                                                //
       * @summary Calls [Meteor.loggingIn()](#meteor_loggingin).                                                       //
       */                                                                                                              //
  Package.blaze.Blaze.Template.registerHelper('loggingIn', function () {                                               // 499
    return Meteor.loggingIn();                                                                                         // 500
  }); /**                                                                                                              // 501
       * @global                                                                                                       //
       * @name  loggingOut                                                                                             //
       * @isHelper true                                                                                                //
       * @summary Calls [Meteor.loggingOut()](#meteor_loggingout).                                                     //
       */                                                                                                              //
  Package.blaze.Blaze.Template.registerHelper('loggingOut', function () {                                              // 509
    return Meteor.loggingOut();                                                                                        // 510
  }); /**                                                                                                              // 511
       * @global                                                                                                       //
       * @name  loggingInOrOut                                                                                         //
       * @isHelper true                                                                                                //
       * @summary Calls [Meteor.loggingIn()](#meteor_loggingin) or [Meteor.loggingOut()](#meteor_loggingout).          //
       */                                                                                                              //
  Package.blaze.Blaze.Template.registerHelper('loggingInOrOut', function () {                                          // 519
    return Meteor.loggingIn() || Meteor.loggingOut();                                                                  // 520
  });                                                                                                                  // 521
}                                                                                                                      // 522
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"accounts_common.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-base/accounts_common.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
module.export({                                                                                                        // 1
  AccountsCommon: function () {                                                                                        // 1
    return AccountsCommon;                                                                                             // 1
  }                                                                                                                    // 1
});                                                                                                                    // 1
                                                                                                                       //
var AccountsCommon = function () {                                                                                     //
  function AccountsCommon(options) {                                                                                   // 11
    (0, _classCallCheck3.default)(this, AccountsCommon);                                                               // 11
    // Currently this is read directly by packages like accounts-password                                              // 12
    // and accounts-ui-unstyled.                                                                                       // 13
    this._options = {}; // Note that setting this.connection = null causes this.users to be a                          // 14
    // LocalCollection, which is not what we want.                                                                     // 17
                                                                                                                       //
    this.connection = undefined;                                                                                       // 18
                                                                                                                       //
    this._initConnection(options || {}); // There is an allow call in accounts_server.js that restricts writes to      // 19
    // this collection.                                                                                                // 22
                                                                                                                       //
                                                                                                                       //
    this.users = new Mongo.Collection("users", {                                                                       // 23
      _preventAutopublish: true,                                                                                       // 24
      connection: this.connection                                                                                      // 25
    }); // Callback exceptions are printed with Meteor._debug and ignored.                                             // 23
                                                                                                                       //
    this._onLoginHook = new Hook({                                                                                     // 29
      bindEnvironment: false,                                                                                          // 30
      debugPrintExceptions: "onLogin callback"                                                                         // 31
    });                                                                                                                // 29
    this._onLoginFailureHook = new Hook({                                                                              // 34
      bindEnvironment: false,                                                                                          // 35
      debugPrintExceptions: "onLoginFailure callback"                                                                  // 36
    });                                                                                                                // 34
    this._onLogoutHook = new Hook({                                                                                    // 39
      bindEnvironment: false,                                                                                          // 40
      debugPrintExceptions: "onLogout callback"                                                                        // 41
    });                                                                                                                // 39
  } /**                                                                                                                // 43
     * @summary Get the current user id, or `null` if no user is logged in. A reactive data source.                    //
     * @locus Anywhere but publish functions                                                                           //
     */                                                                                                                //
                                                                                                                       //
  AccountsCommon.prototype.userId = function () {                                                                      //
    function userId() {                                                                                                //
      throw new Error("userId method not implemented");                                                                // 50
    }                                                                                                                  // 51
                                                                                                                       //
    return userId;                                                                                                     //
  }(); /**                                                                                                             //
        * @summary Get the current user record, or `null` if no user is logged in. A reactive data source.             //
        * @locus Anywhere but publish functions                                                                        //
        */                                                                                                             //
                                                                                                                       //
  AccountsCommon.prototype.user = function () {                                                                        //
    function user() {                                                                                                  //
      var userId = this.userId();                                                                                      // 58
      return userId ? this.users.findOne(userId) : null;                                                               // 59
    }                                                                                                                  // 60
                                                                                                                       //
    return user;                                                                                                       //
  }(); // Set up config for the accounts system. Call this on both the client                                          //
  // and the server.                                                                                                   // 63
  //                                                                                                                   // 64
  // Note that this method gets overridden on AccountsServer.prototype, but                                            // 65
  // the overriding method calls the overridden method.                                                                // 66
  //                                                                                                                   // 67
  // XXX we should add some enforcement that this is called on both the                                                // 68
  // client and the server. Otherwise, a user can                                                                      // 69
  // 'forbidClientAccountCreation' only on the client and while it looks                                               // 70
  // like their app is secure, the server will still accept createUser                                                 // 71
  // calls. https://github.com/meteor/meteor/issues/828                                                                // 72
  //                                                                                                                   // 73
  // @param options {Object} an object with fields:                                                                    // 74
  // - sendVerificationEmail {Boolean}                                                                                 // 75
  //     Send email address verification emails to new users created from                                              // 76
  //     client signups.                                                                                               // 77
  // - forbidClientAccountCreation {Boolean}                                                                           // 78
  //     Do not allow clients to create accounts directly.                                                             // 79
  // - restrictCreationByEmailDomain {Function or String}                                                              // 80
  //     Require created users to have an email matching the function or                                               // 81
  //     having the string as domain.                                                                                  // 82
  // - loginExpirationInDays {Number}                                                                                  // 83
  //     Number of days since login until a user is logged out (login token                                            // 84
  //     expires).                                                                                                     // 85
  // - passwordResetTokenExpirationInDays {Number}                                                                     // 86
  //     Number of days since password reset token creation until the                                                  // 87
  //     token cannt be used any longer (password reset token expires).                                                // 88
  // - ambiguousErrorMessages {Boolean}                                                                                // 89
  //     Return ambiguous error messages from login failures to prevent                                                // 90
  //     user enumeration.                                                                                             // 91
  /**                                                                                                                  // 93
   * @summary Set global accounts options.                                                                             //
   * @locus Anywhere                                                                                                   //
   * @param {Object} options                                                                                           //
   * @param {Boolean} options.sendVerificationEmail New users with an email address will receive an address verification email.
   * @param {Boolean} options.forbidClientAccountCreation Calls to [`createUser`](#accounts_createuser) from the client will be rejected. In addition, if you are using [accounts-ui](#accountsui), the "Create account" link will not be available.
   * @param {String | Function} options.restrictCreationByEmailDomain If set to a string, only allows new users if the domain part of their email address matches the string. If set to a function, only allows new users if the function returns true.  The function is passed the full email address of the proposed new user.  Works with password-based sign-in and external services that expose email addresses (Google, Facebook, GitHub). All existing users still can log in after enabling this option. Example: `Accounts.config({ restrictCreationByEmailDomain: 'school.edu' })`.
   * @param {Number} options.loginExpirationInDays The number of days from when a user logs in until their token expires and they are logged out. Defaults to 90. Set to `null` to disable login expiration.
   * @param {String} options.oauthSecretKey When using the `oauth-encryption` package, the 16 byte key using to encrypt sensitive account credentials in the database, encoded in base64.  This option may only be specifed on the server.  See packages/oauth-encryption/README.md for details.
   * @param {Number} options.passwordResetTokenExpirationInDays The number of days from when a link to reset password is sent until token expires and user can't reset password with the link anymore. Defaults to 3.
   * @param {Number} options.passwordEnrollTokenExpirationInDays The number of days from when a link to set inital password is sent until token expires and user can't set password with the link anymore. Defaults to 30.
   * @param {Boolean} options.ambiguousErrorMessages Return ambiguous error messages from login failures to prevent user enumeration. Defaults to false.
   */                                                                                                                  //
                                                                                                                       //
  AccountsCommon.prototype.config = function () {                                                                      //
    function config(options) {                                                                                         //
      var self = this; // We don't want users to accidentally only call Accounts.config on the                         // 107
      // client, where some of the options will have partial effects (eg removing                                      // 110
      // the "create account" button from accounts-ui if forbidClientAccountCreation                                   // 111
      // is set, or redirecting Google login to a specific-domain page) without                                        // 112
      // having their full effects.                                                                                    // 113
                                                                                                                       //
      if (Meteor.isServer) {                                                                                           // 114
        __meteor_runtime_config__.accountsConfigCalled = true;                                                         // 115
      } else if (!__meteor_runtime_config__.accountsConfigCalled) {                                                    // 116
        // XXX would be nice to "crash" the client and replace the UI with an error                                    // 117
        // message, but there's no trivial way to do this.                                                             // 118
        Meteor._debug("Accounts.config was called on the client but not on the " + "server; some configuration options may not take effect.");
      } // We need to validate the oauthSecretKey option at the time                                                   // 121
      // Accounts.config is called. We also deliberately don't store the                                               // 124
      // oauthSecretKey in Accounts._options.                                                                          // 125
                                                                                                                       //
                                                                                                                       //
      if (_.has(options, "oauthSecretKey")) {                                                                          // 126
        if (Meteor.isClient) throw new Error("The oauthSecretKey option may only be specified on the server");         // 127
        if (!Package["oauth-encryption"]) throw new Error("The oauth-encryption package must be loaded to set oauthSecretKey");
        Package["oauth-encryption"].OAuthEncryption.loadKey(options.oauthSecretKey);                                   // 131
        options = _.omit(options, "oauthSecretKey");                                                                   // 132
      } // validate option keys                                                                                        // 133
                                                                                                                       //
                                                                                                                       //
      var VALID_KEYS = ["sendVerificationEmail", "forbidClientAccountCreation", "passwordEnrollTokenExpirationInDays", "restrictCreationByEmailDomain", "loginExpirationInDays", "passwordResetTokenExpirationInDays", "ambiguousErrorMessages"];
                                                                                                                       //
      _.each(_.keys(options), function (key) {                                                                         // 139
        if (!_.contains(VALID_KEYS, key)) {                                                                            // 140
          throw new Error("Accounts.config: Invalid key: " + key);                                                     // 141
        }                                                                                                              // 142
      }); // set values in Accounts._options                                                                           // 143
                                                                                                                       //
                                                                                                                       //
      _.each(VALID_KEYS, function (key) {                                                                              // 146
        if (key in options) {                                                                                          // 147
          if (key in self._options) {                                                                                  // 148
            throw new Error("Can't set `" + key + "` more than once");                                                 // 149
          }                                                                                                            // 150
                                                                                                                       //
          self._options[key] = options[key];                                                                           // 151
        }                                                                                                              // 152
      });                                                                                                              // 153
    }                                                                                                                  // 154
                                                                                                                       //
    return config;                                                                                                     //
  }(); /**                                                                                                             //
        * @summary Register a callback to be called after a login attempt succeeds.                                    //
        * @locus Anywhere                                                                                              //
        * @param {Function} func The callback to be called when login is successful.                                   //
        */                                                                                                             //
                                                                                                                       //
  AccountsCommon.prototype.onLogin = function () {                                                                     //
    function onLogin(func) {                                                                                           //
      return this._onLoginHook.register(func);                                                                         // 162
    }                                                                                                                  // 163
                                                                                                                       //
    return onLogin;                                                                                                    //
  }(); /**                                                                                                             //
        * @summary Register a callback to be called after a login attempt fails.                                       //
        * @locus Anywhere                                                                                              //
        * @param {Function} func The callback to be called after the login has failed.                                 //
        */                                                                                                             //
                                                                                                                       //
  AccountsCommon.prototype.onLoginFailure = function () {                                                              //
    function onLoginFailure(func) {                                                                                    //
      return this._onLoginFailureHook.register(func);                                                                  // 171
    }                                                                                                                  // 172
                                                                                                                       //
    return onLoginFailure;                                                                                             //
  }(); /**                                                                                                             //
        * @summary Register a callback to be called after a logout attempt succeeds.                                   //
        * @locus Anywhere                                                                                              //
        * @param {Function} func The callback to be called when logout is successful.                                  //
        */                                                                                                             //
                                                                                                                       //
  AccountsCommon.prototype.onLogout = function () {                                                                    //
    function onLogout(func) {                                                                                          //
      return this._onLogoutHook.register(func);                                                                        // 180
    }                                                                                                                  // 181
                                                                                                                       //
    return onLogout;                                                                                                   //
  }();                                                                                                                 //
                                                                                                                       //
  AccountsCommon.prototype._initConnection = function () {                                                             //
    function _initConnection(options) {                                                                                //
      if (!Meteor.isClient) {                                                                                          // 184
        return;                                                                                                        // 185
      } // The connection used by the Accounts system. This is the connection                                          // 186
      // that will get logged in by Meteor.login(), and this is the                                                    // 189
      // connection whose login state will be reflected by Meteor.userId().                                            // 190
      //                                                                                                               // 191
      // It would be much preferable for this to be in accounts_client.js,                                             // 192
      // but it has to be here because it's needed to create the                                                       // 193
      // Meteor.users collection.                                                                                      // 194
                                                                                                                       //
                                                                                                                       //
      if (options.connection) {                                                                                        // 196
        this.connection = options.connection;                                                                          // 197
      } else if (options.ddpUrl) {                                                                                     // 198
        this.connection = DDP.connect(options.ddpUrl);                                                                 // 199
      } else if (typeof __meteor_runtime_config__ !== "undefined" && __meteor_runtime_config__.ACCOUNTS_CONNECTION_URL) {
        // Temporary, internal hook to allow the server to point the client                                            // 202
        // to a different authentication server. This is for a very                                                    // 203
        // particular use case that comes up when implementing a oauth                                                 // 204
        // server. Unsupported and may go away at any point in time.                                                   // 205
        //                                                                                                             // 206
        // We will eventually provide a general way to use account-base                                                // 207
        // against any DDP connection, not just one special one.                                                       // 208
        this.connection = DDP.connect(__meteor_runtime_config__.ACCOUNTS_CONNECTION_URL);                              // 209
      } else {                                                                                                         // 211
        this.connection = Meteor.connection;                                                                           // 212
      }                                                                                                                // 213
    }                                                                                                                  // 214
                                                                                                                       //
    return _initConnection;                                                                                            //
  }();                                                                                                                 //
                                                                                                                       //
  AccountsCommon.prototype._getTokenLifetimeMs = function () {                                                         //
    function _getTokenLifetimeMs() {                                                                                   //
      return (this._options.loginExpirationInDays || DEFAULT_LOGIN_EXPIRATION_DAYS) * 24 * 60 * 60 * 1000;             // 217
    }                                                                                                                  // 219
                                                                                                                       //
    return _getTokenLifetimeMs;                                                                                        //
  }();                                                                                                                 //
                                                                                                                       //
  AccountsCommon.prototype._getPasswordResetTokenLifetimeMs = function () {                                            //
    function _getPasswordResetTokenLifetimeMs() {                                                                      //
      return (this._options.passwordResetTokenExpirationInDays || DEFAULT_PASSWORD_RESET_TOKEN_EXPIRATION_DAYS) * 24 * 60 * 60 * 1000;
    }                                                                                                                  // 224
                                                                                                                       //
    return _getPasswordResetTokenLifetimeMs;                                                                           //
  }();                                                                                                                 //
                                                                                                                       //
  AccountsCommon.prototype._getPasswordEnrollTokenLifetimeMs = function () {                                           //
    function _getPasswordEnrollTokenLifetimeMs() {                                                                     //
      return (this._options.passwordEnrollTokenExpirationInDays || DEFAULT_PASSWORD_ENROLL_TOKEN_EXPIRATION_DAYS) * 24 * 60 * 60 * 1000;
    }                                                                                                                  // 229
                                                                                                                       //
    return _getPasswordEnrollTokenLifetimeMs;                                                                          //
  }();                                                                                                                 //
                                                                                                                       //
  AccountsCommon.prototype._tokenExpiration = function () {                                                            //
    function _tokenExpiration(when) {                                                                                  //
      // We pass when through the Date constructor for backwards compatibility;                                        // 232
      // `when` used to be a number.                                                                                   // 233
      return new Date(new Date(when).getTime() + this._getTokenLifetimeMs());                                          // 234
    }                                                                                                                  // 235
                                                                                                                       //
    return _tokenExpiration;                                                                                           //
  }();                                                                                                                 //
                                                                                                                       //
  AccountsCommon.prototype._tokenExpiresSoon = function () {                                                           //
    function _tokenExpiresSoon(when) {                                                                                 //
      var minLifetimeMs = .1 * this._getTokenLifetimeMs();                                                             // 238
                                                                                                                       //
      var minLifetimeCapMs = MIN_TOKEN_LIFETIME_CAP_SECS * 1000;                                                       // 239
      if (minLifetimeMs > minLifetimeCapMs) minLifetimeMs = minLifetimeCapMs;                                          // 240
      return new Date() > new Date(when) - minLifetimeMs;                                                              // 242
    }                                                                                                                  // 243
                                                                                                                       //
    return _tokenExpiresSoon;                                                                                          //
  }();                                                                                                                 //
                                                                                                                       //
  return AccountsCommon;                                                                                               //
}();                                                                                                                   //
                                                                                                                       //
var Ap = AccountsCommon.prototype; // Note that Accounts is defined separately in accounts_client.js and               // 246
// accounts_server.js.                                                                                                 // 249
/**                                                                                                                    // 251
 * @summary Get the current user id, or `null` if no user is logged in. A reactive data source.                        //
 * @locus Anywhere but publish functions                                                                               //
 * @importFromPackage meteor                                                                                           //
 */                                                                                                                    //
                                                                                                                       //
Meteor.userId = function () {                                                                                          // 256
  return Accounts.userId();                                                                                            // 257
}; /**                                                                                                                 // 258
    * @summary Get the current user record, or `null` if no user is logged in. A reactive data source.                 //
    * @locus Anywhere but publish functions                                                                            //
    * @importFromPackage meteor                                                                                        //
    */                                                                                                                 //
                                                                                                                       //
Meteor.user = function () {                                                                                            // 265
  return Accounts.user();                                                                                              // 266
}; // how long (in days) until a login token expires                                                                   // 267
                                                                                                                       //
                                                                                                                       //
var DEFAULT_LOGIN_EXPIRATION_DAYS = 90; // how long (in days) until reset password token expires                       // 270
                                                                                                                       //
var DEFAULT_PASSWORD_RESET_TOKEN_EXPIRATION_DAYS = 3; // how long (in days) until enrol password token expires         // 272
                                                                                                                       //
var DEFAULT_PASSWORD_ENROLL_TOKEN_EXPIRATION_DAYS = 30; // Clients don't try to auto-login with a token that is going to expire within
// .1 * DEFAULT_LOGIN_EXPIRATION_DAYS, capped at MIN_TOKEN_LIFETIME_CAP_SECS.                                          // 276
// Tries to avoid abrupt disconnects from expiring tokens.                                                             // 277
                                                                                                                       //
var MIN_TOKEN_LIFETIME_CAP_SECS = 3600; // one hour                                                                    // 278
// how often (in milliseconds) we check for expired tokens                                                             // 279
                                                                                                                       //
EXPIRE_TOKENS_INTERVAL_MS = 600 * 1000; // 10 minutes                                                                  // 280
// how long we wait before logging out clients when Meteor.logoutOtherClients is                                       // 281
// called                                                                                                              // 282
                                                                                                                       //
CONNECTION_CLOSE_DELAY_MS = 10 * 1000; // loginServiceConfiguration and ConfigError are maintained for backwards compatibility
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 286
  var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;                                    // 287
  Ap.loginServiceConfiguration = ServiceConfiguration.configurations;                                                  // 289
  Ap.ConfigError = ServiceConfiguration.ConfigError;                                                                   // 290
}); // Thrown when the user cancels the login process (eg, closes an oauth                                             // 291
// popup, declines retina scan, etc)                                                                                   // 294
                                                                                                                       //
var lceName = 'Accounts.LoginCancelledError';                                                                          // 295
Ap.LoginCancelledError = Meteor.makeErrorType(lceName, function (description) {                                        // 296
  this.message = description;                                                                                          // 299
});                                                                                                                    // 300
Ap.LoginCancelledError.prototype.name = lceName; // This is used to transmit specific subclass errors over the wire. We should
// come up with a more generic way to do this (eg, with some sort of symbolic                                          // 305
// error code rather than a number).                                                                                   // 306
                                                                                                                       //
Ap.LoginCancelledError.numericError = 0x8acdc2f;                                                                       // 307
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"localstorage_token.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-base/localstorage_token.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var AccountsClient = void 0;                                                                                           // 1
module.watch(require("./accounts_client.js"), {                                                                        // 1
  AccountsClient: function (v) {                                                                                       // 1
    AccountsClient = v;                                                                                                // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Ap = AccountsClient.prototype; // This file deals with storing a login token and user id in the                    // 2
// browser's localStorage facility. It polls local storage every few                                                   // 5
// seconds to synchronize login state between multiple tabs in the same                                                // 6
// browser.                                                                                                            // 7
// Login with a Meteor access token. This is the only public function                                                  // 9
// here.                                                                                                               // 10
                                                                                                                       //
Meteor.loginWithToken = function (token, callback) {                                                                   // 11
  return Accounts.loginWithToken(token, callback);                                                                     // 12
};                                                                                                                     // 13
                                                                                                                       //
Ap.loginWithToken = function (token, callback) {                                                                       // 15
  this.callLoginMethod({                                                                                               // 16
    methodArguments: [{                                                                                                // 17
      resume: token                                                                                                    // 18
    }],                                                                                                                // 17
    userCallback: callback                                                                                             // 20
  });                                                                                                                  // 16
}; // Semi-internal API. Call this function to re-enable auto login after                                              // 22
// if it was disabled at startup.                                                                                      // 25
                                                                                                                       //
                                                                                                                       //
Ap._enableAutoLogin = function () {                                                                                    // 26
  this._autoLoginEnabled = true;                                                                                       // 27
                                                                                                                       //
  this._pollStoredLoginToken();                                                                                        // 28
}; ///                                                                                                                 // 29
/// STORING                                                                                                            // 33
///                                                                                                                    // 34
// Call this from the top level of the test file for any test that does                                                // 36
// logging in and out, to protect multiple tabs running the same tests                                                 // 37
// simultaneously from interfering with each others' localStorage.                                                     // 38
                                                                                                                       //
                                                                                                                       //
Ap._isolateLoginTokenForTest = function () {                                                                           // 39
  this.LOGIN_TOKEN_KEY = this.LOGIN_TOKEN_KEY + Random.id();                                                           // 40
  this.USER_ID_KEY = this.USER_ID_KEY + Random.id();                                                                   // 41
};                                                                                                                     // 42
                                                                                                                       //
Ap._storeLoginToken = function (userId, token, tokenExpires) {                                                         // 44
  Meteor._localStorage.setItem(this.USER_ID_KEY, userId);                                                              // 45
                                                                                                                       //
  Meteor._localStorage.setItem(this.LOGIN_TOKEN_KEY, token);                                                           // 46
                                                                                                                       //
  if (!tokenExpires) tokenExpires = this._tokenExpiration(new Date());                                                 // 47
                                                                                                                       //
  Meteor._localStorage.setItem(this.LOGIN_TOKEN_EXPIRES_KEY, tokenExpires); // to ensure that the localstorage poller doesn't end up trying to
  // connect a second time                                                                                             // 52
                                                                                                                       //
                                                                                                                       //
  this._lastLoginTokenWhenPolled = token;                                                                              // 53
};                                                                                                                     // 54
                                                                                                                       //
Ap._unstoreLoginToken = function () {                                                                                  // 56
  Meteor._localStorage.removeItem(this.USER_ID_KEY);                                                                   // 57
                                                                                                                       //
  Meteor._localStorage.removeItem(this.LOGIN_TOKEN_KEY);                                                               // 58
                                                                                                                       //
  Meteor._localStorage.removeItem(this.LOGIN_TOKEN_EXPIRES_KEY); // to ensure that the localstorage poller doesn't end up trying to
  // connect a second time                                                                                             // 62
                                                                                                                       //
                                                                                                                       //
  this._lastLoginTokenWhenPolled = null;                                                                               // 63
}; // This is private, but it is exported for now because it is used by a                                              // 64
// test in accounts-password.                                                                                          // 67
//                                                                                                                     // 68
                                                                                                                       //
                                                                                                                       //
Ap._storedLoginToken = function () {                                                                                   // 69
  return Meteor._localStorage.getItem(this.LOGIN_TOKEN_KEY);                                                           // 70
};                                                                                                                     // 71
                                                                                                                       //
Ap._storedLoginTokenExpires = function () {                                                                            // 73
  return Meteor._localStorage.getItem(this.LOGIN_TOKEN_EXPIRES_KEY);                                                   // 74
};                                                                                                                     // 75
                                                                                                                       //
Ap._storedUserId = function () {                                                                                       // 77
  return Meteor._localStorage.getItem(this.USER_ID_KEY);                                                               // 78
};                                                                                                                     // 79
                                                                                                                       //
Ap._unstoreLoginTokenIfExpiresSoon = function () {                                                                     // 81
  var tokenExpires = this._storedLoginTokenExpires();                                                                  // 82
                                                                                                                       //
  if (tokenExpires && this._tokenExpiresSoon(new Date(tokenExpires))) {                                                // 83
    this._unstoreLoginToken();                                                                                         // 84
  }                                                                                                                    // 85
}; ///                                                                                                                 // 86
/// AUTO-LOGIN                                                                                                         // 89
///                                                                                                                    // 90
                                                                                                                       //
                                                                                                                       //
Ap._initLocalStorage = function () {                                                                                   // 92
  var self = this; // Key names to use in localStorage                                                                 // 93
                                                                                                                       //
  self.LOGIN_TOKEN_KEY = "Meteor.loginToken";                                                                          // 96
  self.LOGIN_TOKEN_EXPIRES_KEY = "Meteor.loginTokenExpires";                                                           // 97
  self.USER_ID_KEY = "Meteor.userId";                                                                                  // 98
  var rootUrlPathPrefix = __meteor_runtime_config__.ROOT_URL_PATH_PREFIX;                                              // 100
                                                                                                                       //
  if (rootUrlPathPrefix || this.connection !== Meteor.connection) {                                                    // 101
    // We want to keep using the same keys for existing apps that do not                                               // 102
    // set a custom ROOT_URL_PATH_PREFIX, so that most users will not have                                             // 103
    // to log in again after an app updates to a version of Meteor that                                                // 104
    // contains this code, but it's generally preferable to namespace the                                              // 105
    // keys so that connections from distinct apps to distinct DDP URLs                                                // 106
    // will be distinct in Meteor._localStorage.                                                                       // 107
    var namespace = ":" + this.connection._stream.rawUrl;                                                              // 108
                                                                                                                       //
    if (rootUrlPathPrefix) {                                                                                           // 109
      namespace += ":" + rootUrlPathPrefix;                                                                            // 110
    }                                                                                                                  // 111
                                                                                                                       //
    self.LOGIN_TOKEN_KEY += namespace;                                                                                 // 112
    self.LOGIN_TOKEN_EXPIRES_KEY += namespace;                                                                         // 113
    self.USER_ID_KEY += namespace;                                                                                     // 114
  }                                                                                                                    // 115
                                                                                                                       //
  if (self._autoLoginEnabled) {                                                                                        // 117
    // Immediately try to log in via local storage, so that any DDP                                                    // 118
    // messages are sent after we have established our user account                                                    // 119
    self._unstoreLoginTokenIfExpiresSoon();                                                                            // 120
                                                                                                                       //
    var token = self._storedLoginToken();                                                                              // 121
                                                                                                                       //
    if (token) {                                                                                                       // 122
      // On startup, optimistically present us as logged in while the                                                  // 123
      // request is in flight. This reduces page flicker on startup.                                                   // 124
      var userId = self._storedUserId();                                                                               // 125
                                                                                                                       //
      userId && self.connection.setUserId(userId);                                                                     // 126
      self.loginWithToken(token, function (err) {                                                                      // 127
        if (err) {                                                                                                     // 128
          Meteor._debug("Error logging in with token: " + err);                                                        // 129
                                                                                                                       //
          self.makeClientLoggedOut();                                                                                  // 130
        }                                                                                                              // 131
                                                                                                                       //
        self._pageLoadLogin({                                                                                          // 133
          type: "resume",                                                                                              // 134
          allowed: !err,                                                                                               // 135
          error: err,                                                                                                  // 136
          methodName: "login",                                                                                         // 137
          // XXX This is duplicate code with loginWithToken, but                                                       // 138
          // loginWithToken can also be called at other times besides                                                  // 139
          // page load.                                                                                                // 140
          methodArguments: [{                                                                                          // 141
            resume: token                                                                                              // 141
          }]                                                                                                           // 141
        });                                                                                                            // 133
      });                                                                                                              // 143
    }                                                                                                                  // 144
  } // Poll local storage every 3 seconds to login if someone logged in in                                             // 145
  // another tab                                                                                                       // 148
                                                                                                                       //
                                                                                                                       //
  self._lastLoginTokenWhenPolled = token;                                                                              // 149
                                                                                                                       //
  if (self._pollIntervalTimer) {                                                                                       // 151
    // Unlikely that _initLocalStorage will be called more than once for                                               // 152
    // the same AccountsClient instance, but just in case...                                                           // 153
    clearInterval(self._pollIntervalTimer);                                                                            // 154
  }                                                                                                                    // 155
                                                                                                                       //
  self._pollIntervalTimer = setInterval(function () {                                                                  // 157
    self._pollStoredLoginToken();                                                                                      // 158
  }, 3000);                                                                                                            // 159
};                                                                                                                     // 160
                                                                                                                       //
Ap._pollStoredLoginToken = function () {                                                                               // 162
  var self = this;                                                                                                     // 163
                                                                                                                       //
  if (!self._autoLoginEnabled) {                                                                                       // 165
    return;                                                                                                            // 166
  }                                                                                                                    // 167
                                                                                                                       //
  var currentLoginToken = self._storedLoginToken(); // != instead of !== just to make sure undefined and null are treated the same
                                                                                                                       //
                                                                                                                       //
  if (self._lastLoginTokenWhenPolled != currentLoginToken) {                                                           // 172
    if (currentLoginToken) {                                                                                           // 173
      self.loginWithToken(currentLoginToken, function (err) {                                                          // 174
        if (err) {                                                                                                     // 175
          self.makeClientLoggedOut();                                                                                  // 176
        }                                                                                                              // 177
      });                                                                                                              // 178
    } else {                                                                                                           // 179
      self.logout();                                                                                                   // 180
    }                                                                                                                  // 181
  }                                                                                                                    // 182
                                                                                                                       //
  self._lastLoginTokenWhenPolled = currentLoginToken;                                                                  // 184
};                                                                                                                     // 185
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"url_client.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-base/url_client.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
  AccountsTest: function () {                                                                                          // 1
    return AccountsTest;                                                                                               // 1
  }                                                                                                                    // 1
});                                                                                                                    // 1
var AccountsClient = void 0;                                                                                           // 1
module.watch(require("./accounts_client.js"), {                                                                        // 1
  AccountsClient: function (v) {                                                                                       // 1
    AccountsClient = v;                                                                                                // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Ap = AccountsClient.prototype; // All of the special hash URLs we support for accounts interactions                // 3
                                                                                                                       //
var accountsPaths = ["reset-password", "verify-email", "enroll-account"];                                              // 6
var savedHash = window.location.hash;                                                                                  // 8
                                                                                                                       //
Ap._initUrlMatching = function () {                                                                                    // 10
  // By default, allow the autologin process to happen.                                                                // 11
  this._autoLoginEnabled = true; // We only support one callback per URL.                                              // 12
                                                                                                                       //
  this._accountsCallbacks = {}; // Try to match the saved value of window.location.hash.                               // 15
                                                                                                                       //
  this._attemptToMatchHash();                                                                                          // 18
}; // Separate out this functionality for testing                                                                      // 19
                                                                                                                       //
                                                                                                                       //
Ap._attemptToMatchHash = function () {                                                                                 // 23
  attemptToMatchHash(this, savedHash, defaultSuccessHandler);                                                          // 24
}; // Note that both arguments are optional and are currently only passed by                                           // 25
// accounts_url_tests.js.                                                                                              // 28
                                                                                                                       //
                                                                                                                       //
function attemptToMatchHash(accounts, hash, success) {                                                                 // 29
  _.each(accountsPaths, function (urlPart) {                                                                           // 30
    var token;                                                                                                         // 31
    var tokenRegex = new RegExp("^\\#\\/" + urlPart + "\\/(.*)$");                                                     // 33
    var match = hash.match(tokenRegex);                                                                                // 34
                                                                                                                       //
    if (match) {                                                                                                       // 36
      token = match[1]; // XXX COMPAT WITH 0.9.3                                                                       // 37
                                                                                                                       //
      if (urlPart === "reset-password") {                                                                              // 40
        accounts._resetPasswordToken = token;                                                                          // 41
      } else if (urlPart === "verify-email") {                                                                         // 42
        accounts._verifyEmailToken = token;                                                                            // 43
      } else if (urlPart === "enroll-account") {                                                                       // 44
        accounts._enrollAccountToken = token;                                                                          // 45
      }                                                                                                                // 46
    } else {                                                                                                           // 47
      return;                                                                                                          // 48
    } // If no handlers match the hash, then maybe it's meant to be consumed                                           // 49
    // by some entirely different code, so we only clear it the first time                                             // 52
    // a handler successfully matches. Note that later handlers reuse the                                              // 53
    // savedHash, so clearing window.location.hash here will not interfere                                             // 54
    // with their needs.                                                                                               // 55
                                                                                                                       //
                                                                                                                       //
    window.location.hash = ""; // Do some stuff with the token we matched                                              // 56
                                                                                                                       //
    success.call(accounts, token, urlPart);                                                                            // 59
  });                                                                                                                  // 60
}                                                                                                                      // 61
                                                                                                                       //
function defaultSuccessHandler(token, urlPart) {                                                                       // 63
  var self = this; // put login in a suspended state to wait for the interaction to finish                             // 64
                                                                                                                       //
  self._autoLoginEnabled = false; // wait for other packages to register callbacks                                     // 67
                                                                                                                       //
  Meteor.startup(function () {                                                                                         // 70
    // if a callback has been registered for this kind of token, call it                                               // 71
    if (self._accountsCallbacks[urlPart]) {                                                                            // 72
      self._accountsCallbacks[urlPart](token, function () {                                                            // 73
        self._enableAutoLogin();                                                                                       // 74
      });                                                                                                              // 75
    }                                                                                                                  // 76
  });                                                                                                                  // 77
} // Export for testing                                                                                                // 78
                                                                                                                       //
                                                                                                                       //
var AccountsTest = {                                                                                                   // 81
  attemptToMatchHash: function (hash, success) {                                                                       // 82
    return attemptToMatchHash(Accounts, hash, success);                                                                // 83
  }                                                                                                                    // 84
};                                                                                                                     // 81
                                                                                                                       //
// XXX these should be moved to accounts-password eventually. Right now                                                // 87
// this is prevented by the need to set autoLoginEnabled=false, but in                                                 // 88
// some bright future we won't need to do that anymore.                                                                // 89
/**                                                                                                                    // 91
 * @summary Register a function to call when a reset password link is clicked                                          //
 * in an email sent by                                                                                                 //
 * [`Accounts.sendResetPasswordEmail`](#accounts_sendresetpasswordemail).                                              //
 * This function should be called in top-level code, not inside                                                        //
 * `Meteor.startup()`.                                                                                                 //
 * @memberof! Accounts                                                                                                 //
 * @name onResetPasswordLink                                                                                           //
 * @param  {Function} callback The function to call. It is given two arguments:                                        //
 *                                                                                                                     //
 * 1. `token`: A password reset token that can be passed to                                                            //
 * [`Accounts.resetPassword`](#accounts_resetpassword).                                                                //
 * 2. `done`: A function to call when the password reset UI flow is complete. The normal                               //
 * login process is suspended until this function is called, so that the                                               //
 * password for user A can be reset even if user B was logged in.                                                      //
 * @locus Client                                                                                                       //
 */Ap.onResetPasswordLink = function (callback) {                                                                      //
  if (this._accountsCallbacks["reset-password"]) {                                                                     // 109
    Meteor._debug("Accounts.onResetPasswordLink was called more than once. " + "Only one callback added will be executed.");
  }                                                                                                                    // 112
                                                                                                                       //
  this._accountsCallbacks["reset-password"] = callback;                                                                // 114
}; /**                                                                                                                 // 115
    * @summary Register a function to call when an email verification link is                                          //
    * clicked in an email sent by                                                                                      //
    * [`Accounts.sendVerificationEmail`](#accounts_sendverificationemail).                                             //
    * This function should be called in top-level code, not inside                                                     //
    * `Meteor.startup()`.                                                                                              //
    * @memberof! Accounts                                                                                              //
    * @name onEmailVerificationLink                                                                                    //
    * @param  {Function} callback The function to call. It is given two arguments:                                     //
    *                                                                                                                  //
    * 1. `token`: An email verification token that can be passed to                                                    //
    * [`Accounts.verifyEmail`](#accounts_verifyemail).                                                                 //
    * 2. `done`: A function to call when the email verification UI flow is complete.                                   //
    * The normal login process is suspended until this function is called, so                                          //
    * that the user can be notified that they are verifying their email before                                         //
    * being logged in.                                                                                                 //
    * @locus Client                                                                                                    //
    */                                                                                                                 //
                                                                                                                       //
Ap.onEmailVerificationLink = function (callback) {                                                                     // 135
  if (this._accountsCallbacks["verify-email"]) {                                                                       // 136
    Meteor._debug("Accounts.onEmailVerificationLink was called more than once. " + "Only one callback added will be executed.");
  }                                                                                                                    // 139
                                                                                                                       //
  this._accountsCallbacks["verify-email"] = callback;                                                                  // 141
}; /**                                                                                                                 // 142
    * @summary Register a function to call when an account enrollment link is                                          //
    * clicked in an email sent by                                                                                      //
    * [`Accounts.sendEnrollmentEmail`](#accounts_sendenrollmentemail).                                                 //
    * This function should be called in top-level code, not inside                                                     //
    * `Meteor.startup()`.                                                                                              //
    * @memberof! Accounts                                                                                              //
    * @name onEnrollmentLink                                                                                           //
    * @param  {Function} callback The function to call. It is given two arguments:                                     //
    *                                                                                                                  //
    * 1. `token`: A password reset token that can be passed to                                                         //
    * [`Accounts.resetPassword`](#accounts_resetpassword) to give the newly                                            //
    * enrolled account a password.                                                                                     //
    * 2. `done`: A function to call when the enrollment UI flow is complete.                                           //
    * The normal login process is suspended until this function is called, so that                                     //
    * user A can be enrolled even if user B was logged in.                                                             //
    * @locus Client                                                                                                    //
    */                                                                                                                 //
                                                                                                                       //
Ap.onEnrollmentLink = function (callback) {                                                                            // 162
  if (this._accountsCallbacks["enroll-account"]) {                                                                     // 163
    Meteor._debug("Accounts.onEnrollmentLink was called more than once. " + "Only one callback added will be executed.");
  }                                                                                                                    // 166
                                                                                                                       //
  this._accountsCallbacks["enroll-account"] = callback;                                                                // 168
};                                                                                                                     // 169
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
var exports = require("./node_modules/meteor/accounts-base/client_main.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['accounts-base'] = exports, {
  Accounts: Accounts
});

})();
