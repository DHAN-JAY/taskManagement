import React from 'react'
import Layout from '../Shared/Layout'

/**
 * Used to show the basic Home of the app.
 @returns {*}
 @typedef Heading(string) value to be shown as a header in dialog 
 @typedef Private(boolean)
 @param {{
    heading Heading,
    isPrivate Private
 }} props
*/

const Home = ({
    heading,
    isPrivate
}) => {

    return (
        <div>
            <Layout />
            Home
        </div>
    )
}

export default Home