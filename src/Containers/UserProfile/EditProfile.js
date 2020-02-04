import React, { Component } from "react"
import { withFirebase } from '../../Components/FireBase';

const INITIAL_STATE = {
  firstname: '',
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

class EditProfile extends Component {
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

          const { firstname, lastname, phone, email, password, imgURL, security_question1, security_question2, security_question3, address, DOB } = this.state;
          

          const user = this.props.firebase.auth().currentUser
          user.updateEmail(email)
          .then(() => {
            user.updatePassword(password)
            .then(() => {
              user.updateProfile({
                firstname,
                lastname,
                DOB,
                phone,
                imgURL,
                security_question1,
                security_question2,
                security_question3,
                address
              })
              .then(() => {
                alert("Successfully Updated User Profile!");
                this.setState({ ...INITIAL_STATE });
                this.props.history.push('/user/profile');
              })
              .catch((error) => {
                this.setState({
                  error
                })
              });
            })
            .catch(error => {
              this.setState({
                error
              })
            })
          })
          .catch(error => {
            this.setState({
              error
            })
          })
        })
        .catch(error => {
          this.setState({ error });
        });
    })
  };

  render () {
    const {
      firstname,
      lastname,
      email,
      password,
      phone,
      security_question1,
      security_question2,
      security_question3,
      address,
      DOB,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '' ||
      firstname === '' ||
      lastname === '' ||
      address === '' ||
      security_question1 === '' ||
      security_question2 === '' ||
      security_question3 === '' ||
      DOB === '' ||
      phone === '';

    return (
      <div class="edit">
        <h3 style={{margin: "20px 0", textAlign: "center", fontWeight: 700}}>Edit Profile</h3>
        <div style={{width: "80%"}} className="login-form-wrapper">
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
              value="Update" 
              disabled={isInvalid}
              onChange={this.onChange} />

            {error && <p style={{color: "#fff"}}>{error.message}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default withFirebase(EditProfile)