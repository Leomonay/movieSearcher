import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { removeFavoriteMovie } from "../../actions/actions";
import './Favorites.css';

function Favorites(){
  const movies = useSelector((state)=>state.movies)
  const dispatch = useDispatch()

    return (
    <div className='pageContainer'>
      <h2>Favorite Movies</h2>
      <div className='favContainer'>
          {
            movies.map ((movie) =>{
              const backgroundImage=`url(${movie.Poster})`
              return(
              <div className="liFav" key={movie.imdbID} style={{'background-image':backgroundImage}} >
                <img src={movie.Poster}  className="liImage"  alt={movie.Title}/>
                <h3 className='movieTitle'>
                  <Link to={`/movie/${movie.imdbID}`}>
                    {movie.Title}
                  </Link>
                </h3>
                <button className='deleteButton' onClick={() => dispatch(removeFavoriteMovie(movie.imdbID))}>
                  Remove from favorites
                </button>
              </div>
            )}
          )}
      </div>
    </div>
  );
}

export default Favorites
