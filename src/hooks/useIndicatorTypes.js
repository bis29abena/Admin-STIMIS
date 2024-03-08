import { useEffect, useState } from "react";

const TOKEN = import.meta.env.VITE_TOKEN;
const BaseUrl = import.meta.env.VITE_API_URL;

export default function useIndicatorTypes(url) {
  const [idata, isetData] = useState(null);
  const [iisPending, isetIspending] = useState(false);
  const [ierror, isetError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      isetIspending(true);
      try {
        const response = await fetch(`${BaseUrl}${url}`, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        });
        const data = await response.json();
        if (data.success) {
          isetData(data.data);
        } else {
          isetError(data.message);
        }
      } catch (error) {
        isetError(error);
      } finally {
        isetIspending(false);
      }
    };
    fetchData();
  }, [url]);

  return { idata, iisPending, ierror };
}
