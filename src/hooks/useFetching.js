import { useState } from 'react'

// Хук для обробки індикатору ЗАВАНТАЖЕННЯ, обробка ПОМИЛКИ, та виклик будь якого КОЛБЕКУ
export const useFetching = callback => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	const fetching = async () => {
		try {
			setIsLoading(true)
			await callback()
		} catch (error) {
			setError(error.message)
		} finally {
			setIsLoading(false)
		}
	}
	return [fetching, isLoading, error]
}
