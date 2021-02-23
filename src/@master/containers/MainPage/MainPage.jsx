import React from "react";
import './MainStyle.scss'
import Header from "components/HeaderGroup/Header";
import Button from "components/BtnGroup/Button";

 const MainPage = () => {
    return(
        <div>
            <Header />
            <Button text={'Магазин'}  animation={'draw-outline'}/>
        </div>
    )
}

export default MainPage