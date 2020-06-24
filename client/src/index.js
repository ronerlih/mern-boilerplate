import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

console.log(process.env.NODE_ENV )
process.env.NODE_ENV === 'development'
    ? ReactDOM.render(<App />, document.getElementById("root"))
    : ReactDOM.hydrate(<App />, document.getElementById("root"))
