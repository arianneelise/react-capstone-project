export default function People(props) {
  const results = [];

  props.data.forEach((film) => {
    results.push(
      <div className="return-item" key={props.data.indexOf(film)}>
        <ul>
          <li className="name">{film.title}</li>
          <li>Director: {film.director}</li>
          <li>Release Date: {film.release_date}</li>
          <li>Episode ID: {film.episode_id}</li>
        </ul>
      </div>
    );
  });

  return (
    <div className="return-wrapper">
      <h2>Search Results</h2>
      {results}
    </div>
  );
}
