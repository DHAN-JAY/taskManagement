import React from 'react'
import Layout from '../Shared/Layout'

/**
 * Used to show the basic ErrorPage of the app.
 @returns {*}
 @typedef Heading(string) value to be shown as a header in dialog 
 @typedef Private(boolean)
 @param {{
    heading Heading,
    isPrivate Private
 }} props
*/

const ErrorPage = ({
    heading,
    isPrivate
}) => {

    return (
        <div>
            <Layout />
            404 error
        </div>
    )
}

export default ErrorPage