import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/auth.action";

const Login = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loginCreds, setLoginCreds] = useState({});
  const { isAuth, loading, error } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginCreds));
  };

  useEffect(() => {
    if (isAuth) {
      if (state) {
        navigate(state.from, { replace: true });
      } else {
        navigate("/");
      }
    }
  }, [isAuth]);

  if (loading) {
    return <div>loading........</div>;
  } else if (error) {
    return <div>error.......</div>;
  } else
    return (
      <div>
        Login
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            maxWidth: "200px",
            gap: "10px"
          }}
        >
          <input
            name="email"
            type="email"
            placeholder="Enter Email"
            onChange={hanldeChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Enter Password..."
            onChange={hanldeChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
};

export default Login;
