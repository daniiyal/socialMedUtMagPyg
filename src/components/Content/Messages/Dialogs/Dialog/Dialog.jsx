import React from "react";
import s from './dialog.module.css';
import {NavLink} from "react-router-dom";


const Dialog = (props) => {

    let path = '/messages/' + props.id;

    return (
        <div className={s.dialog_wrapper}>
            <NavLink to={path} activeClassName={s.selected}>
                <div className={s.dialog}>

                    <div className={s.ava}><img src={`${props.ava}`} alt='friend'/></div>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.last_message}>{props.message}</div>

                </div>
            </NavLink>
        </div>
    )
}

export default Dialog