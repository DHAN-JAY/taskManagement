import React from 'react'
import { ICON_NAME } from '../../AppConfig/constants'
import Card from '../Shared/Card'
import CustomIcon from '../Shared/CustomIcon'
import CustomTable from '../Shared/CustomTable'
import Layout from '../Shared/Layout'
import Selector from '../Shared/Selector'

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
                    { dataField: 'description', label: 'Description'},
                    { dataField: 'action', label: 'Action', size: 'small'}
                ]}
                columnComponents={{
                    action: () => {
                        return (
                            <div>
                                <Selector
                                     label="Projects"
                                     onChange={() => {}}
                                     dataProvider={[
                                         { value: 'project1', label: 'Something'}
                                     ]}
                                     width='80%'
                                     marginTop={2}
                                     value={'project1'}
                                />
                            </div>
                        )
                    }
                }}
            />
        </Layout>
    )
}

export default Project