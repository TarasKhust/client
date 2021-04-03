import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Portal } from "react-portal";

const Main = lazy(() => import(/* webpackChunkName: "MainPage" */ "../MainPage"));

const container = document.querySelector("#main");

if (container) {
    if (!container.getAttribute("root")) {
        container.innerHTML = "";
        container.setAttribute("root", "e");
    }
}

const router = () => {
    return (
        <Portal node={container}>
            <Suspense fallback={null}>
                <Route exact path="/main/">
                    <Main />
                </Route>
            </Suspense>

        </Portal>
    );
};

export default router;
