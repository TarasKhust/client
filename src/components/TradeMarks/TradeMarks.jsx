import React from "react";
import './MarksStyle.scss'
import { Swiper as Slider, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss'
SwiperCore.use([Autoplay, Navigation, Pagination]);
import Lesner from './img/Lessner.svg'
import Luminarc from './img/Luminarc.svg'
import Ritzenhoff from './img/Ritzenhoff.svg'
import LaOpala from './img/la_opala.svg'
import Pasabahce from './img/Pasabahce.svg'
import Simax from './img/Simax.svg'
import CristalArques from './img/CristalArques.svg'
import Bormioli from './img/BormioliRocco.svg'
import Durobar from './img/Durobar.svg'


const config = new Map([
    ['lesner', <Lesner/>],
    ['luminarc', <Luminarc />],
    ['la_opala', <LaOpala />],
    ['ritzenhoff', <Ritzenhoff />],
    ['pasabahce', <Pasabahce />],
    ['simax', <Simax/>],
    ['cristal-arques', <CristalArques />],
    ['bormioli', <Bormioli />],
    ['durobar', <Durobar />]
]);
const item = [
    {
        title: 'lesner',
        url: '/lesner'
    },
    {
        title: 'luminarc',
        url: '/luminarc'
    },
    {
        title: 'la_opala',
        url: '/la_opala'
    },
    {
        title: 'ritzenhoff',
        url: '/ritzenhoff'
    },
    {
        title: 'pasabahce',
        url: '/pasabahce'
    },
    {
        title: 'simax',
        url: '/simax'
    },
    {
        title: 'cristal-arques',
        url: '/cristal-arques'
    },
    {
        title: 'bormioli',
        url: '/bormioli'
    },
    {
        title: 'durobar',
        url: '/durobar'
    },
]

const TradeMarks = () => {
    return(

        <section className='trade_marks-container'>
            <h4 className='marks_title'>Торговые марки</h4>
            <div className="trade_marks-list">
                <Slider
                    slidesPerView={3}
                    navigation={true}
                    pagination={true}
                    loop={true}
                    effect={'fade'}
                    centeredSlides={true}
                    spaceBetween={0}
                    autoplay={true}
                    delay={2500}
                >
                {item.map(({title, url}) => {
                    return (
                        <SwiperSlide>
                            <a className="marks_list-item" href={url} key={title}>
                                {config.get(title)}
                            </a>
                        </SwiperSlide>
                    )
                })}
                </Slider>
            </div>
        </section>
    )
}

export default TradeMarks