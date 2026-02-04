import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';

export default function useAxios(
  url: string,
  options?: AxiosRequestConfig<unknown> | undefined,
) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios(url, options);
        setResponse(res.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [options, url]);

  return { response, error, isLoading };
}
