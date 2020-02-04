import React, { Component } from "react"
import Radium from "radium"
import HeadingText from "./HeadingText/HeadingText"
import CallToAction from "../../../Components/Buttons/CallToAction"
import heroImg from '../../../assets/images/hero.jpg'

class Index extends Component {
  render() {
    const styles = {
      backgroundImage: `linear-gradient(to right bottom, rgba(126, 213, 111, 0.8), rgba(40, 180, 131, 0.8)), url(${heroImg})`,
      backgroundSize: "cover",
      clipPath: (this.props.clipPath  || `polygon(0 0, 100% 0, 100% 75vh, 0 100%)`),
      backgroundPosition: this.props.position,
      height: this.props.height,
      paddingTop: "5rem",
      marginBottom: this.props.bottom
    }
    return (
      <div style={styles}>
        <div style={this.props.hide || {}}>
          <HeadingText />
          <CallToAction />
        </div>
      </div>
    )
  }
}

export default Radium(Index)