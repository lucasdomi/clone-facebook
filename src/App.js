import React, { Fragment } from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <PostList />
    </Fragment>
  );
}

export default App;
