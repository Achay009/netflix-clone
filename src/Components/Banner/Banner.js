import React,{useState,useEffect} from 'react';
import './Banner.css'
import http from '../../utils/http'
import {fetchNetflixOriginals} from '../../utils/requests'

let imageBaseUrl = "https://image.tmdb.org/t/p/original"
function Banner(){

    let [movie,setMovie] = useState([])

    useEffect(()=>{

            async function fetchData() {

                let movie = await http.get(fetchNetflixOriginals)
                setMovie(movie.data.results[Math.floor(Math.random() * movie.data.results.length - 1)])

                return movie
            }

        fetchData();
    }, [])
    // console.log(movie)
    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str
    }
    return(
        <header className="banner" 
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(${imageBaseUrl}${movie?.backdrop_path})`,
            backgroundPosition: "center center"
        }} >
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h3 className= "banner__descriptions"> {truncate(movie?.overview,100)}</h3>
            </div>
            <div className="banner__fadeBottom"></div>
        </header>
    )
}



export default Banner