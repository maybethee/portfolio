import styles from "./Home.module.css";
import Nav from "./Nav.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <Nav />
        <p>
          Hi, I'm Raphael Schnee. I'm a writer, editor, web developer, and
          abstract strategy board game enthusiast. I'm also interested in
          language acquisition, music, psychotherapy, and Brandy's 2002 album
          Full Moon.
        </p>
        <ul>
          <li>
            diy are.na channel? lost pets? should that just be its own site??
            for now probs fine just having its own link tho?
          </li>
          <li>links/resources</li>
          <li>something about music?</li>
          <li>some kind of blog/casual writing section?</li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default Home;
