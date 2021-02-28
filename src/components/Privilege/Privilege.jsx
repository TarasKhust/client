import React from "react";
import './PrivilegeStyle.scss'

import fast from './img/fast.svg'
import like from './img/like.svg'
import presense from './img/presence.svg'

const Privilege = () => {
    return(
        <section className='privilege_container'>
            <ul className="inner_list-privilege">
                <li>
                    <figure className="image">
                        <img src={like} alt="Quality assurance"/>
                    </figure>
                    <h5 className='title'>Гарантия качества</h5>
                    <p className="desc">100 % гарантия качества товаров</p>
                </li>
                <li>
                    <figure className="image">
                        <img src={fast} alt="Fast shipping"/>
                    </figure>
                    <h5 className='title'>Быстрая доставка</h5>
                    <p className="desc">Отправка в течении 24 часов!</p>
                </li>
                <li>
                    <figure className="image">
                        <img src={presense} alt="Product availability"/>
                    </figure>
                    <h5 className='title'>Наличие товара</h5>
                    <p className="desc">Более 20 000 товаров в наличии!</p>
                </li>
            </ul>
        </section>
    )
}

export default Privilege