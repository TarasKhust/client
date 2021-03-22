import React from "react";
import './SwitherStyle.scss'


const LangSwitcher = ({open}) => {
    return(
        <div  className={`switcher_container ${!open ? '' : 'relative_switcher'}`}>
            <a className='switcher_item active_lang' href="#">RU</a>
            <a className='switcher_item' href="#">UA</a>
        </div>
    )
}

export default LangSwitcher