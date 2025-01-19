import RegularButton from './RegularButton'
import Select from "./Select"
import { useEffect, useRef } from 'react'


export default function Form({ handleSubmit, handleChange, isFirstRender }) {


    return (
        <div className="form-container">
            <form className="wrapper">
                <Select handleChange={handleChange} />
                <RegularButton handleClick={handleSubmit}>
                    Start Game
                </RegularButton>
            </form>
        </div>
    )
}