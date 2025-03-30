import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

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
