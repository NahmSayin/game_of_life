import React from 'react'
import Styles from './Grid.module.css';

interface CellProps {
  isActive: boolean
  callBack: CallBackFunction
  index: number
}

export interface CallBackFunction {
    (index: number,
    newValue: boolean): void
}

export const Cell = ({isActive, callBack, index}: CellProps) => {

  function toggleState() {
    const newValue = !isActive
    callBack(index,newValue)
  }

  return (
    <div className={isActive ? Styles.activeBox : Styles.box} onClick={toggleState} />
  )
}
