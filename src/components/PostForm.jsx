import { useState } from 'react'
import MainButton from './UI/button/MainButton'
import MainInput from './UI/input/MainInput'

const PostForm = ({ create }) => {
	const [post, setPost] = useState({ title: '', body: '' })

	const addNewPost = e => {
		e.preventDefault()
		//TODO: Створюємо новий пост
		const newPost = {
			...post,
			id: Date.now(),
		}
		create(newPost)
		// чистимо форму
		setPost({ title: '', body: '' })
	}

	return (
		<form>
			<MainInput
				placeholder='Title'
				value={post.title}
				onChange={e => setPost({ ...post, title: e.target.value })}
			/>
			<MainInput
				placeholder='Description'
				value={post.body}
				onChange={e => setPost({ ...post, body: e.target.value })}
			/>
			<MainButton onClick={addNewPost}>Create Post</MainButton>
		</form>
	)
}
export default PostForm
