import { useState } from "react";
const TOKEN = import.meta.env.VITE_TOKEN;
const BaseUrl = import.meta.env.VITE_API_URL;

export default function useIndicatorSingle() {
  const [sinIndicatorData, sinIndicatorDataSetData] = useState([]);
  const [sinIndicatorDataLoading, sinIndicatorDataSetLoading] = useState(false);
  const [sinIndicatorDataError, sinIndicatorDataSetError] = useState(null);

  const sinIndicatorDatafetchData = async (url, queryParams) => {
   
    try {
        sinIndicatorDataSetLoading(true);

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
        sinIndicatorDataSetData(jsonData.data);
        sinIndicatorDataSetLoading(false);
      } else {
        sinIndicatorDataSetError(jsonData.message);
      }
    } catch (error) {
        sinIndicatorDataSetError(error);
        sinIndicatorDataSetLoading(false);
    }
  };

  return { sinIndicatorData, sinIndicatorDataLoading, sinIndicatorDataError, sinIndicatorDatafetchData };
}
