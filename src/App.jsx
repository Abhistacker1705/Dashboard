import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import SignIn from "./pages/SignIn"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/' element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
