import PostItem from "./PostItem";

const PostList = ({ posts, title }) => {

    return (
        <>
            <h2 style={{ textAlign: 'center', fontSize: '32px', marginTop: '20px' }}>
                {title}
            </h2>
            {posts.map(post => <PostItem post={post} key={posts.id} />)}

        </>
    )
}
export default PostList;