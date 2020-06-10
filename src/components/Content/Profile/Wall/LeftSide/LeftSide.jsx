import React from "react";
import s from './leftSide.module.css'
import Intro from "./Intro/Intro";

const LeftSide = () =>{
    return(
        <div className={s.lside_wrapper}>
            <Intro/>
        </div>
    )
}

export default LeftSide