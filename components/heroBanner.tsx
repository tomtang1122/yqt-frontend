import clsx from "clsx";
import Image from "next/image";
import bankQR from "@assets/bank-QR.png";
import localFont from "next/font/local";
import { post } from "@lib/fetch";
import cashback from "@assets/cashback.png";
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
    await post<ClientConfigResponse>("/client_config/get", {});

  return (
    <div className="relative h-[var(--ep-hero-height)]">
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
      <div className="absolute top-0 left-0 w-full h-full pt-2 px-4 lg:px-[120px] lg:pt-3 xl:pt-6 flex justify-between">
        <div className="h-fit">
          <h1
            className={clsx(
              "text-2xl text-[#122C94] lg:text-3xl xl:text-5xl mb-2 lg:mb-4",
              puHuiTi.className
            )}
          >
            365<span className="text-xs pr-3 lg:text-base xl:text-xl">天</span>
            24
            <span className="text-xs lg:text-base xl:text-xl">小时</span>
            <br />
            全方位为您服务
          </h1>
          {config?.appFile && showDownload && (
            <a
              href={config?.appFile}
              className="bg-[#FDDB44] w-23 h-8 rounded-sm text-[#141414] flex flex-col items-center justify-center xl:w-35 xl:h-12.5 mb-2 xl:mb-4"
              download={`云雀台-v${config?.appVersion}.apk`}
            >
              <span className="text-xs font-bold xl:text-base">安卓版下载</span>
              <span className="text-[10px] xl:text-xs">Android DL</span>
            </a>
          )}
          <p className="text-center text-xs lg:text-sm xl:text-[18px] text-[##434343] absolute left-4 lg:left-[120px]">
            <span>向带有</span>
            <Image
              className="inline-block mx-2"
              src={cashback}
              alt="企业促销logo"
              width={24}
              height={24}
            />
            <span>标识厂商采购将获得优惠券现金激励服务</span>
          </p>
        </div>
        <div className="relative w-[80px] h-[98px] lg:w-[120px] lg:h-[147px] xl:w-[160px] xl:h-[196px]">
          <Image fill src={bankQR} alt="招商银行二维码" />
        </div>
      </div>
    </div>
  );
}
