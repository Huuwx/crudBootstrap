import React, { useState } from 'react';
import './Cau2.css';
import BirthdayForm from './BirthdayForm.js';

function SignUp() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
            // Submit the form or perform other actions
            console.log('Form submitted with email:', email);
        }
    };

    return (
        <div className='Form-SignUp'>
            <h2>Sign Up</h2>
            <h3>It's free and anyone can join</h3>
            <form onSubmit={handleSubmit}>
                <div className='Form'>
                    <div className='Form-group'>
                        <label htmlFor="FirstName">First Name</label>
                        <input type="text" id="FirstName" className='Form-group' />
                    </div>
                    <div className='Form-group'>
                        <label htmlFor="LastName">Last Name</label>
                        <input type="text" id="LastName" className='Form-group' />
                    </div>
                    <div className='Form-group'>
                        <label htmlFor="Email">Your Email</label>
                        <input
                            type="email"
                            id="Email"
                            className={`Form-group ${emailError ? 'error' : ''}`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <span className="error-message">{emailError}</span>}
                    </div>
                    <div className='Form-group'>
                        <label htmlFor="Password">New Password</label>
                        <input type="password" id="Password" className='Form-group' />
                    </div>
                    <div className='Form-group'>
                        <label htmlFor="Sex">I am</label>
                        <select id="Sex" name='sex'>
                            <option value="" disabled selected hidden>Select Sex</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className='Form-Birthday'>
                        <BirthdayForm />
                    </div>
                    <div className='Form-Submit'>
                        <input type="submit" value="Sign Up" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignUp;