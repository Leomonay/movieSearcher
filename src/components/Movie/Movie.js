import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getMovieDetail } from '../../actions/actions';
import './Movie.css';

function Movie(){
  const dispatch = useDispatch()
  const {id}=useParams()
  useEffect(()=>{dispatch(getMovieDetail(id))})

  const detail = useSelector((state=>state.movieDetail))

  
        return (
            <div className="pageContainer">
                   <div className="movie-card">
                     <div className="container">
                       <div className="column">
                         <div className="title">
                         <h1>{detail.Title}</h1>
                         </div>
                         <div className="description">
                             {detail.Plot }
                         </div>
                       </div>
                       <div className="column">
                         <img src={detail.Poster} alt={detail.Title}></img>
                       </div>
                     </div>
                   </div>
            </div>
        );
    }

export default Movie