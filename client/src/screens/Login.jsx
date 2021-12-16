import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Login.css'

export default function Login({ handleLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const {email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formData);
  }

  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit}>
        <h4>Login</h4>
        <label className="email">
        <p>Email:</p>
          <input
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
            />
            </label>
            <br />
            <label className="password">
              <p>Password:</p>
              <input
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
              />
            </label>
          <button>Submit</button>
      </form>
    </div>
    
      );
    }
