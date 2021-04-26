import React, { useMemo } from "react";
import PropTypes from "prop-types";
import AccordionContext from "./AccordionContext";

import Collapse from "./Collapse";
import Toggle from "./Toggle";

const Accordion = ({ element: Component, activeEventKey, onToggle, children, ...otherProps }) => {
    const context = useMemo(() => {
        return {
            activeEventKey,
            onToggle,
        };
    }, [activeEventKey, onToggle]);

    return (
	<AccordionContext.Provider value={context}>
		<Component {...otherProps}>{children}</Component>
	</AccordionContext.Provider>
    );
};

Accordion.propTypes = {
    element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    activeEventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onToggle: PropTypes.func,
};

Accordion.defaultProps = {
    element: "div",
    onToggle: () => {},
};

Accordion.Toggle = Toggle;
Accordion.Collapse = Collapse;

export default Accordion;
