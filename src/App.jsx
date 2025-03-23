import "./App.css";
import Links from "./Links";
import { Mail } from "lucide-react";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const setClass = () => {};
  return (
    <>
      <div className={`wrapper ${darkMode ? "dark" : "light"}`}>
        <div className="left-col">
          <div className="left-col-header">
            <h1>
              <strong>Raphael Schnee</strong>{" "}
            </h1>
            <div className="contact">
              <div onClick={() => setDarkMode(!darkMode)}>
                {!darkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`lucide lucide-moon ${
                      darkMode ? "dark" : "light"
                    }`}
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`lucide lucide-sun ${
                      darkMode ? "dark" : "light"
                    }`}
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                )}
              </div>
              <a href="https://github.com/maybethee">
                <svg
                  className={`${darkMode ? "dark" : "light"}`}
                  id="github-icon"
                  role="img"
                  viewBox="-4 -2 31 31"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/raphael-schnee"
              >
                <svg
                  id="linkedin-icon"
                  className={`${darkMode ? "dark" : "light"}`}
                  width="800px"
                  height="800px"
                  viewBox="-1 -1 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 3.47059V20.5294C22 20.9194 21.845 21.2935 21.5692 21.5693C21.2935 21.8451 20.9194 22 20.5294 22H3.47056C3.08053 22 2.70648 21.8451 2.43069 21.5693C2.15491 21.2935 1.99997 20.9194 1.99997 20.5294V3.47059C1.99997 3.08056 2.15491 2.70651 2.43069 2.43073C2.70648 2.15494 3.08053 2 3.47056 2H20.5294C20.9194 2 21.2935 2.15494 21.5692 2.43073C21.845 2.70651 22 3.08056 22 3.47059V3.47059ZM7.88232 9.64706H4.94115V19.0588H7.88232V9.64706ZM8.14703 6.41176C8.14858 6.18929 8.10629 5.96869 8.02258 5.76255C7.93888 5.55642 7.81539 5.36879 7.65916 5.21039C7.50294 5.05198 7.31705 4.92589 7.1121 4.83933C6.90715 4.75277 6.68715 4.70742 6.46468 4.70588H6.41173C5.95931 4.70588 5.52541 4.88561 5.20549 5.20552C4.88558 5.52544 4.70585 5.95934 4.70585 6.41176C4.70585 6.86419 4.88558 7.29809 5.20549 7.61801C5.52541 7.93792 5.95931 8.11765 6.41173 8.11765V8.11765C6.63423 8.12312 6.85562 8.0847 7.06325 8.00458C7.27089 7.92447 7.46071 7.80422 7.62186 7.65072C7.78301 7.49722 7.91234 7.31346 8.00245 7.10996C8.09256 6.90646 8.14169 6.6872 8.14703 6.46471V6.41176ZM19.0588 13.3412C19.0588 10.5118 17.2588 9.41177 15.4706 9.41177C14.8851 9.38245 14.3021 9.50715 13.7798 9.77345C13.2576 10.0397 12.8142 10.4383 12.4941 10.9294H12.4117V9.64706H9.64703V19.0588H12.5882V14.0529C12.5457 13.5403 12.7072 13.0315 13.0376 12.6372C13.368 12.2429 13.8407 11.9949 14.3529 11.9471H14.4647C15.4 11.9471 16.0941 12.5353 16.0941 14.0176V19.0588H19.0353L19.0588 13.3412Z"
                    strokeWidth={darkMode ? 0 : 1.25}
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                className="contact-link"
                href="mailto:raphaelschnee.send@gmail.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-mail ${
                    darkMode ? "dark" : "light"
                  }`}
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="right-col">
          <section id="projects-section">
            <ul id="projects">
              <li className="project-container">
                <a className="project-link" href="https://gawlf.fly.dev">
                  <img src="/golf-screenshot.png" alt="" />
                </a>
                <p className="project-description">
                  <span className="project-title">
                    <a
                      className={`project-link ${darkMode ? "dark" : "light"}`}
                      href="https://gawlf.fly.dev"
                    >
                      Gawlf
                    </a>
                  </span>
                  is a turn-based multiplayer game to play online with friends,
                  based on the classic playing card game Golf, made using React
                  and Ruby on&nbsp;Rails.
                </p>
                <Links
                  siteLink={"https://gawlf.fly.dev"}
                  repoLink={"https://github.com/maybethee/gawlf"}
                  darkMode={darkMode}
                />
              </li>

              <li className="project-container">
                <a className="project-link" href="https://statchasing.fly.dev">
                  <img src="statchasing-screenshot.png" alt="" />
                </a>
                <p className="project-description">
                  <span className="project-title">
                    <a
                      className={`project-link ${darkMode ? "dark" : "light"}`}
                      href="https://statchasing.fly.dev"
                    >
                      Statchasing
                    </a>
                  </span>
                  is a site for Rocket League players, made with React and Ruby
                  on Rails, which provides interesting analytic data in addition
                  to what can be found on{" "}
                  <a
                    className={`${darkMode ? "dark" : "light"}`}
                    href="https://ballchasing.com"
                  >
                    ballchasing.com
                  </a>
                  , via its&nbsp;API.
                </p>
                <Links
                  siteLink={"https://statchasing.fly.dev"}
                  repoLink={"https://github.com/maybethee/statchasing"}
                  darkMode={darkMode}
                />
              </li>

              <li className="project-container">
                <a
                  className="project-link"
                  href="https://tchnlgy-str.netlify.app/"
                >
                  <img src="/shopping-cart-screenshot.png" />
                </a>
                <p className="project-description">
                  <span className="project-title">
                    <a
                      className={`project-link ${darkMode ? "dark" : "light"}`}
                      href="https://tchnlgy-str.netlify.app/"
                    >
                      The Technology Store
                    </a>
                  </span>
                  is a mock store made with React to practice implementing
                  client-side routing using the React Router DOM library,
                  featuring dummy products sourced from{" "}
                  <a
                    className={`${darkMode ? "dark" : "light"}`}
                    href="https://fakestoreapi.com/"
                  >
                    Fake Store&nbsp;API
                  </a>
                  .
                </p>
                <Links
                  siteLink={"https://tchnlgy-str.netlify.app/"}
                  repoLink={"https://github.com/maybethee/shopping-cart"}
                  darkMode={darkMode}
                />
              </li>

              <li className="project-container">
                <a className="project-link" href="https://frendo.fly.dev/">
                  <img src="frendo-screenshot.png" />
                </a>
                <p className="project-description">
                  <span className="project-title">
                    <a
                      className={`project-link ${darkMode ? "dark" : "light"}`}
                      href="https://frendo.fly.dev/"
                    >
                      Frendo
                    </a>
                  </span>
                  is a social media clone built with Ruby on Rails, complete
                  with authentication using Devise, user profiles, and
                  following&nbsp;functionality.
                </p>
                <Links
                  siteLink={"https://frendo.fly.dev"}
                  repoLink={"https://github.com/maybethee/frendo"}
                  darkMode={darkMode}
                />
              </li>

              <li className="project-container">
                <a className="project-link" href="https://pkmem.netlify.app/">
                  <img src="/poke-memory-screenshot.png" />
                </a>
                <p className="project-description">
                  <span className="project-title">
                    <a
                      className={`project-link ${darkMode ? "dark" : "light"}`}
                      href="https://pkmem.netlify.app/"
                    >
                      Poké-Memory
                    </a>
                  </span>
                  is a simple memory game made with React using images sourced
                  from&nbsp;
                  <a
                    className={`${darkMode ? "dark" : "light"}`}
                    href="https://pokeapi.co/"
                  >
                    PokéAPI
                  </a>
                  .
                </p>
                <Links
                  siteLink={"https://pkmem.netlify.app/"}
                  repoLink={"https://github.com/maybethee/poke-memory"}
                  darkMode={darkMode}
                />
              </li>

              <li className="project-container">
                <a
                  className="project-link"
                  href="https://maybethee.github.io/battleship"
                >
                  <img src="/battleship-screenshot.png" />
                </a>

                <p className="project-description">
                  <span className="project-title">
                    <a
                      className={`project-link ${darkMode ? "dark" : "light"}`}
                      href="https://maybethee.github.io/battleship"
                    >
                      Battleship
                    </a>
                  </span>
                  is exactly what you think: a classic game of battleship, to be
                  played against a computer opponent, written in
                  vanilla&nbsp;JavaScript.
                </p>
                <Links
                  siteLink={"https://maybethee.github.io/battleship"}
                  repoLink={"https://github.com/maybethee/battleship"}
                  darkMode={darkMode}
                />
              </li>

              <li className="project-container">
                <a
                  className="project-link"
                  href="https://maybethee.github.io/weather-app"
                >
                  <img src="/weather-app-screenshot.png" />
                </a>
                <p className="project-description">
                  <span className="project-title">
                    <a
                      className={`project-link ${darkMode ? "dark" : "light"}`}
                      href="https://maybethee.github.io/weather-app"
                    >
                      Weather App
                    </a>
                  </span>
                  (as the name suggests) checks the current weather in any city
                  using{" "}
                  <a
                    className={`${darkMode ? "dark" : "light"}`}
                    href="https://www.visualcrossing.com/weather-api"
                  >
                    Visual Crossing's API
                  </a>
                  , including the temperature in both Fahrenheit or Celsius.
                  Also displays a cute icon depending on
                  weather&nbsp;conditions!
                </p>
                <Links
                  siteLink={"https://maybethee.github.io/weather-app"}
                  repoLink={"https://github.com/maybethee/weather-app"}
                  darkMode={darkMode}
                />
              </li>

              <li className="project-container">
                <a
                  className="project-link"
                  href="https://maybethee.github.io/js-todo"
                >
                  <img src="/todo-screenshot.png" />
                </a>
                <p className="project-description">
                  <span className="project-title">
                    <a
                      className={`project-link ${darkMode ? "dark" : "light"}`}
                      href="https://maybethee.github.io/js-todo"
                    >
                      TBD✓
                    </a>
                  </span>
                  is a site that lets you track life's many projects and tasks
                  with ease. Featuring persisting data, dynamic light/dark theme
                  based on your system's theme, and some fancy&nbsp;animations.
                </p>
                <Links
                  siteLink={"https://maybethee.github.io/js-todo"}
                  repoLink={"https://github.com/maybethee/js-todo"}
                  darkMode={darkMode}
                />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
