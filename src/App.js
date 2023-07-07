import React, { useState } from "react";
import './scss/style.scss'
import PostList from "./components/PostList";
import MainButton from "./components/UI/button/MainButton"
import MainInput from "./components/UI/input/MainInput";

function App() {

    const [posts, setPosts] = useState([
        { id: 1, title: 'HTML', body: 'Description' },
        { id: 2, title: 'JS', body: 'Description' },
        { id: 3, title: 'Css', body: 'Description' },
    ])


    return (
        <div className="App">
            <PostList posts={posts} title="Список постов 1" />

            <MainButton disabled >asdasdasd</MainButton>
            <MainInput ></MainInput>
        </div >
    );
}

export default App;
