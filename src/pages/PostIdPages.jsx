import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetching from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    //видає ключ-значення (id: 1)
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])

    //Обробляє запит на сервер, КОЛБЕК, з спінером і помилкою
    const [fetchPostBiId, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data);
    });

    const [fetchComments, isCommentsLoading, CommentsError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data);
    })


    useEffect(() => {
        fetchPostBiId();
        fetchComments();
    }, [])

    return (
        <div>
            <h1>Сторінка з постом id = {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post.id} {post.title}</div>
            }
            <h2>Коментарі</h2>
            {isCommentsLoading
                ? <Loader />
                : <div>
                    {comments.map(c =>
                        <div key={c.id} style={{ marginTop: '20px' }} >
                            <h5>{c.email}</h5>
                            <div>{c.body}</div>
                        </div>
                    )}
                </div>
            }

        </div>
    )
}
export default PostIdPage;