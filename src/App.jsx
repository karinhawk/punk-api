import React, { useEffect } from 'react'
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss"


import Navbar from './containers/Navbar/Navbar'
import Main from "./containers/Main/Main"
import Header from "./components/Header/Header"
import BeerPage from './containers/BeerPage/BeerPage';

const App = () => {

  const [beers, setBeers] = useState([]);
  const [pending, setPending] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState(null)

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
      setFilter(filteredBeers);
    } else {
      setFilter(beers);
    }
  }




  return (
    <Router>
    <div className='app'>
      <Header />
      <div className='app__content'>
        <div className='app__nav'>
          <Navbar beers={beers} handleFilter={handleFilter} handleInput={handleInput} searchTerm={searchTerm} />
        </div>
        {pending && <div className='loading'>Loading...</div>}
        <Routes>
        <Route path="/beer/:beerId" element={<BeerPage beersArr={beers}/>} />
        <Route path="/" element={beers && <Main beersArr={searchTerm.length < 1 ? beers : filter}/>}/>
        </Routes>
      </div>
    </div>
    </Router>
  )
}

export default App

//more styling
//hover on image?
//hover on go back link
//cue cards for presentation
//deploy using special way
//scss variables