(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Admin-category-category-module~Admin-inventory-inventory-module"],{

/***/ "I45a":
/*!********************************************************!*\
  !*** ./src/app/manage/Admin/category/product.model.ts ***!
  \********************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(id, mainCategory, category, subCategory, productName, brandName, manufacturerName, productCode, startRating, productSRNumber, productPrice, discountPrice, emiOptiions, avibilityStatus, 
    // public productQuantity?: number [],
    descripition, relatedProduct, 
    //public selectedSize?: string [],
    productSize, itemWeight, 
    // public productListImage?: string,
    isActive, sizeList, productMainImage, selectedSize, multi, selectedCheck, isNewArrival, isBestProduct, isHot, isOnSale) {
        this.id = id;
        this.mainCategory = mainCategory;
        this.category = category;
        this.subCategory = subCategory;
        this.productName = productName;
        this.brandName = brandName;
        this.manufacturerName = manufacturerName;
        this.productCode = productCode;
        this.startRating = startRating;
        this.productSRNumber = productSRNumber;
        this.productPrice = productPrice;
        this.discountPrice = discountPrice;
        this.emiOptiions = emiOptiions;
        this.avibilityStatus = avibilityStatus;
        this.descripition = descripition;
        this.relatedProduct = relatedProduct;
        this.productSize = productSize;
        this.itemWeight = itemWeight;
        this.isActive = isActive;
        this.sizeList = sizeList;
        this.productMainImage = productMainImage;
        this.selectedSize = selectedSize;
        this.multi = multi;
        this.selectedCheck = selectedCheck;
        this.isNewArrival = isNewArrival;
        this.isBestProduct = isBestProduct;
        this.isHot = isHot;
        this.isOnSale = isOnSale;
    }
    return Product;
}());



/***/ }),

/***/ "oD//":
/*!**********************************************************!*\
  !*** ./src/app/manage/Admin/category/clothsize.model.ts ***!
  \**********************************************************/
/*! exports provided: ClothSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClothSize", function() { return ClothSize; });
var ClothSize = /** @class */ (function () {
    function ClothSize(id, size) {
        this.id = id;
        this.size = size;
    }
    return ClothSize;
}());



/***/ }),

/***/ "yQBb":
/*!***********************************************************************************************!*\
  !*** ./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm2015/jw-bootstrap-switch-ng2.js ***!
  \***********************************************************************************************/
/*! exports provided: JwBootstrapSwitchNg2Component, JwBootstrapSwitchNg2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwBootstrapSwitchNg2Component", function() { return JwBootstrapSwitchNg2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwBootstrapSwitchNg2Module", function() { return JwBootstrapSwitchNg2Module; });
/* harmony import */ var _Users_mohit_Documents_angular_projects_rumit_node_Divided_UserSide_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _Users_mohit_Documents_angular_projects_rumit_node_Divided_UserSide_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */




var _c0 = ["container"];
var _c1 = ["on"];
var _c2 = ["label"];
var _c3 = ["off"];

var callback = function callback() {};
/** @type {?} */


var CUSTOM_INPUT = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
    return JwBootstrapSwitchNg2Component;
  }),
  multi: true
};

