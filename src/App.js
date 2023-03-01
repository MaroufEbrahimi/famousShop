import React, { Component } from "react";

import Layout from "./components/Layout/Layout";
import Shopping from "./container/Shopping/Shopping";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Shopping />
        </Layout>
      </div>
    );
  }
}

export default App;
