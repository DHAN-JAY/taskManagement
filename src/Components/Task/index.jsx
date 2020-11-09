import React from 'react'
import { useState } from 'react'
import { ICON_NAME, ROLES_CONSTANTS, STATUS_CONSTANTS, statusData } from '../../AppConfig/constants'
import Card from '../Shared/Card'
import CustomIcon from '../Shared/CustomIcon'
import CustomTable from '../Shared/CustomTable'
import InputCheckbox from '../Shared/InputCheckbox'
import Layout from '../Shared/Layout'
import Selector from '../Shared/Selector'

/**
 * Used to show the Tasks of the users.
 * It allows the admin and manager to change the progress of the task.
 * It also allows developer to mark a task as completed.
 @returns {*}
 @param {{
 }} props
*/

const Task = () => {
    const [selectedProject, setSelectedProject] = useState('')
    const handleProjectFilterChange = (evt) => {
        setSelectedProject(evt.target.value)
    }
    const user = JSON.parse(localStorage.getItem('user_details'))

    return (
        <Layout>
            <Card 
                className="headerCardClass"
                style={{
                    padding: '10px'
                }}
            >
                <div
                    style={{
                        display: 'flex'
                    }}
                >
                    <span className="cardSubLabel">
                        Tasks
                    </span>
                    <div style={{
                        width: '300px'
                    }}>
                        <Selector
                            label="Projects"
                            onChange={handleProjectFilterChange}
                            dataProvider={[
                                { value: 'project1', label: 'Something'}
                            ]}
                            width='100%'
                            marginTop={2}
                            value={selectedProject}
                        />
                    </div>
                </div>
                {user && 
                    (user.role === ROLES_CONSTANTS.manager) &&
                    <div className="createCardButton">
                        <CustomIcon
                            name={ICON_NAME.create}
                        />
                    </div>
                }
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
                    { dataField: 'name', label: 'Name'},
                    { dataField: 'description', label: 'Description'},
                    { dataField: 'action', label: 'Action'}
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
                    action: ({ data }) => {
                        if(!user && !user.id){
                            return null
                        }
                        return (
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                height: '100%'
                            }}>
                                {user && 
                                (user.role === ROLES_CONSTANTS.admin ||  
                                user.role === ROLES_CONSTANTS.manager ) &&
                                    <Selector
                                        dataProvider={statusData}
                                        label="Staus"
                                        onChange={() => {}}
                                        width='80%'
                                        value={data['status']}
                                    />
                                }
                                {user && 
                                (user.role === ROLES_CONSTANTS.dev) &&
                                    <InputCheckbox
                                        containLabel
                                        label="Completed"
                                        checkboxProps={{
                                            checked: data['status'] === STATUS_CONSTANTS.completed
                                        }}
                                    />
                                }
                            </div>
                        )
                    }
                }}
            />
        </Layout>
    )
}

export default Task