import React, { Component } from "react"
import Radium from "radium"
import image from "assets/images/favicon.ico"

class Footer extends Component {
  render() {
    const styles = {
      height: "30rem",
      backgroundColor: "rgb(27, 26, 26)",
      display: "flex",
      color: "#fff",
      paddingBottom: "2rem",
      fontSize: "1.2rem",
      '@media (max-width: 1000px)': {
        display: "block",
        paddingTop: "5rem",
        height: "auto"
      },
    }
    return (
      <div style={styles}>
        <div class="services">
          <ul>
            <li>Company</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>
        <div class="footer-img">
          <div class="footer-img-wrapper">
            <img src={image} alt="logo"/>
          </div>
        </div>
        <div class="about">
          <div id="foot-note">
            Built by Kuku Ehis for his job application task project, using CSS, React, Radium,
            JSX, Javascript. orem ipsum dolor sit amet consectetur adipisicing elit. Ratione iure, 
            commodi in sit neque perspiciatis laudantjum omnis nemo doloribus nesciunt ad earum 
            debitis aspernatur, recusande est uno dolore!
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(Footer)