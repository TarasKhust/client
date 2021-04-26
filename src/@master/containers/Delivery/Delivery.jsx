import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Header from "components/HeaderGroup/Header";
import Footer from "components/Footer/Footer";

const Delivery = ({ children }) => {
    return (
        <Fragment>
            <Header />
                {children}
            <Footer />
        </Fragment>
    );
};

export default Delivery;

Delivery.propTypes = {
    children: PropTypes.node,
};
