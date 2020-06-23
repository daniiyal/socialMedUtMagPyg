

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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

const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST:
            let newID = state.posts.length + 1;
            let newPost = {
                id: newID,
                likeCount: 0,
                commentCount: 0,
                repostCount: 0,
                content: state.newPostText,
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost],
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer;