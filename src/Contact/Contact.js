import React, { useEffect, useState } from 'react'
import "./CSS/Contact.css"

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    setSuccessMessage(true)
  }
  useEffect(() => {
    setTimeout(() => setSuccessMessage(false), 10000)
  }, [successMessage])
  return (
    <div id='CONTACT' className='Page-wrapper'>
      <h1 className="Section-title">contact</h1>
      <form className='Form-container'>
        <div className="Form-group">
          <label htmlFor="Name">Name:</label>
          <input type="text" id='Name' required />
        </div>
        <div className="Form-group">
          <label htmlFor="Email">Email:</label>
          <input type="text" id='Email' required />
        </div>
        <div className="Form-group">
          <label htmlFor="Name">Message:</label>
          <textarea type="text" id='Name' placeholder required />
        </div>
        <button onClick={handleSubmit}>Send Email</button>

        {successMessage ? <h3>Successfully sent email</h3> : null}

      </form>
      <h1 className="Section-title-end">contact</h1>
    </div>
  )
}

export default Contact