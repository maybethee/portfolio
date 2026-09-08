import { useLocation, Outlet } from "react-router-dom";
import Nav from "./Nav";
// import styles from "./Root.module.css";

function Root() {
  const location = useLocation();
  const isHidden = location.pathname === "/dev";

  return (
    <>
      <div>
        {!isHidden && (
          <div>
            <Nav />
          </div>
        )}
        <Outlet />
      </div>
    </>
  );
}

export default Root;
