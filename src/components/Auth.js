import { useSelector, useDispatch } from "react-redux";

import { authActions } from "../store/auth";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthorized) {
    return <></>;
  }

  const handleLogin = () => dispatch(authActions.login());

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button type="button" onClick={handleLogin}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
