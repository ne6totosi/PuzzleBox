import React, { useState, useEffect } from 'react'
import classes from './styles/MindGame.module.css'
import Form from './Form'
import MemoryCard from './MemoryCard'
import AssistiveTechInfo from './AssistiveTechInfo'
import GameOver from './GameOver'
import ErrorCard from './ErrorCard'

function MindGame() {

    const [isFirstRender, setIsFirstRender] = useState(true)
    const [initialFormData, setInitialFormData] = useState({ category: "animals-and-nature", number: 10 })
    const [formData, setFormData] = useState(initialFormData)
    const [isGameOn, setIsGameOn] = useState(false)
    const [emojisData, setEmojisData] = useState([])
    const [selectedCards, setSelectedCards] = useState([])
    const [matchedCards, setMatchedCards] = useState([])
    const [areAllCardsMatched, setAreAllCardsMatched] = useState(false)
    const [isError, setIsError] = useState(false)


    useEffect(() => {
        if (emojisData.length && matchedCards.length === emojisData.length) {
            setAreAllCardsMatched(true)
            console.log("Congratz")
        }
    }, [matchedCards])

    useEffect(() => {
        if (selectedCards.length === 2 && selectedCards[0].emoji === selectedCards[1].emoji) {
            setMatchedCards(prevMatchedCards => [...prevMatchedCards, ...selectedCards])

        }

    }, [selectedCards])

    async function startGame(e) {
        e.preventDefault()

        try {

            const response = await fetch(`https://emojihub.yurace.pro/api/all/category/${formData.category}`)

            if (!response.ok) {
                throw new Error("Data fetch was unsuccessful")
            }

            const data = await response.json()
            const dataSample = getEmojis(data)


            setEmojisData(dataSample)
            setIsGameOn(true)

        } catch (err) {
            setIsError(true)
            console.log(err)

        } finally {
            setIsFirstRender(false)
        }

    }

    function handleFormChange(e) {

        const currentName = e.target.name
        const currentValue = e.target.value
        setFormData(prevFormData => ({ ...prevFormData, [currentName]: [currentValue] }))


        return
    }
    function getRandomIndices(dataRange) {
        let dataRangeLength = dataRange.length;
        const randomIndicesSample = [];
        for (let i = 0; i < formData.number / 2; i++) {

            const randomIndex = Math.floor(Math.random() * dataRangeLength)
            if (!randomIndicesSample.includes(randomIndex)) {
                randomIndicesSample.push(randomIndex)
            }
            else {
                i--
            }

        }
        return getShuffledEmojiPairs(randomIndicesSample)
    }

    function getEmojis(data) {

        const currentEmojiIndices = getRandomIndices(data);

        const finalEmojiList = currentEmojiIndices.map(e => {
            return data[e]
        })

        return finalEmojiList
    }

    function getShuffledEmojiPairs(data) {
        const result = data.flatMap(index => [index, index])

        for (let i = result.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }

        return result
    }

    function turnCard(emoji, index) {

        if (selectedCards.length < 2) {
            setSelectedCards(prevSelectedCards => [...prevSelectedCards, { emoji, index }])
        } else if (selectedCards.length === 2) {
            setSelectedCards([{ emoji, index }])
        }


    }

    function resetGame() {
        setIsGameOn(false)
        setSelectedCards([])
        setMatchedCards([])
        setAreAllCardsMatched(false)


    }

    function resetError() {
        setIsError(false)
    }

    return (
        <div className="mindGamePlayground">
            <div className="mindGamePlayingField">
                <h1>Memory</h1>
                {!isGameOn && !isError && <Form
                    handleSubmit={startGame}
                    handleChange={handleFormChange}
                    isFirstRender={isFirstRender}
                />}
                {isGameOn && !areAllCardsMatched && < AssistiveTechInfo emojisData={emojisData} matchedCards={matchedCards} />}
                {areAllCardsMatched && <GameOver handleGameReset={resetGame} handleMatchedCards={setAreAllCardsMatched} />}
                {isGameOn &&
                    <MemoryCard
                        handleClick={turnCard}
                        data={emojisData}
                        selected={selectedCards}
                        matched={matchedCards}
                    />
                }
                {isError &&
                    <ErrorCard handleError={resetError}

                    />
                }

            </div>
        </div>

    )
}

export default MindGame