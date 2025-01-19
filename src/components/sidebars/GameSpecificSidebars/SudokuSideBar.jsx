import React from 'react'
import { useState } from 'react'


function SudokuSideBar(showRightNav) {
    const [isDifficultyOpen, setIsDifficultyOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const toggleDifficulty = () => {
        setIsDifficultyOpen(prevState => !prevState);
    }

    const toggleSettings = () => {
        setIsSettingsOpen(prevState => !prevState);
    }

    //TODO: set dificulties as values and set export (maybe props). Implement prop logic to link SideBar with playground

    return (
        <div className={showRightNav ? "sideBarContainerRight" : "sideBarContainerRight inactive"}>
            <div className="sideBarList" >

                <h3 onClick={toggleDifficulty}>Difficulty</h3>
                {isDifficultyOpen && (
                    <ul className="sudokuSideBarDifficulty">
                        <li value="easy" id="difficultySetting-Easy">Easy</li>
                        <input type="checkbox"/>
                        <li value="medium" id="difficultySetting-Medium">Medium</li>
                        <input type="checkbox" />
                        <li value="hard" id="id=difficultySetting-Hard">hardRight</li>
                        <input type="checkbox" />
                    </ul>
                )}

                <h3 onClick={toggleSettings}>Settings</h3>

                {isSettingsOpen && (
                    <ul className="sudokuSideBarSettings" >
                        <li>Easy</li>
                        <li>Medium</li>
                        <li>hardRight</li>
                    </ul>
                )}

            </div>
        </div>
    )


}
export default SudokuSideBar