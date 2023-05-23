/* eslint-disable no-unused-vars */
import './index.css'

const PasswordItem = props => {
  const {passwordArray} = props
  const {website, userName, password} = passwordArray
  const logoLetter = website[0].toUpperCase()
  const isListContain = false
  return (
    <div>
      <div className="passwordsCardContainer">
        <div className="logoLetterContainer">
          <p className="logoLetter">{logoLetter}</p>
        </div>
        <div className="websiteDetailsContainer">
          <p className="websiteName">{website}</p>
          <p className="userName">{userName}</p>
          <p className="password">{password}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="deleteImage"
          />
        </div>
      </div>
    </div>
  )
}

export default PasswordItem
