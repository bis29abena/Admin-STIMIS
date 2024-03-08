import { useState } from "react";
const TOKEN = import.meta.env.VITE_TOKEN;
const BaseUrl = import.meta.env.VITE_API_URL;

export default function useCountry() {
  const [countriesData, countriesSetData] = useState(null);
  const [countriesLoading, countriesSetLoading] = useState(false);
  const [countriesError, countriesSetError] = useState(null);

  const countriesfetchData = async (url, queryParams) => {
   
    try {
        countriesSetLoading(true);

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
        countriesSetData(jsonData.data);
        countriesSetLoading(false);
      } else {
        countriesSetError(jsonData.message);
      }
    } catch (error) {
        countriesSetError(error);
        countriesSetLoading(false);
    }
  };

  return { countriesData, countriesLoading, countriesError, countriesfetchData };
}
