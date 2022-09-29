import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import App from './App';
import store from './store'
import "normalize.css"
import "antd/dist/antd.less"
import "./assets/css/index.less"
import theme from './assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
);
