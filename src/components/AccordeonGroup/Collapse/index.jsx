import React, { useContext } from "react";
import PropTypes from "prop-types";
import AccordionContext from "../accordionContext";

const Collapse = (props) => {
    const { element: Component, eventKey, children, ...otherProps } = props;
    const { activeEventKey } = useContext(AccordionContext);

    return activeEventKey === eventKey ? (
	<Component {...otherProps}>{children}</Component>
    ) : null;
};

Collapse.propTypes = {
    element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.node,
};

Collapse.defaultProps = {
    element: "div",
};

export default Collapse;
