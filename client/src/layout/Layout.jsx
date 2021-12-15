import React from 'react';
import Login from '../screens/Login.jsx'; 
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Register from '../screens/Register.jsx';
import { Route } from 'react-router-dom';


export default function Layout(props) {


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
