import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../../Utils/helpers'

const PrivateRoute = ({ component: Component, ...rest }) => {

    const authenticated = isAuthenticated()

    return (
        <Route
            {...rest}
            render={(props) => {
                const { location } = props
                const key = `${location.pathname}${location.search}`

                props = { ...props, key }

               return (authenticated ? 
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