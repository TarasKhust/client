import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Portal } from "react-portal";

const Contacts = lazy(() => import(/* webpackChunkName: "Contacts" */ "../Contacts/Contacts"));
const Content = lazy(() => import(/* webpackChunkName: "Content" */ "./Content"));

const container = document.querySelector("#contacts");

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
                <Route path="/contacts/">
                    <Contacts>
                        <Content />
                    </Contacts>
                </Route>
            </Suspense>

        </Portal>
    );
};

export default router;
