import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import {ThemeProvider} from "@emotion/react";
import {CssBaseline, createTheme} from "@mui/material";
import { Provider } from "react-redux";
import { store } from './redux-store/store.ts';
const theme = createTheme({
  palette:{
    primary:{
      main:"rgb(255,0,0)"
    }
  }
})
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
