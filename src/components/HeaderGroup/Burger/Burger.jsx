import React from "react";
import './BurgerStyle.scss'



const Burger = ({open, setOpen}) => {
    return(
        <button className={`header-sidebar-btn ${!open ? '' : 'is_open'}`}  onClick={() => setOpen(!open)}>
            <div></div>
            <div></div>
            <div></div>
        </button>
    )
}

export default Burger