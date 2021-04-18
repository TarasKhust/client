import React from "react";
import {Link} from "react-router-dom";
import './NavStyle.scss'


const HeaderNav = () => {
    return(
        <ul className='navigation_list'>
            <li className='list_item'>
                <Link to='/main'>Головна</Link>
            </li>
            <li className='list_item'>
                <Link to='/about'>Про нас</Link>
            </li>
            {/*<li className='list_item'>*/}
            {/*    <Link>Каталог</Link>*/}
            {/*</li>*/}
            <li className='list_item'>
                <Link to='/delivery'>Доставка та оплата</Link>
            </li>
            <li className='list_item'>
                <Link to='/contacts'>Контакти</Link>
            </li>
        </ul>
    )
}

export default HeaderNav