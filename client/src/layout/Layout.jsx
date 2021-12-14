import React from 'react';
import Login from '../screens/Login.jsx'; 
import { useHistory } from 'react-router-dom';
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from '../services/auth.js';

export default function Layout(props) {
  // const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = async (formData) => {
  //   const userData = await loginUser(formData);
  //   setCurrentUser(userData);
    history.push('/');
  };

  return (
    <div className="gridcontainers">
        <navbar>
          <Login handleLogin={ handleLogin }/>
        </navbar>
        <aside>
        </aside>
        <main>
          {props.children}
        </main>
        <aside>
        </aside>
    </div>
  )
}
