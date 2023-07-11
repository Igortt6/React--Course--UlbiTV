import React, { useMemo, useRef, useState } from "react";
import './scss/style.scss'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MainButton from "./components/UI/button/MainButton";

function App() {

    const [posts, setPosts] = useState([
        { id: 1, title: 'HTML', body: 'Description' },
        { id: 2, title: 'JS', body: 'A-Description' },
        { id: 3, title: 'Css', body: 'F-Description' },
    ]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);


    // вызов сортировки, ТОЛЬКО при изминении выбора сортировки, или изминения постов
    const sortedPosts = useMemo(() => {
        console.log('getSortedPosts')
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])


    //Сортировка постов по строке поиска.
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])


    //получаем newPost из дочернего елемента
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false);
    }

    //получаем post из дочернего елемента. 2 уровень вложености
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className="App">
            <MainButton
                onClick={() => setModal(true)}
            >
                Создать пост
            </MainButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <hr style={{ margin: '15px 0', height: '2px', backgroundColor: 'black' }} />

            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1" />
        </div >
    );
}

export default App;
