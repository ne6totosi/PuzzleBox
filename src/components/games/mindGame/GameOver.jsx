import RegularButton from './RegularButton'
import { useRef, useEffect } from 'react'


function GameOver({ handleGameReset }) {



    return (
        <div className="wrapper wrapper--accent" >
            <p className="p--large"  tabIndex={-1}>
                You've matched all the memory cards!
            </p>
            <RegularButton handleClick={handleGameReset}>
                Play Again
            </RegularButton>

        </div>
    )
}


export default GameOver