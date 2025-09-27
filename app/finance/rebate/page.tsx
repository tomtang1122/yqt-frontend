import HeroBanner from "@components/heroBanner";
import RebateForm from "@components/rebateForm";

type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function RebatePage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const showDownload = searchParams?.embedApp !== "true";

  return (
    <div className="rebate-page">
      <HeroBanner showDownload={showDownload} />
      <div className="px-4 py-5">
        <RebateForm />
      </div>
    </div>
  );
}
