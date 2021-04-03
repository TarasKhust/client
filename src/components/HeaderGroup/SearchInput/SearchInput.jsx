import React, {useState} from "react";
import './SearchStyle.scss'
import Search from './search_icon.svg'
const SearchInput = () => {
    const [isOpen ,setIsOpen] = useState( false)

    return(
        <div className={`search_container ${!isOpen ? '' : 'is_open'}`}>
            <input placeholder='Поиск в магазине' type="text" />
            <figure onClick={() => setIsOpen((v)=> !v)} className="search_icon">
                <Search />
                {/*<img src={search} alt=""/>*/}
            </figure>
        </div>
    )
}

export default SearchInput