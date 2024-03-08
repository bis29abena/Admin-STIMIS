import { useState } from "react";
const TOKEN = import.meta.env.VITE_TOKEN;
const BaseUrl = import.meta.env.VITE_API_URL;

export default function useSidebarApiCall() {
  const [sideData, sideSetData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sideError, sideSetError] = useState(null);

  const fetchData = async (url, queryParams) => {
    try {
      setLoading(true);

      const queryString = new URLSearchParams(queryParams).toString();
      const fullurl = `${BaseUrl}${url}?${queryString}`;
      const response = await fetch(fullurl, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const jsonData = await response.json();
      if (jsonData.success) {
        sideSetData(jsonData.data);
        setLoading(false);
      } else {
        sideSetError(jsonData.message);
      }
    } catch (error) {
      sideSetError(error);
      setLoading(false);
    }
  };

  return { sideData, loading, sideError, fetchData };
}
