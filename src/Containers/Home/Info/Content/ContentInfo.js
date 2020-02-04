import React, { Component } from "react"
import Radium from "radium"
import ContentText from "./ContentText"
import ContentImage from "./ContentImage"

class ContentInfo extends Component {
  render() {
    const styles = {
      display: "flex",
      margin: "0 auto",
      height: "30rem",
      width: "70%",
      justifyContent: "space-between",
      '@media (max-width: 700px)': {
        display: "block",
        width: "100%",
        padding: "0 5rem"
      },
      '@media (max-width: 640px)': {
        height: "50rem",
      },
    }
    return (
      <div style={styles}>
        <ContentText />
        <ContentImage />
      </div>
    )
  }
}

export default Radium(ContentInfo)