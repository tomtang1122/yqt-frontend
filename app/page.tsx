import { EnterpriseCarousel } from "@components/enterpriseCarousel";
import { EnterpriseListResponse } from "@TS/enterprise";
import { post } from "@lib/fetch";
import HeroBanner from "@components/heroBanner";
import homeBg from "@assets/home-bg.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "云雀台 | 首页",
};

export const revalidate = 3600;

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const showDownload = searchParams?.embedApp !== "true";
  const showPromptMessage = searchParams?.embedApp !== "true";

  const { data: { data } = {} } = await post<EnterpriseListResponse>(
    "/enterprise/query",
    { pagination: { pageNumber: 1, showNumber: 1000000 } }
  );

  return (
    <div className="homepage">
      <HeroBanner
        showDownload={showDownload}
        showPromptMessage={showPromptMessage}
      />
      <div
        className="px-4 py-5"
        style={{
          backgroundImage: `url(${homeBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {data?.enterprises && (
          <EnterpriseCarousel
            enterprises={data.enterprises}
            isEmbedApp={searchParams?.embedApp === "true"}
          />
        )}
      </div>
    </div>
  );
}
