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
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var _ = Package.underscore._;
var assert = Package['peerlibrary:assert'].assert;
var ReactiveField = Package['peerlibrary:reactive-field'].ReactiveField;
var ComputedField = Package['peerlibrary:computed-field'].ComputedField;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

/* Package-scope variables */
var __coffeescriptShare, BaseComponent, BaseComponentDebug;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/peerlibrary_base-component/packages/peerlibrary_base-component.js                                      //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
(function () {                                                                                                     // 1
                                                                                                                   // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/peerlibrary:base-component/lib.coffee.js                                                            //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var ComponentsNamespace, addComponentChildDeprecationWarning, arrayReferenceEquals, childrenComponentsDeprecationWarning, childrenComponentsWithDeprecationWarning, componentChildrenDeprecationWarning, componentChildrenWithDeprecationWarning, componentParentDeprecationWarning, createMatcher, createNamespace, getComponent, getNamespace, getPathAndName, removeComponentChildDeprecationWarning, setComponent,               
  __hasProp = {}.hasOwnProperty,                                                                                   // 11
  __slice = [].slice;                                                                                              // 12
                                                                                                                   // 13
arrayReferenceEquals = function(a, b) {                                                                            // 14
  var i, _i, _ref;                                                                                                 // 15
  if (a.length !== b.length) {                                                                                     // 16
    return false;                                                                                                  // 17
  }                                                                                                                // 18
  for (i = _i = 0, _ref = a.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {              // 19
    if (a[i] !== b[i]) {                                                                                           // 20
      return false;                                                                                                // 21
    }                                                                                                              // 22
  }                                                                                                                // 23
  return true;                                                                                                     // 24
};                                                                                                                 // 25
                                                                                                                   // 26
createMatcher = function(propertyOrMatcherOrFunction) {                                                            // 27
  var matcher, property;                                                                                           // 28
  if (_.isString(propertyOrMatcherOrFunction)) {                                                                   // 29
    property = propertyOrMatcherOrFunction;                                                                        // 30
    propertyOrMatcherOrFunction = (function(_this) {                                                               // 31
      return function(child, parent) {                                                                             // 32
        return property in child;                                                                                  // 33
      };                                                                                                           // 34
    })(this);                                                                                                      // 35
  } else if (!_.isFunction(propertyOrMatcherOrFunction)) {                                                         // 36
    assert(_.isObject(propertyOrMatcherOrFunction));                                                               // 37
    matcher = propertyOrMatcherOrFunction;                                                                         // 38
    propertyOrMatcherOrFunction = (function(_this) {                                                               // 39
      return function(child, parent) {                                                                             // 40
        var value;                                                                                                 // 41
        for (property in matcher) {                                                                                // 42
          value = matcher[property];                                                                               // 43
          if (!(property in child)) {                                                                              // 44
            return false;                                                                                          // 45
          }                                                                                                        // 46
          if (_.isFunction(child[property])) {                                                                     // 47
            if (child[property]() !== value) {                                                                     // 48
              return false;                                                                                        // 49
            }                                                                                                      // 50
          } else {                                                                                                 // 51
            if (child[property] !== value) {                                                                       // 52
              return false;                                                                                        // 53
            }                                                                                                      // 54
          }                                                                                                        // 55
        }                                                                                                          // 56
        return true;                                                                                               // 57
      };                                                                                                           // 58
    })(this);                                                                                                      // 59
  }                                                                                                                // 60
  return propertyOrMatcherOrFunction;                                                                              // 61
};                                                                                                                 // 62
                                                                                                                   // 63
ComponentsNamespace = (function() {                                                                                // 64
  function ComponentsNamespace() {}                                                                                // 65
                                                                                                                   // 66
  ComponentsNamespace.COMPONENTS_FIELD = '';                                                                       // 67
                                                                                                                   // 68
  return ComponentsNamespace;                                                                                      // 69
                                                                                                                   // 70
})();                                                                                                              // 71
                                                                                                                   // 72
getPathAndName = function(name) {                                                                                  // 73
  var path;                                                                                                        // 74
  assert(name);                                                                                                    // 75
  path = name.split('.');                                                                                          // 76
  name = path.pop();                                                                                               // 77
  assert(name);                                                                                                    // 78
  return {                                                                                                         // 79
    path: path,                                                                                                    // 80
    name: name                                                                                                     // 81
  };                                                                                                               // 82
};                                                                                                                 // 83
                                                                                                                   // 84
getNamespace = function(components, path) {                                                                        // 85
  var match, segment;                                                                                              // 86
  assert(_.isObject(components));                                                                                  // 87
  assert(_.isArray(path));                                                                                         // 88
  match = components;                                                                                              // 89
  while ((segment = path.shift()) != null) {                                                                       // 90
    match = match[segment];                                                                                        // 91
    if (!_.isObject(match)) {                                                                                      // 92
      return null;                                                                                                 // 93
    }                                                                                                              // 94
  }                                                                                                                // 95
  if (!_.isObject(match)) {                                                                                        // 96
    return null;                                                                                                   // 97
  }                                                                                                                // 98
  return match || null;                                                                                            // 99
};                                                                                                                 // 100
                                                                                                                   // 101
createNamespace = function(components, path) {                                                                     // 102
  var match, segment;                                                                                              // 103
  assert(_.isObject(components));                                                                                  // 104
  assert(_.isArray(path));                                                                                         // 105
  match = components;                                                                                              // 106
  while ((segment = path.shift()) != null) {                                                                       // 107
    if (!(segment in match)) {                                                                                     // 108
      match[segment] = new components.constructor();                                                               // 109
    }                                                                                                              // 110
    match = match[segment];                                                                                        // 111
    assert(_.isObject(match));                                                                                     // 112
  }                                                                                                                // 113
  assert(_.isObject(match));                                                                                       // 114
  return match;                                                                                                    // 115
};                                                                                                                 // 116
                                                                                                                   // 117
getComponent = function(components, name) {                                                                        // 118
  var namespace, path, _ref, _ref1;                                                                                // 119
  assert(_.isObject(components));                                                                                  // 120
  if (!name) {                                                                                                     // 121
    return null;                                                                                                   // 122
  }                                                                                                                // 123
  _ref = getPathAndName(name), path = _ref.path, name = _ref.name;                                                 // 124
  namespace = getNamespace(components, path);                                                                      // 125
  if (!namespace) {                                                                                                // 126
    return null;                                                                                                   // 127
  }                                                                                                                // 128
  return ((_ref1 = namespace[components.constructor.COMPONENTS_FIELD]) != null ? _ref1[name] : void 0) || null;    // 129
};                                                                                                                 // 130
                                                                                                                   // 131
setComponent = function(components, name, component) {                                                             // 132
  var namespace, path, _name, _ref;                                                                                // 133
  assert(_.isObject(components));                                                                                  // 134
  assert(name);                                                                                                    // 135
  assert(component);                                                                                               // 136
  _ref = getPathAndName(name), path = _ref.path, name = _ref.name;                                                 // 137
  namespace = createNamespace(components, path);                                                                   // 138
  if (namespace[_name = components.constructor.COMPONENTS_FIELD] == null) {                                        // 139
    namespace[_name] = new components.constructor();                                                               // 140
  }                                                                                                                // 141
  assert(!(name in namespace[components.constructor.COMPONENTS_FIELD]));                                           // 142
  return namespace[components.constructor.COMPONENTS_FIELD][name] = component;                                     // 143
};                                                                                                                 // 144
                                                                                                                   // 145
componentChildrenDeprecationWarning = false;                                                                       // 146
                                                                                                                   // 147
componentChildrenWithDeprecationWarning = false;                                                                   // 148
                                                                                                                   // 149
addComponentChildDeprecationWarning = false;                                                                       // 150
                                                                                                                   // 151
removeComponentChildDeprecationWarning = false;                                                                    // 152
                                                                                                                   // 153
componentParentDeprecationWarning = false;                                                                         // 154
                                                                                                                   // 155
childrenComponentsDeprecationWarning = false;                                                                      // 156
                                                                                                                   // 157
childrenComponentsWithDeprecationWarning = false;                                                                  // 158
                                                                                                                   // 159
BaseComponent = (function() {                                                                                      // 160
  function BaseComponent() {}                                                                                      // 161
                                                                                                                   // 162
  BaseComponent.components = new ComponentsNamespace();                                                            // 163
                                                                                                                   // 164
  BaseComponent.register = function(componentName, componentClass) {                                               // 165
    if (!componentName) {                                                                                          // 166
      throw new Error("Component name is required for registration.");                                             // 167
    }                                                                                                              // 168
    if (componentClass == null) {                                                                                  // 169
      componentClass = this;                                                                                       // 170
    }                                                                                                              // 171
    if (getComponent(this.components, componentName)) {                                                            // 172
      throw new Error("Component '" + componentName + "' already registered.");                                    // 173
    }                                                                                                              // 174
    if (componentClass.componentName() && componentClass.componentName() !== componentName && getComponent(this.components, componentClass.componentName()) === componentClass) {
      throw new Error("Component '" + componentName + "' already registered under the name '" + (componentClass.componentName()) + "'.");
    }                                                                                                              // 177
    componentClass.componentName(componentName);                                                                   // 178
    assert.equal(componentClass.componentName(), componentName);                                                   // 179
    setComponent(this.components, componentName, componentClass);                                                  // 180
    return this;                                                                                                   // 181
  };                                                                                                               // 182
                                                                                                                   // 183
  BaseComponent.getComponent = function(componentsNamespace, componentName) {                                      // 184
    if (!componentName) {                                                                                          // 185
      componentName = componentsNamespace;                                                                         // 186
      componentsNamespace = this.components;                                                                       // 187
    }                                                                                                              // 188
    if (!componentName) {                                                                                          // 189
      return null;                                                                                                 // 190
    }                                                                                                              // 191
    if (!_.isString(componentName)) {                                                                              // 192
      throw new Error("Component name '" + componentName + "' is not a string.");                                  // 193
    }                                                                                                              // 194
    return getComponent(componentsNamespace, componentName);                                                       // 195
  };                                                                                                               // 196
                                                                                                                   // 197
  BaseComponent.componentName = function(componentName) {                                                          // 198
    if (componentName) {                                                                                           // 199
      this._componentName = componentName;                                                                         // 200
      return this;                                                                                                 // 201
    }                                                                                                              // 202
    return this._componentName || null;                                                                            // 203
  };                                                                                                               // 204
                                                                                                                   // 205
  BaseComponent.prototype.componentName = function() {                                                             // 206
    return this.constructor.componentName();                                                                       // 207
  };                                                                                                               // 208
                                                                                                                   // 209
  BaseComponent.prototype.childComponents = function(nameOrComponent) {                                            // 210
    var child, _base;                                                                                              // 211
    if (this._componentInternals == null) {                                                                        // 212
      this._componentInternals = {};                                                                               // 213
    }                                                                                                              // 214
    if ((_base = this._componentInternals).childComponents == null) {                                              // 215
      _base.childComponents = new ReactiveField([], arrayReferenceEquals);                                         // 216
    }                                                                                                              // 217
    if (!nameOrComponent) {                                                                                        // 218
      return (function() {                                                                                         // 219
        var _i, _len, _ref, _results;                                                                              // 220
        _ref = this._componentInternals.childComponents();                                                         // 221
        _results = [];                                                                                             // 222
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                        // 223
          child = _ref[_i];                                                                                        // 224
          _results.push(child);                                                                                    // 225
        }                                                                                                          // 226
        return _results;                                                                                           // 227
      }).call(this);                                                                                               // 228
    }                                                                                                              // 229
    if (_.isString(nameOrComponent)) {                                                                             // 230
      return this.childComponentsWith((function(_this) {                                                           // 231
        return function(child, parent) {                                                                           // 232
          return child.componentName() === nameOrComponent;                                                        // 233
        };                                                                                                         // 234
      })(this));                                                                                                   // 235
    } else {                                                                                                       // 236
      return this.childComponentsWith((function(_this) {                                                           // 237
        return function(child, parent) {                                                                           // 238
          if (child.constructor === nameOrComponent) {                                                             // 239
            return true;                                                                                           // 240
          }                                                                                                        // 241
          if (child === nameOrComponent) {                                                                         // 242
            return true;                                                                                           // 243
          }                                                                                                        // 244
          return false;                                                                                            // 245
        };                                                                                                         // 246
      })(this));                                                                                                   // 247
    }                                                                                                              // 248
  };                                                                                                               // 249
                                                                                                                   // 250
  BaseComponent.prototype.childComponentsWith = function(propertyOrMatcherOrFunction) {                            // 251
    var results;                                                                                                   // 252
    assert(propertyOrMatcherOrFunction);                                                                           // 253
    propertyOrMatcherOrFunction = createMatcher(propertyOrMatcherOrFunction);                                      // 254
    results = new ComputedField((function(_this) {                                                                 // 255
      return function() {                                                                                          // 256
        var child, _i, _len, _ref, _results;                                                                       // 257
        _ref = _this.childComponents();                                                                            // 258
        _results = [];                                                                                             // 259
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                        // 260
          child = _ref[_i];                                                                                        // 261
          if (propertyOrMatcherOrFunction.call(_this, child, _this)) {                                             // 262
            _results.push(child);                                                                                  // 263
          }                                                                                                        // 264
        }                                                                                                          // 265
        return _results;                                                                                           // 266
      };                                                                                                           // 267
    })(this), arrayReferenceEquals);                                                                               // 268
    return results();                                                                                              // 269
  };                                                                                                               // 270
                                                                                                                   // 271
  BaseComponent.prototype.addChildComponent = function(childComponent) {                                           // 272
    var _base;                                                                                                     // 273
    if (this._componentInternals == null) {                                                                        // 274
      this._componentInternals = {};                                                                               // 275
    }                                                                                                              // 276
    if ((_base = this._componentInternals).childComponents == null) {                                              // 277
      _base.childComponents = new ReactiveField([], arrayReferenceEquals);                                         // 278
    }                                                                                                              // 279
    this._componentInternals.childComponents(Tracker.nonreactive((function(_this) {                                // 280
      return function() {                                                                                          // 281
        return _this._componentInternals.childComponents().concat([childComponent]);                               // 282
      };                                                                                                           // 283
    })(this)));                                                                                                    // 284
    return this;                                                                                                   // 285
  };                                                                                                               // 286
                                                                                                                   // 287
  BaseComponent.prototype.removeChildComponent = function(childComponent) {                                        // 288
    var _base;                                                                                                     // 289
    if (this._componentInternals == null) {                                                                        // 290
      this._componentInternals = {};                                                                               // 291
    }                                                                                                              // 292
    if ((_base = this._componentInternals).childComponents == null) {                                              // 293
      _base.childComponents = new ReactiveField([], arrayReferenceEquals);                                         // 294
    }                                                                                                              // 295
    this._componentInternals.childComponents(Tracker.nonreactive((function(_this) {                                // 296
      return function() {                                                                                          // 297
        return _.without(_this._componentInternals.childComponents(), childComponent);                             // 298
      };                                                                                                           // 299
    })(this)));                                                                                                    // 300
    return this;                                                                                                   // 301
  };                                                                                                               // 302
                                                                                                                   // 303
  BaseComponent.prototype.parentComponent = function(parentComponent) {                                            // 304
    var _base;                                                                                                     // 305
    if (this._componentInternals == null) {                                                                        // 306
      this._componentInternals = {};                                                                               // 307
    }                                                                                                              // 308
    if ((_base = this._componentInternals).parentComponent == null) {                                              // 309
      _base.parentComponent = new ReactiveField(null, function(a, b) {                                             // 310
        return a === b;                                                                                            // 311
      });                                                                                                          // 312
    }                                                                                                              // 313
    if (!_.isUndefined(parentComponent)) {                                                                         // 314
      this._componentInternals.parentComponent(parentComponent);                                                   // 315
      return this;                                                                                                 // 316
    }                                                                                                              // 317
    return this._componentInternals.parentComponent();                                                             // 318
  };                                                                                                               // 319
                                                                                                                   // 320
  BaseComponent.renderComponent = function(parentComponent) {                                                      // 321
    throw new Error("Not implemented");                                                                            // 322
  };                                                                                                               // 323
                                                                                                                   // 324
  BaseComponent.prototype.renderComponent = function(parentComponent) {                                            // 325
    throw new Error("Not implemented");                                                                            // 326
  };                                                                                                               // 327
                                                                                                                   // 328
  BaseComponent.extendComponent = function(constructor, methods) {                                                 // 329
    var currentClass, property, value, _ref;                                                                       // 330
    currentClass = this;                                                                                           // 331
    if (!_.isFunction(constructor)) {                                                                              // 332
      methods = constructor;                                                                                       // 333
      constructor = function() {                                                                                   // 334
        return constructor.__super__.constructor.apply(this, arguments);                                           // 335
      };                                                                                                           // 336
    }                                                                                                              // 337
    constructor.prototype = Object.create(currentClass.prototype);                                                 // 338
    constructor.prototype.constructor = constructor;                                                               // 339
    for (property in currentClass) {                                                                               // 340
      if (!__hasProp.call(currentClass, property)) continue;                                                       // 341
      value = currentClass[property];                                                                              // 342
      constructor[property] = value;                                                                               // 343
    }                                                                                                              // 344
    constructor.__super__ = currentClass.prototype;                                                                // 345
    _ref = methods || {};                                                                                          // 346
    for (property in _ref) {                                                                                       // 347
      if (!__hasProp.call(_ref, property)) continue;                                                               // 348
      value = _ref[property];                                                                                      // 349
      constructor.prototype[property] = value;                                                                     // 350
    }                                                                                                              // 351
    return constructor;                                                                                            // 352
  };                                                                                                               // 353
                                                                                                                   // 354
  BaseComponent.prototype.componentChildren = function() {                                                         // 355
    var args;                                                                                                      // 356
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                                // 357
    if (!componentChildrenDeprecationWarning) {                                                                    // 358
      componentChildrenDeprecationWarning = true;                                                                  // 359
      if (typeof console !== "undefined" && console !== null) {                                                    // 360
        console.warn("componentChildren has been deprecated. Use childComponents instead.");                       // 361
      }                                                                                                            // 362
    }                                                                                                              // 363
    return this.childComponents.apply(this, args);                                                                 // 364
  };                                                                                                               // 365
                                                                                                                   // 366
  BaseComponent.prototype.componentChildrenWith = function() {                                                     // 367
    var args;                                                                                                      // 368
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                                // 369
    if (!componentChildrenWithDeprecationWarning) {                                                                // 370
      componentChildrenWithDeprecationWarning = true;                                                              // 371
      if (typeof console !== "undefined" && console !== null) {                                                    // 372
        console.warn("componentChildrenWith has been deprecated. Use childComponentsWith instead.");               // 373
      }                                                                                                            // 374
    }                                                                                                              // 375
    return this.childComponentsWith.apply(this, args);                                                             // 376
  };                                                                                                               // 377
                                                                                                                   // 378
  BaseComponent.prototype.addComponentChild = function() {                                                         // 379
    var args;                                                                                                      // 380
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                                // 381
    if (!addComponentChildDeprecationWarning) {                                                                    // 382
      addComponentChildDeprecationWarning = true;                                                                  // 383
      if (typeof console !== "undefined" && console !== null) {                                                    // 384
        console.warn("addComponentChild has been deprecated. Use addChildComponent instead.");                     // 385
      }                                                                                                            // 386
    }                                                                                                              // 387
    return this.addChildComponent.apply(this, args);                                                               // 388
  };                                                                                                               // 389
                                                                                                                   // 390
  BaseComponent.prototype.removeComponentChild = function() {                                                      // 391
    var args;                                                                                                      // 392
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                                // 393
    if (!removeComponentChildDeprecationWarning) {                                                                 // 394
      removeComponentChildDeprecationWarning = true;                                                               // 395
      if (typeof console !== "undefined" && console !== null) {                                                    // 396
        console.warn("removeComponentChild has been deprecated. Use removeChildComponent instead.");               // 397
      }                                                                                                            // 398
    }                                                                                                              // 399
    return this.removeChildComponent.apply(this, args);                                                            // 400
  };                                                                                                               // 401
                                                                                                                   // 402
  BaseComponent.prototype.componentParent = function() {                                                           // 403
    var args;                                                                                                      // 404
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                                // 405
    if (!componentParentDeprecationWarning) {                                                                      // 406
      componentParentDeprecationWarning = true;                                                                    // 407
      if (typeof console !== "undefined" && console !== null) {                                                    // 408
        console.warn("componentParent has been deprecated. Use parentComponent instead.");                         // 409
      }                                                                                                            // 410
    }                                                                                                              // 411
    return this.parentComponent.apply(this, args);                                                                 // 412
  };                                                                                                               // 413
                                                                                                                   // 414
  BaseComponent.prototype.childrenComponents = function() {                                                        // 415
    var args;                                                                                                      // 416
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                                // 417
    if (!componentChildrenDeprecationWarning) {                                                                    // 418
      componentChildrenDeprecationWarning = true;                                                                  // 419
      if (typeof console !== "undefined" && console !== null) {                                                    // 420
        console.warn("childrenComponents has been deprecated. Use childComponents instead.");                      // 421
      }                                                                                                            // 422
    }                                                                                                              // 423
    return this.childComponents.apply(this, args);                                                                 // 424
  };                                                                                                               // 425
                                                                                                                   // 426
  BaseComponent.prototype.childrenComponentsWith = function() {                                                    // 427
    var args;                                                                                                      // 428
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                                // 429
    if (!componentChildrenWithDeprecationWarning) {                                                                // 430
      componentChildrenWithDeprecationWarning = true;                                                              // 431
      if (typeof console !== "undefined" && console !== null) {                                                    // 432
        console.warn("childrenComponentsWith has been deprecated. Use childComponentsWith instead.");              // 433
      }                                                                                                            // 434
    }                                                                                                              // 435
    return this.childComponentsWith.apply(this, args);                                                             // 436
  };                                                                                                               // 437
                                                                                                                   // 438
  return BaseComponent;                                                                                            // 439
                                                                                                                   // 440
})();                                                                                                              // 441
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   // 443
}).call(this);                                                                                                     // 444
                                                                                                                   // 445
                                                                                                                   // 446
                                                                                                                   // 447
                                                                                                                   // 448
                                                                                                                   // 449
                                                                                                                   // 450
