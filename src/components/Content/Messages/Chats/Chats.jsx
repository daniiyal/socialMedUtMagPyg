import React from "react";
import s from './chats.module.css';

import Chat from "./Chat/Chat";
import send from './../../../../icons/Chat/direct.png'

const Chats = (props) => {

    let chatItems = props.chats.map(c => <Chat name={c.name} message={c.message} ava={c.ava}/>)

    let newMessageText = props.newMessageText;
    let onMessageChange = (e) => {
        let message = e.target.value;
        props.updateNewMessageText(message);
    }

    let onSendButtonClick = () => {
        props.sendMessage();
    }

    return (
        <div className={s.chats_wrapper}>
            <div className={s.chats}>
                {chatItems}
            </div>

            <div className={s.send_message}>
                <div className={s.input}>
                    <input type="text" autoComplete="off" tabIndex=""
                           placeholder="Напишите сообщение..." value={newMessageText} onChange={onMessageChange}/>
                </div>
                <div className={s.send_btn}>
                    <button onClick={onSendButtonClick}><img src={send} alt="send"/></button>
                </div>

            </div>

        </div>

    )
}

export default Chats