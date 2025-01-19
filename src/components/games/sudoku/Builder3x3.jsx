import React from "react"

function Builder3x3({ builderProp, handleClick }) {


    return <>

        {
            builderProp.map((row, rIndex) => {
                return <tr key={rIndex} className={(rIndex + 1) % 3 === 0 ? "bBorder" : ""}>
                    {builderProp.map((col, cIndex) => {
                        return <td key={`${rIndex}-${cIndex}`} className={(cIndex + 1) % 3 === 0 ? "cBorder" : ""}>
                            <input
                                onChange={(e) => handleClick(e.target.value, rIndex, cIndex)}
                                value={builderProp[rIndex][cIndex] === -1 ? "" : builderProp[rIndex][cIndex]}
                                className="cellInput"
                                disabled={builderProp[rIndex][cIndex] === -1 ? "" : builderProp[rIndex][cIndex]} /> {/* disabled example - entry only / disabled rendered - each move (barbaric vs others) */}
                        </td>

                    })}

                </tr>
            })}
    </>

}

export default Builder3x3