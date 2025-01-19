import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import SideBarLeft from './sidebars/SideBarLeft.jsx';
import SideBarRight from './sidebars/SideBarRight.jsx';

function Layout({ children }) {
    const location = useLocation();

    const [isLeftToggled, setIsLeftToggled] = useState(false);
    const [isRightToggled, setIsRightToggled] = useState(false);

    const handleLeftToggle = () => setIsLeftToggled(prevState => !prevState);
    const handleRightToggle = () => setIsRightToggled(prevState => !prevState);

    // Dynamically render different content in the right sidebar based on the current game route


    return (
        <div className="mainPanel">
            <NavBar toggleLeftNav={handleLeftToggle} toggleRightNav={handleRightToggle} />
            <SideBarLeft showLeftNav={isLeftToggled} />
            <SideBarRight showRightNav={isRightToggled} />
            <div className="letsPlay">
                {children} {/* Render the selected game page */}
            </div>
        </div>
    );
}

export default Layout;