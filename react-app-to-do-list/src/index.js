import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeMain from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from "../src/stores/index";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MoreFeatures } from './components/MoreFeatures';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const NotFound = () => <p className="TextInfo">Sorry, page not found...</p>;

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
  <Provider store={store} >
    <Router>
    <div>
    <Switch>
      <Route exact path="/home" component={HomeMain} />
      <Route exact path="/" component={HomeMain} />
      <Route path="/more-features" component={MoreFeatures} />
      <Route component={NotFound} />
    </Switch>
    </div>
    </Router>
  </Provider>
  </MuiThemeProvider>,
document.getElementById('root'));
registerServiceWorker();
