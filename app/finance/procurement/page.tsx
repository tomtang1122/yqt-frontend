import HeroBanner from "@components/heroBanner";
import ProcurementForm from "@components/procurementForm";

type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function ProcurementPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const showDownload = searchParams?.embedApp !== "true";

  return (
    <div className="procurement-page">
      <HeroBanner showDownload={showDownload} />
      <div className="px-4 py-5">
        <ProcurementForm />
      </div>
    </div>
  );
}
