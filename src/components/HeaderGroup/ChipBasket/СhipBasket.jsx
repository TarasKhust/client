import React from "react";
import './СhipStyle.scss'
import chip from './chip.svg'

const ChipBasket = () => {
    return(
        <div className='basket_container'>
            <div className="counter">1</div>
            <img src={chip} alt=""/>
        </div>
    )
}

export default ChipBasket