import { useEffect, useState } from 'react'
import PostService from '../API/PostService'
import PostFilter from '../components/PostFilter'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import Loader from '../components/UI/Loader/Loader'
import MainButton from '../components/UI/button/MainButton'
import Popup from '../components/UI/modal/Popup'
import Pagination from '../components/UI/pagination/Pagination'
import { useFetching } from '../hooks/useFetching'
import { usePosts } from '../hooks/usePosts'
import { getPagesCount } from '../utils/pages'

const Posts = () => {
	const [posts, setPosts] = useState([])
	const [popup, setPopup] = useState(false)
	const [filter, setFilter] = useState({ sort: '', query: '' })

	const [totalPage, setTotalPage] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

	const [fetchPosts, isPostsLoading, postError] = useFetching(
		async (limit, page) => {
			const response = await PostService.getAll(limit, page)
			setPosts(response.data)
			const totalCount = response.headers['x-total-count']
			setTotalPage(getPagesCount(totalCount, limit))
		}
	)

	useEffect(() => {
		fetchPosts(limit, page)
	}, [])

	// Кол бек функція, для доступу до state з нижчого елементу.
	const createPost = newPost => {
		setPosts([...posts, newPost])
		setPopup(false)
	}

	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const changePage = page => {
		setPage(page)
		fetchPosts(limit, page)
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
			<Pagination page={page} totalPage={totalPage} changePage={changePage} />
		</div>
	)
}
export default Posts
