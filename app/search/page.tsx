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
    <div className="">
      <HeroBanner showDownload={showDownload} />
      <div className="px-4 py-5">
        <div className="h-[var(--ep-carousel-height)]">
          <h1 className="w-[1200px] max-w-full text-2xl font-bold mb-8 mx-auto">
            搜索结果
          </h1>
          <div className="flex flex-col w-[800px] max-w-full mx-auto overflow-auto gap-8">
            {enterprises.map((enterprise) => (
              <div
                key={enterprise.enterpriseID}
                className="flex flex-col lg:flex-row gap-0 lg:gap-6"
              >
                <EnterpriseCard enterprise={enterprise} />
                {enterprise.contacts && enterprise.contacts.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold mb-2">企业联系人ID:</h2>
                    <ul className="pl-4">
                      {enterprise.contacts.map((contact) => (
                        <li key={contact} className="text-gray-500">
                          {contact}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
