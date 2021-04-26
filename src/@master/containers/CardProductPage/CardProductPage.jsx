import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Header from "components/HeaderGroup/Header";
import Footer from "components/Footer/Footer";

const CardProductPage = ({ children }) => {
    return (
	<Fragment>
		<Header />
		{children}
		<Footer />
	</Fragment>
    );
};

export default CardProductPage;

CardProductPage.propTypes = {
    children: PropTypes.node,
};
