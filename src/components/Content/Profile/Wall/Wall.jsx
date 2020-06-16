import React from "react";
import s from './wall.module.css'
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import PostsContainer from "./Posts/PostsContainer";


const Wall = (props) => {
    return (
        <div className={s.wall_wrapper}>
            <LeftSide/>
            <PostsContainer/>
            <RightSide/>
        </div>
    )
}

export default Wall