import clsx from "clsx";
import Image from "next/image";
import bankQR from "@assets/bank-QR.png";
import localFont from "next/font/local";
import { post } from "@lib/fetch";
import { ClientConfigResponse } from "@TS/clientConfig";
import { getProxyImageUrl } from "@lib/utils";

const puHuiTi = localFont({
  src: "../public/font/AlibabaPuHuiTi-3-105-Heavy.woff2",
});

export default async function HeroBanner() {
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
    <div className="relative w-screen left-[50%] right-[50%] -mx-[50vw] h-[var(--ep-hero-height)]">
      {config?.mobileBanner && (
        <Image
          src={getProxyImageUrl(config?.mobileBanner)}
          alt="云雀台首页横幅|移动端"
          fill
          priority
          className="object-cover xl:hidden"
        />
      )}
      {config?.pcBanner && (
        <Image
          src={getProxyImageUrl(config?.pcBanner)}
          alt="云雀台首页横幅|PC端"
          fill
          priority
          className="object-cover hidden xl:block"
        />
      )}
      <div className="absolute top-0 left-0 w-full h-full pt-5 px-4 xl:pt-10 xl:px-[246px] flex justify-between">
        <div>
          <h1
            className={clsx(
              "text-2xl text-[#122C94] mb-5.5 xl:text-7xl xl:mb-7",
              puHuiTi.className
            )}
          >
            365<span className="text-xs pr-3 xl:text-3xl">天</span>24
            <span className="text-xs xl:text-3xl">小时</span>
            <br />
            全方位为您服务
          </h1>
          <div className="bg-[#FDDB44] w-23 h-8 rounded-sm text-[#141414] flex flex-col items-center justify-center xl:w-35 xl:h-12.5">
            <span className="text-xs font-bold xl:text-base">安卓版下载</span>
            <span className="text-[10px] xl:text-xs">Android DL</span>
          </div>
        </div>
        <div className="relative w-[108px] h-[132px] xl:w-[234px] xl:h-[286px]">
          <Image fill src={bankQR} alt="招商银行二维码" />
        </div>
      </div>
    </div>
  );
}
