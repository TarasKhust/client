import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Portal } from "react-portal";

const ShoppingCardPage = lazy(() => import(/* webpackChunkName: "ShoppingCardPage" */ "./ShoppingCardPage"));
const Content = lazy(() => import(/* webpackChunkName: "Content" */ "./Content"));

const container = document.querySelector("#chip_basket");

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
                <Route path="/chip_basket">
                    <ShoppingCardPage>
                        <Content />
                    </ShoppingCardPage>
                </Route>
            </Suspense>

        </Portal>
    );
};

export default router;
