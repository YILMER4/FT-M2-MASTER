import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

//encerramos la app dentro de browserrouter
ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>, 
    document.getElementById("root")
    );
