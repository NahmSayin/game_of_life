import React from 'react'
import Styles from './GameOfLife.module.css';
import { Grid } from '../Grid'

export const GameOfLife = () => {
  return (
    <div className={Styles.body}>
      <div className={Styles.example}>GameOfLife</div>
      <Grid />
    </div>
  )
}
