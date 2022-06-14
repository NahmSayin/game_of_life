export function gameOfLifeNextIteration(grid: boolean[]): boolean[] {
    for (let index = 0; index < grid.length; index++) {
        let indexOfCellNeighbours = getNeighbours(index)
        let noOfAliveNeighbours = noOfALiveNeighbours(grid, indexOfCellNeighbours)
        let cellState = cellInNextGen(noOfAliveNeighbours, grid[index]) 
    }

    return []
}

function getNeighbours(index: number): Array<number> {
    let neighbours = Array<number>()

    neighbours.push(index - 25)
    neighbours.push(index + 25)

    if (index % 25 != 0) {
        neighbours.push(index - 1)
        neighbours.push(index + 24)
        neighbours.push(index - 26)
    }

    if (index % 25 != 24) {
        neighbours.push(index - 24)
        neighbours.push(index + 1)
        neighbours.push(index + 26)
    }

    return neighbours
}

function noOfALiveNeighbours(grid: boolean[], neighbourIndexes: number[]): number {
    let count = 0
    for (let index = 0; index < neighbourIndexes.length; index++) {
        if (grid[neighbourIndexes[index]]){
            count += 1
        }
    }
    
    return count
}

function cellInNextGen(aliveNeighbours: number, stateOfCell: boolean): boolean {
    if (stateOfCell === true){
        if (aliveNeighbours < 2){
            return false
        } else if (aliveNeighbours === 2 || aliveNeighbours === 3){
            return true
        } else if (aliveNeighbours > 3){
            return false
        }
    }else if (aliveNeighbours === 3){
        return true
    }
    return false    
}

    // Rules:

    //Any live cell with fewer than two live neighbours dies
    //Any live cell with two or three live neighbours lives on 
    //Any live cell with more than three live neighbours dies
    //Any dead cell with exactly three live neighbours becomes a live cell

    // To do this, we need what information? -> number, boolean
    // how many of them are alive?
    // State of the cell itself? 

    // What answer are we expecitng? -> boolean
    // Is the cell alive or dead in the next iteration

    