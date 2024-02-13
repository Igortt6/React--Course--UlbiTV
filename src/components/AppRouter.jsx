import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthorContext } from '../context'
import { privateRoutes, publicRoutes } from '../routes/routes' // Замените на правильное имя импорта
import Loader from './UI/Loader/Loader'

const AppRouter = () => {
	const { isAuthor, isLoading } = useContext(AuthorContext)
	console.log(isAuthor)

	if (isLoading) {
		return <Loader />
	}

	return isAuthor ? (
		<Routes>
			{privateRoutes.map(route => (
				<Route
					key={route.path}
					path={route.path}
					element={<route.component />}
				/>
			))}
			<Route path='*' element={<Navigate to='/posts' />} />
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map(route => (
				<Route
					key={route.path}
					path={route.path}
					element={<route.component />}
				/>
			))}
			<Route path='*' element={<Navigate to='/login' />} />
		</Routes>
	)
}

export default AppRouter
