import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bulma/css/bulma.css";
import SignUp from "./SignUp";


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// need a router to navigate to that page...?!
ReactDOM.render(
    <SignUp />,
    document.getElementById('signup')
);