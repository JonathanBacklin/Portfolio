import React, { useRef, useState } from 'react'
import "./CSS/Contact.css"
import ReCAPTCHA from 'react-google-recaptcha'
import { contactInfo } from '../JSON/DevInfo'

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState(false)
  const [disabled, setDisabled] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("")
  const [email, setEmail] = useState("")
  const [emailMessage, setEmailMessage] = useState("")
  const handleSubmit = e => {
    e.preventDefault()
    console.log('yes')
    setSuccessMessage(true)
    setDisabled(true)
    recaptchaRef.current.reset();
    // emailValidation()
  }
  // const emailValidation = () => {
  //   const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
  //   if (regEx.test(email)) {
  //     setEmailMessage("Email is valid")
  //   } else if (!regEx.test(email) && email === "") {
  //     setEmailMessage("Invalid Email")
  //   } else {
  //     setEmailMessage("")
  //   }
  // }

  const recaptchaKey = "6LcclSwhAAAAAEVMyTccIIgZmEBu-lPjV-tyC1UD"
  const recaptchaRef = useRef(null)

  const updateRecaptchaToken = token => {
    setRecaptchaToken(token)
  }
  return (
    <div id='CONTACT' className='Page-wrapper'>
      <h1 className="Section-title">contact</h1>
      <form className='Form-container'>
        <div className="Form-group">
          {successMessage ? <h3>Successfully sent email</h3> : null}
        </div>
        <div className="Form-group">
          <label htmlFor="Name">Name:</label>
          <input type="text" id='Name' required />
        </div>
        <div className="Form-group">
          <label htmlFor="Email">Email:</label>
          <input type="email" id='Email' required />
          {/* <h3>{emailMessage}</h3> value={email}  */}
        </div>
        <div className="Form-group">
          <label htmlFor="Name">Message:</label>
          <textarea type="text" id='Name' required />
        </div>
        <div className="Form-group">
          <ReCAPTCHA ref={recaptchaRef}
            sitekey={recaptchaKey}
            onChange={updateRecaptchaToken}
          />
          <button disabled={disabled} onClick={handleSubmit}>Send Email</button>
        </div>



      </form>
      
      <a href={`mailto:${contactInfo.email}`}>Send Email</a>
      <h1 className="Section-title-end">contact</h1>
    </div>
  )
}

export default Contact