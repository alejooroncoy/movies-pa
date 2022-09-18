import { useEffect, useState } from "react";

const Feature = ({ name, value }) => {
  return (
    <div className="movie__content__feature movie__content__feature movie__content__feature">
      <h2 className="movie__content__feature-title">{name}</h2>
      <span className="movie__content__feature-value">{value}</span>
    </div>
  );
};

const MovieShowMore = ({ popularity, adult, vote_average }) => {
  const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState(isOpen);
  const handleClickShowMore = () => setOpen(!isOpen);
  useEffect(() => {
    if (isOpen) setShow(true);
  }, [isOpen]);

  const handleTransitionEndOpen = () => !isOpen && setShow(false);

  return (
    <>
      <div
        onTransitionEnd={handleTransitionEndOpen}
        className={`movie__content__feature-container movie__content__feature-container--${
          isOpen ? "open" : "close"
        }`}
      >
        {show && (
          <>
            <Feature name="popularity" value={popularity} />
            <Feature name="a. content" value={adult ? "Sí" : "No"} />
            <Feature name="punctuation" value={vote_average} />
          </>
        )}
      </div>
      <button onClick={handleClickShowMore} className="button button--movie">
        {isOpen ? "Leer menos" : "Leer más"}
      </button>
    </>
  );
};

export default MovieShowMore;
