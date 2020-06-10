import React from "react";
import s from './wall.module.css'
import LeftSide from "./LeftSide/LeftSide";
import Posts from "./Posts/Posts";
import RightSide from "./RightSide/RightSide";


const Wall = (props) => {
    return (
        <div className={s.wall_wrapper}>
            <LeftSide/>
            <Posts posts={props.state.posts} newPostText={props.state.newPostText} dispatch = {props.dispatch}/>
            <RightSide/>
        </div>
    )
}

export default Wall