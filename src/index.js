import React from "react"
import ReactDom from "react-dom"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { StyleRoot } from "radium"
import './assets/styles/styles.css'
import Firebase, { FirebaseContext } from './Components/FireBase';


ReactDom.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <BrowserRouter>
      <StyleRoot>
        <App/>
      </StyleRoot>
    </BrowserRouter>
  </FirebaseContext.Provider>, document.getElementById('root'));