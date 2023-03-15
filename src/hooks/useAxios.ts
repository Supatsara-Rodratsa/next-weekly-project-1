"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { AxiosProps } from "@src/types/types";

const useAxios = <T>({ method, responseType, url, data }: AxiosProps<T>) => {
  const [response, setResponse] = useState<T>();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const params: AxiosProps<T> = {
      method,
      responseType,
      url,
      data,
    };

    const fetchData = async (params: AxiosProps<T>) => {
      try {
        const result = await axios.request(params);
        if (result && result.status === 200) {
          setResponse(result.data);
        }
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(params);
  }, [method, url, responseType, data]);

  return { response, error, loading };
};

export default useAxios;
