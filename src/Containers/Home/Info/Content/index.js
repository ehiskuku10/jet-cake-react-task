import React, { Component } from "react"
import Radium from "radium"
import ContentInfo from "./ContentInfo"

class Content extends Component {
  render() {
    const styles = {
      height: "auto",
      minHeight: "500px",
      paddingTop: "5rem",
      '@media (max-width: 700px)': {
        paddingTop: "2rem",
      },
      '@media (max-width: 500px)': {
        minHeight: "600px",
      },
    }
    return (
        <div style={styles}>
          <ContentInfo />
        </div>
    )
  }
}

export default Radium(Content)