import { useState, useEffect, useRef } from 'react'
import './App.css'
import { Movies } from './components/movies';
import { useMovies } from './hooks/useMovies';
import Pagination from 'react-bootstrap/Pagination';

function useSearch() {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);
  useEffect(() => {
    if (query.startsWith(' ')) {
      setQuery(query.trim())
      return
    }

    if (isFirstInput.current) {
      isFirstInput.current = query === '';
      return
    }
    if (query === '') {
      setError('No se puede busca una pelicula sin nombre')
      return
    }
    setError(null)
  }, [query])
  return { query, setQuery, error }
}

function App() {
  const { query, setQuery, error } = useSearch();
  const [page, setPage] = useState(1);
  const { results: mappedMovies, getMovies, responseMovies } = useMovies({ query, page });
  const [itemPagination, setItemPagination] = useState([]);
  let totalPages = responseMovies.total_pages;
  if (totalPages > 50) { totalPages = 30; }
  useEffect(() => {
    let items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(<Pagination.Item key={i} onClick={(e) => {
        setPage(parseInt(e.target.text))
        getMovies();
      }}>{i}</Pagination.Item>)

    }
    setItemPagination(items)
  }, [responseMovies]);



  const handleSubmit = (event) => {
    event.preventDefault();
    setPage(1)
    getMovies()
  }


  const handleChange = (event) => {
    setQuery(event.target.value);
  }
  return (
    <div className='page'>
      <header>
        <h1>Buscador de multimedia</h1>
        <form onSubmit={handleSubmit} className='form'>
          <input onChange={handleChange} value={query} name='query' type="text" placeholder='Five Nights at Freddy, Saw X, The Exorcist: Believer...' />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
      </main>
      <footer>
        <Movies movies={mappedMovies} />
        <Pagination >
          <Pagination.Prev onClick={(e)=>{
            if(page>1){
              setPage(page-1)
              getMovies();
            }
          }} />
          {itemPagination.map((item) => {
            return item
          })}
          <Pagination.Next onClick={(e)=>{
            if(page<totalPages){
              setPage(page+1)
              getMovies();
            }
          }} />
        </Pagination>
      </footer>
    </div>
  )
}

export default App
