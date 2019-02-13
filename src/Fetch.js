import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Fetch({ url }) {
  const [data, setData] = useState(null);

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

  if (!data) {
    return <span data-testid="loading">Loading data...</span>;
  }

  return <span data-testid="resolved">{data.greeting}</span>;
}
