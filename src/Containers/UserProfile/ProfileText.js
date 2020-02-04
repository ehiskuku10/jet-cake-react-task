import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditProfile from "./EditProfile"
import { faHome, faMailBulk, faPhone, faCalendar } from '@fortawesome/free-solid-svg-icons'

class ProfileText extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showForm: false
    }
  }
  
  render () {
    const {
      email,
      phone,
      DOB,
      firstname,
      lastname,
      address
    } = this.props.user
    return (
      <div className="text-info-block">
        {!this.state.showForm ? <div>
          <div className="text-info-wrapper">
            <div className="mb-2 text text-light text-sm text-grey">Hello, I am</div>
            <div className="mb-3 text-bold text-lg text-noir">{firstname} {lastname}</div>
            <ul>
              <li className="mb-2">
                <FontAwesomeIcon icon={faCalendar} size="2x"/>
                <span className="ml-2 text-md text-grey">{DOB}</span>
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faPhone} size="2x"/>
                <span className="ml-2 text-md text-grey">{phone}</span>
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faMailBulk} size="2x" />
                <span className="ml-2 text-md text-grey">{email}</span>
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faHome} size="2x" />
                <span className="ml-2 text-md text-grey">{address}</span>
              </li>
            </ul>
          </div>
          <button className="mc" onClick={() => {this.setState({showForm: true})}} >Edit Profile</button>
        </div> :
        <EditProfile />}
      </div>
    )
  }
}

export default ProfileText