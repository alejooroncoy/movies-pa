import { DateTime } from "luxon";
import MovieShowMore from "./ShowMore";
import "../../styles/modules/movie.scss";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w1280";

const Movie = ({
  vote_average,
  popularity,
  title,
  srcImage,
  adult,
  description,
  date,
  position = "left",
}) => {
  const dateRelease = DateTime.fromSQL(date);
  const positions = {
    right: 1,
    left: 0,
  };
  return (
    <article className="movie">
      <div className="movie-container">
        <div
          style={{
            order: positions[position],
          }}
          className="movie__img-container"
        >
          <img
            loading="lazy"
            width={400}
            height={250}
            className="movie__img"
            src={`${BASE_IMG_URL}${srcImage}`}
            alt={`Image's ${title}`}
          />
        </div>
        <div className="movie__content">
          <h2 className="movie__content__title">{title}</h2>
          <h6 className="movie__content__info-extra">
            MOVIE | {dateRelease.day} {dateRelease.monthShort.toUpperCase()}{" "}
            {dateRelease.year}
          </h6>
          <p className="movie__content__description">{description}</p>
          <MovieShowMore
            vote_average={vote_average}
            popularity={popularity}
            adult={adult}
          />
        </div>
      </div>
    </article>
  );
};

export default Movie;
