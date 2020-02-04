import React from "react"
import { AuthUserContext } from '../Session';
import { Link } from "react-router-dom"
import Radium from "radium"
import { withFirebase } from '../FireBase';
import { compose } from 'recompose';
import { Auxil } from "../../Hocs/Auxil";

const NavListItem = () => {
  const styles = {
    padding: "0 2rem",
    height: "2rem",
    display: "block",
  }
  return (
    <AuthUserContext.Consumer>
      {
        (authUser) => {
          return (
            <Auxil>
              <li className="nav" style={{...styles, borderRight: (authUser === null ? "1px solid #fff" : "none")}}><Link to="/home">Home</Link></li>
              {authUser ? [<li className="nav nav2" style={styles}><Link to="/user/profile">User profile</Link></li>,
              <li className="nav" style={styles}><Link to="/user/login">Logout</Link></li>]
              : <li className="nav" style={styles}><Link to="/user/login">Login</Link></li>}
            </Auxil>
          )
        }
      }
    </AuthUserContext.Consumer>
  )
}
      


export default compose(
  withFirebase,
  Radium
)(NavListItem);