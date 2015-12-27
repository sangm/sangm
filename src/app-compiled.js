'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _AppComponent = require('./components/AppComponent/AppComponent.jsx');

var _AppComponent2 = _interopRequireDefault(_AppComponent);

var _information = require('./information.json');

var _information2 = _interopRequireDefault(_information);

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactTapEventPlugin2.default)();

_reactDom2.default.render(_react2.default.createElement(_AppComponent2.default, { info: _information2.default }), document.getElementById('contents'));

//# sourceMappingURL=app-compiled.js.map