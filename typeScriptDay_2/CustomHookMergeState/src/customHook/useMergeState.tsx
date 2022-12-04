import { useState } from "react";

const useMergeState = (initialValue = {}) => {
  const [state, setValue] = useState(initialValue);

  const setState = (newState) => {
    if (typeof newState == "function") newState = newState(state);
    setValue({ ...state, ...newState });
  };

  return { state, setState };
};

export default useMergeState;
