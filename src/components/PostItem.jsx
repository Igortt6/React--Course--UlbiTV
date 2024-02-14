import classes from './PostItem.module.scss'
import MainButton from './UI/button/MainButton'

const PostItem = props => {
	return (
		<div className={classes.post}>
			<div className={classes.content}>
				<h4 className={classes.title}>
					{props.index}. {props.post.title}
				</h4>
				<p className={classes.text}>{props.post.body}</p>
			</div>
			<div className={classes.btns}>
				<MainButton>Add</MainButton>
				<MainButton onClick={() => props.remove(props.post)}>Delete</MainButton>
			</div>
		</div>
	)
}
export default PostItem
