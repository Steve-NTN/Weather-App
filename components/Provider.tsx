"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import LoadingProvider from "@/providers/LoadingProvider";
import NotifyProvider from "@/providers/NotifyProvider";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <LoadingProvider>
        <NotifyProvider>{children}</NotifyProvider>
      </LoadingProvider>
    </Provider>
  );
}

export default Providers;
