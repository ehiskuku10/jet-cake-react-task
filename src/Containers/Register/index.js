import React, { Component } from "react"
import Radium from "radium"
import image from "assets/images/hero.jpg"
import { FadeLoader }  from 'react-spinners'
import {css} from '@emotion/core'

const INITIAL_STATE = {
  firstname: '',
  loading: false,
  lastname: '',
  email: '',
  password: '',
  phone: '',
  address: '',
  DOB: '',
  security_question1: '',
  security_question2: '',
  security_question3: '',
  imgURL: '',
  imageAsFile: '',
  error: null,
};

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  top: -70px;
`;

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {...INITIAL_STATE}
  }

  handleImageAsFile = event => {
    const image = event.target.files[0]
    console.log(image)
    this.setState({
      imageAsFile: image
    })
  }


  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    this.setState({loading: true})
    event.preventDefault();
    if(this.state.imageAsFile === '' ) {
      alert(`not an image, the image file is a ${typeof(imageAsFile)}`)
    }
    
    const uploadTask = this.props.firebase.storage.ref(`/images/${this.state.imageAsFile.name}`).put(this.state.imageAsFile)

    //initiates the firebase side uploading 
    uploadTask.on('state_changed', 
    (snapShot) => {
      //takes a snap shot of the process as it is happening
      // console.log(snapShot)
    }, (err) => {
      //catches the errors
      console.log(err)
    }, () => {
      // gets the functions from storage refences the image storage in firebase by the children
      // gets the download url then sets the image from firebase as the value for the imgUrl key:

      this.props.firebase.storage.ref('images').child(this.state.imageAsFile.name).getDownloadURL()
        .then(fireBaseUrl => {
          this.setState({imgURL: fireBaseUrl})
          console.log(this.state.imgURL)

          const { firstname, lastname, phone, email, password, security_question1, security_question2, security_question3, imgURL, address, DOB } = this.state;

          this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
              // Create a user in your Firebase realtime database
              return this.props.firebase
                .user(authUser.user.uid)
                .set({
                  firstname,
                  lastname,
                  phone,
                  email,
                  address,
                  security_question1,
                  security_question2,
                  security_question3,
                  DOB,
                  imgURL
                });
            })
            .then(authUser => {
              this.setState({ ...INITIAL_STATE });
              this.props.history.push('/home');
            })
            .catch(error => {
              this.setState({ error });
            });
        })
        .catch(error => {
          this.setState({ error });
        });
    })
  };

  render () {
    const styles = {
      backgroundImage: `url(${image})`,
      height: "auto",
      padding: "50px",
      position: "relative"
    }
    const {
      firstname,
      lastname,
      email,
      password,
      phone,
      address,
      security_question1,
      security_question2,
      security_question3,
      DOB,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '' ||
      firstname === '' ||
      lastname === '' ||
      security_question1 === '' ||
      security_question2 === '' ||
      security_question3 === '' ||
      address === '' ||
      DOB === '' ||
      phone === '';

    return (
      <div style={styles}>
        <div className="login-form-wrapper">
          <form onSubmit={this.onSubmit}>
            <input 
              type="text" 
              name="firstname"
              value={firstname}
              placeholder="first name" 
              onChange={this.onChange} />

            <input 
              type="text" 
              name="lastname"
              value={lastname}
              placeholder="last name" 
              onChange={this.onChange} />

            <input 
              type="text" 
              value={security_question1}
              name="security_question1" 
              placeholder="What's the name of your favourite football team?" 
              onChange={this.onChange} />
            
            <input 
              type="text" 
              value={security_question2}
              name="security_question2" 
              placeholder="What's was the name of your first pet?" 
              onChange={this.onChange} />

            <input 
              type="text" 
              value={security_question3}
              name="security_question3" 
              placeholder="What's your favourite food?" 
              onChange={this.onChange} />

            <input 
              type="text" 
              value={phone}
              name="phone"
              placeholder="phone no" 
              onChange={this.onChange} />

            <input 
              type="date" 
              value={DOB}
              name="DOB" 
              onChange={this.onChange} />

            <input 
              type="text" 
              value={address}
              name="address"
              placeholder="address" 
              onChange={this.onChange} />

            <input 
              type="file" 
              name="profileimage"
              onChange={this.handleImageAsFile} />

            <input 
              type="email" 
              value={email}
              name="email"
              placeholder="email" 
              onChange={this.onChange} />

            <input 
              type="password" 
              value={password}
              name="password"
              placeholder="password" 
              onChange={this.onChange} />

            <input 
              type="submit" 
              value="Register" 
              disabled={isInvalid}
              onChange={this.onChange} />

            {error && <p style={{color: "#fff"}}>{error.message}</p>}
          </form>
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

export default Radium(Register)