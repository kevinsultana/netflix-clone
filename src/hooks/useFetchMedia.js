import { useState, useEffect } from "react";
import { BaseApi } from "../api/BaseApi";

export const useFetchMedia = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await BaseApi.get(endpoint);
        setData(response.data.results);
      } catch (err) {
        console.error(`Error fetching data from ${endpoint}:`, err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};
