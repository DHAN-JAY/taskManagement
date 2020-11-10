import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ICON_NAME, ROLES_CONSTANTS } from '../../AppConfig/constants'
import { API_CONSTANT } from '../../AppConfig/APIConstants'
import Card from '../Shared/Card'
import ConfirmationDialog from '../Shared/ConfirmationModal'
import CustomIcon from '../Shared/CustomIcon'
import CustomTable from '../Shared/CustomTable'
import InputButton from '../Shared/InputButton'
import Layout from '../Shared/Layout'
import commonStyles from '../Shared/styles/common'
import CreateEditProjectModal from './CreateEditProjectModal'
import toaster from '../../AppConfig/MessageToaster/actions'
import API from '../../AppConfig/Api'

/**
 * Used to show the project forms and edit or create button to Admin
 * for doing different operations on projects.
 @returns {*}
 @param {{
 }} props
*/

const Project = () => {
    const [showConfirmDialog, setShowConfirmDialog] = useState(null)
    const [showProjectFormModal, setShowProjectFormModal] = useState(null)
    const dispatch = useDispatch()
    const projects = useSelector(state => state.project.allProject)
    const commonClasses = commonStyles()
    const user = JSON.parse(localStorage.getItem('user_details'))

    //this is to show other role user that he does not have the permissions
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
            {showProjectFormModal &&
                <CreateEditProjectModal
                    open={Boolean(showProjectFormModal)}
                    heading={showProjectFormModal.heading}
                    initialData={showProjectFormModal.initialData}
                    okText={showProjectFormModal.okText}
                    edit={showProjectFormModal.edit}
                    cancelText={'Cancel'}
                    onCancelClick={() => {
                        setShowProjectFormModal(null)
                    }}
                    onContinueClick={(updatedData, setButtonDisabled) => {
                          if (!updatedData.projectName) {
                            dispatch(toaster.error("Please enter Project Name"));
                            return;
                          }
                          if (!updatedData.description) {
                            dispatch(toaster.error("Please enter Description"));
                            return;
                          }
                          if (!updatedData.assignedManager) {
                            dispatch(toaster.error("Please select a Manager to be assigned in project"));
                            return;
                          }
                          setButtonDisabled(true)
                          let payload = {
                            "projectName": updatedData.projectName,
                            "projectDesc": updatedData.description,
                          }
                          let url = API_CONSTANT.createProject
                          if(showProjectFormModal && showProjectFormModal.edit){
                              payload.projectId = 1
                              url = API_CONSTANT.modifyProject
                          } else {
                              payload.assignedManager = parseInt(updatedData.assignedManager)
                          }
                          API.post(url,
                            payload).then(() => {
                              dispatch(toaster.success(`Project successfully ${showProjectFormModal.edit ? 'Modified': 'Created'}.`))
                              setShowProjectFormModal(false)
                            })
                            .catch(error => {
                                dispatch(toaster.error(error.message))
                                setButtonDisabled(false)
                          })
                    }}
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
                <div className="createCardButton"
                    onClick={() => {
                        setShowProjectFormModal({
                            heading: 'Create Project',
                            okText: 'Create',
                            initialData: null,
                            edit: false
                        })
                    }}
                >
                    <CustomIcon
                        name={ICON_NAME.create}
                    />
                </div>
            </Card>
            <CustomTable
                data={projects}
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
                                                setShowProjectFormModal({
                                                    heading: 'Edit Project',
                                                    okText: 'Edit',
                                                    edit: true,
                                                    initialData: {
                                                        name: 'Something',
                                                        description: 'test',
                                                        assignedManager: 0
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