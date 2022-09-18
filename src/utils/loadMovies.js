import { optionsFetch } from "../config/optionsFetch";

export default async function loadMovies(page = 1, language = 'en-US', amount = 10) {
  const baseURL = 'https://api.themoviedb.org/3';
  const URI = `/discover/movie?page=${page}&language=${language}`;
  const response = await fetch(baseURL.concat(URI), optionsFetch);
  const data = await response.json();
  return [data.results, data.page];
}