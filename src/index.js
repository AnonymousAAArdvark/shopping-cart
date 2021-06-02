import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from "./theme/GlobalStyle";
import Theme from "./theme/Theme";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
