import { useEffect, useState } from "react";
import axiosClient from '../api/axiosClient';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    // active flag to prevent state updates on unmounted component
    let active = true;
    setLoading(true);
    setError(null);

    axiosClient.get(url)
      .then(response => {
        if (active) {
          setData(response.data);
          setLoading(false);
        }
      })
      .catch(err =>{
        if (active) {
          setError(err);
          setLoading(false);
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      })

      return () => {
        active = false;
      }
  }, [url]);

  return { data, loading, error };
}