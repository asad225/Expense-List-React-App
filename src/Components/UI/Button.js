import React from 'react'
import classes from './Button.module.css'

export default function Button(props) {
    return (
        <button className={classes.button} type={props.type || "submit"} onClick={props.onClick} >{props.children}</button>
    )
}
