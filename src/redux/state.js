import tor from "../icons/Friends/xzPnEDN6D7E.jpg";
import pasha from "../icons/Friends/7m4yw6q0xYc.jpg";
import an from "../icons/Friends/Kr-ZdXZ1Nv4.jpg";
import ol from "../icons/Friends/z8oRTncuDxY.jpg";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        dialogsPage: {
            chats: [
                {name: 'Тарас', message: 'МАЗАФАКА', ava: tor},
                {name: 'Тарас', message: 'факамаза', ava: tor},
                {name: 'Тарас', message: 'фывфыв', ava: tor},
                {name: 'Тарас', message: 'МАфывфывЗАФАКА', ava: tor}
            ],
            dialogs: [
                {id: 1, name: 'Тарас', message: 'МАфывфывЗАФАКА', ava: tor},
                {id: 2, name: 'Паша', message: 'факамаза', ava: pasha},
                {id: 3, name: 'Аня', message: 'фывфыв', ava: an},
                {id: 4, name: 'Олеся', message: 'МАЗАФАКА', ava: ol}
            ]
        },
        profilePage: {
            posts: [
                {
                    time: '5 minutes',
                    likeCount: 13,
                    commentCount: 5,
                    repostCount: 6,
                    content: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.`
                },
                {
                    time: '5 minutes',
                    likeCount: 23,
                    commentCount: 5,
                    repostCount: 13,
                    content: `Идейные соображения высшего порядка, 
        а также постоянный количественный рост и сфера нашей активности обеспечивает 
        широкому кругу (специалистов) участие в формировании новых предложений. Повседневная практика показывает, 
        что дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации модели развития. 
        Идейные соображения высшего порядка, а также реализация намеченных плановых заданий позволяет выполнять важные задания 
        по разработке соответствующий условий активизации. Не следует, однако забывать, что укрепление и развитие структуры 
        представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям.`
                },
                {
                    time: '5 minutes',
                    likeCount: 33,
                    commentCount: 5,
                    repostCount: 5,
                    content: `Значимость этих проблем настолько очевидна,
        что консультация с широким активом влечет за собой процесс внедрения и 
        модернизации системы обучения кадров, соответствует насущным потребностям. 
        Разнообразный и богатый опыт новая модель организационной деятельности требуют от нас анализа форм развития.`
                }

            ],
            newPostText: ''
        }
    },
    renderTree() {
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newID = this._state.profilePage.posts.length + 1
            let newPost = {
                id: newID,
                likeCount: 0,
                commentCount: 0,
                repostCount: 0,
                content: this._state.profilePage.newPostText,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this.renderTree(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this.renderTree(this._state)
        }
    },
    subscribe(observer) {
        this.renderTree = observer;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})


export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})


export default store