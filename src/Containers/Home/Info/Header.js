import React, { Component } from "react"
import Radium from "radium"

class Header extends Component {
  render() {
    const styles = {
      textAlign: "center",
      color: `rgba(40, 180, 131, 0.8)`,
      textTransform: "uppercase",
      fontWeight: 600,
      letterSpacing: "2pt",
      margin: 0,
      '@media (max-width: 950px)': {
        fontSize: "2rem",
      },
      '@media (max-width: 780px)': {
        fontSize: "1.6rem",
      },
      '@media (max-width: 570px)': {
        padding: "0 3rem",
        lineHeight: "2",
        fontSize: "1.4rem",
      }
    }
    return (
        <h3 style={styles}>Exciting tours for adventurous people</h3>
    )
  }
}

export default Radium(Header)