(function () {                                                                                                     // 451
                                                                                                                   // 452
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/peerlibrary:base-component/debug.coffee.js                                                          //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
                                                                                                                   // 460
                                                                                                                   // 461
BaseComponentDebug = (function() {                                                                                 // 462
  function BaseComponentDebug() {}                                                                                 // 463
                                                                                                                   // 464
  BaseComponentDebug.startComponent = function(component) {                                                        // 465
    var name;                                                                                                      // 466
    name = component.componentName() || 'unnamed';                                                                 // 467
    console.group(name);                                                                                           // 468
    return console.log('%o', component);                                                                           // 469
  };                                                                                                               // 470
                                                                                                                   // 471
  BaseComponentDebug.endComponent = function(component) {                                                          // 472
    return console.groupEnd();                                                                                     // 473
  };                                                                                                               // 474
                                                                                                                   // 475
  BaseComponentDebug.startMarkedComponent = function(component) {                                                  // 476
    var name;                                                                                                      // 477
    name = component.componentName() || 'unnamed';                                                                 // 478
    console.group('%c%s', 'text-decoration: underline', name);                                                     // 479
    return console.log('%o', component);                                                                           // 480
  };                                                                                                               // 481
                                                                                                                   // 482
  BaseComponentDebug.endMarkedComponent = function(component) {                                                    // 483
    return this.endComponent(component);                                                                           // 484
  };                                                                                                               // 485
                                                                                                                   // 486
  BaseComponentDebug.dumpComponentSubtree = function(rootComponent, _markComponent) {                              // 487
    var child, marked, _i, _len, _ref;                                                                             // 488
    if (_markComponent == null) {                                                                                  // 489
      _markComponent = (function() {});                                                                            // 490
    }                                                                                                              // 491
    if (!rootComponent) {                                                                                          // 492
      return;                                                                                                      // 493
    }                                                                                                              // 494
    marked = _markComponent(rootComponent);                                                                        // 495
    if (marked) {                                                                                                  // 496
      this.startMarkedComponent(rootComponent);                                                                    // 497
    } else {                                                                                                       // 498
      this.startComponent(rootComponent);                                                                          // 499
    }                                                                                                              // 500
    _ref = rootComponent.childComponents();                                                                        // 501
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                            // 502
      child = _ref[_i];                                                                                            // 503
      this.dumpComponentSubtree(child, _markComponent);                                                            // 504
    }                                                                                                              // 505
    if (marked) {                                                                                                  // 506
      this.endMarkedComponent(rootComponent);                                                                      // 507
    } else {                                                                                                       // 508
      this.endComponent(rootComponent);                                                                            // 509
    }                                                                                                              // 510
  };                                                                                                               // 511
                                                                                                                   // 512
  BaseComponentDebug.componentRoot = function(component) {                                                         // 513
    var parentComponent;                                                                                           // 514
    while (parentComponent = component.parentComponent()) {                                                        // 515
      component = parentComponent;                                                                                 // 516
    }                                                                                                              // 517
    return component;                                                                                              // 518
  };                                                                                                               // 519
                                                                                                                   // 520
  BaseComponentDebug.dumpComponentTree = function(component) {                                                     // 521
    if (!component) {                                                                                              // 522
      return;                                                                                                      // 523
    }                                                                                                              // 524
    return this.dumpComponentSubtree(this.componentRoot(component), function(c) {                                  // 525
      return c === component;                                                                                      // 526
    });                                                                                                            // 527
  };                                                                                                               // 528
                                                                                                                   // 529
  return BaseComponentDebug;                                                                                       // 530
                                                                                                                   // 531
})();                                                                                                              // 532
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   // 534
}).call(this);                                                                                                     // 535
                                                                                                                   // 536
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['peerlibrary:base-component'] = {}, {
  BaseComponent: BaseComponent,
  BaseComponentDebug: BaseComponentDebug
});

})();
