import React, { Component } from "react"
import Radium from "radium"
import NavListItem from "./NavListItem"

class NavList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
  }
  render () {
    const styles = {
      display: "flex",
      justifyContent: "center",
      margin: 0,
      padding: "1rem"
    }
    return (
      <ul style={styles}>
        <NavListItem />
      </ul>
    )
  }
}

export default Radium(NavList);