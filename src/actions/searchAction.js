import Axios from 'axios';
import {APIKey} from '../APIKeys';
import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from '../actions/types';

export const searchMovie = text=> dispatch=>{
    dispatch({
        type:SEARCH_MOVIE,
        payload:text
    });
};

export const fetchMovies = text => dispatch => {
    Axios
      .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
      .then(response =>
        dispatch({
          type: FETCH_MOVIES,
          payload: response.data
        })
      )
      .catch(err => console.log(err));
  };

  export const fetchMovie = id => dispatch => {
    Axios
      .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
      .then(response =>
        dispatch({
          type: FETCH_MOVIE,
          payload: response.data
        })
      )
      .catch(err => console.log(err));
  };

  export const setLoading = ()=> {
    return {
      type:LOADING
    }
  }