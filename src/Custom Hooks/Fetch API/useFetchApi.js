import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchApi(url) {
  const [apiResults, setApiResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchApi = () => {
    axios.get(url).then((response) => {
      setApiResults(response.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchApi();
  }, [url]);
  return {
    apiResults,
    isLoading,
  };
}
