import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/AppComponent/AppComponent.jsx'
import info from './information.json'

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

ReactDOM.render(<App info={info} />, document.getElementById('contents'))
