import React from 'react'
import "./ContactsStyle.scss"

import Clock from './img/clock.svg'
import Mail from './img/mail.svg'
import Instagram from './img/instagram.svg'
import Facebook from './img/facebook.svg'
import Phone from './img/phone.svg'
import Pinterest from './img/pinterest.svg'
import Location from './img/location.svg'
const Contacts = () => {
    return (
        <div className='tut_posuda-contacts' id='contacts'>
            <div className="contacts_inner">
                <h2 className="contacts_title">Контакти</h2>
                <ul className="view_contacts">
                    <li>
                        <Phone />
                        {/*<img src="./assets/img/phone.svg" alt="">*/}
                            <a href="tel:+38 (068) 675 89 87">+ 38 (068) 675 89 87</a>
                    </li>
                    <li>
                        <Mail />
                        {/*<img src="./assets/img/mail.svg" alt="">*/}
                            <a href="mailto:tut_posuda@gmail.com">tut_posuda@gmail.com</a>
                    </li>
                    <li>
                        <Location />
                        {/*<img src="./assets/img/location.svg" alt="">*/}
                            <span>Україна, Київ</span>
                    </li>
                    <li>
                        {/*<img src="./assets/img/clock.svg" alt="">*/}
                        <Clock/>
                            <span> с 10:00 до 20:00, без выходных</span>
                    </li>
                    <div className="social_contacts">
                        <a href="">
                            <Pinterest />
                            {/*<img src="./assets/img/pinterest.svg" alt="Pinterest">*/}
                        </a>
                        <a href="">
                            <Facebook />
                            {/*<img src="./assets/img/facebook.svg" alt="Facebook">*/}
                        </a>
                        <a href="">
                            <Instagram />
                            {/*<img src="./assets/img/instagram.svg" alt="Instagram">*/}
                        </a>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export  default  Contacts