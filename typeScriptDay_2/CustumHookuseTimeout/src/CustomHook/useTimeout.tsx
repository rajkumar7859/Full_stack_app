import { useEffect, useRef, useState } from "react";

const useTimeOut = (ready, delayFn) => {
  const setTime = useRef(ready);

  useEffect(() => {
    setTime.current = ready;
  }, [ready]);

  useEffect(() => {
    const tick = () => {
      setTime.current();
    };

    if (delayFn !== null) {
      let id = setTimeout(tick, delayFn);
      return () => clearTimeout(id);
    }
  }, [delayFn]);
};

export default useTimeOut;
