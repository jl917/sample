import React from 'react'
import { Counter } from './Counter'

export { Page }

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML2.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  )
}
