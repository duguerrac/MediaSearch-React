


const imgTranslate = 'https://image.tmdb.org/t/p/w300';

function listOfMovies({ movies }) {

    return (
        <>
            <ul className="movies">
                {movies.map(movie => (
                    <li className="movie" key={movie.id} >
                        <h3>{movie.title}</h3>
                        <p><b>Fecha de lanzamiento: </b>{movie.year}</p>
                        <img src={imgTranslate + movie.poster} alt={movie.imgTitle} />
                    </li>
                ))}
            </ul>
        </>

    )
}
function noMoviesResults() {
    return (
        <p>No hay resultados</p>
    )
}

export function Movies({ movies }) {
    const hayResultados = movies?.length > 0;
    return (
        hayResultados
            ? listOfMovies({ movies })
            : noMoviesResults()
    )
}
