import React from "react";
import "./CheckboxStyle.scss";
import classnames from "classnames";
import PropTypes from "prop-types";

const Checkbox = ({ mode, checked, onChange, name, disabled }) => {
    const classNames = classnames(
        "styled_checkbox",
        {
            [`styled_${mode}`]: Boolean(mode),
        },
        {
            [`styled_${checked}`]: Boolean(checked),
        }
    );

    return (
	<label htmlFor={name} className="label_container">
		<div className="checkbox_container">
			<input
				id={name}
				type="checkbox"
				name={name}
				checked={checked}
				onChange={onChange}
				disabled={disabled}
			/>
			<div className={classNames}>
				<svg viewBox="0 0 24 24" className={`visible ${checked ? "" : "not_visible"}`}>
					<polyline points="20 6 9 17 4 12" />
				</svg>
			</div>
		</div>
		<span className={`${!checked ? "" : "name_checked"}`}>{name}</span>
	</label>

    );
};

/*
 * <label
 * 	className="label_container"
 * 	htmlFor={item}
 * >
 * 	<Checkbox
 * 		mode="yellow"
 * 		name={item}
 * 	/>
 * 	<span>{item}</span>
 * </label>
 */
Checkbox.propTypes = {
    mode: PropTypes.oneOf(["yellow", "green"]),
    onChange: PropTypes.func,
	disabled: PropTypes.bool,
};

export default Checkbox;
