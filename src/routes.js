import React from 'react';
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import {Switch, Route , Redirect} from "react-router-dom";
import NotFound from './pages/NotFound'


export default function Routes() {
  return (
   
        <Switch>
            <Route path="/" exact  component={Home}/>
            <Route path="/404" component={NotFound} /> 
            <Route path="/signin" component={SignIn} /> 
            <Redirect path="*" to="/404" />
        </Switch>
 
  );
}
