import React, { Component } from "react"
import Radium from "radium"

class HeadingMain extends Component {
  render() {
    const styles = {
      display: "block",
      fontSize: "6rem",
      fontWeight: "400",
      letterSpacing: "3rem",
      animation: "moveInLeft 1s ease-out",
      '@media (max-width: 950px)': {
        fontSize: "5rem",
      },
      '@media (max-width: 640px)': {
        fontSize: "4rem",
        letterSpacing: "2rem",
      },
      '@media (max-width: 490px)': {
        fontSize: "3rem",
        letterSpacing: "2rem",
      }
    }
    return (
      <div style={styles}>
        Outdoors
      </div>
    )
  }
}

export default Radium(HeadingMain)