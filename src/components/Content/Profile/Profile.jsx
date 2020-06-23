import React from "react";
import s from './profile.module.css'
import Header from "./Header/Header";
import Wall from "./Wall/Wall";


const Profile = () => {
    return (
        <div className={s.profile_wrapper}>
            <Header/>
            <Wall/>
        </div>
    )
}

export default Profile