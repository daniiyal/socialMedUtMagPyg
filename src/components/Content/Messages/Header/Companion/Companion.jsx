import React from "react";
import s from './companion.module.css'
import ava from "../../../../../icons/Friends/xzPnEDN6D7E.jpg";

const Companion = () => {
    return (
        <div className={s.companion_wrapper}>
                <div className={s.name}>
                    Тарас Андриевский
                </div>
                <div className={s.time}>
                    5 minutes ago
                </div>
                <div className={s.parameters}>
                    ---
                </div>
                <div className={s.ava}>
                    <img src={ava}/>
                </div>
        </div>
    )
}

export default Companion