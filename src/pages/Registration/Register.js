import React, { useState } from 'react';
import './Register.scss';
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

 
    if (!formData.name.trim()) {
      setErrors({ ...errors, name: 'Name is required' });
      return;
    }
    if (!formData.email.trim()) {
      setErrors({ ...errors, email: 'Email is required' });
      return;
    }

    if (validateForm()) {
        Navigate('/confirm');
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '' };

    if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const isValidEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className='Register'>
        <div className='top'>
            <div className='name'>
                THENCE
            </div>
            <div>
                <button className='return ' ><a href='/'><IoMdClose/></a></button>
            </div>
        </div>

        <div className='form'>
            <div>
              <p className='title'>Registration Form</p>
              <p className='desc'>Start your success Journey here!</p>
            </div>
            <form onSubmit={handleSubmit}>
                <input 
                  type='text' 
                  placeholder='Enter your name' 
                  className='input' 
                  name='name' 
                  value={formData.name} 
                  onChange={handleInputChange} 
                />
                {errors.name && <span className='error'>{errors.name}</span>}
                
                <input 
                  type='email' 
                  placeholder='Enter your email' 
                  className='input' 
                  name='email' 
                  value={formData.email} 
                  onChange={handleInputChange} 
                />
                {errors.email && <span className='error'>{errors.email}</span>}

                <br/>
                <br/>
                <button 
                  className='submit' 
                  type='submit' 
                  disabled={!formData.name || !formData.email || !!errors.name || !!errors.email}
                >
                  Submit
                </button>
            </form>
        </div>
    </div>
  )
}
