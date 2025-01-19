
function ThreeByThreeBuilder() {

    let sudokuGrid = new Array(); // sudokuGrid contains 9 arrays for each row in the puzzle. Returned by the main function and used by App for webpage rendering.
    let boxGrid = new Array(
        [[], [], []],
        [[], [], []],
        [[], [], []]); // boxGrid contains 3 matrices representing each row, containing 3 arrays, representing each column 

    let numberList = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9)
    let availableNumbers = [];
    let randomNumber = 0;

    for (let i = 0; i < 3; i++) { // horizontal box grid - contains boxGrid 0-2 / 3-5 / 6-8 || For cycle accessing horizontal grid

        for (let j = 0; j < 3; j++) {// vertical row grid || For cycle accessing vertical grid through the corresponding horizontal index

            let currentArray = [];
            let attempts = 0;
            while (currentArray.length < 9) {
                availableNumbers = JSON.parse(JSON.stringify(numberList));
                let tempArrayChecker = [];

                let currentBox = currentArray.length < 3 ? 0 : currentArray.length < 6 ? 1 : 2;

                boxGrid[i][currentBox].map((currentBoxContent, index) => { currentBoxContent.map(number => tempArrayChecker.push(number)) })

                sudokuGrid.map((e, index) => tempArrayChecker.push(e[currentArray.length]));

                tempArrayChecker = tempArrayChecker.filter((item, index) => tempArrayChecker.indexOf(item) === index)
                availableNumbers = availableNumbers.filter((item, index) => availableNumbers.indexOf(item) === index)

                for (const tempNumber of tempArrayChecker) {

                    if (availableNumbers.includes(tempNumber)) {

                        availableNumbers.splice(availableNumbers.indexOf(tempNumber), 1)
                    }
                }

                currentArray.map((e) => {
                    if (availableNumbers.includes(e)) {
                        availableNumbers.splice(availableNumbers.indexOf(e), 1)
                    }
                })

                if (availableNumbers.length !== 0) {
                    randomNumber = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
                    currentArray.push(randomNumber);
                } else {
                    currentArray = [];
                }
                attempts++
            }

            let first = currentArray.slice(0, 3);
            let second = currentArray.slice(3, 6);
            let third = currentArray.slice(6, 9);
            let smallRowPush = new Array(first, second, third);
            smallRowPush.map((e, index) => boxGrid[i][index].push(e));
            sudokuGrid.push(currentArray)
            console.log(attempts)
        }
    }
    
    return sudokuGrid
}

export default ThreeByThreeBuilder