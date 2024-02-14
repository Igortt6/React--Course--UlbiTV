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

	const createPost = newPost => {
		setPosts([...posts, newPost])
	}

	return (
		<div className='App'>
			<PostForm create={createPost} />
			<PostList posts={posts} title='First list' />
		</div>
	)
}

export default App
