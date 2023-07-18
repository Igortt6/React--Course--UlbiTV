import { TransitionGroup, CSSTransition } from "react-transition-group";
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

            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post">
                        <PostItem remove={remove} number={index + 1} post={post} />

                    </CSSTransition>
                )}
            </TransitionGroup>
        </>
    )
}
export default PostList;