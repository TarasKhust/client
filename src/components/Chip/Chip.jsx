import React from 'react'
import './ChipStyle.scss'
import Bag from './img/shopping_bag.svg'
import PropTypes from "prop-types";


const Chip = ({onClick}) => {
    return(
        <button className='shopping_bag is_active-bag'
                onClick={onClick}
        >
            <Bag />
        </button>
    )
}

Chip.propTypes = {
    onClick: PropTypes.func,
}

/**
 * @param onClick
 */
export default Chip