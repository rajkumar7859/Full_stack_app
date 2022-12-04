import { useState } from "react";
import useTimeOut from "../CustomHook/useTimeout";
import "../index.css";

const TimeOutinterval = () => {
  const [value, setValue] = useState(false);

  useTimeOut(() => {
    setValue(true);
  }, 5000);

  return (
    <div className="App">
      <h1>Value trigger after 5 sec</h1>
      <h1>Value:- {value ? "true" : "false"}</h1>
    </div>
  );
};
export default TimeOutinterval;
