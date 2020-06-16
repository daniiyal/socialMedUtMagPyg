import React from "react";
import s from './dialogs.module.css'
import Dialog from "./Dialog/Dialog";



const Dialogs = (props) => {

    let dialogItems = props.dialogs.map(d => <Dialog id={d.id} name={d.name} message={d.message} ava={d.ava}/>)

    return(
        <div className={s.dialogs_wrapper}>
            {dialogItems}
        </div>
    )
}

export default Dialogs

