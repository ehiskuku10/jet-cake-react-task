import React, { Component } from "react"
import Radium from "radium"
import image from "assets/images/hero.jpg"
import {css} from '@emotion/core'
import { Link } from "react-router-dom"
import { FadeLoader }  from 'react-spinners'

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
  loading: false
};

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  top: -70px;
`;


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {...INITIAL_STATE}
  }

  componentWillMount() {
    this.props.firebase.doSignOut();
    console.log(this.props)
  }

  onSubmit = event => {
    this.setState({loading: true})
    event.preventDefault();
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push('/home');
      })
      .catch(error => {
        this.setState({ error });
      });
  };
  
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render () {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    const styles = {
      backgroundImage: `url(${image})`,
      position: "relative",
      padding: "50px",
      height: "700px",
      fontSize: "1.4rem"
    }
    return (
      <div style={styles}>
        <div style={{position: "relative", top: "30%"}} className="login-form-wrapper">
          <form onSubmit={this.onSubmit}>
            <input 
              type="email" 
              name="email"
              value={email}
              onChange={this.onChange}
              placeholder="email" />

            <input 
              type="password" 
              name="password"
              value={password}
              onChange={this.onChange}
              placeholder="password" />

            <input 
              type="submit" 
              disabled={isInvalid}
              value="Login" />

            {error && <p style={{color: "#fff"}}>{error.message}</p>}
          </form>
          <div style={{textAlign: "center", fontWeight: 600, color: "#fff"}}>
            <span>Or</span> &nbsp;
            <Link style={{color: "#fff"}} to="/user/register">Register</Link>
          </div>
        </div>
        <FadeLoader
          css={override}
          sizeUnit={"px"}
          size={100}
          color={'white'}
          loading= {this.state.loading}
        />
      </div>
    )
  }
}

export default Radium(Login)