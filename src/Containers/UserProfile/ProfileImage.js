import React, { Component } from "react"
import Radium from "radium"

class ProfileImage extends Component {
  render () {
    const styles = {
      width: "60%",
      '@media (max-width: 1220px)': {
        margin: "0 auto",
        height: "60%"
      },
      '@media (max-width: 1020px)': {
        width: "80%"
      },
      '@media (max-width: 830px)': {
        width: "100%"
      },
      '@media (max-width: 617px)': {
        
      }

    }

    return (
      <div style={styles}>
        <img src={this.props.user.imgURL} alt="Can't display"/>
      </div>
    )
  }
}

export default Radium(ProfileImage)