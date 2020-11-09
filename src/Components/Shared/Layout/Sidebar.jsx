import { Tooltip } from '@material-ui/core'
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { mainMenuItems, ROLES_CONSTANTS } from '../../../AppConfig/constants'
import CustomIcon from '../CustomIcon'

/**
 * Used to show the sidebar menu and controls the navigation to the pages.
 * It uses a constant files to map all the menuItems.
 @returns {*} 
 @typedef ShowDetails(boolean) used to show the details menu with heading
 @param {{
    showDetails ShowDetails
 }} props
*/

const Sidebar = ({
    showDetails
}) => {
    const history = useHistory()
    const location = useLocation()
    const user = JSON.parse(localStorage.getItem('user_details'))
    let filteredMainMenuItems = [...mainMenuItems]

    if(!user || user.role !== ROLES_CONSTANTS.admin){
        filteredMainMenuItems = filteredMainMenuItems.filter(menu => 
            menu.name !== 'Project'
        )
    }

    if(window.outerWidth < 600 && !showDetails){
        return null
    }

    return (
        <div className="sidebarContainer" style={{ paddingRight: showDetails ? '30px' : '0px' }}>
            {filteredMainMenuItems && filteredMainMenuItems.length &&
                filteredMainMenuItems.map(menu => {
                    const active = location.pathname === menu.linkTo

                    return (
                        <Tooltip title={menu.name}>
                        <div 
                            className={
                                "menuIconContainer" 
                            }
                            onClick={() => {
                                history.push(menu.linkTo)
                            }}
                        >
                            <div>
                            <CustomIcon
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    color: active ? '#194e84' : 'white'
                                }}
                                name={menu.icon}
                            />
                            </div>
                            <div>
                            {showDetails &&
                                <span className="menuLabel" style={{ color: active ? '#194e84' : 'white' }}>
                                    {menu.name}
                                </span>
                            }
                            </div>
                        </div>
                        </Tooltip>
                    )
                })
            }
        </div>
    )
}

export default Sidebar