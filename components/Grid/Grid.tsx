import React, { useState } from 'react'
import Styles from './Grid.module.css';
import { Cell, CallBackFunction } from './Cell';


export const Grid = (props:GridProps) => {
    const items=props.grid

    return (
        <div className={Styles.wrapper}>
            {items.map((item, index) => (
                <Cell isActive={item} callBack={props.callBack} index={index} key={index} />
            ))}
        </div>
    )
}

interface GridProps {
    grid: Array<boolean>
    callBack: CallBackFunction
}
  
