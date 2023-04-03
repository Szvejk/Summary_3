import React from 'react'
import styles from "./First.module.css"

interface FirstProps {
    text:string;
    age?: number;
}

export const First = ({text,age=0}:FirstProps) => {
  return (
    <div className={styles.box}>
        <p>{text}</p>
        <span>{age===undefined ? "Nie podano wieku" : age}</span>
    </div>
  )
}
