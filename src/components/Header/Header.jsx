import React from "react";
import s from './header.module.css'

import loupe from '../../icons/Header/loupe.png'
import light from '../../icons/Header/energy.png'
import ava from "../../images/RnCm75LYiXQ.jpg"
import arrow from '../../icons/Header/down-arrow.png'

const Header = () => {
    return (
        <div className={s.header_wrapper}>
            {/*<div className={s.branch}>*/}

            {/*</div>*/}
            <div className={s.search}>
                <form className={s.search_form}>
                    <div className={s.input}>
                        <input type="text" autoComplete="off" tabIndex=""
                               placeholder="Search here people or pages..."/>
                    </div>
                    <div className={s.search_icon}>
                        <img src={loupe} alt='search'/>
                    </div>
                </form>
            </div>
            <div className={s.event}>
                <img src={light} alt='light' />
            </div>
            <div className={s.profile}>
                <div className={s.ava}><img src={ava}/></div>
                <div className={s.name}>Daniyal Magomedov</div>
                <div className={s.status}>My life My rules</div>
                <div className={s.parameters}><img src={arrow}/></div>
            </div>
        </div>
    )
}
    
export default Header