import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";
import MessageField from "../components/MessageField";



const App = () => {

  return (
    <MessageField />
  );
};

ReactDOM.render(<App />, document.getElementById("app"));