import { data } from "./data/data"
import Option from "./Option"

function Select({ handleChange }) {

    const selectElement = Object.entries(data).map(([key, value]) => (
        <div key={key} className="form__inner-wrapper">
            <label htmlFor={key}>Select a {key}</label>
            <select
                id={key}
                name={key}
                onChange={handleChange}
            >
                <Option valueArray={value} />
            </select>

        </div>

    ))
    return <>{selectElement}</>
}

export default Select