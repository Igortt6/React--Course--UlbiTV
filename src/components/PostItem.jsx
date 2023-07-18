import MainButton from "./UI/button/MainButton";

const PostItem = ({ ...props }) => {

    return (
        <div className="post">
            <div className="post__content">
                <h4 className="post__title">{props.post.id} {props.post.title}</h4>
                <div className="post__text">
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MainButton onClick={() => props.remove(props.post)}>
                    Delite
                </MainButton>
            </div>
        </div>
    )
}
export default PostItem;
