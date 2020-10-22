import React from 'react';
import request from './components/helpers/request';
import { Banner } from './components/Banner/Banner';
import { Navbar } from './components/UI/Navbar';
import Row from './components/Row/Row';

import './index.css';


function App() {

  const { fetchTrending, fetchNetflixOriginals, fetchTopRated, fetchActionMovies, 
        fetchComedyMovies, fetchHorrorMovies, fetchRomanceMovies, fetchDocumentaries } = request;


  return (
    <div className="App">
      
    {/* navbar */}
    <Navbar />
    {/* banner */}
    <Banner />
    <Row title = "NETFLIX ORIGINALS" fetchUrl = { fetchNetflixOriginals } isLargeRow />
    <Row title = "Trending Now" fetchUrl = { fetchTrending } />
    <Row title = "Top Rated" fetchUrl = { fetchTopRated } />
    <Row title = "Action Movies" fetchUrl = { fetchActionMovies } />
    <Row title = "Comedy Movies" fetchUrl = { fetchComedyMovies } />
    <Row title = "Horror Movies" fetchUrl = { fetchHorrorMovies } />
    <Row title = "Romance Movies" fetchUrl = { fetchRomanceMovies } />
    <Row title = "Documentaries" fetchUrl = { fetchDocumentaries } />
    
      </div>
  );
}

export default App;
