import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";
import Layout from "../components/Layout";



const App = () => {

  return (
    <Layout />
  );
};

ReactDOM.render(<App />, document.getElementById("app"));