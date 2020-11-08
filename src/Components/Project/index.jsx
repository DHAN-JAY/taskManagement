import React from 'react'
import { ICON_NAME } from '../../AppConfig/constants'
import Card from '../Shared/Card'
import CustomIcon from '../Shared/CustomIcon'
import CustomTable from '../Shared/CustomTable'
import Layout from '../Shared/Layout'

/**
 * Used to show the basic Project of the app.
 @returns {*}
 @param {{
 }} props
*/

const Project = () => {

    return (
        <Layout> 
            <Card 
                className='headerCardClass'
            >
                <div>
                    <span>
                        Project
                    </span>
                </div>
                <div>
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

export default Project