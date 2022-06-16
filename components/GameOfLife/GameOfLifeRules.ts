export function gameOfLifeNextIteration(grid: boolean[]): boolean[] {
    let gridBoolean = Array<boolean>()

    for (let index = 0; index < grid.length; index++) {
        let indexOfCellNeighbours = getNeighbours(index)
        let noOfAliveNeighbours = noOfALiveNeighbours(grid, indexOfCellNeighbours)
        let cellState = cellInNextGen(noOfAliveNeighbours, grid[index]) 
        gridBoolean.push(cellState)
    }
    return gridBoolean

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
    return ((stateOfCell && aliveNeighbours === 2) || (aliveNeighbours === 3))
}