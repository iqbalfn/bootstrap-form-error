/*!
  * Bootstrap Form Error v0.0.1 (https://iqbalfn.github.io/bootstrap-form-error/)
  * Copyright 2019 Iqbal Fauzi
  * Licensed under MIT (https://github.com/iqbalfn/bootstrap-form-error/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
  (global = global || self, factory(global['bootstrap-form-error'] = {}, global.jQuery));
}(this, function (exports, $) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'formerror';
  var VERSION = '0.0.1';
  var DATA_KEY = 'bs.formerror';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Default = {};
  var Event = {
    INPUT_DATA_API: "input" + EVENT_KEY + DATA_API_KEY,
    INVALID_DATA_API: "invalid" + EVENT_KEY + DATA_API_KEY,
    SUBMIT_DATA_API: "submit" + EVENT_KEY + DATA_API_KEY
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var FormError =
  /*#__PURE__*/
  function () {
    function FormError(element, config) {
      this._element = element;
      this._controls = [].slice.call(element.elements, 0);
      this._wasValidated = false;

      this._addControlListener();

      this._addFormListener();
    } // Getters


    var _proto = FormError.prototype;

    // Public
    // Private
    _proto._addControlListener = function _addControlListener() {
      var _this = this;

      this._controls.forEach(function (e) {
        var $e = $(e);
        var feedback = $e.next('.invalid-feedback').get(0);

        if (!feedback) {
          var parent = $e.closest('.form-group');
          feedback = parent.find('.invalid-feedback').get(0);
        }

        if (feedback) $e.data('feedback', feedback);
        $e.on(Event.INVALID_DATA_API, function (event) {
          if (_this._wasValidated && e.validationMessage && $e.data('feedback')) $e.data('feedback').innerText = e.validationMessage;
        });
        $e.on(Event.INPUT_DATA_API, function (event) {
          if (_this._wasValidated && e.validationMessage && $e.data('feedback')) $e.data('feedback').innerText = e.validationMessage;
        });
      });
    };

    _proto._addFormListener = function _addFormListener() {
      var _this2 = this;

      this._element.setAttribute('novalidate', '');

      $(this._element).on(Event.SUBMIT_DATA_API, function (e) {
        if (!_this2._element.checkValidity()) {
          e.preventDefault();
          e.stopPropagation();
        }

        _this2._controls.forEach(function (c) {
          if (!c.checkValidity()) {
            if ($(c).data('feedback')) $(c).data('feedback').innerText = c.validationMessage;
          }
        });

        _this2._element.classList.add('was-validated');

        _this2._wasValidated = true;
      });
    } // Static
    ;

    FormError._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        if (!data) {
          data = new FormError(this);
          $(this).data(DATA_KEY, data);
        }
      });
    };

    _createClass(FormError, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return FormError;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME] = FormError._jQueryInterface;
  $.fn[NAME].Constructor = FormError;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return FormError._jQueryInterface;
  };

  exports.FormError = FormError;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=bootstrap-form-error.js.map
