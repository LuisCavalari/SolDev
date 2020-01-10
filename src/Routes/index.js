import React from 'react';
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import AdPage from '../pages/AdPage'
import AddAd from '../pages/AddAd'
import {Switch , Redirect} from "react-router-dom";
import NotFound from '../pages/NotFound'
import RouteHandler from './RouteHandler'

export default function Routes() {
  return (
   
        <Switch>
            <RouteHandler path="/" exact  component={Home}/>
            <RouteHandler path="/404" component={NotFound} /> 
            <RouteHandler path="/signin" component={SignIn} /> 
            <RouteHandler path="/signup" component={SignUp} /> 
            <RouteHandler path="/ad/:id" component={AdPage} />
            <RouteHandler path="/newad" component={AddAd} />
            <Redirect path="*" to="/404" />
        </Switch>
 
  );
}
