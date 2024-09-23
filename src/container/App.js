import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Shopping from "./Shopping/Shopping";
import NotFound from "../pages/NotFound/NotFound";
import Cart from "../pages/Cart/Cart";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Shopping />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </div>
    );
  }
}

export default App;
