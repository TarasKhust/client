import React from "react";
import {Link} from "react-router-dom";
import './NavStyle.scss'



const HeaderNav = () => {
    return(
        <ul className='navigation_list'>
            <li className='list_item'>
                <Link to='/main'>Главная</Link>
            </li>
            <li className='list_item'>
                <Link to='/main'>О нас</Link>
            </li>
            <li className='list_item'>
                <Link to='/main'>Каталог</Link>
            </li>
            <li className='list_item'>
                <Link to='/main'>Доставка и оплата</Link>
            </li>
            <li className='list_item'>
                <Link to='/main'>Контакты</Link>
            </li>
        </ul>
    )
}

export default HeaderNav