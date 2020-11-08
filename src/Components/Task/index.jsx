import React from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import { ICON_NAME } from '../../AppConfig/constants'
import Card from '../Shared/Card'
import CustomIcon from '../Shared/CustomIcon'
import CustomTable from '../Shared/CustomTable'
import Layout from '../Shared/Layout'
import Selector from '../Shared/Selector'

/**
 * Used to show the basic Task of the app.
 @returns {*}
 @param {{
 }} props
*/

const Task = () => {
    const [selectedProject, setSelectedProject] = useState('')
    const handleProjectFilterChange = (evt) => {
        setSelectedProject(evt.target.value)
    }

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
                    { dataField: 'name', label: 'Name'},
                    { dataField: 'description', label: 'Description'},
                    { dataField: 'action', label: 'Action'}
                ]}
            />
        </Layout>
    )
}

export default Task