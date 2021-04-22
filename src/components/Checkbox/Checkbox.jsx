import React, {useEffect, useState} from 'react'
import './CheckboxStyle.scss'
import classnames from "classnames";
import PropTypes from "prop-types";


const Checkbox = ({mode,  checked,  onChange, name, ...props  }) => {
    const classNames = classnames(
        "styled_checkbox",
        {
            [`styled_${mode}`]: Boolean(mode),
        },
        {
            [`styled_${checked}`] : Boolean(checked)
        }
    );
    return(
        <div  className='checkbox_container'>
            <input id={name}  type='checkbox'
                   // checked={checkedItems[name]}
                   // onChange={handleChange}
                   // defaultChecked
                   name={name} checked={checked} onChange={onChange}
            />
            <div className={classNames}>
                <svg viewBox="0 0 24 24" className={`visible ${checked ? '' : 'not_visible'}`}>
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            </div>
        </div>
    )
}

Checkbox.propTypes = {
    mode: PropTypes.oneOf(["yellow", "green"]),
    fnChange: PropTypes.func,
};
export default Checkbox
