import { useEffect, useState } from "react";

const TOKEN = import.meta.env.VITE_TOKEN;
const BaseUrl = import.meta.env.VITE_API_URL;

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIspending(true);
      try {
        const response = await fetch(`${BaseUrl}${url}`, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        });
        const data = await response.json();
        if (data.success) {
          setData(data.data);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIspending(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isPending, error };
}
