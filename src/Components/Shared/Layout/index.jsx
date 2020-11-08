import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from './Sidebar'
import CustomIcon from '../CustomIcon'
import { ICON_NAME } from '../../../AppConfig/constants'
import { toggleSideBar } from '../../../AppConfig/store/actions'
import './layout.style.css'

/**
 * Used to show the basic layout of the app.
 * It also includes sidebar component which controles the routing of the menus
 @returns {*}
 @typedef Heading(string) value to be shown as a header 
 @typedef Children(object) whole component to be shown inside the layout
 @param {{
    heading Heading,
    children Children
 }} props
*/

const Layout = ({
    heading,
    children
}) => {
    const showSidebarDetails = useSelector(state => state.appCommon.sideBarOpen)
    const dispatch = useDispatch()
    const history = useHistory()

    return (
        <div className="mainContainer">
            <div className="headerContainer">
                <div 
                    style={{
                        position: 'absolute',
                        left: 10,
                        top: 20,
                        zIndex: 100
                    }}
                    onClick={() => {
                        dispatch(toggleSideBar(!showSidebarDetails))
                    }}
                >
                   <CustomIcon
                        style={{
                            width: '40px',
                            height: '40px',
                            color: 'white'
                        }}
                        name={showSidebarDetails ? ICON_NAME.close : ICON_NAME.menu}
                   />
                </div>
                <span className="headerLabel">
                    Task Management System
                </span>
                <div
                    onClick={() => {
                        localStorage.clear()
                        history.push('/login')
                    }}
                >
                    <CustomIcon 
                        name={ICON_NAME.logout} 
                        style={{
                            marginRight: '15px',
                            color: 'red',
                            width: '30px',
                            height: '30px'
                        }}
                    />
                </div>
            </div>
            <div className="componentContainer">
                <Sidebar showDetails={showSidebarDetails} />
                <div className="mainBodyContainer">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout