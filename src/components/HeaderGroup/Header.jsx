import React from "react";
import './HeaderStyle.scss'
import LangSwitcher from "components/HeaderGroup/LangSwitcher/LangSwitcher";
import logo from './img/logo.svg'
import ChipBasket from "components/HeaderGroup/ChipBasket/СhipBasket";
import SearchInput from "components/HeaderGroup/SearchInput/SearchInput";
import HeaderNav from "components/HeaderGroup/HeaderNav/HeaderNav";

const Header = () => {
    return(
        <header className={'header_container'}>
            <div className="header_inner">
                <div className="header-inner_top">
                    <div className="inner_top-l">
                        <LangSwitcher />
                    </div>
                    <a href="#" className="header_logo">
                        <img src={logo} alt="logo tut_posuda"/>
                    </a>
                    <div className="inner_top-r">
                        <SearchInput />
                        <ChipBasket />
                    </div>
                </div>
                <div className="header-inner_bottom">
                    <HeaderNav />
                </div>
            </div>
        </header>
    )
}

export default Header