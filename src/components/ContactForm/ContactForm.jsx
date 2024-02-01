import React, { useState } from 'react';
import './ContactForm.css';

async function validateEmail(email) {
  try {
    const response = await fetch(`https://www.disify.com/api/email/${email}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error validating email:', error);
    return null;
  }
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [emailValidation, setEmailValidation] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validera e-post med Disify API
    const validationData = await validateEmail(formData.email);
    setEmailValidation(validationData);

    // Kontrollera valideringsresultatet och skicka formulärdata om e-posten är giltig
    if (validationData && validationData.format && !validationData.disposable) {
      console.log('Form Data:', formData);
    } else {
      return;
    }
  };

  return (
    <div>
      <section className="contact-form-container">
      <form onSubmit={handleSubmit}>
        <div className="contact-form-container__name">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        </div>

        <div className="contact-form-container__email">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ borderColor: emailValidation && !emailValidation.format ? 'red' : '' }}
        />
        {emailValidation && !emailValidation.format && (
          <p style={{ color: 'red' }}>Invalid email address.</p>
        )}
        </div>
        
        <div className="contact-form-container__message">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
      </section>

      <div className="form-data-summary-container">
        <h3>Form Data Summary</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Message: {formData.message}</p>
      </div>
    </div>
  );
}

export default ContactForm;
