import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AddPost, updateNewPostText } from './redux/state'

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            {/* <React.StrictMode> */}
            <App state={state} AddPost={AddPost} updateNewPostText={updateNewPostText} />
            {/* </React.StrictMode>, */}
        </BrowserRouter>,
        document.getElementById('root')
    );
}