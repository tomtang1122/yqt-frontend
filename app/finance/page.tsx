import HeroBanner from "@components/heroBanner";
import ProcurementForm from "@components/procurementForm";

type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function FinancePage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const showDownload = searchParams?.embedApp !== "true";

  return (
    <div className="finance-page">
      <HeroBanner showDownload={showDownload} />
      <div className="px-4 py-5">
        <div className="min-h-[60dvh] flex items-center justify-center">
          <ProcurementForm />
        </div>
      </div>
    </div>
  );
}
