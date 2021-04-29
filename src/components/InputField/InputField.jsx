import React, { useState } from "react";
import PropTypes from "prop-types";
import "./InputFieldStyle.scss";

const InputField = ({ value, label, name, placeholder, type, onChange, register, defaultValue }) => {
	return (
		<div className="input_group">
			<input
				type={type}
				value={value}
				name={name}
				className="form-control"

				onFocus={(event) => event.target.value = defaultValue }
				placeholder={placeholder}
				onChange={onChange}
				{ ...register }
			/>
			{label && <label htmlFor="input-field">{label}</label>}
		</div>
	);
};

InputField.defaultProps = {
    type: "text",
};

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["text", "number", "password", "email", "phone"]),
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
};

export default InputField;