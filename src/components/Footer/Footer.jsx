import React from 'react'
import './FooterStyle.scss'
import Logo from '../HeaderGroup/img/logo.svg'
import Fb from './img/fb_logo.svg'
import Inst from './img/insta_logo.svg'
import Pint from './img/pinterest_logo.svg'

// <
// a
// className = "ma-link"
// href = "mailto:order@miracle.net" > order
// @miracle.net<
// /a>
const Footer = () => {
    return(
        <footer className="footer_content">
            <div className="footer_inner-row">
                <div className="inner_vis-l">
                    <div className="social_links">
                        <a target='_blank' href="#">
                            <Pint />
                        </a>
                        <a target='_blank' href="#">
                            <Fb />
                        </a>
                        <a target='_blank' href="#">
                            <Inst />
                        </a>
                    </div>
                    <ul className="contacts_links">
                        <li className="link_item">
                            <span className="link_title">Телефон:</span>
                            <a className="link" href="tel:+ 38 (068) 675 89 87">+ 38 (068) 675 89 87</a>
                        </li>
                        <li className="link_item">
                            <span className="link_title">Email:</span>
                            <a className="link" href="mailto:tut_posuda@gmail.com" >tut_posuda@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div className="inner_logo">
                    <a href="#">
                        <Logo />
                    </a>
                    <span className="brand_title">©tut_posuda</span>
                </div>
                <div className="inner_vis-r">
                    <a href="#">Политика возврата</a>
                    <a href="#">Доставка и оплата</a>
                    <a href="#">Cookies</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer