import { useState, useEffect } from "react";

export default function Jokes() {
  const [jokeSetup, setJokeSetup] = useState("");
  const [jokePunchline, setJokePunchline] = useState("");
  const [renderSetup, setRenderSetup] = useState(false);
  const [renderPunchline, setRenderPunchline] = useState(false);
  const options = {
    method: "GET",
    url: "https://dad-jokes.p.rapidapi.com/random/joke",
    headers: {
      "X-RapidAPI-Key": "65e8b2a64bmsh58103d90613bf7ap1ca147jsnff4e91c257c9",
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
    },
  };

  const handleSetup = () => {
    setRenderPunchline(false);
    fetch("https://dad-jokes.p.rapidapi.com/random/joke", options)
      .then((response) => response.json())
      .then((response) => {
        setJokeSetup(response.body[0].setup);
        setJokePunchline(response.body[0].punchline);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (jokeSetup !== "") {
      setRenderSetup(true);
    }
  }, [jokeSetup]);

  const setup = () => {
    return <div>{jokeSetup}</div>;
  };

  const punchline = () => {
    return <div>{jokePunchline}</div>;
  };

  return (
    <div className="bad-joke-wrapper">
      <h2>Questionable (at times appalling) 'Dad' Jokes</h2>
      <h4>Consider yourself warned, Ryan. These are bad.</h4>
      <div className="button-wrapper">
        <button onClick={handleSetup}>Setup</button>
        {renderSetup && setup()}
      </div>
      <div className="button-wrapper">
        <button onClick={() => setRenderPunchline(true)}>Punchline</button>
        {renderPunchline && punchline()}
      </div>
    </div>
  );
}
