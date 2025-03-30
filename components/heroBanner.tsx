import clsx from "clsx";
import Image from "next/image";
import bankQR from "@assets/bank-QR.png";
import localFont from "next/font/local";
import { post } from "@lib/fetch";
import { ClientConfigResponse } from "@TS/clientConfig";

const puHuiTi = localFont({
  src: "../public/font/AlibabaPuHuiTi-3-105-Heavy.woff2",
});

export default async function HeroBanner({
  showDownload,
}: {
  showDownload: boolean;
}) {
  const { data: { data: { config } = {} } = {} } =
    await post<ClientConfigResponse>(
      "/client_config/get",
      {},
      {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiJpbUFkbWluIiwiVXNlclR5cGUiOjIsIlBsYXRmb3JtSUQiOjAsImV4cCI6MTc1MDc3NTMzMSwibmJmIjoxNzQyOTk5MjcxLCJpYXQiOjE3NDI5OTkzMzF9.iUQ6dyAevqzK-btJz48yLOhZk9PaEqoId2jjvmPoYlM",
        },
      }
    );

  return (
    <div className="relative h-[var(--ep-hero-height)]">
      {config?.mobileBanner && (
        <Image
          src={config?.mobileBanner}
          alt="云雀台首页横幅|移动端"
          fill
          priority
          className="object-cover xl:hidden"
        />
      )}
      {config?.pcBanner && (
        <Image
          src={config?.pcBanner}
          alt="云雀台首页横幅|PC端"
          fill
          priority
          className="object-cover hidden xl:block"
        />
      )}
      <div className="absolute top-0 left-0 w-full h-full pt-2 px-4 xl:pt-6 xl:px-[246px] flex justify-between">
        <div className="h-fit">
          <h1
            className={clsx(
              "text-2xl text-[#122C94] xl:text-6xl mb-2 xl:mb-6",
              puHuiTi.className
            )}
          >
            365<span className="text-xs pr-3 xl:text-2xl">天</span>24
            <span className="text-xs xl:text-2xl">小时</span>
            <br />
            全方位为您服务
          </h1>
          {config?.appFile && showDownload && (
            <a
              href={config?.appFile}
              className="bg-[#FDDB44] w-23 h-8 rounded-sm text-[#141414] flex flex-col items-center justify-center xl:w-35 xl:h-12.5"
              download={`云雀台-v${config?.appVersion}.apk`}
            >
              <span className="text-xs font-bold xl:text-base">安卓版下载</span>
              <span className="text-[10px] xl:text-xs">Android DL</span>
            </a>
          )}
        </div>
        <div className="relative w-[80px] h-[98px] xl:w-[160px] xl:h-[196px]">
          <Image fill src={bankQR} alt="招商银行二维码" />
        </div>
      </div>
    </div>
  );
}
