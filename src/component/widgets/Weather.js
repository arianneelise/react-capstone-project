import { useEffect } from "react";
import { useState } from "react";

export default function Weather() {
  const [input, setInput] = useState("");
  const [cityName, setCityName] = useState("Orem");
  const [data, setData] = useState({});
  const [render, setRender] = useState(false);
  const [icon, setIcon] = useState("");
  const apiKey = "642669967fc7cb5019f0fd7d35e121fd";

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, [cityName, apiKey]);

  useEffect(() => {
    if (data.weather) {
      setIcon(data.weather[0]["icon"]);
      setRender(true);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCityName(input);
    setInput("");
  };

  const renderData = () => {
    return (
      <div className="weather-display">
        <h1>{data.name}</h1>
        <p>It is currently</p>
        <h2>{Math.floor(data.main["temp"])}°F</h2>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather icon"
        />
        <p>{data.weather[0]["description"]}</p>
        <p>
          High: {Math.floor(data.main["temp_max"])}°F Low:{" "}
          {Math.floor(data.main["temp_min"])}°F
        </p>
      </div>
    );
  };

  return (
    <div className="weather-wrapper">
      <h2>Current Weather</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder={input === "" ? "Type a city" : input}
        />
        <button type="submit">Submit</button>
      </form>
      {render && renderData()}
    </div>
  );
}
