import { useMemo } from "react"

// (список постов,  метод сортировки)
// Кастомный хук. Изменяем 
export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [sort, posts])
    return sortedPosts;
}

// (список постов,  метод сортировки, поисковая строка)
// Сортировка постов, на основе поисковой строки.
export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPosts])
    return sortedAndSearchedPosts;
}