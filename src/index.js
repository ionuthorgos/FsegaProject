import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadCourses} from "./actions/courseActions";
import {loadAuthors} from "./actions/authorActions";
import './styles/style.css';
import './styles/contact.css';
import './styles/courses.css';
import './styles/homePage.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { store } from 'helpers';
import { App } from './App/App';

import { configureFakeBackend } from './helpers';
configureFakeBackend();

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(

  <Provider store = {store}>
    <App />
      <Router history={browserHistory} routes={routes}


      />

  </Provider>,
  document.getElementById('app')
);
