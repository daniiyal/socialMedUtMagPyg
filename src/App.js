import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar"
import Profile from "./components/Content/Profile/Profile";
import Messages from "./components/Content/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Sidebar/>
                <Header/>
                <div className='content'>
                    <Route path='/profile'
                           render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path='/messages' render={() => <Messages state={props.state.dialogsPage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
