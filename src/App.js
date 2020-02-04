import React from "react"
import { Route, Redirect, Switch, withRouter } from "react-router-dom"
import { withFirebase } from './Components/FireBase';
import { compose } from 'recompose';
import * as ROUTES from './Constants/routes';
import { withAuthentication } from './Components/Session';

/**
 * Containers Import
 */
import Home from "./Containers/Home/"
import UserProfile from "./Containers/UserProfile/"
import Login from "./Containers/Login/"
import Register from "./Containers/Register/"


/**
 * Function Definition
 */
const App = () => {
  return (
    <div>
      <Switch>
        <Route path={ ROUTES.HOME } exact component={ Home } />
        <Route path={ ROUTES.USER_PROFILE } component={ UserProfile } />
        
        <Route path={ ROUTES.LOG_IN } component={ compose(
          withRouter,
          withFirebase,
        )(Login) } />
        
        <Route path={ ROUTES.REGISTER } component={ compose(
          withRouter,
          withFirebase,
        )(Register) } />

        <Redirect path={ ROUTES.INDEX } exact to={ ROUTES.LOG_IN } />
      </Switch>
    </div>
  )
}

export default compose(
  withFirebase,
  withAuthentication,
  withRouter)(App)
