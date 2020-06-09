import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.min.css";

// // ACTION FETCH DATA
// const fetchData = () => {
//   return {
//     type: "FETCHDATA",
//   };
// };

// const viewData = () => {
//   return {
//     type: "VIEWDATA",
//   };
// };

// // REDUCER
// const INITIAL_STATE = {
//   gifItems: [],
// };
// const gifData = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "FETCHDATA":
//       return state.gifItems;

//     case "VIEWDATA":
//       return state.gifItems;
//   }
// };

// let store = createStore(gifData);

// store.subscribe(() => console.log(store.getState()));

// store.dispatch(fetchData());

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
