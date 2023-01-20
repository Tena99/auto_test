import { useEffect, useState } from "react";

function useGetData(url, type, vim = "", deps = []) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(function () {

    fetch(`${url}${type}${vim}?format=json`)
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, deps);

  return { data, error, loading };
}

export default useGetData;
