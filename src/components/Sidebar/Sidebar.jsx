import React from "react";
import s from './sidebar.module.css'
import logo from '../../icons/Sidebar/alien.png'
import friend from '../../icons/Sidebar/trust.png'
import groups from '../../icons/Sidebar/friends.png'
import article from '../../icons/Sidebar/news-admin.png'
import home from '../../icons/Sidebar/browser.png'
import music from '../../icons/Sidebar/turntable.png'
import video from '../../icons/Sidebar/cinema.png'
import games from '../../icons/Sidebar/game-controller.png'
import messages from '../../icons/Sidebar/conversation.png'
import {NavLink} from "react-router-dom";




const Sidebar = () => {
    return(
        <div className={s.sidebar_wrapper}>
           <div className={s.sidebar_items}>
               <div className={s.sidebar_logo}><NavLink to="/profile"><img src={logo} alt="logo"/></NavLink></div>
               <div className={s.sidebar_item}><NavLink to="/profile"><img src={home} alt="home"/></NavLink></div>
               <div className={s.sidebar_item}><a href="sdfsd"><img src={article} alt="article"/></a></div>
               <div className={s.sidebar_item}><NavLink to="/messages"><img src={messages} alt="messages"/></NavLink></div>
               <div className={s.sidebar_item}><a href="sdfsd"><img src={friend} alt="friend"/></a></div>
               <div className={s.sidebar_item}><a href="sdfsd"><img src={groups} alt="groups"/></a></div>
               <div className={s.sidebar_item}><a href="sdfsd"><img src={music} alt="music"/></a></div>
               <div className={s.sidebar_item}><a href="sdfsd"><img src={video} alt="video"/></a></div>
               <div className={s.sidebar_item}><a href="sdfsd"><img src={games} alt="games"/></a></div>


           </div>

        </div>
    )
}

export default Sidebar