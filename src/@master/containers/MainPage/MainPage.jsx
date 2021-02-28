import React from "react";
import './MainStyle.scss'
import Header from "components/HeaderGroup/Header";
import Slider from "components/Slider/Slider";
import Catalog from "components/Catalog/Catalog";
import Privilege from "components/Privilege/Privilege";

 const MainPage = () => {
    return(
        <div>
            <Header />
            <Slider  />
            <Catalog />
            <Privilege />
        </div>
    )
}

export default MainPage