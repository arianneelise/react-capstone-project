import Widget from "../component/Widget";
import Space from "../images/space.jpg";
import Clouds from "../images/clouds.jpg";
import Dictionary from "../images/dictionary.jpg";
import Laugh from "../images/laugh.jpg";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-hero">
        <Widget img={Space} name="Swapi" />
        <Widget img={Clouds} name="Weather" />
        <Widget img={Dictionary} name="Dictionary" />
        <Widget img={Laugh} name="Jokes" />
        <p>
          Look at the code on{" "}
          <a href="https://github.com/arianneelise/widgets-projects" target="/">
            Github
          </a>
        </p>
      </div>
    </div>
  );
}
