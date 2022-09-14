import React, { useEffect } from 'react'
import { useState } from "react";
import "./App.scss"
import logo from "./images/logo"

import Navbar from './containers/Navbar/Navbar'
import Main from "./containers/Main/Main"

const App = () => {

  const [beers, setBeers] = useState(null);
  const [pending, setPending] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");


  let url = "https://api.punkapi.com/v2/beers?page=1&per_page=80";

  const handleFilter = (e) => {

    if (e.target.checked) {
      if (e.target.id === "acidic") {
          console.log("acidic");
          setBeers(beers.filter((beer) => beer.ph <= 4))
          console.log(beers);
        } else if (e.target.id === "classics") {
            console.log("classics");
            loadData('https://api.punkapi.com/v2/beers?brewed_before=01-2010')
          } else if (e.target.id === "abv") {
            console.log("abv");
            loadData('https://api.punkapi.com/v2/beers?abv_gt=6')
          }
    } else {
      loadData('https://api.punkapi.com/v2/beers?page=1&per_page=80');
    }
  }

  useEffect(() => {
    loadData(url)
  }, []);

  const loadData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setBeers(data);
      setPending(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
    console.log(searchTerm);

    if (searchTerm !== "") {
      const filteredBeers = beers.filter((beer) => {
        return beer.name.toLowerCase().includes(searchTerm);
      })
      setBeers(filteredBeers);
    } 
  }




  return (
    <div className='app'>
      <section className='app__heading'>
        <img className='app__heading__logo' src={logo} alt="brewdog logo" />
        <h1 className='app__heading__text'>Brewdog</h1>
      </section>
      <div className='app__content'>
        <section className='app__nav'>
          <Navbar beers={beers} handleFilter={handleFilter} handleInput={handleInput} searchTerm={searchTerm} />
        </section>
        <section className='app__main'>
          {pending && <div>Loading...</div>}
          {beers &&
            <Main beersArr={beers}/>
          }
        </section>
      </div>
    </div>
  )
}

export default App

//sort by a-z and date brewed?
//maybe route pages so can look at beer info :)

//THEN style