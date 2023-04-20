import React from 'react'
import './code.css'
import style from './test.module.css';

export { Page }

function Page() {
  console.log('about render')
  return (
    <>
      <h1 className={style.tm}>About2</h1>
      <p>
        Example of using <code>vite-plugin-ssr</code>.
      </p>
    </>
  )
}
