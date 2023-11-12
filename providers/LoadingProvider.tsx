import { CircularLoading } from "@/components/CircularLoading";
import React, { ReactNode, createContext, useContext, useState } from "react";

const LoadingContext = createContext<{ loading: boolean; setLoading: any }>({
  loading: false,
  setLoading: () => null,
});

export const useLoading = () => useContext(LoadingContext);

const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);

  const context = {
    loading,
    setLoading,
  };
  return (
    <LoadingContext.Provider value={context}>
      {children}


      <CircularLoading open={loading} onClose={() => setLoading(false)} />
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
