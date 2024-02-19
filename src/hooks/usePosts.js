import { useMemo } from 'react'

//Метод сортування
//Приймає масив з постами і метод сортування
export const useSortedPosts = (posts, sort) => {
	const sortedPosts = useMemo(() => {
		if (sort) {
			return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
		}
		return posts
	}, [sort, posts])
	return sortedPosts
}

//Метод сортування і фільтрування
//Приймає масив з постами і метод сортування і пошукову строку
export const usePosts = (posts, sort, query) => {
	const sortedPosts = useSortedPosts(posts, sort)

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post =>
			post.title.toLowerCase().includes(query.toLowerCase())
		)
	}, [query, sortedPosts])
	return sortedAndSearchedPosts
}
