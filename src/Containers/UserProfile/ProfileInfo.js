import React, { Component } from "react"
import ProfileImage from "./ProfileImage"
import ProfileText from "./ProfileText"
import Radium from "radium"

class ProfileInfo extends Component {
  render () {
    const styles = {
      backgroundColor: "#eee",
      height: "auto"
    }

    return (
      <div style={styles}>
        <div className="user-card">
          <ProfileImage {...this.props}/>
          <ProfileText {...this.props} />
        </div>
      </div>
    )
  }
}

export default Radium(ProfileInfo)