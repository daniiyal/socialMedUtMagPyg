import React from "react";
import s from './rightSide.module.css'
import Friends from "./Friends/Friends";

const RightSide = () => {
    return(
        <div className={s.side_wrapper}>
            <Friends/>
        </div>
    )
}

export default RightSide