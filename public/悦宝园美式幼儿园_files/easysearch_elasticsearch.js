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
var EasySearch = Package['easysearch:core'].EasySearch;
var lodash = Package['erasaur:meteor-lodash'].lodash;
var _ = Package['erasaur:meteor-lodash']._;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"easysearch:elasticsearch":{"lib":{"data-syncer.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/easysearch_elasticsearch/lib/data-syncer.js                                                     //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");                   //
                                                                                                            //
var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);                          //
                                                                                                            //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                     //
                                                                                                            //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                            //
                                                                                                            //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }           //
                                                                                                            //
/**                                                                                                         // 1
 * The ElasticSearchDataSyncer syncs data between a collection and a specified index.                       //
 *                                                                                                          //
 * @type {ElasticSearchDataSyncer}                                                                          //
 */var ElasticSearchDataSyncer = function () {                                                              //
  /**                                                                                                       // 7
   * Constructor.                                                                                           //
   *                                                                                                        //
   * @param indexName    {String}   Index name                                                              //
   * @param indexType    {String}   Index type                                                              //
   * @param collection   {Object}   Mongo Collection                                                        //
   * @param client       {Object}   ElasticSearch client                                                    //
   * @param beforeIndex  {Function} Change document before indexing                                         //
   */function ElasticSearchDataSyncer(_ref) {                                                               //
    var _this = this;                                                                                       // 16
                                                                                                            //
    var indexName = _ref.indexName,                                                                         // 16
        indexType = _ref.indexType,                                                                         // 16
        collection = _ref.collection,                                                                       // 16
        client = _ref.client,                                                                               // 16
        beforeIndex = _ref.beforeIndex;                                                                     // 16
    (0, _classCallCheck3.default)(this, ElasticSearchDataSyncer);                                           // 16
    this.indexName = indexName;                                                                             // 17
    this.indexType = indexType;                                                                             // 18
    this.collection = collection;                                                                           // 19
    this.client = client;                                                                                   // 20
                                                                                                            //
    var removeId = function (obj) {                                                                         // 22
      var _id = obj._id,                                                                                    // 22
          rest = (0, _objectWithoutProperties3.default)(obj, ["_id"]);                                      // 22
      return rest;                                                                                          // 24
    };                                                                                                      // 25
                                                                                                            //
    this.collection.find().observeChanges({                                                                 // 27
      added: function (id, fields) {                                                                        // 28
        _this.writeToIndex(removeId(beforeIndex(fields)), id);                                              // 29
      },                                                                                                    // 30
      changed: function (id) {                                                                              // 31
        _this.writeToIndex(removeId(beforeIndex(collection.findOne(id))), id);                              // 32
      },                                                                                                    // 33
      removed: function (id) {                                                                              // 34
        _this.client.delete({                                                                               // 35
          index: _this.indexName,                                                                           // 36
          type: _this.indexType,                                                                            // 37
          id: id                                                                                            // 38
        });                                                                                                 // 35
      }                                                                                                     // 40
    });                                                                                                     // 27
  } /**                                                                                                     // 42
     * Write a document to a specified index.                                                               //
     *                                                                                                      //
     * @param {Object} doc Document to write into the index                                                 //
     * @param {String} id  ID of the document                                                               //
     */                                                                                                     //
                                                                                                            //
  ElasticSearchDataSyncer.prototype.writeToIndex = function () {                                            //
    function writeToIndex(doc, id) {                                                                        //
      this.client.index({                                                                                   // 51
        index: this.indexName,                                                                              // 52
        type: this.indexType,                                                                               // 53
        id: id,                                                                                             // 54
        body: doc                                                                                           // 55
      });                                                                                                   // 51
    }                                                                                                       // 57
                                                                                                            //
    return writeToIndex;                                                                                    //
  }();                                                                                                      //
                                                                                                            //
  return ElasticSearchDataSyncer;                                                                           //
}();                                                                                                        //
                                                                                                            //
module.exportDefault(ElasticSearchDataSyncer);                                                              // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"engine.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/easysearch_elasticsearch/lib/engine.js                                                          //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                     //
                                                                                                            //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                            //
                                                                                                            //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");               //
                                                                                                            //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                      //
                                                                                                            //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                 //
                                                                                                            //
var _inherits3 = _interopRequireDefault(_inherits2);                                                        //
                                                                                                            //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }           //
                                                                                                            //
var ElasticSearchDataSyncer = void 0;                                                                       // 1
module.watch(require("./data-syncer"), {                                                                    // 1
  "default": function (v) {                                                                                 // 1
    ElasticSearchDataSyncer = v;                                                                            // 1
  }                                                                                                         // 1
}, 0);                                                                                                      // 1
                                                                                                            //
