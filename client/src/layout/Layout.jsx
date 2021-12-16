import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Layout.css'

export default function Layout({ currentUser, handleLogout, children }) {

  return (
    <div>
        <navbar className="gridcontainers">
            <h3>MessageMe</h3>
          {currentUser ? (
            <div>
              <p>{currentUser.first_name}</p>
              <p>{currentUser.last_name}</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
              <Link className="link"to='/Login'>Login</Link>
          )}
        <Link className="link" to='/Register'>Register</Link>
        </navbar>
      {children}
    </div>
  );
}
