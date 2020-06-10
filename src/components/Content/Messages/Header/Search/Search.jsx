import React from "react";
import s from './search.module.css'
import loupe from "../../../../../icons/Header/loupe.png";

const Search = () => {
    return (

        <div className={s.search}>
            <form className={s.search_form}>
                <div className={s.input}>
                    <input type="text" autoComplete="off" tabIndex=""
                           placeholder="Search here..."/>
                </div>
                <div className={s.search_icon}>
                    <img src={loupe} alt='search'/>
                </div>
            </form>
        </div>

    )
}

export default Search