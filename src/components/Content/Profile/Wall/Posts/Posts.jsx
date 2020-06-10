import React from "react";
import s from './posts.module.css'
import Post from "./Post/Post";
import ava from './../../../../../images/RnCm75LYiXQ.jpg';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../../redux/state";

const Posts = (props) => {
    debugger;
    let posts = props.posts.map(p => <Post time={p.time} likeCount={p.likeCount} commentCount={p.commentCount}
                                           repostCount={p.repostCount} content={p.content}/>)

    let newPost = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={s.posts_wrapper}>
            <div className={s.add_post}>
                <div className={s.ava}>
                    <img src={ava} alt='ava'/>
                </div>
                <div className={s.new_post}>

                    <input placeholder="Что нового?" ref={newPost} onChange={onPostChange} value={props.newPostText}/>
                    <button onClick={addPost}>Отправить</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default Posts