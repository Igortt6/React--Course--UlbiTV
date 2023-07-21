import React, { useEffect, useRef, useState } from "react";
import '../scss/style.scss'
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MainButton from "../components/UI/button/MainButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import useFetching from "../hooks/useFetching";
import { getPagesCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const lastElement = useRef();
    const observer = useRef();

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCounts = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCounts, limit));
    });

    useEffect(() => {
        if (isPostsLoading) return;
        if (observer.current) observer.current.disconnect();
        var callback = function (entries, observer) {
            if (entries[0].isIntersecting && page < totalPages) {
                console.log(page);
                setPage(page + 1)
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)


    }, [isPostsLoading]);

    useEffect(() => {
        fetchPosts()
    }, [page])


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
            <MainButton onClick={() => setModal(true)}>
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

            {postError &&
                <h1>Помилка ${postError}</h1>
            }
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1" />
            <div ref={lastElement} style={{ height: '20px', background: 'red' }} />
            {isPostsLoading &&
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }} >
                    <Loader />
                </div>
            }
            <Pagination
                totalPages={totalPages}
                page={page}
                changePage={setPage}
            />


        </div >
    );
}

export default Posts;
