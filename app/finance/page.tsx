import HeroBanner from "@components/heroBanner";

type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function FinancePage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const showDownload = searchParams?.embedApp !== "true";

  return (
    <div className="finance-page">
      <HeroBanner showDownload={showDownload} />
      <div className="px-4 py-5">placeholder</div>
    </div>
  );
}
