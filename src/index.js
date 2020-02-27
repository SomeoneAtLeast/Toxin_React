import React from "react";
import ReactDOM from "react-dom";
import './assets/scss/main.scss'

import Header from "./blocks/header/header.js";

const App_app = () => {
		return <Header />
};

ReactDOM.render(<App_app/>, document.querySelector(".root"));