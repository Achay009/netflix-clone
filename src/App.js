import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Row from './Components/Row/Row'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import {
  fetchTrending,
  fetchNetflixOriginals,
  fetchTopRated,
  fetchActionMovies ,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchDocumentaries
} from './utils/requests'

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/*navbar*/}
      {/*Banner*/}
      <Banner/>
      <br/>
      <Row title="Netflix Originals" isLargeRow fetchUrl={fetchNetflixOriginals}/>
      <br />
      <Row title="Trending Now" fetchUrl={fetchTrending}/>
      <br />
      <Row title="Top Rated" fetchUrl={fetchTopRated}/>
      <br />
      <Row title="Action Movies" fetchUrl={fetchActionMovies}/>
      <br />
      <Row title="Comedy Movies" fetchUrl={fetchComedyMovies}/>
      <br />
      <Row title="Horror Movies" fetchUrl={fetchHorrorMovies}/>
      <br />
      <Row title="Romance Movies" fetchUrl={fetchRomanceMovies}/>
      <br />
      <Row title="Documentaries" fetchUrl={fetchDocumentaries}/>
    </div>
  ); 
}

export default App;
