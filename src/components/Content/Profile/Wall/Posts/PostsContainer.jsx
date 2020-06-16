import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../../redux/profile_reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStatetoProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchtoProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
    }
}

const PostsContainer = connect(mapStatetoProps, mapDispatchtoProps)(Posts);

export default PostsContainer