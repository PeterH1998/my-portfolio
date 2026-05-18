import { useEffect, useState } from "react";

export function useJsonResource(url) {
  const [state, setState] = useState({
    data: null,
    error: null,
    isLoading: true,
  });

  useEffect(() => {
    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load ${url}`);
        }

        return response.json();
      })
      .then((data) => {
        setState({ data, error: null, isLoading: false });
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setState({ data: null, error, isLoading: false });
        }
      });

    return () => controller.abort();
  }, [url]);

  return state;
}
