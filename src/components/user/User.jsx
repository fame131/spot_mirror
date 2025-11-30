import React, { useState } from 'react';
import './user.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const User = ({ setAllStuffs }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const [error, setError] = useState('');
  const [confirmError, setConfirmError] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('')

  const navigate = useNavigate()

  const handlePassword = (e) => {
    const newPass = e.target.value;
    setPassword(newPass);

    if (newPass.length > 9) {
      setError('Password must contain fewer than 10 letters');
    } else if (newPass.length < 8) {
      setError('Password must contain at least 8 letters');
    } else {
      setError('');
    }
  };

  const handleSubmit = async () => {

    if (confirmPass !== password) {
      setConfirmError("Passwords don't match");
      return;
    } else {
      setConfirmError('');
    }

    if (/\d/.test(name)) {
      setNameError("Name cannot contain numbers");
      return;
    } else {
      setNameError('');
    }

    try {
      const response = await axios.post("http://localhost:5000/accounts", {
        name,
        email,
        password,
      });

      const { data } = response
      if (data?.emailTaken) {
        setEmailError('User already exists')
      } else {
        setEmailError('')
      }

    } catch (error) {
      console.error("Error registering user:", error);
    }


    navigate('/')

  };

  return (
    <div className='all-cont'>
      <h1 className="head-sign">Sign Up</h1>

      <form className="sign-up" onSubmit={(e) => {
        e.preventDefault();
        setAllStuffs({ name, email, password, confirmPass });
        handleSubmit();
      }}>

        <input
          type="text"
          className="full-name"
          placeholder='Full name'
          onChange={(e) => setName(e.target.value)}
        />
        <div className="nameError">{nameError}</div>

        <input
          type="email"
          className="email"
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="emailError">
          {emailError}
        </div>

        <input
          type="password"
          className="password"
          placeholder='Password'
          onChange={(e) => handlePassword(e)}
        />
        <div className="passError">{error}</div>

        <input
          type="password"
          className="confirm-password"
          placeholder='Confirm password'
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        <div className="confirmError">{confirmError}</div>

        <button className="submit" type='submit'>Sign up</button>
      </form>
    </div>
  );
};

export default User;
