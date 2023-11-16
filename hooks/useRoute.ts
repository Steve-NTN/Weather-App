import { useRouter, usePathname } from "next/navigation";
import { useMemo } from "react";

const useRoute = () => {
  const pathname = usePathname();
  const router = useRouter();

  return useMemo(
    () => ({
      router,
      pathname,
    }),
    [router, pathname]
  );
};

export default useRoute;
