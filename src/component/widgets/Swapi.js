import { useState, useEffect } from "react";

import People from "../swapi/People";
import Films from "../swapi/Films";
import Planets from "../swapi/Planets";

export default function Swapi() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchSubject, setSearchSubject] = useState("people");
  const [renderResponse, setRenderResponse] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    if (data.length > 0) {
      setRenderResponse(true);
    }
    setSearchTerm("");
  }, [data]);

  async function fetchData() {
    await fetch(`https://swapi.dev/api/${searchSubject}/?search=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      })
      .catch((err) => console.error(err));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const handleChange = (e) => {
    setSearchSubject(e.target.value);
    setRenderResponse(false);
  };

  const renderData = () => {
    if (searchSubject === "people") {
      return <People data={data} />;
    } else if (searchSubject === "films") {
      return <Films data={data} />;
    } else {
      return <Planets data={data} />;
    }
  };

  return (
    <div className="swapi-wrapper">
      <h2>Search the Swapi API</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="text-input"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm((t) => e.target.value)}
        />
        <button type="submit">Search</button>

        <div className="options-wrapper">
          <div>
            <label htmlFor="option">People</label>
            <input
              type="radio"
              value="people"
              name="option"
              checked={searchSubject === "people" ? true : false}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="option">Films</label>
            <input
              type="radio"
              value="films"
              name="option"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="option">Planets</label>
            <input
              type="radio"
              value="planets"
              name="option"
              onChange={handleChange}
            />
          </div>
        </div>
      </form>

      {renderResponse && renderData()}
    </div>
  );
}
