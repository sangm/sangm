'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _handlebars = require('handlebars');

var _handlebars2 = _interopRequireDefault(_handlebars);

var _AppComp = require('./components/AppComponent/AppComp.jsx');

var _AppComp2 = _interopRequireDefault(_AppComp);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = JSON.parse(_fs2.default.readFileSync(__dirname + '/information.json', 'utf-8'));
var fileData = _fs2.default.readFileSync(__dirname + '/templates/index.handlebars').toString();
var layoutTemplate = _handlebars2.default.compile(fileData);
var renderedComp = _react2.default.renderToString(_react2.default.createElement(_AppComp2.default, { info: info }));

var renderedLayout = layoutTemplate({
    contents: renderedComp
});

_fs2.default.writeFile(__dirname + '/../dist/index.html', renderedLayout, function (err) {
    if (err) {
        return console.log(err);
    } else {
        console.log('index.html generated from ReactJS');
    }
});

//# sourceMappingURL=generate-static-compiled.js.map