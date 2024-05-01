import axios from 'axios';
import { useEffect, useState } from 'react';

function useApi(apiUrl) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //Function to make API call
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };
    //call the fetch function
    fetchData();
  }, [apiUrl]);

  return { data, isLoading, error };
}

export default useApi;
