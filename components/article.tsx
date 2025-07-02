interface Article {
  title: string;
  content: React.ReactNode;
}

export default async function Article({ title, content }: Article) {
  return (
    <div className="px-4 lg:px-12 max-w-[1200px] mx-auto bg-white min-h-[80dvh]">
      <h1 className="text-lg font-bold text-[#141414] py-4 border-b-2 border-[#EBEEF5] lg:py-8 lg:text-2xl lg:text-center">
        {title}
      </h1>
      <div className="py-4 lg:py-8 text-[#434343] text-base">{content}</div>
    </div>
  );
}
