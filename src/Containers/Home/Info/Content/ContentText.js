import React, { Component } from "react"
import Radium from "radium"
import { Link } from "react-router-dom"

class ContentText extends Component {
  render() {
    const styles = {
      width: "48%",
      color: "grey",
      '@media (max-width: 700px)': {
      width: "100%",
      },
    }
    return (
        <div style={styles} className="text-wrapper">
          <div>
            <h3>You're going to fall in love with nature</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ratione iure, commodi in sit neque perspiciatis laudantjum 
              omnis nemo doloribus nesciunt ad earum debitis aspernatur, 
              recusande est uno dolore!
            </p>
          </div>
          <div>
            <h3>Live adventures like you have never before</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ratione iure, commodi in sit neque perspiciatis laudantjum 
              omnis nemo doloribus nesciunt ad earum debitis aspernatur, 
              recusande est uno dolore!
            </p>
          </div>
          <div>
            <Link to="#" style={{borderBottom: "1px solid #337ab7", paddingBottom: ".5rem"}}>Learn More &#8594;</Link>
          </div>
        </div>
    )
  }
}

export default Radium(ContentText)