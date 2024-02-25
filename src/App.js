import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
 state={
  progress:0
  }
  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {

    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Routes>
            <Route element={<News setProgress={this.setProgress} pageSize={9} category="general" />} path="/">
              {" "}
            </Route>
            <Route
              element={<News setProgress={this.setProgress} pageSize={9} category="business" />}
              path="/business"
            >
              {" "}
            </Route>
            <Route
              element={<News setProgress={this.setProgress} pageSize={9} category="entertainment" />}
              path="/entertainment"
            >
              {" "}
            </Route>
            <Route
              element={<News setProgress={this.setProgress} pageSize={9} category="health" />}
              path="/health"
            >
              {" "}
            </Route>
            <Route
              element={<News setProgress={this.setProgress} pageSize={9} category="science" />}
              path="/science"
            >
              {" "}
            </Route>
            <Route
              element={<News setProgress={this.setProgress} pageSize={9} category="sports" />}
              path="/sports"
            >
              {" "}
            </Route>
            <Route
              element={<News setProgress={this.setProgress} pageSize={9} category="technology" />}
              path="/technology"
            >
              {" "}
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
