import React from "react";
import s from './header.module.css'
import bkg from '../../../../images/Rivers_Geese_Grass_Watermill_566707_2560x1600.jpg'
import ava from '../../../../images/RnCm75LYiXQ.jpg'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={s.header_wrapper}>
            <div className={s.nav}>
                <div className={s.background}>
                    <img src={bkg} alt='nature'/>
                </div>
                <div className={s.nav_item}>
                    <div className={s.item}><a href="asdas">Timeline</a></div>
                    <div className={s.item}><a href="asdas">About</a></div>
                    <div className={s.item}><NavLink to="/friends">Friends</NavLink> </div>
                    <div className={s.ava}><img src={ava} alt='ava'/></div>
                    <div className={s.info}>
                        <div className={s.name}>Daniyal Magomedov</div>
                        <div className={s.location}>Makhachkala, Daghestan</div>
                    </div>
                    <div className={s.item}><a href="asdas">Photos</a></div>
                    <div className={s.item}><a href="asdas">Videos</a></div>
                    <div className={s.item}><a href="asdas">...</a></div>
                </div>
            </div>
        </div>
    )
}

export default Header