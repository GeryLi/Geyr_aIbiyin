// @ts-nocheck
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store from './store'
import App from '@/App'
import 'normalize.css'
import "@/assets/css/index.less"
import "@/assets/css/reset.less"
import theme from './assets/theme'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
  // </React.StrictMode>
);

