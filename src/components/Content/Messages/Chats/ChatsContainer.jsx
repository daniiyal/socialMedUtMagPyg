import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/dialogs_reducer";
import Chats from "./Chats";
import {connect} from "react-redux";



let mapStatetoProps = (state) => {
    return {
        chats: state.dialogsPage.chats,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchtoProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
    }
}

let ChatsContainer = connect(mapStatetoProps, mapDispatchtoProps)(Chats);

export default ChatsContainer