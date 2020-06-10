import React from "react";
import s from './messages.module.css'


import Dialogs from "./Dialogs/Dialogs";
import Header from "./Header/Header";
import Chats from "./Chats/Chats";


let kot = "https://www.photoforum.ru/f/photo/000/537/537839_66.jpg";

const Messages = (props) => {
    return (
        <div className={s.messages_wrapper}>
            <Header />
            <Dialogs state = {props.state}/>
            <Chats state = {props.state}/>
            <div className={s.ad}>
                <img src={kot} alt = "ad"/>
                <img src={kot} alt = "ad"/>
                <img src={kot} alt = "ad"/>
                <img src={kot} alt = "ad"/>
            </div>
        </div>
    )
}

export default Messages