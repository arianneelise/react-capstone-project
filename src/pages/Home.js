import Widget from "../component/Widget";
import Space from "../images/space.jpg";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-hero">
        <Widget img={Space} name="Swapi" />
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
