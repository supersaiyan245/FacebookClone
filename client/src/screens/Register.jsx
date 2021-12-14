import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register({ handleRegister }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    age: 0,
    email: '',
    password: '',
  });
  const {first_name, last_name, age, email, password } = formData;

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
    <form onSubmit={handleSubmit}>
      <h3>Register</h3>
      <label>
       First Name:
        <input
          type='text'
          name='First Name`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        '
          value={first_name}
          onChange={handleChange}
          />
          </label>
          <br />
            <label>
              Last Name:
              <input
                type='text'
                name='Last Name'
                value={last_name}
                onChange={handleChange}
              />
        </label>
      <label>
       age:
        <input
          type='intger'
          name='age'
          value={age}
          onChange={handleChange}
          />
          </label>
      <br />
      <label>
              Email:
              <input
                type='email'
                name='Email'
                value={email}
                onChange={handleChange}
              />
        </label>
        <label>
                Password:
                <input
                  type='password'
                  name='password'
                  value={password}
                  onChange={handleChange}
                />
          </label>
          <Link to='/register'>Register</Link>
          <button>Submit</button>
        </form>
      );
    }
