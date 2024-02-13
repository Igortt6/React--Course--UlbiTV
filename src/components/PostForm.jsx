import { useRef, useState } from 'react'
import MainButton from './UI/button/MainButton'
import MainInput from './UI/input/MainInput'

const PostForm = ({ create }) => {
	const [post, setPost] = useState({ title: '', body: '' })
	const inputRef = useRef()

	const addPost = e => {
		e.preventDefault()

		const newPost = {
			...post,
			id: Date.now(),
		}
		setPost({ title: '', body: '' })

		//Передаємо новий пост, як аргумент функції create(). Ця функія лежить у App і передається сюди як props
		create(newPost)
	}

	return (
		<form>
			<MainInput
				value={post.title}
				onChange={e => setPost({ ...post, title: e.target.value })}
				type='text'
				placeholder='title'
			/>

			{/* Управляемый инпут */}
			<MainInput
				value={post.body}
				onChange={e => setPost({ ...post, body: e.target.value })}
				type='text'
				placeholder='text'
			/>
			{/* НЕ управляемый инпут инпут
            <MainInput
                ref={inputRef}
                type='text'
                placeholder='Название'
            /> */}

			<MainButton onClick={addPost}>Добавить пост</MainButton>
		</form>
	)
}
export default PostForm
