import { Paper } from '@material-ui/core'
import React from 'react'
import './card.style.css'

/**
 * Used to show a card with a shadow and desired size.
 * It tooks a children as a react mounted component and place inside the styled div.
 @returns {*}
 @typedef Children(object) This the react mounted component reference
 @typedef StyleProps(object) Used to put a extra specified style on the card main div
 @typedef ClassName(object) This is the css classname to style the card main div
 @param {{
    children Children
    style StyleProps,
    className ClassName
 }} props
*/

const Card = ({
    style,
    className,
    children
}) => {

    return (
        <Paper className={className} style={style}>
            {children}
        </Paper>
    )
}

export default Card