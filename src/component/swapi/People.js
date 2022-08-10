export default function People(props) {
  const results = [];

  props.data.forEach((person) => {
    results.push(
      <div className="return-item" key={props.data.indexOf(person)}>
        <ul>
          <li className="name">{person.name}</li>
          <li>Eye Color: {person.eye_color}</li>
          <li>Hair Color: {person.hair_color}</li>
          <li>Birth Year: {person.birth_year}</li>
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
