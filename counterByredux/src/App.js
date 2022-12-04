import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/actions";
import "./styles.css";

export default function App() {
  const count = useSelector((store) => store.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>INC</button>
      <button onClick={() => dispatch(decrement())}>DEC</button>
    </div>
  );
}
