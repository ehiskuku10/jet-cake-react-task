import React, { Component } from "react"
import Radium from "radium"
import image from 'assets/images/hero.jpg'

class ContentImage extends Component {
  render() {
    const styles = {
      width: "48%",
      '@media (max-width: 700px)': {
        width: "100%",
        marginTop: "2rem"
        },
    }
    return (
      <div style={styles}>
        <div className="img-wrapper">
          <img src={image} alt="content_image" />
        </div>
        <div className="img-wrapper">
          <img src={image} alt="content_image" />
        </div>
        <div className="img-wrapper">
          <img src={image} alt="content_image" />
        </div>
      </div>
    )
  }
}

export default Radium(ContentImage)