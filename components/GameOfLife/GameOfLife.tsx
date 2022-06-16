import React, { useState } from 'react';
import Styles from './GameOfLife.module.css';
import { Grid } from '../Grid'
import { gameOfLifeNextIteration } from './GameOfLifeRules';


export const GameOfLife = () => {
  const [items, setItems] = useState(Array<boolean>(625).fill(false))

  function changeState(index: number, newValue: boolean) {  
    const newArray = [...items]
    newArray[index] = newValue
    setItems(newArray)
  } 

  function skipGeneration(){
    var randomGrid = gameOfLifeNextIteration(items)
    setItems(randomGrid)
  }

  function clearGrid(){
    setItems(Array<boolean>(625).fill(false))
  }
 
  return (
    <div className={Styles.body}>
      <div className={Styles.example}>GameOfLife</div>
      <Grid grid={items} callBack={changeState}/>
      <button onClick={skipGeneration}> Click </button>
      <button onClick={clearGrid}> Reset </button>
    </div>
  )
}




