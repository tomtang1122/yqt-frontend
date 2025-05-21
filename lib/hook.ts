import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useEmbedApp = () => {
  const searchParams = useSearchParams();
  const embedAppSearchParams = searchParams.get("embedApp");

  useEffect(() => {
    if (embedAppSearchParams === "true") {
      document.body.style.setProperty("--ep-footer-height", "0px");
    } else {
      document.body.style.setProperty("--ep-footer-height", null);
    }
  }, [embedAppSearchParams]);

  return {
    embedAppSearchParams: embedAppSearchParams,
    isEmbedded: embedAppSearchParams === "true",
  };
};

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
