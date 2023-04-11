import React from "react";
import Cart from "./Cart";
import Main from "./Main";
import Sidebar from "./Sidebar";
import data from "../data.json";
import { Provider } from "react-redux";
import store from "../store";

function App() {
  let products = data.products;
  return (
    <div className="wrapper flex space-between">
      <Provider store={store}>
        <Sidebar />
        <Main products={products} />
        <Cart />
      </Provider>

    </div>
  );
}

export default App;
