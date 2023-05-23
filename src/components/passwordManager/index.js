/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../passwordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    newPasswordsList: [],
    webSite: '',
    userName: '',
    password: '',
  }

  onChangeWebSiteInput = event => {
    this.setState({webSite: event.target.value})
  }

  onChangeUserInput = event => {
    this.setState({userName: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({password: event.target.value})
  }

  clickAdd = event => {
    event.preventDefault()
    const {webSite, userName, password} = this.state
    const newPasswordDetails = {
      id: uuidv4(),
      webSite,
      userName,
      password,
    }

    this.setState(prevState => ({
      newPasswordsList: [...prevState.newPasswordsList, newPasswordDetails],
    }))
  }

  render() {
    const {newPasswordsList, webSite, userName, password} = this.state
    return (
      <div>
        <div className="pageContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="appLogoImage"
          />
          <div className="topContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="smPasswordImage"
            />
            <div className="addNewPasswordContainer">
              <form>
                <h1 className="topCardHead">Add New Password</h1>
                <div className="websiteInputContainer">
                  <div className="websiteImageContainer">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                      className="webSiteImage"
                    />
                  </div>
                  <hr className="horizontalLine" />
                  <input
                    type="text"
                    className="webSiteInput"
                    placeholder="Enter Website"
                    id="webSiteInput"
                    onChange={this.onChangeWebSiteInput}
                  />
                </div>

                <div className="websiteInputContainer">
                  <div className="websiteImageContainer">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="website"
                      className="webSiteImage"
                    />
                  </div>
                  <hr className="horizontalLine" />
                  <input
                    type="text"
                    className="webSiteInput"
                    placeholder="Enter Username"
                    id="userNameInput"
                    onChange={this.onChangeUserInput}
                  />
                </div>

                <div className="websiteInputContainer">
                  <div className="websiteImageContainer">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                      alt="website"
                      className="webSiteImage"
                    />
                  </div>
                  <hr className="horizontalLine" />
                  <input
                    type="text"
                    className="webSiteInput"
                    placeholder="Enter Password"
                    id="enterPasswordInput"
                    onChange={this.onChangePasswordInput}
                  />
                </div>
                <div className="addButtonContainer">
                  <button className="addButton" onClick={this.clickAdd}>
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                className="lgPasswordImage"
                alt="password manager"
              />
            </div>
          </div>
          <div className="bottomContainer">
            <div className="passwordAndSearchContainer">
              <div className="yourPasswordContainer">
                <h1 className="bottomContainerHead">Your Passwords</h1>
                <div className="noOfPasswordContainer">
                  <p className="noOfPasswords">10</p>
                </div>
              </div>
              <div>
                <div className="searchInputContainer">
                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                      alt="search"
                      className="searchImage"
                    />
                  </div>
                  <hr />
                  <input
                    type="text"
                    placeholder="search"
                    className="searchInput"
                  />
                </div>
              </div>
            </div>
            <div className="checkboxContainer">
              <input type="checkbox" id="showPasswordButton" />
              <label htmlFor="showPasswordButton" className="checkboxText">
                Show Passwords
              </label>
            </div>
            <hr className="bottomCardHorizontalLine" />
            <div>
              {newPasswordsList.map(each => (
                <PasswordItem passwordArray={each} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
