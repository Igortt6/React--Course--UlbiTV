import { useState } from 'react'
import PostForm from './components/PostForm.jsx'
import PostList from './components/PostList.jsx'
import MainSelect from './components/UI/select/MainSelect.jsx'
import './scss/App.scss'
import './scss/null.scss'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'aaa', body: 'vaaa' },
		{ id: 3, title: 'bbbb', body: 'adasd' },
		{ id: 15, title: 'cccc', body: 'sdfsdfsd' },
	])

	//Зберігаємо вибраний режим сортування. MainSelect
	const [selectedSort, setSelectedSort] = useState('')

	// Кол бек функція, для доступу до state з нижчого елементу.
	const createPost = newPost => {
		setPosts([...posts, newPost])
	}

	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	//Сортування. MainSelect
	const sortPosts = sort => {
		setSelectedSort(sort)
		setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
	}
	return (
		<div className='App'>
			<PostForm create={createPost} />
			<MainSelect
				value={selectedSort}
				onChange={sortPosts}
				defaultValue='sort by'
				options={[
					{ value: 'title', name: 'By name' },
					{ value: 'body', name: 'By text' },
				]}
			/>
			{posts.length ? (
				<PostList remove={removePost} posts={posts} title='First list' />
			) : (
				<h1>Create post please</h1>
			)}
		</div>
	)
}

export default App
