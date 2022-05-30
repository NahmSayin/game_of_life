import React, { useState } from 'react'
import Styles from './Grid.module.css';
import { Cell } from './Cell';


export const Grid = () => {

    const [items, setItems] = useState(Array<boolean>(625).fill(false))
    
    function changeState(index: number, newValue: boolean) {  
        const newArray = [...items]
        newArray[index] = newValue
        setItems(newArray)
    }

    return (
        <div className={Styles.wrapper}>
            {items.map((item, index) => (
                <Cell isActive={item} callBack={changeState} index={index} key={index} />
            ))}
        </div>
    )
}