var JwBootstrapSwitchNg2Component = /*#__PURE__*/function () {
  /**
   * @param {?} cd
   * @param {?} render
   */
  function JwBootstrapSwitchNg2Component(cd, render) {
    Object(_Users_mohit_Documents_angular_projects_rumit_node_Divided_UserSide_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, JwBootstrapSwitchNg2Component);

    this.cd = cd;
    this.render = render; // Defining Default Options for Switch

    this.handleWidth = 0;
    this.labelWidth = 0;
    this.labelText = '';
    this.inverse = false;
    this.baseClass = 'bootstrap-switch';
    this.onText = 'ON';
    this.offText = 'OFF';
    this.disabled = false;
    this.readonly = false;
    this._focused = false;
    this._size = 'normal';
    this._animate = true;
    this._innerAnimate = true;
    this._indeterminate = false;
    this._onColor = 'primary';
    this._offColor = 'default';
    this._wrapperClass = 'wrapper';
    this._innerState = false;
    this._innerHandleWidth = 'auto';
    this._innerLabelWidth = 'auto';
    this._dragStart = null;
    this._dragEnd = null;
    this._onTouchedCallback = callback;
    this._onChangeCallback = callback;
    this.changeState = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
  }
  /**
   * @private
   * @return {?}
   */


  Object(_Users_mohit_Documents_angular_projects_rumit_node_Divided_UserSide_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(JwBootstrapSwitchNg2Component, [{
    key: "$on",
    value: function $on() {
      return this.on.nativeElement;
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "$off",
    value: function $off() {
      return this.off.nativeElement;
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "$label",
    value: function $label() {
      return this.label.nativeElement;
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "$container",
    value: function $container() {
      return this.container.nativeElement;
    }
    /**
     * \@description: Function to set the Classes for the Wrapper Div
     * @return {?} string
     */

  }, {
    key: "getWrapperClasses",
    value: function getWrapperClasses() {
      /** @type {?} */
      var output = this.baseClass + ' ' + this.baseClass + '-' + this._wrapperClass;

      if (this._focused) {
        output += ' ' + this.baseClass + '-focused';
      }

      if (this.readonly) {
        output += ' ' + this.baseClass + '-readonly';
      }

      if (this._size != null) {
        output += ' ' + this.baseClass + '-' + this._size;
      }

      if (this._innerState) {
        output += ' ' + this.baseClass + '-on';
      } else {
        output += ' ' + this.baseClass + '-off';
      }

      if (this._animate) {
        output += ' ' + this.baseClass + '-animate';
      }

      if (this.disabled) {
        output += ' ' + this.baseClass + '-disabled';
      }

      if (this._indeterminate || this._innerState === null || typeof this._innerState === 'undefined') {
        output += ' ' + this.baseClass + '-indeterminate';
      }

      if (this.inverse) {
        output += ' ' + this.baseClass + '-inverse';
      }

      return output;
    }
    /**
     * \@description Function to set the css classes for #on
     * @return {?} string
     */

  }, {
    key: "getOnClasses",
    value: function getOnClasses() {
      /** @type {?} */
      var output = this.baseClass + '-handle-on';

      if (this._onColor) {
        output += ' ' + this.baseClass + '-' + this._onColor;
      }

      return output;
    }
    /**
     * \@description Function to set the css classes for #off
     * @return {?} string
     */

  }, {
    key: "getOffClasses",
    value: function getOffClasses() {
      /** @type {?} */
      var output = this.baseClass + '-handle-off';

      if (this._offColor) {
        output += ' ' + this.baseClass + '-' + this._offColor;
      }

      return output;
    }
    /**
     * \@description Function set the marging of the #label when change the state
     * @return {?} string
     */

  }, {
    key: "getLabelMarginLeft",
    value: function getLabelMarginLeft() {
      /** @type {?} */
      var width = this.inverse ? -this.handleWidth : 0;

      if (this._indeterminate || this._innerState === null || typeof this._innerState === 'undefined') {
        width = -(this.handleWidth / 2);
      } else if (this._dragEnd) {
        width = this._dragEnd;
      } else if (!this._innerState) {
        if (!this.inverse) {
          width = -this.handleWidth;
        } else {
          width = 0;
        }
      }

      return width + 'px';
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes['setLabelText'] || changes['setOnText'] || changes['setHandleWidth'] || changes['setLabelWidth'] || changes['setOffText'] || changes['setSize']) {
        this.calculateWith(true);
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      this.calculateWith();
    }
    /**
     * @return {?}
     */

  }, {
    key: "onClick",
    value: function onClick() {
      if (!this.disabled && !this.readonly && !this._dragEnd) {
        this.setStateValue(!this._innerState);
      } else if (this._dragEnd) {
        this._dragEnd = null;
      }
    }
    /**
     * @param {?} e
     * @return {?}
     */

  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      if (!e.which || this.disabled || this.readonly) {
        return;
      }

      switch (e.which) {
        case 37:
          e.preventDefault();
          e.stopImmediatePropagation();
          this.setStateValue(false);
          break;

        case 39:
          e.preventDefault();
          e.stopImmediatePropagation();
          this.setStateValue(true);
          break;
      }
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */

  }, {
    key: "onDragStart",
    value: function onDragStart(e) {
      if (e.target === this.$label()) {
        if (this._dragStart || this.disabled || this.readonly) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();
        this._dragStart = (e.pageX || e.touches[0].pageX) - parseInt(this.$container().style.marginLeft, 10);

        if (this._animate) {
          this._animate = !this._animate;
        }
      }
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */

  }, {
    key: "onDragMove",
    value: function onDragMove(e) {
      if (this._dragStart) {
        e.preventDefault();
        /** @type {?} */

        var difference = (e.pageX || e.touches[0].pageX) - this._dragStart;

        if (difference < -Number(this.handleWidth) || difference > 0) {
          return;
        }

        this._dragEnd = difference;
      }
    }
    /**
     * @private
     * @param {?} e
     * @param {?=} removeDragEnd
     * @return {?}
     */

  }, {
    key: "onDragEnd",
    value: function onDragEnd(e) {
      var removeDragEnd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this._dragStart) {
        e.preventDefault();
        e.stopPropagation();

        if (this._dragEnd) {
          /** @type {?} */
          var state = this._dragEnd > -(Number(this.handleWidth) / 2);
          this.setStateValue(this.inverse ? !state : state);
        }

        this._dragStart = null;

        if (removeDragEnd) {
          this._dragEnd = null;
        }

        if (this._innerAnimate) {
          this._animate = true;
        }
      }
    }
    /**
     * @param {?} e
     * @return {?}
     */

  }, {
    key: "onTouchStart",
    value: function onTouchStart(e) {
      this.onDragStart(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */

  }, {
    key: "onMouseDown",
    value: function onMouseDown(e) {
      this.onDragStart(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */

  }, {
    key: "onTouchMove",
    value: function onTouchMove(e) {
      this.onDragMove(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */

  }, {
    key: "onMouseMove",
    value: function onMouseMove(e) {
      this.onDragMove(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */

  }, {
    key: "onMouseUp",
    value: function onMouseUp(e) {
      this.onDragEnd(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */

  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(e) {
      this.onDragEnd(e, true);
    }
    /**
     * @param {?} e
     * @return {?}
     */

  }, {
    key: "onMouseLeave",
    value: function onMouseLeave(e) {
      this.onDragEnd(e, true);
    }
    /**
     * @return {?}
     */

  }, {
    key: "onFocus",
    value: function onFocus() {
      this._focused = true;
    }
    /**
     * @return {?}
     */

  }, {
    key: "onBlur",
    value: function onBlur() {
      this._focused = false;

      this._onTouchedCallback();
    }
    /**
     * \@description Function to make recalculate the size of the elements when options change
     * @private
     * @param {?=} disableAnimation
     * @return {?}
     */

  }, {
    key: "calculateWith",
    value: function calculateWith() {
      var _this = this;

      var disableAnimation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (disableAnimation && this._innerAnimate) {
        this._animate = false;
      }

      setTimeout(function () {
        _this.render.setStyle(_this.$on(), 'width', 'auto');

        _this.render.setStyle(_this.$off(), 'width', 'auto');

        _this.render.setStyle(_this.$label(), 'width', 'auto');
        /** @type {?} */


        var width = _this._innerHandleWidth === 'auto' ? Math.max(_this.$on().offsetWidth, _this.$off().offsetWidth) : _this._innerHandleWidth;

        if (_this.$label().offsetWidth < width) {
          if (_this._innerLabelWidth === 'auto') {
            _this.labelWidth = Number(width);
          } else {
            _this.labelWidth = Number(_this._innerLabelWidth);
          }
        } else {
          if (_this._innerLabelWidth === 'auto') {
            _this.labelWidth = _this.$label().offsetWidth;
          } else {
            _this.labelWidth = Number(_this._innerLabelWidth);
          }
        }

        _this.handleWidth = Number(width);

        _this.render.setStyle(_this.$label(), 'width', _this.labelWidth + 'px');

        _this.render.setStyle(_this.$on(), 'width', _this.handleWidth + 'px');

        _this.render.setStyle(_this.$off(), 'width', _this.handleWidth + 'px');

        setTimeout(function () {
          if (disableAnimation && _this._innerAnimate) {
            _this._animate = true;
          }
        });

        _this.cd.markForCheck();
      });
    } // Functions to set inputs and the private variables of the Switch

    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "setBaseClass",
    set: function set(value) {
      this.baseClass = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "setWrapperClass",
    set: function set(value) {
      this._wrapperClass = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "setOffText",
    set: function set(value) {
      this.offText = value ? value : 'OFF';
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "setLabelText",
    set: function set(value) {
      this.labelText = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "setOnText",
    set: function set(value) {
      this.onText = value ? value : 'ON';
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "setSize",
    set: function set(value) {
      if (value) {
        this._size = value;
      }
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "setAnimate",
    set: function set(value) {
      this._animate = value;
      this._innerAnimate = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "setOnColor",
    set: function set(value) {
      if (value) {
        this._onColor = value;
      }
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "setOffColor",
    set: function set(value) {
      if (value) {
        this._offColor = value;
      }
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "setDisabled",
    set: function set(value) {
      this.disabled = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "setReadOnly",
    set: function set(value) {
      this.readonly = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "setIndeterminate",
    set: function set(value) {
      this._indeterminate = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "setInverse",
    set: function set(value) {
      this.inverse = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "setHandleWidth",
    set: function set(value) {
      this._innerHandleWidth = typeof value !== 'undefined' ? value : 'auto';
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "setLabelWidth",
    set: function set(value) {
      this._innerLabelWidth = typeof value !== 'undefined' ? value : 'auto';
    }
    /**
     * @return {?}
     */

  }, {
    key: "value",
    get: function get() {
      return this._innerState;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    ,
    set: function set(v) {
      if (v === null || typeof v === 'undefined') {
        this._indeterminate = true;
      }

      this.setStateValue(v);
    }
    /**
     * @private
     * @param {?} v
     * @return {?}
     */

  }, {
    key: "setStateValue",
    value: function setStateValue(v) {
      if (v !== this._innerState) {
        this._onChangeCallback(v);

        this.changeState.emit({
          previousValue: this._innerState,
          currentValue: v
        });
        this._innerState = v;
      }
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      if (value !== this._innerState) {
        this._innerState = value;
        this.cd.markForCheck();
      }
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this._onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this._onTouchedCallback = fn;
    }
  }]);

  return JwBootstrapSwitchNg2Component;
}();

JwBootstrapSwitchNg2Component.ɵfac = function JwBootstrapSwitchNg2Component_Factory(t) {
  return new (t || JwBootstrapSwitchNg2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]));
};

JwBootstrapSwitchNg2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: JwBootstrapSwitchNg2Component,
  selectors: [["bSwitch"]],
  viewQuery: function JwBootstrapSwitchNg2Component_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.on = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.label = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.off = _t.first);
    }
  },
  hostBindings: function JwBootstrapSwitchNg2Component_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JwBootstrapSwitchNg2Component_click_HostBindingHandler() {
        return ctx.onClick();
      })("keydown", function JwBootstrapSwitchNg2Component_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("touchstart", function JwBootstrapSwitchNg2Component_touchstart_HostBindingHandler($event) {
        return ctx.onTouchStart($event);
      })("mousedown", function JwBootstrapSwitchNg2Component_mousedown_HostBindingHandler($event) {
        return ctx.onMouseDown($event);
      })("touchmove", function JwBootstrapSwitchNg2Component_touchmove_HostBindingHandler($event) {
        return ctx.onTouchMove($event);
      })("mousemove", function JwBootstrapSwitchNg2Component_mousemove_HostBindingHandler($event) {
        return ctx.onMouseMove($event);
      })("mouseup", function JwBootstrapSwitchNg2Component_mouseup_HostBindingHandler($event) {
        return ctx.onMouseUp($event);
      })("touchend", function JwBootstrapSwitchNg2Component_touchend_HostBindingHandler($event) {
        return ctx.onTouchEnd($event);
      })("mouseleave", function JwBootstrapSwitchNg2Component_mouseleave_HostBindingHandler($event) {
        return ctx.onMouseLeave($event);
      });
    }
  },
  inputs: {
    setBaseClass: ["switch-base-class", "setBaseClass"],
    setWrapperClass: ["switch-wrapper-class", "setWrapperClass"],
    setOffText: ["switch-off-text", "setOffText"],
    setLabelText: ["switch-label-text", "setLabelText"],
    setOnText: ["switch-on-text", "setOnText"],
    setSize: ["switch-size", "setSize"],
    setAnimate: ["switch-animate", "setAnimate"],
    setOnColor: ["switch-on-color", "setOnColor"],
    setOffColor: ["switch-off-color", "setOffColor"],
    setDisabled: ["switch-disabled", "setDisabled"],
    setReadOnly: ["switch-readonly", "setReadOnly"],
    setIndeterminate: ["switch-indeterminate", "setIndeterminate"],
    setInverse: ["switch-inverse", "setInverse"],
    setHandleWidth: ["switch-handle-width", "setHandleWidth"],
    setLabelWidth: ["switch-label-width", "setLabelWidth"]
  },
  outputs: {
    changeState: "changeState"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([CUSTOM_INPUT]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
  decls: 11,
  vars: 17,
  consts: [[3, "ngClass"], ["container", ""], [3, "innerHTML", "ngClass"], ["on", ""], ["label", ""], ["off", ""], ["type", "checkbox", 3, "ngModel", "readonly", "disabled", "ngModelChange", "focus", "blur"]],
  template: function JwBootstrapSwitchNg2Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 0, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "span", 2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JwBootstrapSwitchNg2Component_Template_input_ngModelChange_10_listener($event) {
        return ctx.value = $event;
      })("focus", function JwBootstrapSwitchNg2Component_Template_input_focus_10_listener() {
        return ctx.onFocus();
      })("blur", function JwBootstrapSwitchNg2Component_Template_input_blur_10_listener() {
        return ctx.onBlur();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx.handleWidth + ctx.labelWidth + "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.getWrapperClasses());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx.handleWidth * 2 + ctx.labelWidth + "px")("margin-left", ctx.getLabelMarginLeft());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.baseClass + "-container");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.inverse ? ctx.offText : ctx.onText, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"])("ngClass", ctx.inverse ? ctx.getOffClasses() : ctx.getOnClasses());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.baseClass + "-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\xA0", ctx.labelText, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.inverse ? ctx.onText : ctx.offText, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"])("ngClass", ctx.inverse ? ctx.getOnClasses() : ctx.getOffClasses());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.value)("readonly", ctx.readonly)("disabled", ctx.disabled);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
  encapsulation: 2
});
/** @nocollapse */

JwBootstrapSwitchNg2Component.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
  }];
};

JwBootstrapSwitchNg2Component.propDecorators = {
  changeState: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  container: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
    args: ['container']
  }],
  on: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
    args: ['on']
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
    args: ['label']
  }],
  off: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
    args: ['off']
  }],
  onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['click']
  }],
  onKeyDown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['keydown', ['$event']]
  }],
  onTouchStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['touchstart', ['$event']]
  }],
  onMouseDown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['mousedown', ['$event']]
  }],
  onTouchMove: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['touchmove', ['$event']]
  }],
  onMouseMove: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['mousemove', ['$event']]
  }],
  onMouseUp: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['mouseup', ['$event']]
  }],
  onTouchEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['touchend', ['$event']]
  }],
  onMouseLeave: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['mouseleave', ['$event']]
  }],
  setBaseClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['switch-base-class']
  }],
  setWrapperClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['switch-wrapper-class']
  }],
  setOffText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['switch-off-text']
  }],
  setLabelText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['switch-label-text']
  }],
  setOnText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['switch-on-text']
  }],
  setSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['switch-size']
  }],
  setAnimate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['switch-animate']
  }],
  setOnColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['switch-on-color']
  }],
  setOffColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['switch-off-color']
  }],
  setDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['switch-disabled']
  }],
  setReadOnly: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['switch-readonly']
  }],
  setIndeterminate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['switch-indeterminate']
  }],
  setInverse: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['switch-inverse']
  }],
  setHandleWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['switch-handle-width']
  }],
  setLabelWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['switch-label-width']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](JwBootstrapSwitchNg2Component, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
    args: [{
      selector: 'bSwitch',
      providers: [CUSTOM_INPUT],
      template: "\n      <div [ngClass]=\"getWrapperClasses()\" [style.width]=\"(handleWidth  + labelWidth ) +'px'\">\n          <div #container [ngClass]=\"baseClass + '-container'\"\n               [style.width]=\"((handleWidth * 2) + labelWidth) +'px'\"\n               [style.margin-left]=\"getLabelMarginLeft()\"><!--\n              --><span #on [innerHTML]=\"(inverse) ? offText : onText\"\n                [ngClass]=\"(inverse) ? getOffClasses() : getOnClasses()\"></span><!--\n              --><span #label [ngClass]=\"baseClass + '-label'\">&nbsp;{{ labelText }}</span><!--\n              --><span #off [innerHTML]=\"(inverse) ? onText : offText\"\n                [ngClass]=\"(inverse) ? getOnClasses() : getOffClasses()\"></span><!--\n              --><input type=\"checkbox\" [(ngModel)]=\"value\" [readonly]=\"readonly\" [disabled]=\"disabled\"\n                     (focus)=\"onFocus()\" (blur)=\"onBlur()\">\n          </div>\n      </div>"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
    }];
  }, {
    changeState: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],

    /**
     * @return {?}
     */
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['click']
    }],

    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['keydown', ['$event']]
    }],

    /**
     * @param {?} e
     * @return {?}
     */
    onTouchStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['touchstart', ['$event']]
    }],

    /**
     * @param {?} e
     * @return {?}
     */
    onMouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['mousedown', ['$event']]
    }],

    /**
     * @param {?} e
     * @return {?}
     */
    onTouchMove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['touchmove', ['$event']]
    }],

    /**
     * @param {?} e
     * @return {?}
     */
    onMouseMove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['mousemove', ['$event']]
    }],

    /**
     * @param {?} e
     * @return {?}
     */
    onMouseUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['mouseup', ['$event']]
    }],

    /**
     * @param {?} e
     * @return {?}
     */
    onTouchEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['touchend', ['$event']]
    }],

    /**
     * @param {?} e
     * @return {?}
     */
    onMouseLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['mouseleave', ['$event']]
    }],
    setBaseClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['switch-base-class']
    }],
    setWrapperClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['switch-wrapper-class']
    }],
    setOffText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['switch-off-text']
    }],
    setLabelText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['switch-label-text']
    }],
    setOnText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['switch-on-text']
    }],
    setSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['switch-size']
    }],
    setAnimate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['switch-animate']
    }],
    setOnColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['switch-on-color']
    }],
    setOffColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['switch-off-color']
    }],
    setDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['switch-disabled']
    }],
    setReadOnly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['switch-readonly']
    }],
    setIndeterminate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['switch-indeterminate']
    }],
    setInverse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['switch-inverse']
    }],
    setHandleWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['switch-handle-width']
    }],
    setLabelWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['switch-label-width']
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
      args: ['container']
    }],
    on: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
      args: ['on']
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
      args: ['label']
    }],
    off: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
      args: ['off']
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var JwBootstrapSwitchNg2Module = function JwBootstrapSwitchNg2Module() {
  Object(_Users_mohit_Documents_angular_projects_rumit_node_Divided_UserSide_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, JwBootstrapSwitchNg2Module);
};

