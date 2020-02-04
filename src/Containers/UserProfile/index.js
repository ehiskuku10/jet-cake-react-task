import React, { useState } from "react"
import Nav from "../../Components/Nav"
import Hero from "../Home/Hero/"
import ProfileInfo from "../UserProfile/ProfileInfo"
import { AuthUserContext, withAuthorization } from "../../Components/Session"
import { withFirebase } from '../../Components/FireBase';
import { compose } from "recompose"
import Radium from "radium"

const UserProfile = (props) => {

  const [user, setUser] = useState('')

  const styles = {
    height: "100%",
    width: "100%"
  }
  return (
    <AuthUserContext.Consumer>
      {authUser => {
        props.firebase.user(authUser.uid).once('value', snapshot => {
          setUser(snapshot.val())
        });
        return (
          <div class="profile" style={styles}>
            <Nav />
            <Hero height="50rem" clipPath="default" hide={{display: "none"}} />
            <ProfileInfo user={user} />
          </div>
        )
      }}
    </AuthUserContext.Consumer>
  )
}

const condition = authUser => !!authUser;

export default compose(
  Radium,
  withFirebase,
  withAuthorization(condition))(UserProfile)