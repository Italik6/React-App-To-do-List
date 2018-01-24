import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from "../src/store/index";
import { checkPassword } from "../src/actions/index";

window.store = store;
window.checkPassword = checkPassword;

store.subscribe(() => checkPassword())
store.dispatch( checkPassword({open: true}) )

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
