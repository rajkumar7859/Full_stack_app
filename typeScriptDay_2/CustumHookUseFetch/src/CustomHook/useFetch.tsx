import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (usefetchfn) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      let data = await usefetchfn();
      setLoading(false);
      setError(false);
      setData(data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, error, data, getData };
};
