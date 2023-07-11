import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
    if (!posts.length) {
        return (
            <h2 style={{ textAlign: 'center', fontSize: '32px', marginTop: '20px' }}>
                Постов нет.
            </h2>
        )

    }
    return (
        <>
            <h2 style={{ textAlign: 'center', fontSize: '32px', marginTop: '20px' }}>
                {title}
            </h2>
            {posts.map((post, index) =>
                <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
            )}

        </>
    )
}
export default PostList;