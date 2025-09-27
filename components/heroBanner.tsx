import Image from "next/image";
import { post } from "@lib/fetch";
import { ClientConfigResponse } from "@TS/clientConfig";

export default async function HeroBanner({
  showDownload,
}: {
  showDownload: boolean;
}) {
  const { data: { data: { config } = {} } = {} } =
    await post<ClientConfigResponse>("/client_config/get", {});

  return (
    <div className="relative h-[180px] lg:h-[360px]">
      {config?.mobileBanner && (
        <Image
          src={config?.mobileBanner}
          alt="云雀台首页横幅|移动端"
          fill
          priority
          className="object-cover lg:hidden"
        />
      )}
      {config?.pcBanner && (
        <Image
          src={config?.pcBanner}
          alt="云雀台首页横幅|PC端"
          fill
          priority
          className="object-cover hidden lg:block"
        />
      )}
      <div className="absolute top-0 left-0 w-full h-full pb-3 px-4 lg:px-8 xl:px-[120px] lg:pb-8 flex justify-between items-end">
        <div className="flex flex-col items-start justify-center">
          {config?.appFile && showDownload ? (
            <a
              href={config?.appFile}
              className="bg-[#FDDB44] w-23 h-8 rounded-sm text-[#141414] flex flex-col items-center justify-center mb-2"
              download={`云雀台-v${config?.appVersion}.apk`}
            >
              <span className="text-xs font-bold">安卓版下载</span>
              <span className="text-[10px]">Android DL</span>
            </a>
          ) : (
            <div className="h-8 mb-2" />
          )}
        </div>
        {config?.mobileBankQRCode && (
          <div className="lg:hidden">
            <Image
              width={90}
              height={110.25}
              src={config?.mobileBankQRCode}
              alt="银行二维码"
            />
          </div>
        )}
        {config?.pcBankQRCode && (
          <div className="hidden lg:block">
            <Image
              width={180}
              height={220.5}
              src={config?.pcBankQRCode}
              alt="银行二维码"
            />
          </div>
        )}
      </div>
    </div>
  );
}
