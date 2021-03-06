import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Header from "components/HeaderGroup/Header";
import Footer from "components/Footer/Footer";

const ProductsOrder = ({ children }) => {
    return (
	<Fragment>
		<Header />
		{children}
		<Footer />
	</Fragment>
    );
};

export default ProductsOrder;

ProductsOrder.propTypes = {
    children: PropTypes.node,
};
