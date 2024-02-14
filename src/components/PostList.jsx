import PostItem from './PostItem'
import classes from './PostList.module.scss'

const PostList = ({ posts, title }) => {
	return (
		<div>
			<h2 className={classes.title}>{title}</h2>
			{posts.map((post, index) => (
				<PostItem index={index + 1} post={post} key={post.id} />
			))}
		</div>
	)
}
export default PostList
