import React from 'react';
import Login from '../screens/Login.jsx'; 
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Register from '../screens/Register.jsx';
import { Route } from 'react-router-dom';
import { 
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from '../services/auth.js';

export default function Layout(props) {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    // history.push('/');
  };
  
  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    // history.push('/');
  };

  return (
    <div className="gridcontainers">
      <navbar>
        <Route path='/login'>
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path='/register'>
          <Register handleRegister={handleRegister} />
        </Route>
      </navbar>
      <aside>
      </aside>
      <main>
        {props.children}
      </main>
      <aside>
      </aside>
    </div>
  );
}
