import React, { Component } from "react"
import Radium from "radium"

class HeadingSub extends Component {
  render() {
    const styles = {
      display: "block",
      fontSize: "2rem",
      fontWeight: "400",
      letterSpacing: "1.53rem",
      animation: "moveInRight 1s ease-out",
      '@media (max-width: 950px)': {
        fontSize: "1.5rem",
      },
      '@media (max-width: 640px)': {
        fontSize: "1.2rem",
        letterSpacing: "1rem",
      },
      '@media (max-width: 490px)': {
        fontSize: ".8rem",
        letterSpacing: "1.1rem",
      }
    }
    return (
      <div style={styles}>Is where life happens</div>
    )
  }
}

export default Radium(HeadingSub)