import React from "react";
import s from './header.module.css'
import Search from "./Search/Search";
import Companion from "./Companion/Companion";

const Header = () => {
    return (
        <div className={s.header_wrapper}>
           <Search/>
           <Companion />
        </div>
    )
}

export default Header