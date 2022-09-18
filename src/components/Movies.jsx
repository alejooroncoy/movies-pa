import useMovies from "../hooks/useMovies";
import Loader from "./Loader";
import Movie from "./Movie";

const Movies = () => {
  const [movies, { searchMoreMovies, loading }] = useMovies(1);
  const handleClickShowMore = () => searchMoreMovies();
  return (
    <>
      {movies &&
        movies.map(
          (
            {
              vote_average,
              release_date,
              adult,
              popularity,
              backdrop_path,
              overview,
              title,
              id,
            },
            index
          ) => (
            <Movie
              vote_average={vote_average}
              adult={adult}
              popularity={popularity}
              srcImage={backdrop_path}
              date={release_date}
              description={overview}
              title={title}
              position={index % 2 !== 0 && "right"}
              key={id}
            />
          )
        )}
      {loading && <Loader />}
      <button
        onClick={handleClickShowMore}
        className="button button--show-more"
      >
        Ver más películas
      </button>
    </>
  );
};

export default Movies;
