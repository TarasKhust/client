import React from "react";
import './PrivilegeStyle.scss'

import Fast from './img/fast.svg'
import Like from './img/like.svg'
import Presense from './img/presence.svg'

const Privilege = () => {
    return(
        <section className='privilege_container'>
            <ul className="inner_list-privilege">
                <li>
                    <figure className="image">
                        <Like />
                    </figure>
                    <h5 className='title'>Гарантия качества</h5>
                    <p className="desc">100 % гарантия качества товаров</p>
                </li>
                <li>
                    <figure className="image">
                        <Fast />
                    </figure>
                    <h5 className='title'>Быстрая доставка</h5>
                    <p className="desc">Отправка в течении 24 часов!</p>
                </li>
                <li>
                    <figure className="image">
                        <Presense/>
                    </figure>
                    <h5 className='title'>Наличие товара</h5>
                    <p className="desc">Более 20 000 товаров в наличии!</p>
                </li>
            </ul>
        </section>
    )
}

export default Privilege