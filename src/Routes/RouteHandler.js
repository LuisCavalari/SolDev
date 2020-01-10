import React from 'react'
import { Route,Redirect } from 'react-router-dom'
import {isAuth} from '../auth'
 const RouteHandler = ({ component:Component, ...rest }) => {
    let isLogged = isAuth()
    let IsAcessAlow = (rest.private && !isLogged) ? false : true

    return (
        <Route {...rest}  render={() => IsAcessAlow ? <Component /> : <Redirect to="/signin" /> }/>
    )
}
export default RouteHandler