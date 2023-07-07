const PostItem = ({ ...props }) => {

    return (
        <div className="post">
            <div className="post__content">
                <h4 className="post__title">{props.post.title}</h4>
                <div className="post__text">
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <button className="button">Delite</button>
            </div>
        </div>
    )
}
export default PostItem;
