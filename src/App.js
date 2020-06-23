import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar"
import Messages from "./components/Content/Messages/Messages";
import Friends from "./components/Content/Friends/Friends";
import {Route} from "react-router-dom";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";


const App = (props) => {
    return (

        <div className="app_wrapper">
            <Sidebar/>
            <Header/>
            <div className='content'>
                <Route path='/profile' render={() => <ProfileContainer/>}/>
                <Route path='/messages' render={() => <Messages/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
            </div>
        </div>
    );
}

export default App;
