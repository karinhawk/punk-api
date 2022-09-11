import React from 'react'
import "./App.scss"

import Navbar from './containers/Navbar/Navbar'
import Main from "./containers/Main/Main"

const App = () => {
  return (
    <div className='app'>
      <section className='app__heading'>
      <h1 className='app__logo'>Brewdog</h1>
      </section>
      <div className='app__content'>
        <section className='app__nav'>
          <Navbar />
        </section>
        <section className='app__main'>
          <Main />
        </section>
      </div>
    </div>
  )
}

export default App