import React from "react";
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './ButtonStyle.scss'



const Button = ({animation, text, mode, size, className, disabled, onClick, ...props}) => {

    const classNames = classnames(
        'btn',
        {
            [`btn_${mode}`]: Boolean(mode),
            [`btn_${size}`]: Boolean(size),
            [`${animation}`]: Boolean(animation)
        },
        className
    )
    return(
        <button
            className={classNames}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    mode: 'yellow',
    size: 'normal',
    className: '',
    animation: '',
    disabled: false
}

Button.propTypes = {
    mode: PropTypes.oneOf(['yellow',]),
    size: PropTypes.oneOf(['normal',]),
    animation: PropTypes.oneOf(['draw-outline',]),
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}


/**
 *
 * @param text
 * @param mode
 * @param size
 * @param className
 * @param disabled
 * @param onClick
 * @param props
 * @param animation
 * @returns {JSX.Element}
 * @constructor
 */
export default Button