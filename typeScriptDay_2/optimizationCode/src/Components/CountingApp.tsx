import { memo, useEffect, useState } from "react";
import { setEnvironmentData } from "worker_threads";
import VerifyData from "./VerifyData";

const CountingApp = () => {
  const initialValue = {
    id: "",
    title: "",
    body: "",
    verifyPost: false
  };

  const [count, setCount] = useState<Number>(0);
  const [list, setList] = useState<string>(initialValue);
  const { title, body } = list;
  useEffect(() => {
    const setTime = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(setTime);
    };
  }, [count]);

  const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
    setList(event.target.value);
  };

  const handleAdd = () => {
    setList(list);
  };
  console.log(list);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Count :-{count}</h1>
      <input
        type="text"
        placeholder="write something in title"
        value={title}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="write something in body"
        value={body}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleAdd}>Add</button>
      <VerifyData data={list}  />
    </div>
  );
};
export default memo(CountingApp);
