import React from 'react';
import { Link } from 'react-router-dom';


export default function Layout({ currentUser, handleLogout }) {

  return (
    <div className="gridcontainers">
        <h3>MessageMe</h3>
      {currentUser ? (
        <div>
          <p>{currentUser.first_name}</p>
          <p>{currentUser.last_name}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
          <Link to='/Login'>
            <h5>Login</h5>
            <h5>Register</h5>
          </Link>
      )}
    </div>
  );
}
