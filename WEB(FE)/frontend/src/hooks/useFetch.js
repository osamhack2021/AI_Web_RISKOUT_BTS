import { useState, useEffect } from 'react';
import client from '../lib/api/client';

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    async function fetchData() {
      fetch(url, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
        credentials: 'include',
        signal: abortCont.signal,
        ...options,
      })
        .then((res) => {
          if (!res.ok)
            throw Error('could not fetch the data for that resource');
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          console.log(err.message);
          if (err.name !== 'AbortError') {
            setIsPending(false);
            setError(err.message);
          }
        });
    }

    fetchData();
    return () => abortCont.abort();
  }, []);

  return { data, isPending, error };
};

export default useFetch;
