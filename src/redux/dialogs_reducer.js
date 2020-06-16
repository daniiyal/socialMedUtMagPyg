import me from "../images/RnCm75LYiXQ.jpg";
import tor from "../icons/Friends/xzPnEDN6D7E.jpg";
import pasha from "../icons/Friends/7m4yw6q0xYc.jpg";
import an from "../icons/Friends/Kr-ZdXZ1Nv4.jpg";
import ol from "../icons/Friends/z8oRTncuDxY.jpg";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    chats: [
        {name: 'Тарас', message: 'МАЗАФАКА', ava: tor},
        {name: 'Тарас', message: 'факамаза', ava: tor},
        {name: 'Тарас', message: 'фывфыв', ava: tor},
        {name: 'Тарас', message: 'МАфывфывЗАФАКА', ava: tor},
    ],
    newMessageText: '',
    dialogs: [
        {id: 1, name: 'Тарас', message: 'МАфывфывЗАФАКА', ava: tor},
        {id: 2, name: 'Паша', message: 'факамаза', ava: pasha},
        {id: 3, name: 'Аня', message: 'фывфыв', ava: an},
        {id: 4, name: 'Олеся', message: 'МАЗАФАКА', ava: ol}
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.message,
            }
        case SEND_MESSAGE:
            let new_message_text = state.newMessageText;
            let new_message = {name: "Daniyal", message: new_message_text, ava: me};
            return {
                ...state,
                newMessageText: '',
                chats: [...state.chats, new_message]

            }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, message: text
})


export default dialogsReducer;