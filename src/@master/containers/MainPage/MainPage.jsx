import React from "react";
import  './MainStyle.scss'
import Header from "components/HeaderGroup/Header";
import Slider from "components/Slider/Slider";
import Catalog from "components/Catalog/Catalog";
import Privilege from "components/Privilege/Privilege";
import Arrivals from "components/NewArrivals/Arrivals";
import TradeMarks from "components/TradeMarks/TradeMarks";
import Footer from "components/Footer/Footer"
import Contacts from "components/Contacts/Contacts";



 const MainPage = () => {
    return(
        <div className="tut-posuda_content">
            <Header />
            <Slider  />
            <Catalog />
            {/*<Privilege />*/}
            <Arrivals />
            {/*<TradeMarks />*/}
            <Contacts />
            <Footer />
        </div>
    )
}

export default MainPage