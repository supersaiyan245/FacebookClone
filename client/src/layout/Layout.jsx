import React from 'react';
import { Link } from 'react-router-dom';


export default function Layout(currentUser, handleLogout) {

  return (
    <div className="gridcontainers">
       <Link to='/Home'>posts</Link>
        <h3>MessageMe</h3>
      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to='/Login'>Login</Link>
        <Link to='/Register'>Register</Link>
      )}
    </div>
  );
}
