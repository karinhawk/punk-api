import React, { useEffect } from 'react'
import { useState } from "react";
import "./App.scss"

import Navbar from './containers/Navbar/Navbar'
import Main from "./containers/Main/Main"

const App = () => {

  const [beers, setBeers] = useState(null);
  const [pending, setPending] = useState(true);
  const [url, setUrl] = useState('https://api.punkapi.com/v2/beers?page=2&per_page=80');
  const [searchTerm, setSearchTerm] = useState("");
  const [beersToMap, setBeersToMap] = useState("");


  const handleFilter = (e) => {
    const chosen = e.target.id;
    switch (chosen) {
      case "abv":
        console.log("abv")
        setUrl('https://api.punkapi.com/v2/beers?abv_gt=6')
        break;
      case "classics":
        console.log("classics")
        setUrl('https://api.punkapi.com/v2/beers?brewed_before=01-2010')
        break;
      case "acidity":
        console.log("acidity")
        break;
      default:
        setUrl('https://api.punkapi.com/v2/beers?page=2&per_page=80')
    }
  }

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setBeers(data);
        setPending(false);
      } catch (error) {
        console.log(error);
      }
    }
    loadData();
  }, [url]);


  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
    console.log(searchTerm);

    if (searchTerm !== "") {
      const filteredBeers = beers.filter((beer) => {
        return beer.name.toLowerCase().includes(searchTerm);
      })
      setBeersToMap(filteredBeers);
    } else {
      setBeersToMap(beers);
    }  
  }

  return (
    <div className='app'>
      <section className='app__heading'>
        <h1 className='app__logo'>Brewdog</h1>
      </section>
      <div className='app__content'>
        <section className='app__nav'>
          <Navbar beers={beers} handleFilter={handleFilter} handleInput={handleInput} searchTerm={searchTerm} />
        </section>
        <section className='app__main'>
          {pending && <div>Loading...</div>}
          {beers &&
            <Main beersArr={searchTerm.length == 0 ? beers : beersToMap}/>
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