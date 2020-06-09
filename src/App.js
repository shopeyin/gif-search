import React, { createFactory } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import logo from "./logo.svg";
import "./App.css";
import GifList from "./components/gif-list/gif-list.component";
import { Route, Switch } from "react-router-dom";
import GifDetail from "./components/gif-detail/gif-detail.component";
import Search from "./components/search/search.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/gif/:id" component={GifDetail} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
