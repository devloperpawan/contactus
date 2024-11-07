import React from 'react'
import styles from './Button.module.css'
// import { MdMessage } from "react-icons/md";
const Button = (props) => {
  const {isOutline,text,icon,...rest} = props
  return (
    <button {...rest} className={isOutline==true? styles.Outline_Via  : styles.button_form}>
    {icon} {text}
    </button>
  )
}

export default Button
