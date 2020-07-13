import React,{useState,useEffect} from 'react';
import http from '../../utils/http'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'


let imageBaseUrl = "https://image.tmdb.org/t/p/original"
function Row({title,fetchUrl,isLargeRow}){

    let [movies,setMovies] = useState([])
    let [trailerUrl,setTrailerUrl] = useState("")

    
    useEffect(()=>{
        async function fetchData() {
            let allMovies = await http.get(fetchUrl);
            // console.table(allMovies.data.results)
            setMovies(allMovies.data.results)
            return allMovies
        }

        fetchData()

    }, [fetchUrl])
    // console.log(movies);
    const handleClick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl("")
        }else{
            movieTrailer(movie?.name || "")
            .then(url =>{
                let urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
                console.log(urlParams.get('v'))
            }).catch(err => console.log(err))
        }
    }
    //config for react youtube
    const opts = {
        height : "390",
        width : "100%",
        playerVars :{
            autoplay: 1,

        }
    }

    return(
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
                {movies.map((movie)=>(
                    <img onClick={()=> handleClick(movie)} className={`row__poster ${isLargeRow && "row__posterLarge"}`} key={movie.id} src={`${imageBaseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>                ))}
            </div>
            { trailerUrl && <YouTube videoId={trailerUrl}  opts={opts}/>}
        </div>
    )
}

export default Row