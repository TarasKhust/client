import "config/publicPath";
import { render } from "react-dom";
import Router from "./router";
import "./styles/styles.scss";
import React from "react";

const target = document.createElement("div");
document.body.appendChild(target);

function renderApp(Router) {
    render(
        <Router />,
        target
    );
}

renderApp(Router);

if (module.hot) {
    module.hot.accept("./router/index", () => renderApp(require("./router/index").default));
}
