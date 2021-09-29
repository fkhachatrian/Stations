import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import InnerPage from "./components/InnerPage/InnerPage";
import { Provider } from "react-redux";
import store from "./store";
import './static/index.css';
require('dotenv').config()


ReactDOM.render(
      <Provider store={store}>
          <InnerPage>
              <App/>
          </InnerPage>
      </Provider>,
  document.getElementById('root')
);
