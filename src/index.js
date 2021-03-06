import React from "react";
import { render } from "react-dom";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import "normalize.css";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext} from './context/firebase';
import { BrowserRouter } from 'react-router-dom';

render(
  <>
    <BrowserRouter>
      <FirebaseContext.Provider value={{ firebase }}>
        <GlobalStyles />
        <App />
      </FirebaseContext.Provider>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
