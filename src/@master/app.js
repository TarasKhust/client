import { render } from "react-dom";
import Router from "./router";

(function (div) {
    document.body.appendChild(div);

    render(
        Router(),
        div
    );
})(
    document.createElement("div")
);