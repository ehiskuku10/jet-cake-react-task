import React from "react"
import NavList from "./NavList"
import Radium from "radium"

const Nav = () => {
  const styles = {
    padding: ".5rem",
    backgroundColor: "#000",
    position: "fixed",
    zIndex: 1000,
    width: "100vw"
  }
  return (
    <div style={styles}>
      <NavList />
    </div>
  )
};

export default Radium(Nav);
