import React from 'react'
import { useState } from 'react'
import { ICON_NAME, ROLES_CONSTANTS } from '../../AppConfig/constants'
import Card from '../Shared/Card'
import ConfirmationDialog from '../Shared/ConfirmationModal'
import CustomIcon from '../Shared/CustomIcon'
import CustomTable from '../Shared/CustomTable'
import InputButton from '../Shared/InputButton'
import Layout from '../Shared/Layout'
import commonStyles from '../Shared/styles/common'

/**
 * Used to show the basic Project of the app.
 @returns {*}
 @param {{
 }} props
*/

const Project = () => {
    const [showConfirmDialog, setShowConfirmDialog] = useState(null)
    const commonClasses = commonStyles()
    const user = JSON.parse(localStorage.getItem('user_details'))

    if(!user || user.role !== ROLES_CONSTANTS.admin){
        return (
            <Layout>
                <span>
                    You are not allowed to access this page.
                </span>
            </Layout>
        )
    }


    return (
        <Layout>
            {(showConfirmDialog && showConfirmDialog.message) &&
                < ConfirmationDialog
                    open={Boolean(showConfirmDialog)}
                    heading={showConfirmDialog.heading}
                    message={showConfirmDialog.message}
                    okText={showConfirmDialog.okText}
                    cancelText={showConfirmDialog.cancelText}
                    onCancelClick={showConfirmDialog.onCancelClick}
                    onContinueClick={showConfirmDialog.onContinueClick}
                />
            } 
            <Card 
                className='headerCardClass'
            >
                <div>
                    <span className="cardSubLabel">
                        Projects
                    </span>
                </div>
                <div className="createCardButton">
                    <CustomIcon
                        name={ICON_NAME.create}
                    />
                </div>
            </Card>
            <CustomTable
                data={[
                    {
                        name: 'Djay',
                        description: '24',
                        action: 'Admin'
                    },
                    {
                        name: 'Djay1',
                        description: '24',
                        action: 'Admin'
                    },
                    {
                        name: 'Djay2',
                        description: '24',
                        action: 'Admin'
                    }
                ]}
                columns={[
                    { dataField: 'name', label: 'Name', size: 'small'},
                    { dataField: 'description', label: 'Description', size: 'medium'},
                    { dataField: 'action', label: 'Action', size: 'small'}
                ]}
                columnComponents={{
                    description: ({ column, data }) => {
                        return (
                            <div style={{
                                minWidth: '80px',
                                maxWidth: '500px',
                                width: window.outerWidth > 600 ? 
                                '200px' : '80px',
                            }}>
                                <span>
                                    {data[column.dataField]}
                                </span>
                            </div>
                        )
                    },
                    action: () => {
                        return (
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                height: '100%'
                            }}>
                                <InputButton
                                    buttonStyle={commonClasses.saveButton}
                                    rootProps={{
                                        style: {
                                            margin: 0
                                        }
                                    }}
                                    buttonProps={
                                        {
                                            type: 'button',
                                            onClick: () => {
                                                setShowConfirmDialog({
                                                    message: 'Are you sure you want to remove the project? ',
                                                    okText: 'Yes',
                                                    cancelText: 'No',
                                                    heading: 'Delete',
                                                    onCancelClick: () => {
                                                        setShowConfirmDialog(null)
                                                    },
                                                    onContinueClick: () => {
                                                        setShowConfirmDialog(null)
                                                        //@to-do api call
                                                    }
                                                })
                                            }
                                        }
                                    }
                                >
                                    {'Edit'}
                                </InputButton>
                                <InputButton
                                    buttonStyle={commonClasses.saveButton}
                                    rootProps={{
                                        style: {
                                            margin: 0
                                        }
                                    }}
                                    buttonProps={
                                        {
                                            type: 'button',
                                            onClick: () => {
                                                setShowConfirmDialog({
                                                    message: 'Are you sure you want to remove the project? ',
                                                    okText: 'Yes',
                                                    cancelText: 'No',
                                                    heading: 'Delete',
                                                    onCancelClick: () => {
                                                        setShowConfirmDialog(null)
                                                    },
                                                    onContinueClick: () => {
                                                        setShowConfirmDialog(null)
                                                        //@to-do api call
                                                    }
                                                })
                                            }
                                        }
                                    }
                                >
                                    {'Delete'}
                                </InputButton>
                            </div>
                        )
                    }
                }}
            />
        </Layout>
    )
}

export default Project