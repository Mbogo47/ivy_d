import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import tEn from "./assets/locales/en/translation.json";
import tAr from "./assets/locales/ar/translation.json";

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: tEn
      },
       ar: {
        translation: tAr
      }
    },
    lng: "ar", 
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });
 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <BrowserRouter>

        <Provider store={store}>
          <App />
        </Provider>

    </BrowserRouter>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
