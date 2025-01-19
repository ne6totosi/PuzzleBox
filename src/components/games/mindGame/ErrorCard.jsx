import { useEffect, useRef } from 'react'
import RegularButton from './RegularButton'


function ErrorCard({ handleError }) {


    return (
        <div className='wrapper wrapper--accent' tabIndex={-1}>
            <p className='p--large'>Sorry, there was an error.</p>
            <p className='p--regular'>Please come back later or click the button below to try restarting the game.</p>
            <RegularButton handleClick={handleError}>
                Restart Game
            </RegularButton>
        </div>
    )
}

export default ErrorCard