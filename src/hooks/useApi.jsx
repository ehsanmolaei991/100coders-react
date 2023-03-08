import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com";

export default function useApi(endpoint) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  async function fetchHandler() {
    setLoading(true);

    const res = await fetch(API_URL + endpoint);
    const json = await res.json();

    setLoading(false);

    setData(json);
  }

  useEffect(() => {
    fetchHandler();
  }, []);

  return { loading, data };
}
