import axios from 'axios'

const http = axios.create({
    baseURL: process.env.REACT_APP_MOVIE_URL,
    proxyHeaders: false,
    credentials:false,
    timeout: 9000
})



export default http;