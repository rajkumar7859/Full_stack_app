import { useState } from "react";
import useMergeState from "../customHook/useMergeState";

const MergeState = () => {
  const [data, setData] = useState({});

  const initState = {
    username: "",
    email: "",
    password: ""
  };

  const { state, setState } = useMergeState(initState);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>MergeState Hook</h1>
      <input
        placeholder="enter name here"
        name="username"
        value={state.username}
        onChange={(e) => setState({ username: e.target.value })}
      />
      <input
        placeholder="enter email here"
        name="email"
        type="email"
        value={state.email}
        onChange={(e) => setState({ email: e.target.value })}
      />
      <input
        name="password"
        type="password"
        placeholder="enter password here"
        value={state.password}
        onChange={(e) => setState({ password: e.target.value })}
      />
      <br />
      <button onClick={() => setData(state)} type="submit">
        Submit
      </button>
      <div></div>
    </div>
  );
};
export default MergeState;
