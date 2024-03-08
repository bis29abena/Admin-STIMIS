import { useState } from "react";
const TOKEN = import.meta.env.VITE_TOKEN;
const BaseUrl = import.meta.env.VITE_API_URL;

export default function useIndicatorMultiple() {
  const [mulIndicatorData, mulIndicatorDataSetData] = useState([]);
  const [mulIndicatorDataLoading, mulIndicatorDataSetLoading] = useState(false);
  const [mulIndicatorDataError, mulIndicatorDataSetError] = useState(null);

  const mulIndicatorDatafetchData = async (url, queryParams) => {
   
    try {
        mulIndicatorDataSetLoading(true);

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
        mulIndicatorDataSetData(jsonData.data);
        mulIndicatorDataSetLoading(false);
      } else {
        mulIndicatorDataSetError(jsonData.message);
      }
    } catch (error) {
        mulIndicatorDataSetError(error);
        mulIndicatorDataSetLoading(false);
    }
  };

  return { mulIndicatorData, mulIndicatorDataLoading, mulIndicatorDataError, mulIndicatorDatafetchData };
}
