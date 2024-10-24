"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import LoadingProvider from "@/providers/LoadingProvider";
import NotifyProvider from "@/providers/NotifyProvider";
import i18n from "../i18next";
import { I18nextProvider } from "react-i18next";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <LoadingProvider>
          <NotifyProvider>{children}</NotifyProvider>
        </LoadingProvider>
      </I18nextProvider>
    </Provider>
  );
}

export default Providers;
