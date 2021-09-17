const apiKey = 'b150783a'


export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }
  
  export function getMovies(titulo) {
    return async function(dispatch) {
      return fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=` + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }

  export function getMovieDetail(id) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=` + id)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
        });
    };
  }


  export function removeFavoriteMovie(payload) {
    return { type: "REMOVE_FAVORITE_MOVIE", payload };
  }