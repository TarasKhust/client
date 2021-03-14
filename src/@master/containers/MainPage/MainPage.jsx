import React from "react";
import  './MainStyle.scss'
import Header from "components/HeaderGroup/Header";
import Slider from "components/Slider/Slider";
import Catalog from "components/Catalog/Catalog";
import Privilege from "components/Privilege/Privilege";
import Arrivals from "components/NewArrivals/Arrivals";
import TradeMarks from "components/TradeMarks/TradeMarks";

 const MainPage = () => {
    return(
        <div>
            <Header />
            <Slider  />
            <Catalog />
            <Privilege />
            <Arrivals />
            <TradeMarks />
        </div>
    )
}

export default MainPage