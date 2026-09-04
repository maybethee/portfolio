import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul id={styles.nav}>
        <li id={styles.star} className={styles.navLink}>
          <Link to="/">𝔯𝔰</Link>
        </li>
        <li className={styles.navLink}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.navLink}>
          <Link to="/work">Work</Link>
        </li>
        <li className={styles.navLink}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
