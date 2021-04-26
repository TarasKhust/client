import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Portal } from "react-portal";

const Delivery = lazy(() => import(/* webpackChunkName: "Delivery" */ "../Delivery/Delivery"));
const Content = lazy(() => import(/* webpackChunkName: "Content" */ "./Content"));

const container = document.querySelector("#delivery");

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
                <Route path="/delivery/">
                    <Delivery>
                        <Content />
                    </Delivery>
                </Route>
            </Suspense>

        </Portal>
    );
};

export default router;
