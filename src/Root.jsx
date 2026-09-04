import { useLocation, Outlet } from "react-router-dom";
import Nav from "./Nav";
import styles from "./Root.module.css";

function Root() {
  const location = useLocation();
  const isHidden = location.pathname === "/dev";

  return (
    <>
      <div id={styles.bg}>
        {!isHidden && (
          <div id={styles.bg}>
            <Nav />
          </div>
        )}
        <Outlet />
      </div>
    </>
  );
}

export default Root;
