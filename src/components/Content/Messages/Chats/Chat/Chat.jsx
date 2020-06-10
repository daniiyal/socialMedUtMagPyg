import React from "react";
import s from './chat.module.css'




const Chat = (props) => {
    return(
        <div className={s.chat_wrapper}>
                <div className={s.ava}><img src={`${props.ava}`} alt='friend'/></div>
                <div className={s.name}>{props.name}</div>
                <div className={s.message}>{props.message}</div>
        </div>
    )
}

export default Chat