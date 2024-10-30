import { useDispatch, useSelector } from "react-redux";

import { authActions } from "../store/auth";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => dispatch(authActions.logout());

  if (!isAuthorized) {
    return (
      <header className={classes.header}>
        <h1>Redux Auth</h1>
      </header>
    );
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
