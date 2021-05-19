import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";
import Router from '../components/Router'
import { BrowserRouter, Route } from "react-router-dom";



const App = () => {

  return (
    <BrowserRouter>
    <Router />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));