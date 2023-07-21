import { useNavigate } from "react-router-dom";
import MainButton from "./UI/button/MainButton";

const PostItem = ({ ...props }) => {
    let navigate = useNavigate();

    return (
        <div className="post">
            <div className="post__content">
                <h4 className="post__title">{props.post.id} {props.post.title}</h4>
                <div className="post__text">
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MainButton onClick={() => navigate(`/posts/${props.post.id}`)}>
                    Open
                </MainButton>
                <MainButton onClick={() => props.remove(props.post)}>
                    Delite
                </MainButton>

            </div>
        </div>
    )
}
export default PostItem;
