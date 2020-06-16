import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar"
import Profile from "./components/Content/Profile/Profile";
import Messages from "./components/Content/Messages/Messages";
import {Route} from "react-router-dom";


const App = (props) => {
    return (

        <div className="app_wrapper">
            <Sidebar/>
            <Header/>
            <div className='content'>
                <Route path='/profile'
                       render={() => <Profile />}/>
                <Route path='/messages' render={() => <Messages/>}/>
            </div>
        </div>
    );
}

export default App;
