import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Header from "components/HeaderGroup/Header";
import Footer from "components/Footer/Footer";

const СatalogPage = ({ children }) => {
    return (
        <Fragment>
            <Header />
                {children}
            <Footer />
        </Fragment>
    );
};

export default СatalogPage;

СatalogPage.propTypes = {
    children: PropTypes.node,
};
