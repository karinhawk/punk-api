import React, { useEffect } from 'react'
import { useState } from "react";
import "./App.scss"

import Navbar from './containers/Navbar/Navbar'
import Main from "./containers/Main/Main"

const App = () => {

  const [beers, setBeers] = useState(null);
  const [pending, setPending] = useState(true);

  // useEffect(() => {
  //   fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
  //   .then(response => {
  //     if(!response.ok){
  //       throw Error('cannot fetch data :(')
  //     } else {
  //       return response.json()
  //     }
  //   })
  //   .then((data) => {
  //     setBeers(data)
  //     setPending(false)
  //   })
  //   .catch((error) => {
  //     console.log("failed to fetch");
  //   })
  // }, []);

  const loadData = async () => {
    try {
    const url = 'https://api.punkapi.com/v2/beers?page=1&per_page=80';
    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);
    setPending(false);
    } catch(error) {
      console.log(error);
    }
  }

  ( async () => {
    const data = await loadData();
    return data;
  })();
  

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
          {pending && <div>Loading...</div>}
        {beers &&
          <Main beers={beers}/>
        }
        </section>
      </div>
    </div>
  )
}

export default App

//.then api fetching
//try catch error while api is loading- do not render
//filter