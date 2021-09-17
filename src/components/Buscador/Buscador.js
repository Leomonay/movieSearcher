import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addMovieFavorite, getMovies } from '../../actions/actions'
import './Buscador.css'

function Buscador(){
    const movies = useSelector((state)=>state.moviesLoaded)
    const favMovies = useSelector((state)=>state.movies)
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getMovies(title))
        setTitle('')
    }

    function handleClick(movie){
      if(!(favMovies.find(element=>element.imdbID===movie.imdbID))){
      dispatch(addMovieFavorite(movie))
      }
    }

    return (
        <div className='pageContainer'>
          <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
            <h3>Searcher</h3>
            <div className="barra">
              <label className="label" htmlFor="title">Title: </label>
              <input
                type="text"
                id="title"
                autoComplete="off"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <button type="submit">Search</button>
            </div>
          </form>
            {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */
            <div className="containerSearch">
              {movies.map((movie)=>(
                
                <div className='liCom' key={movie.imdbID}>
                  <img src={movie.Poster} className='liImg' alt={movie.Title}/>
                  <h4><Link to={`/movie/${movie.imdbID}`}>
                    {movie.Title}
                  </Link></h4>
                  <button onClick={()=>{handleClick(movie)}}>ADD FAV</button>
                </div>
                
              ))}
            </div>
            }
          </div>
    );
}

export default Buscador