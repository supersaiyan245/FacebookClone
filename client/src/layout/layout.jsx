import React from 'react'



export default function layout(props) {
  return (
    <div className="gridcontainers">
        <navbar>
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
