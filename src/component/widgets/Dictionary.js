import { useEffect } from "react";
import { useState } from "react";

export default function Dictionary() {
  const [input, setInput] = useState("");
  const [word, setWord] = useState("babble");
  const [results, setResults] = useState({});
  const [render, setRender] = useState(false);

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data[0]);
        setInput("");
      })
      .catch((err) => console.error(err));
  }, [word]);

  useEffect(() => {
    if (results.word) {
      setRender(true);
    }
  }, [results]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setWord(input);
    setInput("");
  };

  const renderResults = () => {
    return (
      <div className="result-wrapper">
        <h2>{results.word}</h2>
        <h4>{results.phonetic}</h4>
        <div>
          {results.meanings[0].definitions.map((definition) => {
            return (
              <div
                className="definitions"
                key={results.meanings[0].definitions.indexOf(definition)}
              >
                {results.meanings[0].definitions.indexOf(definition) + 1}){" "}
                {definition.definition}
                {definition.synonyms[0] && (
                  <div className="synonym">
                    Synonym: {definition.synonyms[0]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="dictionary-wrapper">
      <h1>
        Dictionary | <span className="sub-heading">Type a word.</span>
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {render && renderResults()}
    </div>
  );
}
