import React from 'react'
import App from './components/AppComponent/AppComp.jsx'

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

React.render(<App/>, document.body)
