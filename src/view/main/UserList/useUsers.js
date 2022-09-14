import { useState, useEffect } from "react";
import apiClient from "./apiClient";

export default function useUsers () {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setData(null);
        setError(null);
        apiClient
          .get(`/users`)
          .then((res) => {
            setLoading(false);
            setData(res.data.slice(0, 10));
          })
          .catch((err) => {
            setLoading(false);
            setError(err);
          });
      }, []);
      
      return {
        loading,
        error,
        data
      };
}