import React, { useState, createContext } from 'react'
import GridBroker from "../../../puzzles/PuzzleBrokers/gridBroker.js"
import getSudokuGridAsJson from "../../../puzzles/SudokuBuilders/alternativeBuilder.js"
import Builder3x3 from "./Builder3x3.jsx"


const GameContext = createContext(null)
//extract difficulties from sidebar => import broker + set proper arguments -> send arguments as props    

function SudokuPlayground() {

    const emptyStartingGrid = new Array(9).fill("?")

    let pendingState = []
    const pendingStage = () => {
        for (let s = 0; s < 9; s++) {
            pendingState.push(emptyStartingGrid)

        }
        return pendingState
    }

    const [buildingState, setBuildingState] = useState(pendingStage)


    function generateTest() {
        const currentGrid = JSON.parse(getSudokuGridAsJson())

        // TODO: fix deep copy ref !!!! <<<<<<<<<<<<<<<<<<<< IMPORTANT >>>>>>>>>>>>>>>>>>>>>

        const exampleSudoku = GridBroker(currentGrid, "easy")

        setBuildingState(exampleSudoku)

    }


    function keyStrokeHandler(value, rIndex, cIndex) {

        const keyStrokeData = value
        console.log(buildingState)
        const updatedData = buildingState.map((row, rowIndex) => {
            row.map((cell, cellIndex) => {
                // to be reviewed

            })
        })


        setBuildingState()

    }

    const playingFieldDeepCopy = JSON.parse(JSON.stringify(buildingState))

    function resetTest() {

        window.alert("Reset is clicked")
    }

    function hintTest() {

        window.alert("Hint is clicked")
    }

    return (
        <div className="playGround">
            <div className="sudokuPlayGround">
                <div>
                    <div className="App">
                        <div className="appHeader">
                            <table className="sudokuGrid">
                                <tbody>
                                    <Builder3x3 builderProp={playingFieldDeepCopy} handleClick={() => keyStrokeHandler} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* <SudokuApp /> */}
                </div>
                <div className="playGroundRadio">
                    <button onClick={generateTest}>Generate</button>
                    <button onClick={resetTest} id="sudoku-reset-button">TestReset</button>
                    <button onClick={hintTest}>TestHint</button>
                </div>
            </div>
            <div>


            </div>

        </div>
    )
}

export default SudokuPlayground