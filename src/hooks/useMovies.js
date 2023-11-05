import resultados from "../mocks/resultados.json";
import sinResultado from "../mocks/sinResultado.json";
import { useState, useEffect, useRef} from 'react'

const API_key ='aeee8a531e2a4b2fc0b4a86aaf3bdd3a'


export function useMovies({ query, page }){

    const populares= `https://api.themoviedb.org/3/movie/popular?language=es-CO.desc&api_key=${API_key}&page=${page}`
    const [responseMovies, setResponseMovies]= useState([]);
    useEffect(() => {
      fetch(populares)
        .then(response => response.json())
        .then(data => setResponseMovies(data));
    }, []);
    const urlQuery =  `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_key}&page=${page}`
    useEffect(()=>{
      getMovies()
    },[page])

    const movies= responseMovies.results;

    const mappedMovies = movies?.map(movie =>({
      id: movie.id,
      title: movie.original_title,
      year: movie.release_date,
      poster: movie.poster_path,
      imgTitle: movie.title,
  }))


  const getMovies= () =>{
      
    if(query== ''){
      fetch(populares)
      .then(res =>res.json())
      .then(json => setResponseMovies(json))
    }
    else if(query){
      // setResponseMovies(resultados);
      fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_key}&page=${page}`)
      .then(res =>res.json())
      .then(json => setResponseMovies(json))
    }
    else{
      setResponseMovies(sinResultado);
    }
  }

    return {results: mappedMovies, getMovies,responseMovies}
  }
  