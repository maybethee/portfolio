import "./App.css";
import { Mail } from "lucide-react";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="left-col">
          <div className="left-col-header">
            <h1>Raphael Schnee</h1>
            <div className="contact">
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/raphael-schnee"
              >
                <svg
                  width="800px"
                  height="800px"
                  viewBox="-1 -1 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 3.47059V20.5294C22 20.9194 21.845 21.2935 21.5692 21.5693C21.2935 21.8451 20.9194 22 20.5294 22H3.47056C3.08053 22 2.70648 21.8451 2.43069 21.5693C2.15491 21.2935 1.99997 20.9194 1.99997 20.5294V3.47059C1.99997 3.08056 2.15491 2.70651 2.43069 2.43073C2.70648 2.15494 3.08053 2 3.47056 2H20.5294C20.9194 2 21.2935 2.15494 21.5692 2.43073C21.845 2.70651 22 3.08056 22 3.47059V3.47059ZM7.88232 9.64706H4.94115V19.0588H7.88232V9.64706ZM8.14703 6.41176C8.14858 6.18929 8.10629 5.96869 8.02258 5.76255C7.93888 5.55642 7.81539 5.36879 7.65916 5.21039C7.50294 5.05198 7.31705 4.92589 7.1121 4.83933C6.90715 4.75277 6.68715 4.70742 6.46468 4.70588H6.41173C5.95931 4.70588 5.52541 4.88561 5.20549 5.20552C4.88558 5.52544 4.70585 5.95934 4.70585 6.41176C4.70585 6.86419 4.88558 7.29809 5.20549 7.61801C5.52541 7.93792 5.95931 8.11765 6.41173 8.11765V8.11765C6.63423 8.12312 6.85562 8.0847 7.06325 8.00458C7.27089 7.92447 7.46071 7.80422 7.62186 7.65072C7.78301 7.49722 7.91234 7.31346 8.00245 7.10996C8.09256 6.90646 8.14169 6.6872 8.14703 6.46471V6.41176ZM19.0588 13.3412C19.0588 10.5118 17.2588 9.41177 15.4706 9.41177C14.8851 9.38245 14.3021 9.50715 13.7798 9.77345C13.2576 10.0397 12.8142 10.4383 12.4941 10.9294H12.4117V9.64706H9.64703V19.0588H12.5882V14.0529C12.5457 13.5403 12.7072 13.0315 13.0376 12.6372C13.368 12.2429 13.8407 11.9949 14.3529 11.9471H14.4647C15.4 11.9471 16.0941 12.5353 16.0941 14.0176V19.0588H19.0353L19.0588 13.3412Z"
                    strokeWidth={1.2}
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                className="contact-link"
                href="mailto:raphaelschnee.send@gmail.com"
              >
                <Mail strokeWidth={1.4} />
              </a>
            </div>
          </div>
        </div>
        <div className="right-col">
          <section id="projects-section">
            <ul id="projects">
              <li className="project-container">
                <a className="project-link" href="https://gawlf.fly.dev">
                  <img src="src/assets/golf-screenshot.png" alt="" />
                  <h2 className="project-title">Gawlf</h2>
                </a>
                <p className="project-description">
                  A turn-based multiplayer game to play online with friends,
                  based on the classNameic playing card game Golf, made using
                  React and Ruby on&nbsp;Rails.
                </p>
              </li>

              <li className="project-container">
                <a className="project-link" href="https://statchasing.fly.dev">
                  <img src="src/assets/statchasing-screenshot.png" alt="" />
                  <h2 className="project-title">Statchasing</h2>
                </a>
                <p className="project-description">
                  A site for Rocket League players, made with React and Ruby on
                  Rails, which provides interesting analytic data in addition to
                  what can be found on
                  <a href="https://ballchasing.com">ballchasing.com</a>, via
                  its&nbsp;API.
                </p>
              </li>

              <li className="project-container">
                <a
                  className="project-link"
                  href="https://tchnlgy-str.netlify.app/"
                >
                  <img src="src/assets/shopping-cart-screenshot.png" />
                  <h2 className="project-title">The Technology Store</h2>
                </a>
                <p className="project-description">
                  A mock store made with React to practice implementing
                  client-side routing using the React Router DOM library,
                  featuring dummy products sourced from
                  <a href="https://fakestoreapi.com/">Fake Store&nbsp;API</a>.
                </p>
              </li>

              <li className="project-container">
                <a className="project-link" href="https://frendo.fly.dev/">
                  <img src="src/assets/frendo-screenshot.png" />
                  <h2 className="project-title">Frendo</h2>
                </a>
                <p className="project-description">
                  A social media clone built with Ruby on Rails, complete with
                  authentication using Devise, user profiles, and
                  following&nbsp;functionality.
                </p>
              </li>

              <li className="project-container">
                <a className="project-link" href="https://pkmem.netlify.app/">
                  <img src="src/assets/poke-memory-screenshot.png" />
                  <h2 className="project-title">Poké-Memory</h2>
                </a>
                <p className="project-description">
                  A simple memory game made with React using images sourced
                  from&nbsp;<a href="https://pokeapi.co/">PokéAPI</a>.
                </p>
              </li>

              <li className="project-container">
                <a className="project-link" aria-disabled="true">
                  <img src="src/assets/battleship-screenshot.png" />
                  <h2 className="project-title">Battleship</h2>
                </a>
                <span>
                  CURRENTLY UNDER CONSTRUCTION <br />{" "}
                </span>
                <p className="project-description">
                  A classic game of battleship, to be played either vs. a
                  computer opponent, or a friend&nbsp;locally.
                </p>
              </li>

              <li className="project-container">
                <a
                  className="project-link"
                  href="https://maybethee.github.io/weather-app"
                >
                  <img src="src/assets/weather-app-screenshot.png" />
                  <h2 className="project-title">Weather App</h2>
                </a>
                <p className="project-description">
                  Checks the current weather in any city using
                  <a href="https://www.visualcrossing.com/weather-api">
                    Visual Crossing's API
                  </a>
                  , including the temperature in both Fahrenheit or Celsius.
                  Also displays a cute icon depending on
                  weather&nbsp;conditions!
                </p>
              </li>

              <li className="project-container">
                <a
                  className="project-link"
                  href="https://maybethee.github.io/js-todo"
                >
                  <img src="src/assets/todo-screenshot.png" />
                  <h2 className="project-title">TBD✓</h2>
                </a>
                <p className="project-description">
                  A site that lets you track life's many projects and tasks with
                  ease. Featuring persisting data, dynamic light/dark theme
                  based on your system's theme, and some fancy&nbsp;animations.
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
