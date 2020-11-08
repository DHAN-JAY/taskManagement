import React from 'react'
import Sidebar from './Sidebar'

/**
 * Used to show the basic layout of the app.
 @returns {*}
 @typedef Heading(string) value to be shown as a header in dialog 
 @typedef Private(boolean)
 @param {{
    heading Heading,
    isPrivate Private
 }} props
*/

const Layout = ({
    heading,
    isPrivate
}) => {

    return (
        <div>
            <Sidebar />
        </div>
    )
}

export default Layout