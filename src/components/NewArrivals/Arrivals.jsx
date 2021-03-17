import React from "react";
import { Swiper as Slider, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from "swiper";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './ArrivalsStyle.scss'
import Button from "components/BtnGroup/Button";
import Chip from "components/Chip/Chip";

// install Swiper's Controller component
SwiperCore.use([Navigation])

const Arrivals = () => {
    return(
        <section className='arrivals_content' >
            <h2 className='arrivals_title'>Новые поступления</h2>
            <div className="content_inner">
                <Slider
                    slidesPerView={3}
                    loop={true}
                    navigation={true}
                    autoHeight={true}
                    spaceBetween={20}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className='arrival_item'>
                            <figure className="arrival_image">
                                <img src="https://irecommend.ru/sites/default/files/product-images/692175/QNnpaVBQYVkM08mgxUt8A.jpg" alt=""/>
                            </figure>
                            <div className="arrival_description">
                                <div className='arrival_name'>Paşabahçe Aquatic</div>
                                <h2 className='arrival_desc'>Стопка для водки набор 6Х60мл</h2>
                                <div className="desc_row">
                                    <span className="price">65,00 грн</span>
                                    <Chip />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='arrival_item'>
                            <figure className="arrival_image">
                                <img src="https://images.ua.prom.st/1064918125_w640_h640_nabor-bokalov-dlya.jpg" alt=""/>
                            </figure>
                            <div className="arrival_description">
                                <div className='arrival_name'>Paşabahçe Aquatic</div>
                                <h2 className='arrival_desc'>Стопка для водки набор 6Х60мл</h2>
                                <div className="desc_row">
                                    <span className="price">65,00 грн</span>
                                    <Chip />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='arrival_item'>
                            <figure className="arrival_image">
                                <img src="https://i1.rozetka.ua/goods/1682570/pasabahce_44819_set_barocco_images_1682570621.jpg" alt=""/>
                            </figure>
                            <div className="arrival_description">
                                <div className='arrival_name'>Paşabahçe Aquatic</div>
                                <h2 className='arrival_desc'>Стопка для водки набор 6Х60мл</h2>
                                <div className="desc_row">
                                    <span className="price">65,00 грн</span>
                                    <Chip />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='arrival_item'>
                            <figure className="arrival_image">
                                <img src="https://irecommend.ru/sites/default/files/product-images/692175/QNnpaVBQYVkM08mgxUt8A.jpg" alt=""/>
                            </figure>
                            <div className="arrival_description">
                                <div className='arrival_name'>Paşabahçe Aquatic</div>
                                <h2 className='arrival_desc'>Стопка для водки набор 6Х60мл</h2>
                                <div className="desc_row">
                                    <span className="price">65,00 грн</span>
                                    <Chip />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Slider>
            </div>
            <div className="arrivals_link">
                <Button text={'Магазин'} animation={'draw-outline'} />
            </div>
        </section>
    )
}
export default Arrivals