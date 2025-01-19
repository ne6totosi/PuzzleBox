import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import SudokuSideBar from './GameSpecificSidebars/SudokuSideBar';

function SideBarRight({ showRightNav }) {
    let location = useLocation()

    const renderRightSidebarContent = () => {
        if (location.pathname === '/sudoku') {
            return <SudokuSideBar />
        } else {
            console.log("Wrong Path")
            return null; // Default or fallback content
        }
    };

    return (
        <div className="testingPurposes">
            {showRightNav && renderRightSidebarContent()}
        </div>
    )


}

export default SideBarRight