JwBootstrapSwitchNg2Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: JwBootstrapSwitchNg2Module
});
JwBootstrapSwitchNg2Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  factory: function JwBootstrapSwitchNg2Module_Factory(t) {
    return new (t || JwBootstrapSwitchNg2Module)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](JwBootstrapSwitchNg2Module, {
    declarations: function declarations() {
      return [JwBootstrapSwitchNg2Component];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]];
    },
    exports: function exports() {
      return [JwBootstrapSwitchNg2Component];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](JwBootstrapSwitchNg2Module, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      declarations: [JwBootstrapSwitchNg2Component],
      exports: [JwBootstrapSwitchNg2Component]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ }),

/***/ "zvQp":
/*!***********************************************************!*\
  !*** ./src/app/manage/Admin/category/category.service.ts ***!
  \***********************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var app_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/api.service */ "yTNM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryService = /** @class */ (function () {
    function CategoryService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
    }
    CategoryService.prototype.saveMainCat = function (admin) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].saveMainURL, admin);
    };
    CategoryService.prototype.GetFilterProduct = function (data) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].getFilterProductListURL, data);
    };
    CategoryService.prototype.getProductDetailImages = function (id) {
        var data = {
            id: id
        };
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].getProductDetailImageURL, data);
    };
    CategoryService.prototype.getMainCat = function (id) {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].getMainURL + id);
    };
    CategoryService.prototype.getCloth = function () {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].getClothsURL);
    };
    CategoryService.prototype.saveCat = function (admin) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].saveCatURL, admin);
    };
    // getCat(): Observable<Category[]>{
    //
    //   return this.httpClient.get<any>(ApiService.getCatURL);
    // }
    CategoryService.prototype.removeMainCatList = function (id) {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].removeMainCatURL + id);
    };
    CategoryService.prototype.updateMainCategory = function (admin) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].updateMainCatURL, admin);
    };
    CategoryService.prototype.updateMainCat = function (admin) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].updateCategoryURL, admin);
    };
    CategoryService.prototype.saveAddProduct = function (admin) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].saveProductsURL, admin);
    };
    CategoryService.prototype.selectUploadImage = function (img) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].uploadMainImageURL, img);
    };
    CategoryService.prototype.selectMultiUploadImage = function (img) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].uploadMultiImageURL, img);
    };
    CategoryService.prototype.removeOrChanged = function () {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].removeImageURL);
    };
    CategoryService.prototype.uploadCategoryBannersImage = function (img) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"].uploadCategoryBannersURL, img);
    };
    CategoryService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ })

}]);
//# sourceMappingURL=default~Admin-category-category-module~Admin-inventory-inventory-module.js.map