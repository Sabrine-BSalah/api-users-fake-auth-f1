import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isAuth, ...props }) => {

    if (!isAuth) {
        return <Redirect to='/' />
    }
    return (
        // <Component {...props} />
        <Route render={() => <Component {...props} />} />
    )
}

export default PrivateRoute
