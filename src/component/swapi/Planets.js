export default function Planet(props) {
  const results = [];

  props.data.forEach((planet) => {
    results.push(
      <div className="return-item" key={props.data.indexOf(planet)}>
        <ul>
          <li className="name">{planet.name}</li>
          <li>Climate: {planet.climate}</li>
          <li>Population: {planet.population}</li>
          <li>Terrain: {planet.terrain}</li>
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
