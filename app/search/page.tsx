import { post } from "@lib/fetch";
import { EnterpriseCard } from "@components/enterpriseCard";
import { EnterpriseListResponse } from "@TS/enterprise";
import HeroBanner from "@components/heroBanner";

type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function SearchPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const showDownload = searchParams?.embedApp !== "true";
  const query = searchParams?.query;

  const { data: { data: { enterprises = [] } = {} } = {} } =
    await post<EnterpriseListResponse>("/enterprise/query", {
      pagination: { pageNumber: 1, showNumber: 1000000 },
      nameKeyword: query,
    });

  return (
    <div className="search-page">
      <HeroBanner showDownload={showDownload} />
      <div className="px-4 py-5">
        <h1 className="w-[1200px] max-w-full text-2xl font-bold mt-6 lg:mt-10 mb-12 lg:mb-20 mx-auto">
          搜索结果
        </h1>
        <div className="flex flex-col w-[800px] max-w-full min-h-[60dvh] mx-auto overflow-auto gap-8">
          {enterprises.map((enterprise) => (
            <EnterpriseCard
              key={enterprise.enterpriseID}
              enterprise={enterprise}
              hasContacts
            />
          ))}
        </div>
      </div>
    </div>
  );
}
