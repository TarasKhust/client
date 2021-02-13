import React from "react";
import { render } from "react-dom";
import Router from "./router";
import './styles/styles.scss';

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
    module.hot.accept("./router", () => renderApp(require("./router").default));
}
