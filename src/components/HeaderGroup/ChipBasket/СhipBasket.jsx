import React from "react";
import './СhipStyle.scss'
import Chip from './chip.svg'

const ChipBasket = () => {
    return(
        <div className='basket_container'>
            <div className="counter">1</div>
            <Chip />
            {/*<img src={<Chip/>} alt=""/>*/}
        </div>
    )
}

export default ChipBasket