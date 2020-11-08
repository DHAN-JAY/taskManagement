import React from 'react'
import Layout from '../Shared/Layout'

/**
 * Used to show the basic Task of the app.
 @returns {*}
 @typedef Heading(string) value to be shown as a header in dialog 
 @param {{
    heading Heading
 }} props
*/

const Task = ({
    heading
}) => {

    return (
        <div>
            <Layout />
            Task
        </div>
    )
}

export default Task