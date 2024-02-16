import { useMemo, useState } from 'react'
import PostFilter from './components/PostFilter.jsx'
import PostForm from './components/PostForm.jsx'
import PostList from './components/PostList.jsx'
import './scss/App.scss'
import './scss/null.scss'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'aaa', body: 'vaaa' },
		{ id: 3, title: 'bbbb', body: 'adasd' },
		{ id: 15, title: 'cccc', body: 'sdfsdfsd' },
	])

	//========================================================================================================================================================
	// NOTE: Блок для пошуку. Компонент PostFilter.
	const [filter, setFilter] = useState({ sort: '', query: '' })

	const sortedPosts = useMemo(() => {
		if (filter.sort) {
			return [...posts].sort((a, b) =>
				a[filter.sort].localeCompare(b[filter.sort])
			)
		}
		return posts
	}, [filter.sort, posts])

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post =>
			post.title.toLowerCase().includes(filter.query.toLowerCase())
		)
	}, [filter.query, sortedPosts])
	//========================================================================================================================================================

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
			<PostFilter filter={filter} setFilter={setFilter} />
			<PostList
				remove={removePost}
				posts={sortedAndSearchedPosts}
				title='Posts list'
			/>
		</div>
	)
}

export default App
