import { useState } from "react";
const TOKEN = import.meta.env.VITE_TOKEN;
const BaseUrl = import.meta.env.VITE_API_URL;

export default function useSTIClasses() {
  const [stiClassesData, stiClassesSetData] = useState(null);
  const [stiClassesLoading, stiClassesSetLoading] = useState(false);
  const [stiClassesError, stiClassesSetError] = useState(null);

  const stiClassesfetchData = async (url, queryParams) => {
    try {
        stiClassesSetLoading(true);

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
        stiClassesSetData(jsonData.data);
        stiClassesSetLoading(false);
      } else {
        stiClassesSetError(jsonData.message);
      }
    } catch (error) {
        stiClassesSetError(error);
        stiClassesSetLoading(false);
    }
  };

  return { stiClassesData, stiClassesLoading, stiClassesError, stiClassesfetchData };
}
