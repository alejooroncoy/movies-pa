import { useEffect, useReducer } from "react";
import loadMovies from '../utils/loadMovies';

const reducer = (payload, { action, data }) => {
  switch (action) {
    case 'loading':
      return {
        ...payload,
        loading: data,
      };
    case 'movies': 
      return {
        ...payload,
        movies: data,
      };
    case 'page': 
      return {
        ...payload,
        page: data,
      };
    default:
      return payload;
  }
}

export default function useMovies(numberPage = 1, language) {
  const [{
    loading, 
    movies, 
    page,
  }, updateState] = useReducer(reducer, {
    loading: true,
    movies: [],
    page: numberPage,
  },)
  const loadAndUpdateMovies = async () => {
    const [moviesData] = await loadMovies(page, language);
    updateState({
      data: false,
      action: 'loading'
    })
    updateState({
      data: [...movies, ...moviesData],
      action: 'movies'
    });
  }
  const searchMoreMovies = () => {
    updateState({
      data: page + 1,
      action: 'page'
    });
    updateState({
      data: true,
      action: 'loading'
    });
  }
  useEffect(() => {
    loadAndUpdateMovies();
  }, [page])
  return [movies, {
    searchMoreMovies,
    loading
  }];
}