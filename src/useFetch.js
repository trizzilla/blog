import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(null);

  useEffect(() => {
    const abrtCtrl = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abrtCtrl.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error(
              "Could not complete your request : (. Please try again!"
            );
          }
          return res.json();
        })
        .then((data) => {
          setIsLoading(false);
          setData(data);
          setIsErr(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch Aborted and no warning displayed :)");
          } else {
            setIsErr(err.message);
            setIsLoading(false);
          }
        });
    }, 1000);

    return () => abrtCtrl.abort();
  }, [url]);

  return { data, isLoading, isErr };
};

export default useFetch;
