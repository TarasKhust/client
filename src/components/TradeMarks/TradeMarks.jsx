import React, {useState} from "react";
import './MarksStyle.scss'

import Simax from './img/simax.svg'
import Wilmax from './img/wilmax.svg'
import Pyrex from './img/pyrex.svg'
import Horeca from './img/horeca.svg'
import Berlinger from './img/berlinger.svg'
import Eternum from './img/eternum.svg'
import Luminarc from './img/luminarc.svg'


const config = new Map([
    ['pyrex', <Pyrex/>],
    ["wilmax", <Wilmax/>],
    ['simax', <Simax/>],
    ['horeca', <Horeca />],
    ['berlinger', <Berlinger />],
    ['eternum', <Eternum/>],
    ['luminarc', <Luminarc />]
]);
const item = [
    {
        title: 'pyrex',
        url: '/pyrex'
    },
    {
        title: 'wilmax',
        url: '/wilmax'
    },
    {
        title: 'luminarc',
        url: '/luminarc'
    },
    {
        title: 'eternum',
        url: '/eternum'
    },
    {
        title: 'berlinger',
        url: '/berlinger'
    },
    {
        title: 'horeca',
        url: '/horeca'
    },
    {
        title: 'simax',
        url: '/simax'
    },
]

const TradeMarks = () => {
    return(
        <section className='trade_marks-container'>
            <h4 className='marks_title'>Торговые марки</h4>
            <div className="trade_marks-list">

                {item.map(({title, url}) => {
                        <a href={url}><li key={title}>{config.get(title)}</li></a>
                })}

            </div>
        </section>
    )
}

export default TradeMarks