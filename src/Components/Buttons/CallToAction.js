import React from "react"
import { Link } from "react-router-dom"
import Radium from "radium"

const CallToAction = () => {
  const styles = {
    color: "#fff",
    textTransform: "uppercase",
    position: "absolute",
    left: "49%",
    top: "60%",
    backfaceVisibility: "none",
    transform: "translate(-50%, -30%)"
  }
  return (
  <div style={styles}>
      <Link className="btn" to="#">
        Join Us
      </Link>
    </div>
  )
}

export default Radium(CallToAction)