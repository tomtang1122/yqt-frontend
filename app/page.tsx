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

  const { data: { data } = {} } = await post<EnterpriseListResponse>(
    "/enterprise/query",
    { pagination: { pageNumber: 1, showNumber: 1000000 } },
    {
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiJpbUFkbWluIiwiVXNlclR5cGUiOjIsIlBsYXRmb3JtSUQiOjAsImV4cCI6MTc1MDc3NTMzMSwibmJmIjoxNzQyOTk5MjcxLCJpYXQiOjE3NDI5OTkzMzF9.iUQ6dyAevqzK-btJz48yLOhZk9PaEqoId2jjvmPoYlM",
      },
    }
  );

  return (
    <div className="homepage">
      <HeroBanner showDownload={showDownload} />
      <div
        className="px-4 py-5 lg:py-8"
        style={{
          backgroundImage: `url(${homeBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {data?.enterprises && (
          <EnterpriseCarousel enterprises={data.enterprises} />
        )}
      </div>
    </div>
  );
}
