import React, { Component } from "react"
import Nav from "../../Components/Nav"
import { Auxil } from "../../Hocs/Auxil"
import Hero from "./Hero"
import Info from "./Info"
import Footer from "./Footer"

class Home extends Component {

  render() {
    return (
      <Auxil>
        <Nav />
        <Hero height="95vh" position="center" bottom="5rem" />
        <Info />
        <Footer />
      </Auxil>
    )
  }
}

export default Home