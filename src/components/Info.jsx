import Movies from "./Movies";
import "../styles/modules/info.scss";

const Info = () => {
  return (
    <section className="info">
      <h2 className="info__title">🎥 Movies 🎥</h2>
      <div className="info-container">
        <Movies />
      </div>
    </section>
  );
};

export default Info;
