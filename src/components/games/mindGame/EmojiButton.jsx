import React, { useState } from 'react'
import { decodeEntity } from 'html-entities'

function EmojiButton({ emoji, index, handleClick, isCardSelected, isCardMatched, cardStyle }) {

    const btnContent = isCardSelected || isCardMatched ? decodeEntity(emoji.htmlCode[0]) : "?"

    const btnAria =
        isCardMatched ? `${decodeEntity(emoji.name)} Matched.` :
            isCardSelected ? `${decodeEntity(emoji.name)} Not matched yet.` :
                "Card upside down"

    const btnStyle =
        isCardMatched ? "btn--emoji__back--matched" :
            isCardSelected ? "btn--emoji__back--selected" :
                "btn--emoji__front"
                
    return (

        <button
            className={`btn btn--emoji ${btnStyle}`}
            onClick={isCardSelected ? null : handleClick}
            disabled={isCardMatched ? true : false}
            aria-label={`Position ${index + 1}: ${btnAria}.`}
            aria-live='polite'
        >
            {btnContent}
        </button>

    )
}

export default EmojiButton
