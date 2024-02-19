import { useMemo } from 'react'

export const usePagination = totalPage => {
	const result = useMemo(() => {
		const paginationArray = []
		for (let i = 0; i < totalPage; i++) {
			paginationArray.push(i + 1)
		}
		return paginationArray
	}, [totalPage])

	return result
}
