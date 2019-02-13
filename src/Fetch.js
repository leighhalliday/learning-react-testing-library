import React, { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url, setData) => {
  useEffect(
    () => {
      let mounted = true;

      const loadData = async () => {
        const result = await axios.get(url);
        if (mounted) {
          setData(result.data);
        }
      };
      loadData();

      return () => {
        mounted = false;
      };
    },
    [url]
  );
};

export default function Fetch({ url }) {
  const [data, setData] = useState(null);
  useAxios(url, setData);

  if (!data) {
    return <span data-testid="loading">Loading data...</span>;
  }

  return <span data-testid="resolved">{data.greeting}</span>;
}