if (Meteor.isServer) {                                                                                      // 3
  var Future = Npm.require('fibers/future'),                                                                // 4
      elasticsearch = Npm.require('elasticsearch');                                                         // 4
} /**                                                                                                       // 6
   * The ElasticsearchEngine lets you search documents through an Elasticsearch Index.                      //
   *                                                                                                        //
   * @type {ElasticSearchEngine}                                                                            //
   */                                                                                                       //
                                                                                                            //
var ElasticSearchEngine = function (_EasySearch$ReactiveE) {                                                //
  (0, _inherits3.default)(ElasticSearchEngine, _EasySearch$ReactiveE);                                      //
                                                                                                            //
  /**                                                                                                       // 14
   * Constructor.                                                                                           //
   */function ElasticSearchEngine() {                                                                       //
    (0, _classCallCheck3.default)(this, ElasticSearchEngine);                                               // 17
    return (0, _possibleConstructorReturn3.default)(this, _EasySearch$ReactiveE.apply(this, arguments));    // 17
  } /**                                                                                                     // 19
     * Return default configuration.                                                                        //
     *                                                                                                      //
     * @returns {Object}                                                                                    //
     */                                                                                                     //
                                                                                                            //
  ElasticSearchEngine.prototype.defaultConfiguration = function () {                                        //
    function defaultConfiguration() {                                                                       //
      return _.defaults({}, ElasticSearchEngine.defaultElasticsearchConfiguration(), _EasySearch$ReactiveE.prototype.defaultConfiguration.call(this));
    }                                                                                                       // 28
                                                                                                            //
    return defaultConfiguration;                                                                            //
  }(); /**                                                                                                  //
        * Default configuration.                                                                            //
        *                                                                                                   //
        * @returns {Object}                                                                                 //
        */                                                                                                  //
                                                                                                            //
  ElasticSearchEngine.defaultElasticsearchConfiguration = function () {                                     //
    function defaultElasticsearchConfiguration() {                                                          //
      return {                                                                                              // 36
        /**                                                                                                 // 37
         * Return the fields to index in ElasticSearch.                                                     //
         *                                                                                                  //
         * @param {Object} options Index options                                                            //
         *                                                                                                  //
         * @returns {null|Array}                                                                            //
         */fieldsToIndex: function (options) {                                                              //
          return null;                                                                                      // 45
        },                                                                                                  // 46
        /**                                                                                                 // 47
         * The ES query object used for searching the results.                                              //
         *                                                                                                  //
         * @param {Object} searchObject Search object                                                       //
         * @param {Object} options      Search options                                                      //
         *                                                                                                  //
         * @return array                                                                                    //
         */query: function (searchObject, options) {                                                        //
          var query = {                                                                                     // 56
            bool: {                                                                                         // 57
              should: []                                                                                    // 58
            }                                                                                               // 57
          };                                                                                                // 56
                                                                                                            //
          _.each(searchObject, function (searchString, field) {                                             // 62
            var _match;                                                                                     // 62
                                                                                                            //
            query.bool.should.push({                                                                        // 63
              match: (_match = {}, _match[field] = {                                                        // 64
                query: searchString,                                                                        // 66
                fuzziness: 'AUTO',                                                                          // 67
                operator: 'or'                                                                              // 68
              }, _match)                                                                                    // 65
            });                                                                                             // 63
          });                                                                                               // 72
                                                                                                            //
          return query;                                                                                     // 74
        },                                                                                                  // 75
        /**                                                                                                 // 76
         * The ES sorting method used for sorting the results.                                              //
         *                                                                                                  //
         * @param {Object} searchObject Search object                                                       //
         * @param {Object} options      Search options                                                      //
         *                                                                                                  //
         * @return array                                                                                    //
         */sort: function (searchObject, options) {                                                         //
          return options.index.fields;                                                                      // 85
        },                                                                                                  // 86
        /**                                                                                                 // 87
         * Return the ElasticSearch document to index.                                                      //
         *                                                                                                  //
         * @param {Object} doc    Document to index                                                         //
         * @param {Array}  fields Array of document fields                                                  //
         */getElasticSearchDoc: function (doc, fields) {                                                    //
          if (null === fields) {                                                                            // 94
            return doc;                                                                                     // 95
          }                                                                                                 // 96
                                                                                                            //
          var partialDoc = {};                                                                              // 98
                                                                                                            //
          _.each(fields, function (field) {                                                                 // 100
            if (_.has(doc, field)) {                                                                        // 101
              partialDoc[field] = _.get(doc, field);                                                        // 102
            }                                                                                               // 103
          });                                                                                               // 104
                                                                                                            //
          return partialDoc;                                                                                // 106
        },                                                                                                  // 107
        /**                                                                                                 // 108
         * Return the elastic search body.                                                                  //
         *                                                                                                  //
         * @param {Object} body Existing ES body                                                            //
         *                                                                                                  //
         * @return {Object}                                                                                 //
         */body: function (body) {                                                                          //
          return body;                                                                                      // 115
        },                                                                                                  // 115
        /**                                                                                                 // 116
         * Default ES client configuration.                                                                 //
         */client: {                                                                                        //
          host: 'localhost:9200'                                                                            // 120
        }                                                                                                   // 119
      };                                                                                                    // 36
    }                                                                                                       // 123
                                                                                                            //
    return defaultElasticsearchConfiguration;                                                               //
  }(); /**                                                                                                  //
        * Put mapping according to mapping field provided when creating an EasySearch index                 //
        *                                                                                                   //
        * @param {Object} indexConfig Index configuration                                                   //
        */                                                                                                  //
                                                                                                            //
  ElasticSearchEngine.prototype.putMapping = function () {                                                  //
    function putMapping() {                                                                                 //
      var indexConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};             // 130
      var cb = arguments[1];                                                                                // 130
      var body = indexConfig.mapping,                                                                       // 130
          elasticSearchClient = indexConfig.elasticSearchClient,                                            // 130
          type = indexConfig.name;                                                                          // 130
                                                                                                            //
      if (!body) {                                                                                          // 137
        return cb();                                                                                        // 138
      }                                                                                                     // 139
                                                                                                            //
      elasticSearchClient.indices.create({                                                                  // 141
        updateAllTypes: false,                                                                              // 142
        index: 'easysearch'                                                                                 // 143
      }, Meteor.bindEnvironment(function () {                                                               // 141
        elasticSearchClient.indices.getMapping({                                                            // 145
          index: 'easysearch',                                                                              // 146
          type: type                                                                                        // 147
        }, Meteor.bindEnvironment(function (err, res) {                                                     // 145
          var isEmpty = Object.keys(res).length === 0 && res.constructor === Object;                        // 149
                                                                                                            //
          if (!isEmpty) {                                                                                   // 150
            return cb();                                                                                    // 151
          }                                                                                                 // 152
                                                                                                            //
          elasticSearchClient.indices.putMapping({                                                          // 154
            updateAllTypes: false,                                                                          // 155
            index: 'easysearch',                                                                            // 156
            type: type,                                                                                     // 157
            body: body                                                                                      // 158
          }, cb);                                                                                           // 154
        }));                                                                                                // 160
      }));                                                                                                  // 161
    }                                                                                                       // 162
                                                                                                            //
    return putMapping;                                                                                      //
  }(); /**                                                                                                  //
        * Act on index creation.                                                                            //
        *                                                                                                   //
        * @param {Object} indexConfig Index configuration                                                   //
        */                                                                                                  //
                                                                                                            //
  ElasticSearchEngine.prototype.onIndexCreate = function () {                                               //
    function onIndexCreate(indexConfig) {                                                                   //
      var _this2 = this;                                                                                    // 169
                                                                                                            //
      _EasySearch$ReactiveE.prototype.onIndexCreate.call(this, indexConfig);                                // 170
                                                                                                            //
      if (Meteor.isServer) {                                                                                // 172
        indexConfig.elasticSearchClient = new elasticsearch.Client(this.config.client);                     // 173
        this.putMapping(indexConfig, Meteor.bindEnvironment(function () {                                   // 174
          indexConfig.elasticSearchSyncer = new ElasticSearchDataSyncer({                                   // 175
            indexName: 'easysearch',                                                                        // 176
            indexType: indexConfig.name,                                                                    // 177
            collection: indexConfig.collection,                                                             // 178
            client: indexConfig.elasticSearchClient,                                                        // 179
            beforeIndex: function (doc) {                                                                   // 180
              return _this2.callConfigMethod('getElasticSearchDoc', doc, _this2.callConfigMethod('fieldsToIndex', indexConfig));
            }                                                                                               // 180
          });                                                                                               // 175
        }));                                                                                                // 182
      }                                                                                                     // 183
    }                                                                                                       // 184
                                                                                                            //
    return onIndexCreate;                                                                                   //
  }(); /**                                                                                                  //
        * Return the reactive search cursor.                                                                //
        *                                                                                                   //
        * @param {Object} searchDefinition Search definition                                                //
        * @param {Object} options          Search and index options                                         //
        */                                                                                                  //
                                                                                                            //
  ElasticSearchEngine.prototype.getSearchCursor = function () {                                             //
    function getSearchCursor(searchDefinition, options) {                                                   //
      var _this3 = this;                                                                                    // 192
                                                                                                            //
      var fut = new Future(),                                                                               // 193
          body = {};                                                                                        // 193
      searchDefinition = EasySearch.MongoDB.prototype.transformSearchDefinition(searchDefinition, options);
      body.query = this.callConfigMethod('query', searchDefinition, options);                               // 198
      body.sort = this.callConfigMethod('sort', searchDefinition, options);                                 // 199
      body.fields = ['_id'];                                                                                // 200
      body = this.callConfigMethod('body', body, options);                                                  // 202
      options.index.elasticSearchClient.search({                                                            // 204
        index: 'easysearch',                                                                                // 205
        type: options.index.name,                                                                           // 206
        body: body,                                                                                         // 207
        size: options.search.limit,                                                                         // 208
        from: options.search.skip                                                                           // 209
      }, Meteor.bindEnvironment(function (error, data) {                                                    // 204
        if (error) {                                                                                        // 211
          console.log('Had an error while searching!');                                                     // 212
          console.log(error);                                                                               // 213
          return;                                                                                           // 214
        }                                                                                                   // 215
                                                                                                            //
        var _getCursorData = _this3.getCursorData(data),                                                    // 210
            total = _getCursorData.total,                                                                   // 210
            ids = _getCursorData.ids,                                                                       // 210
            cursor = void 0;                                                                                // 210
                                                                                                            //
        if (ids.length > 0) {                                                                               // 220
          cursor = options.index.collection.find({                                                          // 221
            $or: _.map(ids, function (_id) {                                                                // 222
              return {                                                                                      // 223
                _id: _id                                                                                    // 223
              };                                                                                            // 223
            })                                                                                              // 224
          }, {                                                                                              // 221
            limit: options.search.limit                                                                     // 225
          });                                                                                               // 225
        } else {                                                                                            // 226
          cursor = EasySearch.Cursor.emptyCursor;                                                           // 227
        }                                                                                                   // 228
                                                                                                            //
        fut['return'](new EasySearch.Cursor(cursor, total));                                                // 230
      }));                                                                                                  // 231
      return fut.wait();                                                                                    // 233
    }                                                                                                       // 234
                                                                                                            //
    return getSearchCursor;                                                                                 //
  }(); /**                                                                                                  //
        * Get data for the cursor from the elastic search response.                                         //
        *                                                                                                   //
        * @param {Object} data ElasticSearch data                                                           //
        *                                                                                                   //
        * @returns {Object}                                                                                 //
        */                                                                                                  //
                                                                                                            //
  ElasticSearchEngine.prototype.getCursorData = function () {                                               //
    function getCursorData(data) {                                                                          //
      return {                                                                                              // 244
        ids: _.map(data.hits.hits, function (resultSet) {                                                   // 245
          return resultSet._id;                                                                             // 245
        }),                                                                                                 // 245
        total: data.hits.total                                                                              // 246
      };                                                                                                    // 244
    }                                                                                                       // 248
                                                                                                            //
    return getCursorData;                                                                                   //
  }();                                                                                                      //
                                                                                                            //
  return ElasticSearchEngine;                                                                               //
}(EasySearch.ReactiveEngine);                                                                               //
                                                                                                            //
EasySearch.ElasticSearch = ElasticSearchEngine;                                                             // 251
module.exportDefault(ElasticSearchEngine);                                                                  // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/easysearch_elasticsearch/lib/main.js                                                            //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
module.export({                                                                                             // 1
  ElasticSearchEngine: function () {                                                                        // 1
    return ElasticSearchEngine;                                                                             // 1
  }                                                                                                         // 1
});                                                                                                         // 1
var ElasticSearchEngine = void 0;                                                                           // 1
module.watch(require("./engine"), {                                                                         // 1
  "default": function (v) {                                                                                 // 1
    ElasticSearchEngine = v;                                                                                // 1
  }                                                                                                         // 1
}, 0);                                                                                                      // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/easysearch:elasticsearch/lib/data-syncer.js");
require("./node_modules/meteor/easysearch:elasticsearch/lib/engine.js");
var exports = require("./node_modules/meteor/easysearch:elasticsearch/lib/main.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['easysearch:elasticsearch'] = exports, {
  EasySearch: EasySearch
});

})();
