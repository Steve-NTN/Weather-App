import { useEffect, useState } from "react";

export const useSearchTerm = (value: any, delay: number) => {
  const [tmpValue, setTmpValue] = useState(value);

  useEffect(() => {
    let handleTimeout = setTimeout(() => {
      setTmpValue(value);
    }, delay);

    return () => {
      clearTimeout(handleTimeout);
    };
  }, [value, delay]);

  return { tmpValue };
};
