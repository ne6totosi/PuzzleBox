import React, { useState } from 'react'
import { decodeEntity } from 'html-entities'
import EmojiButton from './EmojiButton.jsx'

export default function MemoryCard({ handleClick, data, matched, selected }) {

    const cardEl = data.map((emoji, index) => {

        const isCardSelected = selected.find(current => current.index === index)

        const isCardMatched = matched.find(current => current.index === index)


        const cardStyle =
            isCardSelected ? "card-item--selected" :
                isCardMatched ? "card-item--matched" :
                    ""

        return (
            <li key={index} className={`card-item ${cardStyle}`}>
                <EmojiButton
                    emoji={emoji}
                    index={index}
                    handleClick={() => handleClick(emoji.name, index)}
                    isCardSelected={isCardSelected}
                    isCardMatched={isCardMatched}
                />
            </li>
        )
    })

    return <ul className="card-container">{cardEl}</ul>
}