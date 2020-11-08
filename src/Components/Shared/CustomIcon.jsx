import React from 'react'
import { AddBox, Assignment, Close, EventNote, Home, Menu, PowerSettingsNew } from '@material-ui/icons'
import { ICON_NAME } from '../../AppConfig/constants'

/**
 * Used to show the icon from different vendor.
 @returns {*}
 @typedef Name(string) unique name of the icon 
 @typedef Style(object) to apply inline styles to the icon
 @param {{
    name Name,
    style Style
 }} props
*/

const CustomIcon = ({
    name,
    style
}) => {

    switch(name){
        case ICON_NAME.project: {
            return <EventNote style={style} />
        }
        case ICON_NAME.close: {
            return <Close style={style} />
        }
        case ICON_NAME.menu: {
            return <Menu style={style} />
        }
        case ICON_NAME.task: {
            return <Assignment style={style} />
        }
        case ICON_NAME.home: {
            return <Home style={style} />
        }
        case ICON_NAME.logout: {
            return <PowerSettingsNew style={style} />
        }
        case ICON_NAME.create: {
            return <AddBox style={style} />
        }
        default: 
        return null
    }
}

export default CustomIcon