import { useState } from 'react'
import PostForm from './components/PostForm.jsx'
import PostList from './components/PostList.jsx'
import './scss/App.scss'
import './scss/null.scss'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'Title', body: 'Description1' },
		{ id: 3, title: 'Title2', body: 'Description3' },
		{ id: 15, title: 'Title4', body: 'Description4' },
	])

	// Кол бек функція, для доступу до state з нижчого елементу.
	const createPost = newPost => {
		setPosts([...posts, newPost])
	}

	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className='App'>
			<PostForm create={createPost} />
			{posts.length ? (
				<PostList remove={removePost} posts={posts} title='First list' />
			) : (
				<h1>Create post please</h1>
			)}
		</div>
	)
}

export default App
