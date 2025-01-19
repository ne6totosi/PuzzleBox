import React, { useState } from "react"
import { HiMenu } from "react-icons/hi"
import logo from "../images/aBetterLogoBottomCut.png"

function NavBar({toggleLeftNav, toggleRightNav}) {

    return (
        <header className="navBarHeader">
            <HiMenu className="burgerMenuLeft" onClick={toggleLeftNav} />

            <a href="/"><img className="PuzzleBoxLogo" src={logo} alt="PuzzleBoxLogo" /></a>

            <HiMenu className="burgerMenuRight" onClick={toggleRightNav}/>

        </header>
    )
}

export default NavBar