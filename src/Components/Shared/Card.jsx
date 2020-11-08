import { Paper } from '@material-ui/core'
import React from 'react'
import './card.style.css'

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