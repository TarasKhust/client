import React from "react";
import './MarksStyle.scss'


import Lesner from './img/user.svg'
// import Luminarc from './img/Luminarc.svg'
// import Ritzenhoff from './img/Ritzenhoff.svg'
// import LaOpala from './img/la_opala.svg'
// import Pasabahce from './img/Pasabahce.svg'
// import Simax from './img/Simax.svg'
// import CristalArques from './img/CristalArques.svg'
// import Bormioli from './img/BormioliRocco.svg'
// import Durobar from './img/Durobar.svg'


const config = new Map([
    ['lesner', <Lesner/>],
    // ['luminarc', <Luminarc />],
    // ['la_opala', <LaOpala />],
    // ['ritzenhoff', <Ritzenhoff />],
    // ['pasabahce', <Pasabahce />],
    // ['simax', <Simax/>],
    // ['cristal-arques', <CristalArques />],
    // ['bormioli', <Bormioli />],
    // ['durobar', <Durobar />]
]);
const item = [
    {
        title: 'lesner',
        url: '/lesner'
    },
    // {
    //     title: 'luminarc',
    //     url: '/luminarc'
    // },
    // {
    //     title: 'la_opala',
    //     url: '/la_opala'
    // },
    // {
    //     title: 'ritzenhoff',
    //     url: '/ritzenhoff'
    // },
    // {
    //     title: 'pasabahce',
    //     url: '/pasabahce'
    // },
    // {
    //     title: 'simax',
    //     url: '/simax'
    // },
    // {
    //     title: 'cristal-arques',
    //     url: '/cristal-arques'
    // },
    // {
    //     title: 'bormioli',
    //     url: '/bormioli'
    // },
    // {
    //     title: 'durobar',
    //     url: '/durobar'
    // },
]

const TradeMarks = () => {
    return(
        <div>
            <Lesner/>
        </div>
        // // <section className='trade_marks-container'>
        // //     <h4 className='marks_title'>Торговые марки</h4>
        // //     <div className="trade_marks-list">
        // //         {item.map(({title, url}) => {
        // //             return(
        // //                 // <a href={url} key={title}>
        // //                 //     <li key={title}>{config.get(title)}</li>
        // //                 // </a>
        // //             )
        // //         })}
        // //
        // //         {/*{item.map(({title, url}) => {*/}
        // //         {/*        <a href={url}>*/}
        // //         {/*            /!*<li key={title}>{config.get(title)}</li>*!/*/}
        // {/*        /!*        </a>*!/*/}
        // {/*        /!*})}*!/*/}
        // {/*    </div>*/}
        // {/*</section>*/}
    )
}

export default TradeMarks