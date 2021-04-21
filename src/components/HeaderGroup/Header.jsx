import React, {useEffect, useState, useRef} from "react";
import './HeaderStyle.scss'
import LangSwitcher from "components/HeaderGroup/LangSwitcher/LangSwitcher";
import Logo from './img/logo.svg'
import ChipBasket from "components/HeaderGroup/ChipBasket/СhipBasket";
import SearchInput from "components/HeaderGroup/SearchInput/SearchInput";
import HeaderNav from "components/HeaderGroup/HeaderNav/HeaderNav";
import Burger from "components/HeaderGroup/Burger/Burger";

const Header = () => {
    const node = useRef();
    const [open, setOpen] = useState(false)

    const handleClickOutside = e => {
        if (node.current.contains(e.target)) { //// not working with React scrool library
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        document.body.classList.toggle('nav_open', open) ///toggle class to overflow: hidden

        // let navItem = document.querySelectorAll('.list_item a')
        // navItem.forEach((e) => {
        //     e.addEventListener('click', (event) => {
        //         setOpen(false);
        //     })
        // })
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    },[open])

    return(
        <header className='header_container'>
            <div className="header_inner">
                <div className="header-inner_top">
                    <div className="inner_top-l">
                        <Burger open={open} setOpen={setOpen}  />
                        {/*<LangSwitcher />*/}
                    </div>
                    <a href="#" className="header_logo">
                        <Logo />
                    </a>
                    <div className="inner_top-r">
                        {/*<SearchInput />*/}
                        <ChipBasket />
                    </div>
                </div>
                <div ref={node} className={`header-inner_nav ${!open ? '' : 'open_nav'}`}>
                    {/*<LangSwitcher />*/}
                    <HeaderNav />
                </div>
            </div>
        </header>
    )
}

export default Header