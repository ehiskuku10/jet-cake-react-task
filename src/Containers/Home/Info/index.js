import React, { Component } from "react"
import Header from "./Header"
import Content from "./Content/"
import Radium from "radium"
      
class Info extends Component {
  render() {
    const styles = {
      marginBottom: "3rem"
    }
    return (
      <div class="info" style={styles}>
        <Header />
        <Content />
      </div>
    )
  }
}

export default Radium(Info)