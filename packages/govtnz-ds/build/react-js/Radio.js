"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Radio = function Radio(_ref) {
  var fakeFocus = _ref.fakeFocus,
      gov1 = _ref.gov1,
      hintId = _ref.hintId,
      name = _ref.name,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      value = _ref.value,
      checked = _ref.checked,
      onChange = _ref.onChange;
  return _react["default"].createElement("input", {
    "aria-describedby": hintId,
    className: "g-radios__input".concat(fakeFocus ? " :focus" : ""),
    id: gov1,
    name: name,
    type: "radio",
    disabled: disabled,
    readOnly: readOnly,
    autoFocus: autoFocus,
    value: value,
    checked: checked,
    onChange: onChange
  });
};

var _default = Radio;
exports["default"] = _default;