import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from "../src/store/index";
import { checkPassword } from "../src/actions/index";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MoreFeatures } from './components/MoreFeatures';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const NotFound = () => <p className="TextInfo">Sorry, page not found...</p>;

window.store = store;
window.checkPassword = checkPassword;

store.subscribe(() => checkPassword())
store.dispatch( checkPassword({open: true}) )

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
  <Provider store={store} >
    <Router>
    <div>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={Home} />
      <Route path="/more-features" component={MoreFeatures} />
      <Route component={NotFound} />
    </Switch>
    </div>
    </Router>
  </Provider>
  </MuiThemeProvider>,
document.getElementById('root'));
registerServiceWorker();
