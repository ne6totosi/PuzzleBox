import React, { useState } from 'react'

function SideBarLeft({ showLeftNav }) {



    return (
        <div className={showLeftNav ? "sideBarContainerLeft" : "sideBarContainerLeft inactive"}>
            <ul className="sideBarList">
                <li>
                    <a href="/sudoku">Sudoku</a>
                </li>
                <li>
                    <a href="/mindGame">Mind Game</a>
                </li>
                <li>
                    <a href="/">TowerDef</a>
                </li>
                
            </ul>
        </div>
    )
}

export default SideBarLeft