import { EMAIL_PUBLIC_KEY, EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID } from "@/constants/service";
import emailjs from "@emailjs/browser";
import { useCallback, useMemo } from "react";

const useEmail = () => {
  const sendEmail = useCallback(async (templateParams: any) => {
    return emailjs.send(
      EMAIL_SERVICE_ID || "",
      EMAIL_TEMPLATE_ID || "",
      templateParams,
      EMAIL_PUBLIC_KEY
    );
  }, []);

  return useMemo(
    () => ({
      sendEmail,
    }),
    [sendEmail]
  );
};

export default useEmail;
