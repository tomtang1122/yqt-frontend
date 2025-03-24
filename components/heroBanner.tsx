import clsx from "clsx";
import Image from "next/image";
import heroImageDesktop from "@assets/banner-desktop.png";
import heroImageMobile from "@assets/banner-mobile.png";
import bankQR from "@assets/bank-QR.jpg";
import localFont from "next/font/local";

const puHuiTi = localFont({
  src: "../public/font/AlibabaPuHuiTi-3-105-Heavy.woff2",
});

export default function HeroBanner() {
  return (
    <div className="relative w-screen left-[50%] right-[50%] -mx-[50vw] h-[var(--ep-hero-height)]">
      <Image
        src={heroImageMobile}
        alt="云雀台首页横幅"
        fill
        priority
        className="object-cover xl:hidden"
        sizes="100vw"
      />
      <Image
        src={heroImageDesktop}
        alt="云雀台首页横幅"
        fill
        priority
        className="object-cover hidden xl:block"
        sizes="100vw"
      />
      <div className="absolute top-0 left-0 w-full h-full pt-5 pl-4 xl:pt-10 xl:pl-[246px]">
        <h1
          className={clsx(
            "text-2xl text-[#122C94] font-black mb-5.5 xl:text-7xl xl:mb-7",
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
        <div className="absolute bottom-0 right-0">
          <Image src={bankQR} alt="银行二维码" />
        </div>
      </div>
    </div>
  );
}
