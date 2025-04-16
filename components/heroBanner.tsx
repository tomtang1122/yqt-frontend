import clsx from "clsx";
import Image from "next/image";
import localFont from "next/font/local";
import { post } from "@lib/fetch";
import cashback from "@assets/cashback.png";
import { ClientConfigResponse } from "@TS/clientConfig";

const puHuiTi = localFont({
  src: "../public/font/AlibabaPuHuiTi-3-105-Heavy.woff2",
});

export default async function HeroBanner({
  showDownload,
  showPromptMessage,
}: {
  showDownload: boolean;
  showPromptMessage: boolean;
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
      <div className="absolute top-0 left-0 w-full h-full pt-2 px-4 lg:px-[120px] lg:pt-3 flex justify-between">
        <div>
          <h1
            className={clsx(
              "text-2xl text-[#122C94] lg:text-3xl mb-2 lg:mb-4",
              puHuiTi.className
            )}
          >
            365<span className="text-xs pr-3 lg:text-base">天</span>
            24
            <span className="text-xs lg:text-base">小时</span>
            <br />
            全方位为您服务
          </h1>
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
          {showPromptMessage && (
            <p className="text-center text-[10px] lg:text-xs text-[##434343] absolute left-4 lg:left-[120px] bottom-1.5 lg:bottom-4 font-semibold">
              <span>向带有</span>
              <Image
                className="inline-block mx-1"
                src={cashback}
                alt="企业促销logo"
                width={16}
                height={16}
              />
              <span>标识厂商采购将获得优惠券现金激励服务</span>
            </p>
          )}
        </div>
        {config?.mobileBankQRCode && (
          <Image
            width={80}
            height={98}
            src={config?.mobileBankQRCode}
            alt="银行二维码"
          />
        )}
        {config?.pcBankQRCode && (
          <Image
            width={120}
            height={147}
            src={config?.pcBankQRCode}
            alt="银行二维码"
          />
        )}
      </div>
    </div>
  );
}
