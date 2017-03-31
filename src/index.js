import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import injectTapEventPlugin from "react-tap-event-plugin";
import routes from "./routes";
import {Router, browserHistory} from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


injectTapEventPlugin();


ReactDOM.render(
    <MuiThemeProvider>
        <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>,
    document.getElementById('root')
);