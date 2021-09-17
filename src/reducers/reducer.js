const initialState = {
    movies: [],
    moviesLoaded: [],
    movieDetail: {}
  };

  function rootReducer(state = initialState, action) {
    switch (action.type){
      case "ADD_MOVIE_FAVORITE":
        return {
          ...state,
          movies: state.movies.concat(action.payload)
        };
        
      case "GET_MOVIES":
          return {...state,
          moviesLoaded: action.payload.Search}

      case "REMOVE_FAVORITE_MOVIE":
        return {
          ...state,
          movies: state.movies.filter(movie=>movie.imdbID!==action.payload)
        }
      case "GET_MOVIE_DETAIL":
          return {...state,
          movieDetail: action.payload}

      default:
      return state;
    }
  }

  //   if (action.type === "ADD_MOVIE_FAVORITE") {

  //       return {
  //         ...state,
  //         movies: state.movies.concat(action.payload)
  //       }
  //   }
  //   if (action.type === "GET_MOVIES") {
  //       return {
  //         ...state,
  //         moviesLoaded: action.payload.Search
  //       };
  //   }
  //   return state;
  // }
  
  export default rootReducer;