import React, { useState } from "react";
import Checkbox from "components/Checkbox/Checkbox";
import PropTypes from "prop-types";

const ItemViewer = ({ itemData, show }) => {
    const [toggle, setToggle] = useState(false);

    function renderItems(list) {
        if (list && list.length > 0) {
            if (list.length > show && toggle === false) {
                return renderList(list.slice(0, show), "Дивитись більше");
            }

            if (list.length > show && toggle === true) {
                return renderList(list, "Приховати");
            }

            if (show == list.length) {
                return renderList(list, "", false);
            }

                return <p>No Items Found</p>;
        }
    }

    const renderList = (list, buttonText, showButton = true) => {
        return (
	<React.Fragment>
		<React.Fragment>
			{list.map(function (item) {
                return <Checkbox key={item.id} mode="yellow" name={item.title} label={item.title} />;
            })}
		</React.Fragment>
		{showButton && (
			<div className="more_row">
				<span className="btn_more" onClick={toggleHandler}>{buttonText}</span>
			</div>
                )}
	</React.Fragment>
        );
    };

    const toggleHandler = () => {
        setToggle(prev => !prev);
    };

    return (
	<React.Fragment>
		{renderItems(itemData)}
	</React.Fragment>
    );
};

export default ItemViewer;

ItemViewer.propTypes = {
    item: PropTypes.array,
    itemData: PropTypes.array,
    index: PropTypes.number,
    show: PropTypes.string,
};