import React, { useState } from 'react'
import "./CSS/Contact.css"
// import ReCAPTCHA from 'react-google-recaptcha'
import { contactInfo } from '../JSON/DevInfo'
const Contact = () => {
  const [successMessage, setSuccessMessage] = useState(false)
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = e => {
    e.preventDefault()
    console.log('yes')
    setSuccessMessage(true)
    setDisabled(true)

  }

  return (
    <div id='CONTACT' className='Page-wrapper'>
      <h1 className="Section-title">contact</h1>
      <form className='Form-container'>
        <h2 style={{ padding: '0 1em' }}>Contact me via <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> or</h2>
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

        </div>
        <div className="Form-group">
          <label htmlFor="Name">Message:</label>
          <textarea type="text" id='Name' required />
        </div>
        <div className="Form-group">

          <button disabled={disabled} onClick={handleSubmit}>Send Email</button>
        </div>
      </form>



      <h1 className="Section-title-end">contact</h1>
    </div>
  )
}

export default Contact