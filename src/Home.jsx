import styles from "./Home.module.css";
import Nav from "./Nav.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main>
        <div id={styles.aboutContainer}>
          <p>
            Hi, I'm Raphael Schnee. I'm a writer, editor, and web developer. I'm
            interested in online radio, language acquisition, psychotherapy, and
            the abstract strategy board game Go.
          </p>
          <p>
            Send inquiries, greetings, or your favorite{" "}
            <a
              id={styles.lostPets}
              href="https://www.are.na/raphael-schnee/lost-pets"
              target="_blank"
            >
              <span>lost pet sign</span>
            </a>{" "}
            to{" "}
            <a href="mailto:raphaelschnee.send@gmail.com">
              <span>raphaelschnee.send@gmail.com</span>
            </a>
          </p>
          {/* <ul> */}
          {/*   <li> */}
          {/*     diy are.na channel? lost pets? should that just be its own site?? */}
          {/*     for now probs fine just having its own link tho? */}
          {/*   </li> */}
          {/*   <li>links/resources</li> */}
          {/*   <li>something about music?</li> */}
          {/*   <li>some kind of blog/casual writing section?</li> */}
          {/*   <li></li> */}
          {/* </ul> */}
        </div>
      </main>
    </>
  );
}

export default Home;
