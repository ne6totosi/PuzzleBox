// Function to generate a Sudoku grid
function generateSudoku() {
    const grid = Array(9)
        .fill()
        .map(() => Array(9).fill(0));

    // Start generating the grid using backtracking
    if (fillGrid(grid)) {
        return grid;
    } else {
        console.error("Failed to generate a valid Sudoku grid");
        return null;
    }
}

// Function to check if a number can be placed in a cell
function isValidPlacement(grid, row, col, num) {
    // Check the row
    for (let x = 0; x < 9; x++) {
        if (grid[row][x] === num) return false;
    }

    // Check the column
    for (let y = 0; y < 9; y++) {
        if (grid[y][col] === num) return false;
    }

    // Check the 3x3 subgrid
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[startRow + i][startCol + j] === num) return false;
        }
    }

    return true;
}

// Function to find an empty cell in the grid (value 0)
function findEmptyCell(grid) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col] === 0) return [row, col];
        }
    }
    return null; // No empty cells left
}

// Function to fill the grid using backtracking
function fillGrid(grid) {
    const emptyCell = findEmptyCell(grid);
    if (!emptyCell) return true; // No empty cells, grid is complete

    const [row, col] = emptyCell;

    // Try numbers 1 through 9 in the empty cell
    const numbers = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];

        // Check if placing num is valid
        if (isValidPlacement(grid, row, col, num)) {
            grid[row][col] = num;

            // Recursively attempt to fill the rest of the grid
            if (fillGrid(grid)) {
                return true;
            }

            // If we reach here, it means placing num caused a dead end, so backtrack
            grid[row][col] = 0;
        }
    }

    return false; // Trigger backtrack
}

// Utility function to shuffle an array (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Example usage:
const sudokuGrid = generateSudoku();


export default function getSudokuGridAsJson() {
    const grid = generateSudoku();
    return JSON.stringify(grid);
}