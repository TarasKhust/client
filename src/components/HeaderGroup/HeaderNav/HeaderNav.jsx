import React from "react";
// import {Link} from "react-router-dom";
import './NavStyle.scss'
import {Link, animateScroll as scroll} from 'react-scroll'


const HeaderNav = () => {
    return(
        <ul className='navigation_list'>
            <li className='list_item'>
                <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}

                >Головна</Link>
            </li>
            {/*<li className='list_item'>*/}
            {/*    <Link to='/main'>О нас</Link>*/}
            {/*</li>*/}
            <li className='list_item'>
                <Link
                    to="catalog"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Каталог</Link>
            </li>
            <li className='list_item'>
                <Link
                      to="delivery"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                >Доставка та оплата</Link>
            </li>
            <li className='list_item'>
                <Link
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="contacts">Контакти</Link>
            </li>
        </ul>
    )
}

export default HeaderNav