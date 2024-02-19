import { useEffect, useState } from 'react'
import PostService from './API/PostService.jsx'
import PostFilter from './components/PostFilter.jsx'
import PostForm from './components/PostForm.jsx'
import PostList from './components/PostList.jsx'
import Loader from './components/UI/Loader/Loader.jsx'
import MainButton from './components/UI/button/MainButton.jsx'
import Popup from './components/UI/modal/Popup.jsx'
import { useFetching } from './hooks/useFetching.js'
import { usePosts } from './hooks/usePosts.js'
import './scss/App.scss'
import './scss/null.scss'

function App() {
	const [posts, setPosts] = useState([])
	const [popup, setPopup] = useState(false)
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const posts = await PostService.getAll()
		setPosts(posts)
	})

	useEffect(() => {
		fetchPosts()
	}, [])

	// Кол бек функція, для доступу до state з нижчого елементу.
	const createPost = newPost => {
		setPosts([...posts, newPost])
		setPopup(false)
	}

	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className='App'>
			<MainButton onClick={() => setPopup(true)}>Create post</MainButton>
			<Popup visible={popup} setVisible={setPopup}>
				<PostForm create={createPost} />
			</Popup>
			<PostFilter filter={filter} setFilter={setFilter} />
			{postError && <h2>Error ${postError}</h2>}
			{isPostsLoading ? (
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<Loader />
				</div>
			) : (
				<PostList
					remove={removePost}
					posts={sortedAndSearchedPosts}
					title='Posts list'
				/>
			)}
		</div>
	)
}

export default App
