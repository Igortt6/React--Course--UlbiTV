import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/navbar/Navbar'
import { AuthorContext } from './context'

function App() {
	// стейт для використовування useContext в інших місцях
	const [isAuthor, setIsAuthor] = useState(false)
	//стан завантаження запиту на сервер. (isAuthor - true або false)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (localStorage.getItem('author')) {
			setIsAuthor(true)
		}
		setIsLoading(false)
	}, [])

	return (
		<AuthorContext.Provider
			value={{
				isAuthor,
				setIsAuthor,
				isLoading,
			}}
		>
			<BrowserRouter>
				<Navbar />
				<div className='wraper' style={{ margin: '20px' }}>
					<AppRouter />
				</div>
			</BrowserRouter>
		</AuthorContext.Provider>
	)
}

export default App
