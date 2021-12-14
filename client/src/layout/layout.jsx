import React from 'react'
import Login from './screens/Login.jsx';


export default function layout(props) {
  return (
    <div className="gridcontainers">
        <navbar>
          <Login />
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
