import React, { Component } from "react"
import Radium from "radium"
import HeadingMain from "./HeadingMain"
import HeadingSub from "./HeadingSub"

class HeadingText extends Component {
  render() {
    const styles = {
      color: "#fff",
      textTransform: "uppercase",
      position: "absolute",
      left: "50%",
      top: "40%",
      backfaceVisibility: "none",
      transform: "translate(-50%, -30%)"
    }
    return (
      <div style={styles}>
        <HeadingMain />
        <HeadingSub />
      </div>
    )
  }
}

export default Radium(HeadingText)