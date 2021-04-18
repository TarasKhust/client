import React from "react";
import './DeliveryStyle.scss'

const Delivery = ()=> {
    return(
        <section className='tut_posuda-delivery' id='delivery'>
            <div className="delivery_inner">
                <h4 className="delivery_title">
                    Доставка та оплата
                </h4>
                <div className="delivery_methods">
                    <h3 className="methods_title">Способи оплати</h3>
                    <p className="methods_desc">1. <b>Оплата при отриманні товару.</b></p>
                    <p className="view_methods">
                        Оплата здійснюється при отриманні товару в пункті видачі перевізника Нова Пошта.
                        Зверніть увагу на те, що оплата проводиться виключно у національній валюті.
                    </p>
                    <p className="methods_desc">2. <b>Оплата за безготівковим розрахунком.</b></p>
                    <p className="view_methods">
                        Ви можете оплатити замовлення переказем на карту Monobank/ПриватБанк
                    </p>
                    <p className="view_methods">
                        Відправка товару, сплаченого за безготівковим розрахунком, здійснюється після надходження грошей
                        на рахунок.
                    </p>
                    <p className="view_methods">
                        Розрахунок проводиться в національній валюті.
                    </p>
                    <h3 className="methods_title">Доставка товару</h3>
                    <p className="methods_desc">1. <b>Доставка в інші міста України</b></p>
                    <p className="view_methods">
                        Доставка здійснюється автоперевізником "Нова пошта".
                        Вартість доставки не входить в ціну товару, оплата за доставку
                        здійснюється покупцем самостійно при придбанні товару.
                    </p>
                    <p className="view_methods">
                        Шановні покупці!
                        Нажаль, ми поки не маємо власної служби доставки, тому користуємось послугами служби
                        посередників.
                        Зі свого боку ми гарантуємо правильне оформлення та пакування ваших замовлень. Кожну посилку ми
                        спеціально страхуєм і вланоруч передаємо до поштового відділення.
                        Проте ми все ще не можемо гарантувати, що замовлення прийде неушкодженим.
                        Тому ми дуже просимо перевіряти замовлення під час отримання на поштовому відділенні!
                    </p>
                    <p className="methods_desc">
                        У разі пошкодження вашого замовлення, поштовий оператор <b>ЗАБОВ`ЯЗАНИЙ</b> відшкодувати
                        збитки.
                    </p>
                    {/*<p className="methods_desc"><b>Офіційний партнер доставки:</b></p>*/}
                    {/*<figure className="delivery_image">*/}
                    {/*    /!*<img src="./assets/img/novaposhta_logo.png" alt="">*!/*/}
                    {/*</figure>*/}
                </div>
            </div>
        </section>
    )
}

export default Delivery