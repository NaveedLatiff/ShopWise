import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [textArea, setTextArea] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async () => {
    if (!name || !email || !textArea) {
      setResult('Please fill in all fields.');
      return;
    }

    setResult('Sending...');

    const formData = new FormData();
    formData.append('access_key', '3e1e6e31-5802-49ac-b71e-399a53e69f8c')
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', textArea);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form submitted successfully!');
        setName('');
        setEmail('');
        setTextArea('');
      } else {
        setResult(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setResult('Submission failed. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className='contact-cont'>
        <div className="form">

      <input
        type='text'
        value={name}
        placeholder='Enter Your Full Name'
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type='email'
        value={email}
        placeholder='Enter Your Email Address'
        onChange={(e) => setEmail(e.target.value)}
        required
        />
      <textarea
        rows={4}
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
        placeholder='Your message'
        required
        />
      <button onClick={handleSubmit} className='submit-btn'>
        Submit
      </button>
      <p className='result'>{result}</p>
        </div>
    </div>
  );
};

export default Contact;
