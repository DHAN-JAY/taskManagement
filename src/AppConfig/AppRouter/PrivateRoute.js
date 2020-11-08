import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {

    const isAuthenticated = true

    return (
        <Route
            {...rest}
            render={(props) => {
                const { location } = props
                const key = `${location.pathname}${location.search}`

                props = { ...props, key }

               return (isAuthenticated ? 
                    <Component {...props} />
                 : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />
                )
               )
            }
        }
        />
    )
}

export default PrivateRoute