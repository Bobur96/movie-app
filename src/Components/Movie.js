export default function Movie(props) {
  const { Title, Year, Type, imdbID, Poster } = props;

  return (
    <div className="card" key={imdbID}>
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={Poster} alt="rasm" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {Title}
        </span>
        <p>
          {Year}
          <span className="right">{Type}</span>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{Title}</span>
      </div>
    </div>
  );
}
