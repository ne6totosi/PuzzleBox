function GridSetter(grid, difficulty) {

    let toBeRemoved = 0;
    

    switch (difficulty) {
        case "easy": toBeRemoved = 44;
            break;
        case "medium": toBeRemoved = 54;
            break;
        case "hard": toBeRemoved = 64;
            break;
        default: toBeRemoved = 0;
            break;
    }

    let removedCount = 0;

    while (toBeRemoved > removedCount) {

        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);

        if (grid[row][col] !== 0) {
            
            grid[row][col] = -1; // < !! Vulnerable

            removedCount++;
        }

    }
    return grid
}

export default function GridBroker(grid, difficulty) {
    if(grid){
        

    }   
    const finalGrid = GridSetter(grid, difficulty)
    return finalGrid
}