


export const fetchTrending  = `trending/all/week?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
export const fetchNetflixOriginals  = `discover/tv?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_networks=213`
export const fetchTopRated = `movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
export const fetchActionMovies  = `discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=28`
export const fetchComedyMovies = `discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=35`
export const fetchHorrorMovies = `discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=27`
export const fetchRomanceMovies = `discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=10749`
export const fetchDocumentaries = `discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=99`

