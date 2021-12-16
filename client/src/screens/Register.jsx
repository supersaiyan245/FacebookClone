import { useState } from 'react';
import '../assets/Register.css'

export default function Register({ handleRegister }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    age: 0,
    email: '',
    password: '',
  });
  const { first_name, last_name, age, email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(formData);
  }

  

  return (
    <div className="RegisterContainer">
      <form onSubmit={handleSubmit}>
        <h4>Register</h4>
        <label>
        <p>First Name:</p>
          <input
            type='text'
            name='first_name`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        '
            value={first_name}
            onChange={handleChange}
            />
            </label>
            <br />
              <label>
              <p>Last Name:</p>
                <input
                  type='text'
                  name='last_name'
                  value={last_name}
                  onChange={handleChange}
                />
          </label>
        <label>
        <p>age:</p>
          <input
            type='intger'
            name='age'
            value={age}
            onChange={handleChange}
            />
            </label>
        <br />
        <label>
        <p>Email:</p>
                <input
                  type='email'
                  name='email'got
                  value={email}
                  onChange={handleChange}
                />
          </label>
          <label>
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
