import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul id={styles.nav}>
        <li id={styles.star} className={styles.navLink}>
          <Link to="/" className="nav-link home-btn">
            𝔯𝔰
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link to="/" className="nav-link">
            About
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link to="/work" className="nav-link">
            Work
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link to="/" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
