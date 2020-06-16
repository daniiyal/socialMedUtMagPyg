import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStatetoProps = (state) =>{

    return {
        dialogs: state.dialogsPage.dialogs
    }
}

let mapDispatchtoProps = (dispatch) =>{
    return {}
}

let DialogsContainer = connect(mapStatetoProps, mapDispatchtoProps)(Dialogs);

export default DialogsContainer