import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label>
        Email:
          <input
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
            />
            </label>
            <br />
            <label>
              Password:
              <input
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
              />
            </label>
          <br />

            <button>Submit</button>
      </form>
    <Link to="/Register">Register</Link>
    </div>
    
      );
    }
