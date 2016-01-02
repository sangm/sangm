import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Handlebars from 'handlebars'
import App from './components/AppComponent/AppComponent.jsx'
import fs from 'fs'

let info = JSON.parse(fs.readFileSync(__dirname + '/information.json', 'utf-8'));
let fileData = fs.readFileSync(__dirname + '/templates/index.handlebars').toString();
let layoutTemplate = Handlebars.compile(fileData);

let renderedComp = ReactDOMServer.renderToStaticMarkup(<App info={info} />);

let renderedLayout = layoutTemplate({
    contents: renderedComp
});

fs.writeFile(__dirname + '/../dist/index.html', renderedLayout, function (err) {
      if (err) {
          return console.log(err);
      } else {
        console.log('index.html generated from ReactJS');
      }
});
