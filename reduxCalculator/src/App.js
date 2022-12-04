import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  addition,
  multiply,
  subract,
  divide
} from "./redux/actions";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);
  const count = useSelector((store) => store.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Part 1</h1>
      <h1>{count}</h1>
      <input
        onChange={({ target }) => setValue(target.value)}
        placeholder="redux calculator"
        type="number"
      />
      <br />
      <button onClick={() => dispatch(increment())}>INC</button>
      <button onClick={() => dispatch(decrement())}>DEC</button>
      <br />
      <button onClick={() => dispatch(increment(Number(value)))}>
        INC by value
      </button>
      <button onClick={() => dispatch(decrement(Number(value)))}>
        DEC by value
      </button>
      <br />
      <button onClick={() => dispatch(addition(Number(value)))}>Add</button>
      <button onClick={() => dispatch(multiply(Number(value)))}>
        Multiply
      </button>
      <br />
      <button onClick={() => dispatch(subract(Number(value)))}>Subract</button>
      <button onClick={() => dispatch(divide(Number(value)))}>Divide</button>
      <br />
      <button onClick={() => dispatch(reset())}>reset value</button>
    </div>
  );
}
