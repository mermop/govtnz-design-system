"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  :active,\n  :checked {\n    color: #ffffff;\n    background-color: #005ea5;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  :active,\n  :checked {\n    color: #ffffff;\n    background-color: #005ea5;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  :active,\n  :checked {\n    color: #ffffff;\n    background-color: #005ea5;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  box-sizing: border-box;\n  max-width: 100%;\n  height: auto;\n  padding: 0.4rem 2.5rem 0.5rem 0.6rem;\n  border: 1px solid #000000;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background-repeat: no-repeat;\n  border-radius: 0;\n  background-position: right 0.7em top 50%;\n  background-size: 1rem auto;\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%228.5%22%20viewBox%3D%220%200%2016%2010.5%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M1%201%20L8%208.5%20L15%201%22%20stroke-width%3D%223%22%20stroke%3D%22currentColor%22%20fill%3D%22transparent%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fsvg%3E\");\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.25;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :focus::-ms-value {\n    color: #ffffff;\n    background-color: #005ea5;\n  }\n  width: 100% !important;\n  ::-ms-expand {\n    display: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 500;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: #2a2a2a;\n  display: block;\n  margin-bottom: 5px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 20px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  padding: 0;\n  border: 0;\n  margin-bottom: 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledDiv = _styledComponents["default"].div(_templateObject());

var StyledLabel = _styledComponents["default"].label(_templateObject2());

var StyledSelect = _styledComponents["default"].select(_templateObject3());

var StyledOption = _styledComponents["default"].option(_templateObject4());

var StyledOption2 = _styledComponents["default"].option(_templateObject5());

var StyledOption3 = _styledComponents["default"].option(_templateObject6());

var SelectWithFullWidthOverride = function SelectWithFullWidthOverride(_ref) {
  var select1 = _ref.select1,
      name = _ref.name,
      multiple = _ref.multiple,
      onChange = _ref.onChange,
      selected = _ref.selected,
      selected2 = _ref.selected2,
      selected3 = _ref.selected3;
  return _react["default"].createElement(StyledDiv, null, _react["default"].createElement(StyledLabel, {
    htmlFor: select1
  }, "Label text goes here"), _react["default"].createElement(StyledSelect, {
    id: select1,
    name: name,
    multiple: multiple,
    onChange: onChange
  }, _react["default"].createElement(StyledOption, {
    value: "1",
    selected: selected
  }, "Govt.NZ frontend option 1"), _react["default"].createElement(StyledOption2, {
    selected: selected2,
    value: "2"
  }, "Govt.NZ frontend option 2"), _react["default"].createElement(StyledOption3, {
    disabled: false,
    value: "3",
    selected: selected3
  }, "Govt.NZ frontend option 3")));
};

var _default = SelectWithFullWidthOverride;
exports["default"] = _default;