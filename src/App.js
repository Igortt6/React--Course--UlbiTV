import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Posts from './pages/Posts'
import './scss/App.scss'
import './scss/null.scss'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/posts' element={<Posts />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
