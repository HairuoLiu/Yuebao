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
var check = Package.check.check;
var Match = Package.check.Match;
var Mongo = Package.mongo.Mongo;
var _ = Package.underscore._;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

/* Package-scope variables */
var EasySearch;

var require = meteorInstall({"node_modules":{"meteor":{"easysearch:core":{"lib":{"core":{"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/easysearch_core/lib/core/index.js                                                                     //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                           //
                                                                                                                  //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                  //
                                                                                                                  //
var _createClass2 = require("babel-runtime/helpers/createClass");                                                 //
                                                                                                                  //
var _createClass3 = _interopRequireDefault(_createClass2);                                                        //
                                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                 //
                                                                                                                  //
var Mongo = void 0;                                                                                               // 1
module.watch(require("meteor/mongo"), {                                                                           // 1
  Mongo: function (v) {                                                                                           // 1
    Mongo = v;                                                                                                    // 1
  }                                                                                                               // 1
}, 0);                                                                                                            // 1
var Engine = void 0;                                                                                              // 1
module.watch(require("./engine"), {                                                                               // 1
  "default": function (v) {                                                                                       // 1
    Engine = v;                                                                                                   // 1
  }                                                                                                               // 1
}, 1);                                                                                                            // 1
                                                                                                                  //
/**                                                                                                               // 4
 * An Index represents the main entry point for searching with EasySearch. It relies on                           //
 * the given engine to have the search functionality and defines the data that should be searchable.              //
 *                                                                                                                //
 * @type {Index}                                                                                                  //
 */var Index = function () {                                                                                      //
  /**                                                                                                             // 11
   * Constructor                                                                                                  //
   *                                                                                                              //
   * @param {Object} config Configuration                                                                         //
   *                                                                                                              //
   * @constructor                                                                                                 //
   */function Index(config) {                                                                                     //
    (0, _classCallCheck3.default)(this, Index);                                                                   // 18
    check(config, Object);                                                                                        // 19
    check(config.fields, [String]);                                                                               // 20
    if (!config.ignoreCollectionCheck) check(config.collection, Mongo.Collection);                                // 21
                                                                                                                  //
    if (!(config.engine instanceof Engine)) {                                                                     // 23
      throw new Meteor.Error('invalid-engine', 'engine needs to be instanceof Engine');                           // 24
    }                                                                                                             // 25
                                                                                                                  //
    if (!config.name) config.name = (config.collection._name || '').toLowerCase();                                // 27
    this.config = _.extend(Index.defaultConfiguration, config);                                                   // 30
    this.defaultSearchOptions = _.defaults({}, this.config.defaultSearchOptions, {                                // 31
      limit: 10,                                                                                                  // 34
      skip: 0,                                                                                                    // 34
      props: {}                                                                                                   // 34
    }); // Engine specific code on index creation                                                                 // 34
                                                                                                                  //
    config.engine.onIndexCreate(this.config);                                                                     // 38
  } /**                                                                                                           // 39
     * Default configuration for an index.                                                                        //
     *                                                                                                            //
     * @returns {Object}                                                                                          //
     */                                                                                                           //
                                                                                                                  //
  /**                                                                                                             // 54
   * Search the index.                                                                                            //
   *                                                                                                              //
   * @param {Object|String} searchDefinition Search definition                                                    //
   * @param {Object}        options          Options                                                              //
   *                                                                                                              //
   * @returns {Cursor}                                                                                            //
   */Index.prototype.search = function () {                                                                       //
    function search(searchDefinition) {                                                                           //
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};                       // 62
      this.config.engine.checkSearchParam(searchDefinition, this.config);                                         // 63
      check(options, {                                                                                            // 65
        limit: Match.Optional(Number),                                                                            // 66
        skip: Match.Optional(Number),                                                                             // 67
        props: Match.Optional(Object),                                                                            // 68
        userId: Match.Optional(Match.OneOf(String, null))                                                         // 69
      });                                                                                                         // 65
      options = {                                                                                                 // 72
        search: this._getSearchOptions(options),                                                                  // 73
        index: this.config                                                                                        // 74
      };                                                                                                          // 72
                                                                                                                  //
      if (!this.config.permission(options.search)) {                                                              // 77
        throw new Meteor.Error('not-allowed', "Not allowed to search this index!");                               // 78
      }                                                                                                           // 79
                                                                                                                  //
      return this.config.engine.search(searchDefinition, options);                                                // 81
    }                                                                                                             // 82
                                                                                                                  //
    return search;                                                                                                //
  }(); /**                                                                                                        //
        * Returns the search options based on the given options.                                                  //
        *                                                                                                         //
        * @param {Object} options Options to use                                                                  //
        *                                                                                                         //
        * @returns {Object}                                                                                       //
        */                                                                                                        //
                                                                                                                  //
  Index.prototype._getSearchOptions = function () {                                                               //
    function _getSearchOptions(options) {                                                                         //
      if (!Meteor.isServer) {                                                                                     // 92
        delete options.userId;                                                                                    // 93
      }                                                                                                           // 94
                                                                                                                  //
      if (typeof options.userId === "undefined" && Meteor.userId) {                                               // 96
        options.userId = Meteor.userId();                                                                         // 97
      }                                                                                                           // 98
                                                                                                                  //
      return _.defaults(options, this.defaultSearchOptions);                                                      // 100
    }                                                                                                             // 101
                                                                                                                  //
    return _getSearchOptions;                                                                                     //
  }();                                                                                                            //
                                                                                                                  //
  (0, _createClass3.default)(Index, null, [{                                                                      //
    key: "defaultConfiguration",                                                                                  //
    get: function () {                                                                                            //
      return {                                                                                                    // 47
        permission: function () {                                                                                 // 48
          return true;                                                                                            // 48
        },                                                                                                        // 48
        defaultSearchOptions: {},                                                                                 // 49
        countUpdateIntervalMs: 2000                                                                               // 50
      };                                                                                                          // 47
    }                                                                                                             // 52
  }]);                                                                                                            //
  return Index;                                                                                                   //
}();                                                                                                              //
                                                                                                                  //
module.exportDefault(Index);                                                                                      // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"engine.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/easysearch_core/lib/core/engine.js                                                                    //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                           //
                                                                                                                  //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                  //
                                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                 //
                                                                                                                  //
/**                                                                                                               // 1
 * An Engine is the technology used for searching with EasySearch, with                                           //
 * customizable configuration to how it interacts with the data from the Index.                                   //
 *                                                                                                                //
 * @type {Engine}                                                                                                 //
 */var Engine = function () {                                                                                     //
  /**                                                                                                             // 8
   * Constructor                                                                                                  //
   *                                                                                                              //
   * @param {Object} config configuration                                                                         //
   *                                                                                                              //
   * @constructor                                                                                                 //
   */function Engine() {                                                                                          //
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};                          // 15
    (0, _classCallCheck3.default)(this, Engine);                                                                  // 15
                                                                                                                  //
    if (this.constructor === Engine) {                                                                            // 16
      throw new Error('Cannot initialize instance of Engine');                                                    // 17
    }                                                                                                             // 18
                                                                                                                  //
    if (!_.isFunction(this.search)) {                                                                             // 20
      throw new Error('Engine needs to implement search method');                                                 // 21
    }                                                                                                             // 22
                                                                                                                  //
    this.config = _.defaults({}, config, this.defaultConfiguration());                                            // 24
  } /**                                                                                                           // 25
     * Return default configuration.                                                                              //
     *                                                                                                            //
     * @returns {Object}                                                                                          //
     */                                                                                                           //
                                                                                                                  //
  Engine.prototype.defaultConfiguration = function () {                                                           //
    function defaultConfiguration() {                                                                             //
      return {};                                                                                                  // 33
    }                                                                                                             // 34
                                                                                                                  //
    return defaultConfiguration;                                                                                  //
  }(); /**                                                                                                        //
        * Call a configuration method with the engine scope.                                                      //
        *                                                                                                         //
        * @param {String} methodName Method name                                                                  //
        * @param {Object} args       Arguments for the method                                                     //
        *                                                                                                         //
        * @returns {*}                                                                                            //
        */                                                                                                        //
                                                                                                                  //
  Engine.prototype.callConfigMethod = function () {                                                               //
    function callConfigMethod(methodName) {                                                                       //
      check(methodName, String);                                                                                  // 45
      var func = this.config[methodName];                                                                         // 47
                                                                                                                  //
      if (func) {                                                                                                 // 49
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];                                                                       // 44
        }                                                                                                         // 49
                                                                                                                  //
        return func.apply(this, args);                                                                            // 50
      }                                                                                                           // 51
    }                                                                                                             // 52
                                                                                                                  //
    return callConfigMethod;                                                                                      //
  }(); /**                                                                                                        //
        * Check the given search parameter for validity                                                           //
        *                                                                                                         //
        * @param search                                                                                           //
        */                                                                                                        //
                                                                                                                  //
  Engine.prototype.checkSearchParam = function () {                                                               //
    function checkSearchParam(search) {                                                                           //
      check(search, String);                                                                                      // 60
    }                                                                                                             // 61
                                                                                                                  //
    return checkSearchParam;                                                                                      //
  }(); /**                                                                                                        //
        *Code to run on index creation                                                                            //
        *                                                                                                         //
        * @param {Object} indexConfig Index configuraction                                                        //
        */                                                                                                        //
                                                                                                                  //
  Engine.prototype.onIndexCreate = function () {                                                                  //
    function onIndexCreate(indexConfig) {                                                                         //
      if (!indexConfig.allowedFields) {                                                                           // 69
        indexConfig.allowedFields = indexConfig.fields;                                                           // 70
      }                                                                                                           // 71
    }                                                                                                             // 72
                                                                                                                  //
    return onIndexCreate;                                                                                         //
  }();                                                                                                            //
                                                                                                                  //
  return Engine;                                                                                                  //
}();                                                                                                              //
                                                                                                                  //
module.exportDefault(Engine);                                                                                     // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"reactive-engine.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/easysearch_core/lib/core/reactive-engine.js                                                           //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                           //
                                                                                                                  //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                  //
                                                                                                                  //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                     //
                                                                                                                  //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                            //
                                                                                                                  //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                       //
                                                                                                                  //
var _inherits3 = _interopRequireDefault(_inherits2);                                                              //
                                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                 //
                                                                                                                  //
var SearchCollection = void 0;                                                                                    // 1
module.watch(require("./search-collection"), {                                                                    // 1
  "default": function (v) {                                                                                       // 1
    SearchCollection = v;                                                                                         // 1
  }                                                                                                               // 1
}, 0);                                                                                                            // 1
var Engine = void 0;                                                                                              // 1
module.watch(require("./engine"), {                                                                               // 1
  "default": function (v) {                                                                                       // 1
    Engine = v;                                                                                                   // 1
  }                                                                                                               // 1
}, 1);                                                                                                            // 1
                                                                                                                  //
/**                                                                                                               // 4
 * A ReactiveEngine handles the reactive logic, such as subscribing                                               //
 * and publishing documents into a self contained collection.                                                     //
 *                                                                                                                //
 * @type {ReactiveEngine}                                                                                         //
 */var ReactiveEngine = function (_Engine) {                                                                      //
  (0, _inherits3.default)(ReactiveEngine, _Engine);                                                               //
                                                                                                                  //
  /**                                                                                                             // 11
   * Constructor.                                                                                                 //
   *                                                                                                              //
   * @param {Object} config Configuration                                                                         //
   *                                                                                                              //
   * @constructor                                                                                                 //
   */function ReactiveEngine(config) {                                                                            //
    (0, _classCallCheck3.default)(this, ReactiveEngine);                                                          // 18
                                                                                                                  //
    var _this = (0, _possibleConstructorReturn3.default)(this, _Engine.call(this, config));                       // 18
                                                                                                                  //
    if (_this === _this.constructor) {                                                                            // 21
      throw new Error('Cannot initialize instance of ReactiveEngine');                                            // 22
    }                                                                                                             // 23
                                                                                                                  //
    if (!_.isFunction(_this.getSearchCursor)) {                                                                   // 25
      throw new Error('Reactive engine needs to implement getSearchCursor method');                               // 26
    }                                                                                                             // 27
                                                                                                                  //
    return _this;                                                                                                 // 18
  } /**                                                                                                           // 28
     * Return default configuration.                                                                              //
     *                                                                                                            //
     * @returns {Object}                                                                                          //
     */                                                                                                           //
                                                                                                                  //
  ReactiveEngine.prototype.defaultConfiguration = function () {                                                   //
    function defaultConfiguration() {                                                                             //
      return _.defaults({}, {                                                                                     // 36
        transform: function (doc) {                                                                               // 37
          return doc;                                                                                             // 37
        },                                                                                                        // 37
        beforePublish: function (event, doc) {                                                                    // 38
          return doc;                                                                                             // 38
        }                                                                                                         // 38
      }, _Engine.prototype.defaultConfiguration.call(this));                                                      // 36
    }                                                                                                             // 40
                                                                                                                  //
    return defaultConfiguration;                                                                                  //
  }(); /**                                                                                                        //
        * Code to run on index creation                                                                           //
        *                                                                                                         //
        * @param {Object} indexConfig Index configuration                                                         //
        */                                                                                                        //
                                                                                                                  //
  ReactiveEngine.prototype.onIndexCreate = function () {                                                          //
    function onIndexCreate(indexConfig) {                                                                         //
      _Engine.prototype.onIndexCreate.call(this, indexConfig);                                                    // 48
                                                                                                                  //
      indexConfig.searchCollection = new SearchCollection(indexConfig, this);                                     // 49
      indexConfig.mongoCollection = indexConfig.searchCollection._collection;                                     // 50
    }                                                                                                             // 51
                                                                                                                  //
    return onIndexCreate;                                                                                         //
  }(); /**                                                                                                        //
        * Transform the search definition.                                                                        //
        *                                                                                                         //
        * @param {String|Object} searchDefinition Search definition                                               //
        * @param {Object}        options          Search and index options                                        //
        *                                                                                                         //
        * @returns {Object}                                                                                       //
        */                                                                                                        //
                                                                                                                  //
  ReactiveEngine.prototype.transformSearchDefinition = function () {                                              //
    function transformSearchDefinition(searchDefinition, options) {                                               //
      if (_.isString(searchDefinition)) {                                                                         // 62
        var obj = {};                                                                                             // 63
                                                                                                                  //
        _.each(options.index.fields, function (field) {                                                           // 65
          obj[field] = searchDefinition;                                                                          // 66
        });                                                                                                       // 67
                                                                                                                  //
        searchDefinition = obj;                                                                                   // 69
      }                                                                                                           // 70
                                                                                                                  //
      return searchDefinition;                                                                                    // 72
    }                                                                                                             // 73
                                                                                                                  //
    return transformSearchDefinition;                                                                             //
  }(); /**                                                                                                        //
        * Check the given search parameter for validity                                                           //
        *                                                                                                         //
        * @param search                                                                                           //
        * @param indexOptions                                                                                     //
        */                                                                                                        //
                                                                                                                  //
  ReactiveEngine.prototype.checkSearchParam = function () {                                                       //
    function checkSearchParam(search, indexOptions) {                                                             //
      check(search, Match.OneOf(String, Object));                                                                 // 82
                                                                                                                  //
      if (_.isObject(search)) {                                                                                   // 84
        _.each(search, function (val, field) {                                                                    // 85
          check(val, String);                                                                                     // 86
                                                                                                                  //
          if (-1 === _.indexOf(indexOptions.allowedFields, field)) {                                              // 88
            throw new Meteor.Error("Not allowed to search over field \"" + field + "\"");                         // 89
          }                                                                                                       // 90
        });                                                                                                       // 91
      }                                                                                                           // 92
    }                                                                                                             // 93
                                                                                                                  //
    return checkSearchParam;                                                                                      //
  }(); /**                                                                                                        //
        * Reactively search on the collection.                                                                    //
        *                                                                                                         //
        * @param {Object} searchDefinition Search definition                                                      //
        * @param {Object} options          Options                                                                //
        *                                                                                                         //
        * @returns {Cursor}                                                                                       //
        */                                                                                                        //
                                                                                                                  //
  ReactiveEngine.prototype.search = function () {                                                                 //
    function search(searchDefinition, options) {                                                                  //
      if (Meteor.isClient) {                                                                                      // 104
        return options.index.searchCollection.find(searchDefinition, options.search);                             // 105
      } else {                                                                                                    // 106
        return this.getSearchCursor(this.transformSearchDefinition(searchDefinition, options), options);          // 107
      }                                                                                                           // 111
    }                                                                                                             // 112
                                                                                                                  //
    return search;                                                                                                //
  }();                                                                                                            //
                                                                                                                  //
  return ReactiveEngine;                                                                                          //
}(Engine);                                                                                                        //
                                                                                                                  //
module.exportDefault(ReactiveEngine);                                                                             // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"cursor.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/easysearch_core/lib/core/cursor.js                                                                    //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                           //
                                                                                                                  //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                  //
                                                                                                                  //
var _createClass2 = require("babel-runtime/helpers/createClass");                                                 //
                                                                                                                  //
var _createClass3 = _interopRequireDefault(_createClass2);                                                        //
                                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                 //
                                                                                                                  //
/**                                                                                                               // 1
 * A Cursor represents a pointer to the search results. Since it's specific                                       //
 * to EasySearch it can also be used to check for valid return values.                                            //
 *                                                                                                                //
 * @type {Cursor}                                                                                                 //
 */var Cursor = function () {                                                                                     //
  /**                                                                                                             // 8
   * Constructor                                                                                                  //
   *                                                                                                              //
   * @param {Mongo.Cursor} mongoCursor   Referenced mongo cursor                                                  //
   * @param {Number}       count         Count of all documents found                                             //
   * @param {Boolean}      isReady       Cursor is ready                                                          //
   * @param {Object}       publishHandle Publish handle to stop if on client                                      //
   *                                                                                                              //
   * @constructor                                                                                                 //
   *                                                                                                              //
   */function Cursor(mongoCursor, count) {                                                                        //
    var isReady = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;                       // 19
    var publishHandle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;                 // 19
    (0, _classCallCheck3.default)(this, Cursor);                                                                  // 19
    check(mongoCursor.fetch, Function);                                                                           // 20
    check(count, Number);                                                                                         // 21
    check(isReady, Match.Optional(Boolean));                                                                      // 22
    check(publishHandle, Match.OneOf(null, Object));                                                              // 23
    this._mongoCursor = mongoCursor;                                                                              // 25
    this._count = count;                                                                                          // 26
    this._isReady = isReady;                                                                                      // 27
    this._publishHandle = publishHandle;                                                                          // 28
  } /**                                                                                                           // 29
     * Fetch the search results.                                                                                  //
     *                                                                                                            //
     * @returns {[Object]}                                                                                        //
     */                                                                                                           //
                                                                                                                  //
  Cursor.prototype.fetch = function () {                                                                          //
    function fetch() {                                                                                            //
      return this._mongoCursor.fetch();                                                                           // 37
    }                                                                                                             // 38
                                                                                                                  //
    return fetch;                                                                                                 //
  }(); /**                                                                                                        //
        * Stop the subscription handle associated with the cursor.                                                //
        */                                                                                                        //
                                                                                                                  //
  Cursor.prototype.stop = function () {                                                                           //
    function stop() {                                                                                             //
      if (this._publishHandle) {                                                                                  // 44
        return this._publishHandle.stop();                                                                        // 45
      }                                                                                                           // 46
    }                                                                                                             // 47
                                                                                                                  //
    return stop;                                                                                                  //
  }(); /**                                                                                                        //
        * Return count of all documents found                                                                     //
        *                                                                                                         //
        * @returns {Number}                                                                                       //
        */                                                                                                        //
                                                                                                                  //
  Cursor.prototype.count = function () {                                                                          //
    function count() {                                                                                            //
      return this._count;                                                                                         // 55
    }                                                                                                             // 56
                                                                                                                  //
    return count;                                                                                                 //
  }(); /**                                                                                                        //
        * Return if the cursor is ready.                                                                          //
        *                                                                                                         //
        * @returns {Boolean}                                                                                      //
        */                                                                                                        //
                                                                                                                  //
  Cursor.prototype.isReady = function () {                                                                        //
    function isReady() {                                                                                          //
      return this._isReady;                                                                                       // 64
    }                                                                                                             // 65
                                                                                                                  //
    return isReady;                                                                                               //
  }(); /**                                                                                                        //
        * Return the raw mongo cursor.                                                                            //
        *                                                                                                         //
        * @returns {Mongo.Cursor}                                                                                 //
        */                                                                                                        //
                                                                                                                  //
  (0, _createClass3.default)(Cursor, [{                                                                           //
    key: "mongoCursor",                                                                                           //
    get: function () {                                                                                            //
      return this._mongoCursor;                                                                                   // 73
    } /**                                                                                                         // 74
       * Return a fake empty cursor, without data.                                                                //
       *                                                                                                          //
       * @returns {Object}                                                                                        //
       */                                                                                                         //
  }], [{                                                                                                          //
    key: "emptyCursor",                                                                                           //
    get: function () {                                                                                            //
      return {                                                                                                    // 82
        fetch: function () {                                                                                      // 82
          return [];                                                                                              // 82
        },                                                                                                        // 82
        observe: function () {                                                                                    // 82
          return {                                                                                                // 82
            stop: function () {                                                                                   // 82
              return null;                                                                                        // 82
            }                                                                                                     // 82
          };                                                                                                      // 82
        },                                                                                                        // 82
        stop: function () {}                                                                                      // 82
      };                                                                                                          // 82
    }                                                                                                             // 83
  }]);                                                                                                            //
  return Cursor;                                                                                                  //
}();                                                                                                              //
                                                                                                                  //
module.exportDefault(Cursor);                                                                                     // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"search-collection.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/easysearch_core/lib/core/search-collection.js                                                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");                                     //
                                                                                                                  //
var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);                                            //
                                                                                                                  //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                           //
                                                                                                                  //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                  //
                                                                                                                  //
var _createClass2 = require("babel-runtime/helpers/createClass");                                                 //
                                                                                                                  //
var _createClass3 = _interopRequireDefault(_createClass2);                                                        //
                                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                 //
                                                                                                                  //
var Mongo = void 0;                                                                                               // 1
module.watch(require("meteor/mongo"), {                                                                           // 1
  Mongo: function (v) {                                                                                           // 1
    Mongo = v;                                                                                                    // 1
  }                                                                                                               // 1
}, 0);                                                                                                            // 1
var Cursor = void 0;                                                                                              // 1
module.watch(require("./cursor"), {                                                                               // 1
  "default": function (v) {                                                                                       // 1
    Cursor = v;                                                                                                   // 1
  }                                                                                                               // 1
}, 1);                                                                                                            // 1
var ReactiveEngine = void 0;                                                                                      // 1
module.watch(require("./reactive-engine"), {                                                                      // 1
  "default": function (v) {                                                                                       // 1
    ReactiveEngine = v;                                                                                           // 1
  }                                                                                                               // 1
}, 2);                                                                                                            // 1
                                                                                                                  //
/**                                                                                                               // 5
 * A search collection represents a reactive collection on the client,                                            //
 * which is used by the ReactiveEngine for searching.                                                             //
 *                                                                                                                //
 * @type {SearchCollection}                                                                                       //
 */var SearchCollection = function () {                                                                           //
  /**                                                                                                             // 12
   * Constructor                                                                                                  //
   *                                                                                                              //
   * @param {Object}         indexConfiguration Index configuration                                               //
   * @param {ReactiveEngine} engine             Reactive Engine                                                   //
   *                                                                                                              //
   * @constructor                                                                                                 //
   */function SearchCollection(indexConfiguration, engine) {                                                      //
    (0, _classCallCheck3.default)(this, SearchCollection);                                                        // 20
    check(indexConfiguration, Object);                                                                            // 21
    check(indexConfiguration.name, Match.OneOf(String, null));                                                    // 22
                                                                                                                  //
    if (!(engine instanceof ReactiveEngine)) {                                                                    // 24
      throw new Meteor.Error('invalid-engine', 'engine needs to be instanceof ReactiveEngine');                   // 25
    }                                                                                                             // 26
                                                                                                                  //
    this._indexConfiguration = indexConfiguration;                                                                // 28
    this._name = indexConfiguration.name + "/easySearch";                                                         // 29
    this._engine = engine;                                                                                        // 30
                                                                                                                  //
    if (Meteor.isClient) {                                                                                        // 32
      this._collection = new Mongo.Collection(this._name);                                                        // 33
    } else if (Meteor.isServer) {                                                                                 // 34
      this._setUpPublication();                                                                                   // 35
    }                                                                                                             // 36
  } /**                                                                                                           // 37
     * Get name                                                                                                   //
     *                                                                                                            //
     * @returns {String}                                                                                          //
     */                                                                                                           //
                                                                                                                  //
  /**                                                                                                             // 57
   * Find documents on the client.                                                                                //
   *                                                                                                              //
   * @param {Object} searchDefinition Search definition                                                           //
   * @param {Object} options          Options                                                                     //
   *                                                                                                              //
   * @returns {Cursor}                                                                                            //
   */SearchCollection.prototype.find = function () {                                                              //
    function find(searchDefinition, options) {                                                                    //
      if (!Meteor.isClient) {                                                                                     // 66
        throw new Error('find can only be used on client');                                                       // 67
      }                                                                                                           // 68
                                                                                                                  //
      var publishHandle = Meteor.subscribe(this.name, searchDefinition, options);                                 // 70
                                                                                                                  //
      var count = this._getCount(searchDefinition);                                                               // 72
                                                                                                                  //
      var mongoCursor = this._getMongoCursor(searchDefinition, options);                                          // 73
                                                                                                                  //
      if (!_.isNumber(count)) {                                                                                   // 75
        return new Cursor(mongoCursor, 0, false);                                                                 // 76
      }                                                                                                           // 77
                                                                                                                  //
      return new Cursor(mongoCursor, count, true, publishHandle);                                                 // 79
    }                                                                                                             // 80
                                                                                                                  //
    return find;                                                                                                  //
  }(); /**                                                                                                        //
        * Get the count of the cursor.                                                                            //
        *                                                                                                         //
        * @params {Object} searchDefinition Search definition                                                     //
        *                                                                                                         //
        * @returns {Cursor.count}                                                                                 //
        *                                                                                                         //
        * @private                                                                                                //
        */                                                                                                        //
                                                                                                                  //
  SearchCollection.prototype._getCount = function () {                                                            //
    function _getCount(searchDefinition) {                                                                        //
      var countDoc = this._collection.findOne('searchCount' + JSON.stringify(searchDefinition));                  // 92
                                                                                                                  //
      if (countDoc) {                                                                                             // 94
        return countDoc.count;                                                                                    // 95
      }                                                                                                           // 96
    }                                                                                                             // 97
                                                                                                                  //
    return _getCount;                                                                                             //
  }(); /**                                                                                                        //
        * Get the mongo cursor.                                                                                   //
        *                                                                                                         //
        * @param {Object} searchDefinition Search definition                                                      //
        * @param {Object} options          Search options                                                         //
        *                                                                                                         //
        * @returns {Cursor}                                                                                       //
        * @private                                                                                                //
        */                                                                                                        //
                                                                                                                  //
  SearchCollection.prototype._getMongoCursor = function () {                                                      //
    function _getMongoCursor(searchDefinition, options) {                                                         //
      var _this = this;                                                                                           // 108
                                                                                                                  //
      return this._collection.find({                                                                              // 109
        __searchDefinition: JSON.stringify(searchDefinition),                                                     // 110
        __searchOptions: JSON.stringify(options.props)                                                            // 110
      }, {                                                                                                        // 110
        transform: function (doc) {                                                                               // 112
          delete doc.__searchDefinition;                                                                          // 113
          delete doc.__searchOptions;                                                                             // 114
          delete doc.__sortPosition;                                                                              // 115
          doc = _this.engine.config.transform(doc);                                                               // 117
          return doc;                                                                                             // 119
        },                                                                                                        // 120
        sort: ['__sortPosition']                                                                                  // 121
      });                                                                                                         // 111
    }                                                                                                             // 124
                                                                                                                  //
    return _getMongoCursor;                                                                                       //
  }(); /**                                                                                                        //
        * Return a unique document id for publication.                                                            //
        *                                                                                                         //
        * @param {Document} doc                                                                                   //
        *                                                                                                         //
        * @returns string                                                                                         //
        */                                                                                                        //
                                                                                                                  //
  SearchCollection.prototype.generateId = function () {                                                           //
    function generateId(doc) {                                                                                    //
      return doc._id + doc.__searchDefinition + doc.__searchOptions;                                              // 134
    }                                                                                                             // 135
                                                                                                                  //
    return generateId;                                                                                            //
  }(); /**                                                                                                        //
        * Add custom fields to the given document                                                                 //
        *                                                                                                         //
        * @param {Document} doc                                                                                   //
        * @param {Object}   data                                                                                  //
        * @returns {*}                                                                                            //
        */                                                                                                        //
                                                                                                                  //
  SearchCollection.prototype.addCustomFields = function () {                                                      //
    function addCustomFields(doc, data) {                                                                         //
      _.forEach(data, function (val, key) {                                                                       // 145
        doc['__' + key] = val;                                                                                    // 146
      });                                                                                                         // 147
                                                                                                                  //
      return doc;                                                                                                 // 149
    }                                                                                                             // 150
                                                                                                                  //
    return addCustomFields;                                                                                       //
  }(); /**                                                                                                        //
        * Set up publication.                                                                                     //
        *                                                                                                         //
        * @private                                                                                                //
        */                                                                                                        //
                                                                                                                  //
  SearchCollection.prototype._setUpPublication = function () {                                                    //
    function _setUpPublication() {                                                                                //
      var collectionScope = this,                                                                                 // 158
          collectionName = this.name;                                                                             // 158
      Meteor.publish(collectionName, function (searchDefinition, options) {                                       // 161
        var _this2 = this;                                                                                        // 161
                                                                                                                  //
        check(searchDefinition, Match.OneOf(String, Object));                                                     // 162
        check(options, Object);                                                                                   // 163
        var definitionString = JSON.stringify(searchDefinition),                                                  // 165
            optionsString = JSON.stringify(options.props);                                                        // 165
        options.userId = this.userId;                                                                             // 168
        options.publicationScope = this;                                                                          // 169
                                                                                                                  //
        if (!collectionScope._indexConfiguration.permission(options)) {                                           // 171
          throw new Meteor.Error('not-allowed', "You're not allowed to search this index!");                      // 172
        }                                                                                                         // 173
                                                                                                                  //
        collectionScope.engine.checkSearchParam(searchDefinition, collectionScope._indexConfiguration);           // 175
        var cursor = collectionScope.engine.search(searchDefinition, {                                            // 177
          search: options,                                                                                        // 178
          index: collectionScope._indexConfiguration                                                              // 179
        });                                                                                                       // 177
        var count = cursor.count();                                                                               // 182
        this.added(collectionName, 'searchCount' + definitionString, {                                            // 184
          count: count                                                                                            // 184
        });                                                                                                       // 184
        var intervalID = void 0;                                                                                  // 186
                                                                                                                  //
        if (collectionScope._indexConfiguration.countUpdateIntervalMs) {                                          // 188
          intervalID = Meteor.setInterval(function () {                                                           // 189
            return _this2.changed(collectionName, 'searchCount' + definitionString, {                             // 190
              count: cursor.mongoCursor.count && cursor.mongoCursor.count() || 0                                  // 193
            });                                                                                                   // 193
          }, collectionScope._indexConfiguration.countUpdateIntervalMs);                                          // 190
        }                                                                                                         // 197
                                                                                                                  //
        this.onStop(function () {                                                                                 // 199
          intervalID && Meteor.clearInterval(intervalID);                                                         // 200
          resultsHandle && resultsHandle.stop();                                                                  // 201
        });                                                                                                       // 202
        var observedDocs = [];                                                                                    // 204
                                                                                                                  //
        var updateDocWithCustomFields = function (doc, sortPosition) {                                            // 206
          return collectionScope.addCustomFields(doc, {                                                           // 206
            originalId: doc._id,                                                                                  // 208
            sortPosition: sortPosition,                                                                           // 209
            searchDefinition: definitionString,                                                                   // 210
            searchOptions: optionsString                                                                          // 211
          });                                                                                                     // 207
        };                                                                                                        // 206
                                                                                                                  //
        var resultsHandle = cursor.mongoCursor.observe({                                                          // 214
          addedAt: function (doc, atIndex, before) {                                                              // 215
            doc = collectionScope.engine.config.beforePublish('addedAt', doc, atIndex, before);                   // 216
            doc = updateDocWithCustomFields(doc, atIndex);                                                        // 217
                                                                                                                  //
            _this2.added(collectionName, collectionScope.generateId(doc), doc); // reorder all observed docs to keep valid sorting
                                                                                                                  //
                                                                                                                  //
            if (observedDocs.map(function (d) {                                                                   // 222
              return d.__sortPosition;                                                                            // 222
            }).includes(atIndex)) {                                                                               // 222
              observedDocs = observedDocs.map(function (doc, docIndex) {                                          // 223
                if (doc.__sortPosition >= atIndex) {                                                              // 224
                  doc = collectionScope.addCustomFields(doc, {                                                    // 225
                    sortPosition: doc.__sortPosition + 1                                                          // 226
                  }); // do not throw changed event on last doc as it will be removed from cursor                 // 225
                                                                                                                  //
                  if (docIndex < observedDocs.length) {                                                           // 230
                    _this2.changed(collectionName, collectionScope.generateId(doc), doc);                         // 231
                  }                                                                                               // 236
                }                                                                                                 // 237
                                                                                                                  //
                return doc;                                                                                       // 239
              });                                                                                                 // 240
            }                                                                                                     // 241
                                                                                                                  //
            observedDocs = [].concat((0, _toConsumableArray3.default)(observedDocs), [doc]);                      // 243
          },                                                                                                      // 244
          changedAt: function (doc, oldDoc, atIndex) {                                                            // 245
            doc = collectionScope.engine.config.beforePublish('changedAt', doc, oldDoc, atIndex);                 // 246
            doc = collectionScope.addCustomFields(doc, {                                                          // 247
              searchDefinition: definitionString,                                                                 // 248
              searchOptions: optionsString,                                                                       // 249
              sortPosition: atIndex,                                                                              // 250
              originalId: doc._id                                                                                 // 251
            });                                                                                                   // 247
                                                                                                                  //
            _this2.changed(collectionName, collectionScope.generateId(doc), doc);                                 // 254
          },                                                                                                      // 255
          movedTo: function (doc, fromIndex, toIndex, before) {                                                   // 256
            doc = collectionScope.engine.config.beforePublish('movedTo', doc, fromIndex, toIndex, before);        // 257
            doc = updateDocWithCustomFields(doc, toIndex);                                                        // 258
                                                                                                                  //
            var beforeDoc = collectionScope._indexConfiguration.collection.findOne(before);                       // 260
                                                                                                                  //
            if (beforeDoc) {                                                                                      // 262
              beforeDoc = collectionScope.addCustomFields(beforeDoc, {                                            // 263
                searchDefinition: definitionString,                                                               // 264
                searchOptions: optionsString,                                                                     // 265
                sortPosition: fromIndex                                                                           // 266
              });                                                                                                 // 263
                                                                                                                  //
              _this2.changed(collectionName, collectionScope.generateId(beforeDoc), beforeDoc);                   // 268
            }                                                                                                     // 269
                                                                                                                  //
            _this2.changed(collectionName, collectionScope.generateId(doc), doc);                                 // 271
          },                                                                                                      // 272
          removedAt: function (doc, atIndex) {                                                                    // 273
            doc = collectionScope.engine.config.beforePublish('removedAt', doc, atIndex);                         // 274
            doc = collectionScope.addCustomFields(doc, {                                                          // 275
              searchDefinition: definitionString,                                                                 // 278
              searchOptions: optionsString                                                                        // 279
            });                                                                                                   // 277
                                                                                                                  //
            _this2.removed(collectionName, collectionScope.generateId(doc));                                      // 281
                                                                                                                  //
            observedDocs = observedDocs.filter(function (d) {                                                     // 283
              return collectionScope.generateId(d) !== collectionScope.generateId(doc);                           // 284
            });                                                                                                   // 284
          }                                                                                                       // 286
        });                                                                                                       // 214
        this.onStop(function () {                                                                                 // 289
          resultsHandle.stop();                                                                                   // 290
        });                                                                                                       // 291
        this.ready();                                                                                             // 293
      });                                                                                                         // 294
    }                                                                                                             // 295
                                                                                                                  //
    return _setUpPublication;                                                                                     //
  }();                                                                                                            //
                                                                                                                  //
  (0, _createClass3.default)(SearchCollection, [{                                                                 //
    key: "name",                                                                                                  //
    get: function () {                                                                                            //
      return this._name;                                                                                          // 45
    } /**                                                                                                         // 46
       * Get engine                                                                                               //
       *                                                                                                          //
       * @returns {ReactiveEngine}                                                                                //
       */                                                                                                         //
  }, {                                                                                                            //
    key: "engine",                                                                                                //
    get: function () {                                                                                            //
      return this._engine;                                                                                        // 54
    }                                                                                                             // 55
  }]);                                                                                                            //
  return SearchCollection;                                                                                        //
}();                                                                                                              //
                                                                                                                  //
module.exportDefault(SearchCollection);                                                                           // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"engines":{"mongo-db.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/easysearch_core/lib/engines/mongo-db.js                                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                           //
                                                                                                                  //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                  //
                                                                                                                  //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                     //
                                                                                                                  //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                            //
                                                                                                                  //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                       //
                                                                                                                  //
var _inherits3 = _interopRequireDefault(_inherits2);                                                              //
                                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                 //
                                                                                                                  //
var Cursor = void 0;                                                                                              // 1
module.watch(require("../core/cursor"), {                                                                         // 1
  "default": function (v) {                                                                                       // 1
    Cursor = v;                                                                                                   // 1
  }                                                                                                               // 1
}, 0);                                                                                                            // 1
var ReactiveEngine = void 0;                                                                                      // 1
module.watch(require("../core/reactive-engine"), {                                                                // 1
  "default": function (v) {                                                                                       // 1
    ReactiveEngine = v;                                                                                           // 1
  }                                                                                                               // 1
}, 1);                                                                                                            // 1
                                                                                                                  //
/**                                                                                                               // 4
 * The MongoDBEngine lets you search the index on the server side with MongoDB. Subscriptions and publications    //
 * are handled within the Engine.                                                                                 //
 *                                                                                                                //
 * @type {MongoDBEngine}                                                                                          //
 */var MongoDBEngine = function (_ReactiveEngine) {                                                               //
  (0, _inherits3.default)(MongoDBEngine, _ReactiveEngine);                                                        //
                                                                                                                  //
  function MongoDBEngine() {                                                                                      //
    (0, _classCallCheck3.default)(this, MongoDBEngine);                                                           //
    return (0, _possibleConstructorReturn3.default)(this, _ReactiveEngine.apply(this, arguments));                //
  }                                                                                                               //
                                                                                                                  //
  /**                                                                                                             // 11
   * Return default configuration.                                                                                //
   *                                                                                                              //
   * @returns {Object}                                                                                            //
   */MongoDBEngine.prototype.defaultConfiguration = function () {                                                 //
    function defaultConfiguration() {                                                                             //
      return _.defaults({}, MongoDBEngine.defaultMongoConfiguration(this), _ReactiveEngine.prototype.defaultConfiguration.call(this));
    }                                                                                                             // 18
                                                                                                                  //
    return defaultConfiguration;                                                                                  //
  }(); /**                                                                                                        //
        * Default mongo configuration, used in constructor and MinimongoEngine to get the configuration.          //
        *                                                                                                         //
        * @param {Object} engineScope Scope of the engine                                                         //
        *                                                                                                         //
        * @returns {Object}                                                                                       //
        */                                                                                                        //
                                                                                                                  //
  MongoDBEngine.defaultMongoConfiguration = function () {                                                         //
    function defaultMongoConfiguration(engineScope) {                                                             //
      return {                                                                                                    // 28
        aggregation: '$or',                                                                                       // 29
        selector: function (searchObject, options, aggregation) {                                                 // 30
          var selector = {};                                                                                      // 31
          selector[aggregation] = [];                                                                             // 33
                                                                                                                  //
          _.each(searchObject, function (searchString, field) {                                                   // 35
            var fieldSelector = engineScope.callConfigMethod('selectorPerField', field, searchString, options);   // 36
                                                                                                                  //
            if (fieldSelector) {                                                                                  // 40
              selector[aggregation].push(fieldSelector);                                                          // 41
            }                                                                                                     // 42
          });                                                                                                     // 43
                                                                                                                  //
          return selector;                                                                                        // 45
        },                                                                                                        // 46
        selectorPerField: function (field, searchString) {                                                        // 47
          var selector = {};                                                                                      // 48
          searchString = searchString.replace(/(\W{1})/g, '\\$1');                                                // 50
          selector[field] = {                                                                                     // 51
            '$regex': ".*" + searchString + ".*",                                                                 // 51
            '$options': 'i'                                                                                       // 51
          };                                                                                                      // 51
          return selector;                                                                                        // 53
        },                                                                                                        // 54
        sort: function (searchObject, options) {                                                                  // 55
          return options.index.fields;                                                                            // 56
        }                                                                                                         // 57
      };                                                                                                          // 28
    }                                                                                                             // 59
                                                                                                                  //
    return defaultMongoConfiguration;                                                                             //
  }(); /**                                                                                                        //
        * Return the find options for the mongo find query.                                                       //
        *                                                                                                         //
        * @param {String} searchDefinition Search definition                                                      //
        * @param {Object} options          Search and index options                                               //
        */                                                                                                        //
                                                                                                                  //
  MongoDBEngine.prototype.getFindOptions = function () {                                                          //
    function getFindOptions(searchDefinition, options) {                                                          //
      return {                                                                                                    // 68
        sort: this.callConfigMethod('sort', searchDefinition, options),                                           // 69
        limit: options.search.limit,                                                                              // 70
        skip: options.search.skip,                                                                                // 71
        fields: this.callConfigMethod('fields', searchDefinition, options)                                        // 72
      };                                                                                                          // 68
    }                                                                                                             // 74
                                                                                                                  //
    return getFindOptions;                                                                                        //
  }(); /**                                                                                                        //
        * Return the reactive search cursor.                                                                      //
        *                                                                                                         //
        * @param {String} searchDefinition Search definition                                                      //
        * @param {Object} options          Search and index options                                               //
        */                                                                                                        //
                                                                                                                  //
  MongoDBEngine.prototype.getSearchCursor = function () {                                                         //
    function getSearchCursor(searchDefinition, options) {                                                         //
      var selector = this.callConfigMethod('selector', searchDefinition, options, this.config.aggregation),       // 83
          findOptions = this.getFindOptions(searchDefinition, options),                                           // 83
          collection = options.index.collection;                                                                  // 83
      check(options, Object);                                                                                     // 91
      check(selector, Object);                                                                                    // 92
      check(findOptions, Object);                                                                                 // 93
      return new Cursor(collection.find(selector, findOptions), collection.find(selector).count());               // 95
    }                                                                                                             // 99
                                                                                                                  //
    return getSearchCursor;                                                                                       //
  }();                                                                                                            //
                                                                                                                  //
  return MongoDBEngine;                                                                                           //
}(ReactiveEngine);                                                                                                //
                                                                                                                  //
module.exportDefault(MongoDBEngine);                                                                              // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"minimongo.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/easysearch_core/lib/engines/minimongo.js                                                              //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                           //
                                                                                                                  //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                  //
                                                                                                                  //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                     //
                                                                                                                  //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                            //
                                                                                                                  //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                       //
                                                                                                                  //
var _inherits3 = _interopRequireDefault(_inherits2);                                                              //
                                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                 //
                                                                                                                  //
var Engine = void 0;                                                                                              // 1
module.watch(require("../core/engine"), {                                                                         // 1
  "default": function (v) {                                                                                       // 1
    Engine = v;                                                                                                   // 1
  }                                                                                                               // 1
}, 0);                                                                                                            // 1
var ReactiveEngine = void 0;                                                                                      // 1
module.watch(require("../core/reactive-engine"), {                                                                // 1
  "default": function (v) {                                                                                       // 1
    ReactiveEngine = v;                                                                                           // 1
  }                                                                                                               // 1
}, 1);                                                                                                            // 1
var MongoDBEngine = void 0;                                                                                       // 1
module.watch(require("./mongo-db"), {                                                                             // 1
  "default": function (v) {                                                                                       // 1
    MongoDBEngine = v;                                                                                            // 1
  }                                                                                                               // 1
}, 2);                                                                                                            // 1
                                                                                                                  //
/**                                                                                                               // 5
 * The MinimongEngine lets you search the index on the client-side.                                               //
 *                                                                                                                //
 * @type {MinimongoEngine}                                                                                        //
 */var MinimongoEngine = function (_Engine) {                                                                     //
  (0, _inherits3.default)(MinimongoEngine, _Engine);                                                              //
                                                                                                                  //
  function MinimongoEngine() {                                                                                    //
    (0, _classCallCheck3.default)(this, MinimongoEngine);                                                         //
    return (0, _possibleConstructorReturn3.default)(this, _Engine.apply(this, arguments));                        //
  }                                                                                                               //
                                                                                                                  //
  /**                                                                                                             // 11
   * Return default configuration.                                                                                //
   *                                                                                                              //
   * @returns {Object}                                                                                            //
   */MinimongoEngine.prototype.defaultConfiguration = function () {                                               //
    function defaultConfiguration() {                                                                             //
      return _.defaults({}, MongoDBEngine.defaultMongoConfiguration(this), _Engine.prototype.defaultConfiguration.call(this));
    }                                                                                                             // 18
                                                                                                                  //
    return defaultConfiguration;                                                                                  //
  }(); /**                                                                                                        //
        * Search the index.                                                                                       //
        *                                                                                                         //
        * @param {Object} searchDefinition Search definition                                                      //
        * @param {Object} options          Object of options                                                      //
        *                                                                                                         //
        * @returns {cursor}                                                                                       //
        */                                                                                                        //
                                                                                                                  //
  MinimongoEngine.prototype.search = function () {                                                                //
    function search(searchDefinition, options) {                                                                  //
      if (!Meteor.isClient) {                                                                                     // 29
        throw new Meteor.Error('only-client', 'Minimongo can only be used on the client');                        // 30
      }                                                                                                           // 31
                                                                                                                  //
      searchDefinition = this.transformSearchDefinition(searchDefinition, options); // check() calls are in getSearchCursor method
                                                                                                                  //
      return MongoDBEngine.prototype.getSearchCursor.apply(this, [searchDefinition, options]);                    // 36
    }                                                                                                             // 37
                                                                                                                  //
    return search;                                                                                                //
  }();                                                                                                            //
                                                                                                                  //
  return MinimongoEngine;                                                                                         //
}(Engine);                                                                                                        //
                                                                                                                  //
MinimongoEngine.prototype.checkSearchParam = ReactiveEngine.prototype.checkSearchParam;                           // 40
MinimongoEngine.prototype.transformSearchDefinition = ReactiveEngine.prototype.transformSearchDefinition;         // 41
                                                                                                                  //
MinimongoEngine.prototype.getFindOptions = function () {                                                          // 43
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {                          // 43
    args[_key] = arguments[_key];                                                                                 // 43
  }                                                                                                               // 43
                                                                                                                  //
  var findOptions = MongoDBEngine.prototype.getFindOptions.apply(this, args);                                     // 44
  findOptions.transform = this.config.transform;                                                                  // 46
  return findOptions;                                                                                             // 48
};                                                                                                                // 49
                                                                                                                  //
module.exportDefault(MinimongoEngine);                                                                            // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"mongo-text-index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/easysearch_core/lib/engines/mongo-text-index.js                                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                           //
                                                                                                                  //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                  //
                                                                                                                  //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                     //
                                                                                                                  //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                            //
                                                                                                                  //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                       //
                                                                                                                  //
var _inherits3 = _interopRequireDefault(_inherits2);                                                              //
                                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                 //
                                                                                                                  //
var ReactiveEngine = void 0;                                                                                      // 1
module.watch(require("../core/reactive-engine"), {                                                                // 1
  "default": function (v) {                                                                                       // 1
    ReactiveEngine = v;                                                                                           // 1
  }                                                                                                               // 1
}, 0);                                                                                                            // 1
var MongoDBEngine = void 0;                                                                                       // 1
module.watch(require("./mongo-db"), {                                                                             // 1
  "default": function (v) {                                                                                       // 1
    MongoDBEngine = v;                                                                                            // 1
  }                                                                                                               // 1
}, 1);                                                                                                            // 1
                                                                                                                  //
/**                                                                                                               // 4
 * The MongoTextIndexEngine lets you search the index with Mongo text indexes.                                    //
 *                                                                                                                //
 * @type {MongoTextIndexEngine}                                                                                   //
 */var MongoTextIndexEngine = function (_ReactiveEngine) {                                                        //
  (0, _inherits3.default)(MongoTextIndexEngine, _ReactiveEngine);                                                 //
                                                                                                                  //
  function MongoTextIndexEngine() {                                                                               //
    (0, _classCallCheck3.default)(this, MongoTextIndexEngine);                                                    //
    return (0, _possibleConstructorReturn3.default)(this, _ReactiveEngine.apply(this, arguments));                //
  }                                                                                                               //
                                                                                                                  //
  /**                                                                                                             // 10
   * Return default configuration.                                                                                //
   *                                                                                                              //
   * @returns {Object}                                                                                            //
   */MongoTextIndexEngine.prototype.defaultConfiguration = function () {                                          //
    function defaultConfiguration() {                                                                             //
      var mongoConfiguration = MongoDBEngine.defaultMongoConfiguration(this);                                     // 16
                                                                                                                  //
      mongoConfiguration.selector = function (searchString) {                                                     // 18
        if (searchString.trim()) {                                                                                // 19
          return {                                                                                                // 20
            $text: {                                                                                              // 20
              $search: searchString                                                                               // 20
            }                                                                                                     // 20
          };                                                                                                      // 20
        }                                                                                                         // 21
                                                                                                                  //
        return {};                                                                                                // 23
      };                                                                                                          // 24
                                                                                                                  //
      return _.defaults({}, mongoConfiguration, _ReactiveEngine.prototype.defaultConfiguration.call(this));       // 26
    }                                                                                                             // 27
                                                                                                                  //
    return defaultConfiguration;                                                                                  //
  }(); /**                                                                                                        //
        * Setup the index on creation.                                                                            //
        *                                                                                                         //
        * @param {Object} indexConfig Index configuration                                                         //
        */                                                                                                        //
                                                                                                                  //
  MongoTextIndexEngine.prototype.onIndexCreate = function () {                                                    //
    function onIndexCreate(indexConfig) {                                                                         //
      _ReactiveEngine.prototype.onIndexCreate.call(this, indexConfig);                                            // 35
                                                                                                                  //
      if (Meteor.isServer) {                                                                                      // 37
        var textIndexesConfig = {};                                                                               // 38
                                                                                                                  //
        _.each(indexConfig.fields, function (field) {                                                             // 40
          textIndexesConfig[field] = 'text';                                                                      // 41
        });                                                                                                       // 42
                                                                                                                  //
        if (indexConfig.weights) {                                                                                // 44
          textIndexesConfig.weights = options.weights();                                                          // 45
        }                                                                                                         // 46
                                                                                                                  //
        indexConfig.collection._ensureIndex(textIndexesConfig);                                                   // 48
      }                                                                                                           // 49
    }                                                                                                             // 50
                                                                                                                  //
    return onIndexCreate;                                                                                         //
  }(); /**                                                                                                        //
        * Transform the search definition.                                                                        //
        *                                                                                                         //
        * @param {String|Object} searchDefinition Search definition                                               //
        * @param {Object}        options          Search and index options                                        //
        *                                                                                                         //
        * @returns {Object}                                                                                       //
        */                                                                                                        //
                                                                                                                  //
  MongoTextIndexEngine.prototype.transformSearchDefinition = function () {                                        //
    function transformSearchDefinition(searchDefinition, options) {                                               //
      return searchDefinition;                                                                                    // 61
    }                                                                                                             // 62
                                                                                                                  //
    return transformSearchDefinition;                                                                             //
  }(); /**                                                                                                        //
        * Check the given search parameter for validity                                                           //
        *                                                                                                         //
        * @param search                                                                                           //
        */                                                                                                        //
                                                                                                                  //
  MongoTextIndexEngine.prototype.checkSearchParam = function () {                                                 //
    function checkSearchParam(search) {                                                                           //
      check(search, String);                                                                                      // 70
    }                                                                                                             // 71
                                                                                                                  //
    return checkSearchParam;                                                                                      //
  }();                                                                                                            //
                                                                                                                  //
  return MongoTextIndexEngine;                                                                                    //
}(ReactiveEngine); // Explicitely inherit getSearchCursor method functionality                                    //
                                                                                                                  //
                                                                                                                  //
MongoTextIndexEngine.prototype.getSearchCursor = MongoDBEngine.prototype.getSearchCursor;                         // 75
MongoTextIndexEngine.prototype.getFindOptions = MongoDBEngine.prototype.getFindOptions;                           // 76
module.exportDefault(MongoTextIndexEngine);                                                                       // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"globals.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/easysearch_core/lib/globals.js                                                                        //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var Index = void 0,                                                                                               // 1
    Engine = void 0,                                                                                              // 1
    ReactiveEngine = void 0,                                                                                      // 1
    Cursor = void 0,                                                                                              // 1
    MongoDBEngine = void 0,                                                                                       // 1
    MinimongoEngine = void 0,                                                                                     // 1
    MongoTextIndexEngine = void 0;                                                                                // 1
module.watch(require("./main"), {                                                                                 // 1
  Index: function (v) {                                                                                           // 1
    Index = v;                                                                                                    // 1
  },                                                                                                              // 1
  Engine: function (v) {                                                                                          // 1
    Engine = v;                                                                                                   // 1
  },                                                                                                              // 1
  ReactiveEngine: function (v) {                                                                                  // 1
    ReactiveEngine = v;                                                                                           // 1
  },                                                                                                              // 1
  Cursor: function (v) {                                                                                          // 1
    Cursor = v;                                                                                                   // 1
  },                                                                                                              // 1
  MongoDBEngine: function (v) {                                                                                   // 1
    MongoDBEngine = v;                                                                                            // 1
  },                                                                                                              // 1
  MinimongoEngine: function (v) {                                                                                 // 1
    MinimongoEngine = v;                                                                                          // 1
  },                                                                                                              // 1
  MongoTextIndexEngine: function (v) {                                                                            // 1
    MongoTextIndexEngine = v;                                                                                     // 1
  }                                                                                                               // 1
}, 0);                                                                                                            // 1
EasySearch = {                                                                                                    // 11
  // Core                                                                                                         // 12
  Index: Index,                                                                                                   // 13
  Engine: Engine,                                                                                                 // 14
  ReactiveEngine: ReactiveEngine,                                                                                 // 15
  Cursor: Cursor,                                                                                                 // 16
  // Engines                                                                                                      // 17
  MongoDB: MongoDBEngine,                                                                                         // 18
  Minimongo: MinimongoEngine,                                                                                     // 19
  MongoTextIndex: MongoTextIndexEngine                                                                            // 20
};                                                                                                                // 11
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/easysearch_core/lib/main.js                                                                           //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.export({                                                                                                   // 1
  Index: function () {                                                                                            // 1
    return Index;                                                                                                 // 1
  },                                                                                                              // 1
  Engine: function () {                                                                                           // 1
    return Engine;                                                                                                // 1
  },                                                                                                              // 1
  ReactiveEngine: function () {                                                                                   // 1
    return ReactiveEngine;                                                                                        // 1
  },                                                                                                              // 1
  Cursor: function () {                                                                                           // 1
    return Cursor;                                                                                                // 1
  },                                                                                                              // 1
  MongoDBEngine: function () {                                                                                    // 1
    return MongoDBEngine;                                                                                         // 1
  },                                                                                                              // 1
  MinimongoEngine: function () {                                                                                  // 1
    return MinimongoEngine;                                                                                       // 1
  },                                                                                                              // 1
  MongoTextIndexEngine: function () {                                                                             // 1
    return MongoTextIndexEngine;                                                                                  // 1
  }                                                                                                               // 1
});                                                                                                               // 1
var Index = void 0;                                                                                               // 1
module.watch(require("./core/index"), {                                                                           // 1
  "default": function (v) {                                                                                       // 1
    Index = v;                                                                                                    // 1
  }                                                                                                               // 1
}, 0);                                                                                                            // 1
var Engine = void 0;                                                                                              // 1
module.watch(require("./core/engine"), {                                                                          // 1
  "default": function (v) {                                                                                       // 1
    Engine = v;                                                                                                   // 1
  }                                                                                                               // 1
}, 1);                                                                                                            // 1
var ReactiveEngine = void 0;                                                                                      // 1
module.watch(require("./core/reactive-engine"), {                                                                 // 1
  "default": function (v) {                                                                                       // 1
    ReactiveEngine = v;                                                                                           // 1
  }                                                                                                               // 1
}, 2);                                                                                                            // 1
var Cursor = void 0;                                                                                              // 1
module.watch(require("./core/cursor"), {                                                                          // 1
  "default": function (v) {                                                                                       // 1
    Cursor = v;                                                                                                   // 1
  }                                                                                                               // 1
}, 3);                                                                                                            // 1
var MongoDBEngine = void 0;                                                                                       // 1
module.watch(require("./engines/mongo-db"), {                                                                     // 1
  "default": function (v) {                                                                                       // 1
    MongoDBEngine = v;                                                                                            // 1
  }                                                                                                               // 1
}, 4);                                                                                                            // 1
var MinimongoEngine = void 0;                                                                                     // 1
module.watch(require("./engines/minimongo"), {                                                                    // 1
  "default": function (v) {                                                                                       // 1
    MinimongoEngine = v;                                                                                          // 1
  }                                                                                                               // 1
}, 5);                                                                                                            // 1
var MongoTextIndexEngine = void 0;                                                                                // 1
module.watch(require("./engines/mongo-text-index"), {                                                             // 1
  "default": function (v) {                                                                                       // 1
    MongoTextIndexEngine = v;                                                                                     // 1
  }                                                                                                               // 1
}, 6);                                                                                                            // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/easysearch:core/lib/core/index.js");
require("./node_modules/meteor/easysearch:core/lib/core/engine.js");
require("./node_modules/meteor/easysearch:core/lib/core/reactive-engine.js");
require("./node_modules/meteor/easysearch:core/lib/core/cursor.js");
require("./node_modules/meteor/easysearch:core/lib/core/search-collection.js");
require("./node_modules/meteor/easysearch:core/lib/engines/mongo-db.js");
require("./node_modules/meteor/easysearch:core/lib/engines/minimongo.js");
require("./node_modules/meteor/easysearch:core/lib/engines/mongo-text-index.js");
require("./node_modules/meteor/easysearch:core/lib/globals.js");
var exports = require("./node_modules/meteor/easysearch:core/lib/main.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['easysearch:core'] = exports, {
  EasySearch: EasySearch
});

})();
