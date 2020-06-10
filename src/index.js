import './index.css'
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {BrowserRouter} from "react-router-dom";


let renderTree = (state) => {
    ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL}>
        <App state={state}
             dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>, document.getElementById('root'));
}

renderTree(store.getState());

store.subscribe(renderTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
