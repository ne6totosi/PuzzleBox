
import SudokuPlayground from "./games/sudoku/SudokuPlayground.jsx"
import MindGame from "./games/mindGame/MindGame.jsx"
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import HomePage from './HomePage.jsx'
import { Navigate } from "react-router-dom";

function App() {

	const [isLeftToggled, setIsLeftToggled] = useState(false)
	const [isRightToggled, setIsRightToggled] = useState(false)

	const handleLeftToggle = () => {
		
		setIsLeftToggled(prevState => !prevState)
	}
	const handleRightToggle = () => {

		setIsRightToggled(prevState => !prevState)
	}

	return (<>
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<HomePage />} />
						<Route path="/sudoku" element={<SudokuPlayground />} />
						<Route path="/mindGame" element={<MindGame />} />
					{/* Add more game routes here */}
					<Route
						path="*" element={<Navigate to={"/"} replace={true} />}
					/>
				</Routes>
			</Layout>
		</Router>
	</>)

}

export default App
