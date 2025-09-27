import Image from "next/image";
import logo from "@assets/logo.png";
import DropMenu from "@components/dropMenu";
import LinkWithParams from "@components/LinkWithParams";
import { EnterpriseSearch } from "./enterpriseSearch";
import { Suspense } from "react";
import { FinanceIcon } from "@components/Icons/finance";

export default function GlobalHeader() {
  return (
    <div className="h-[var(--ep-header-height)] flex items-center justify-between px-4 lg:px-8 xl:px-[120px] text-[#141414] sticky top-0 bg-white z-10">
      <LinkWithParams
        href="/"
        className="flex items-center gap-2.5 font-bold text-lg lg:text-xl"
      >
        <div>
          <Image
            className="w-6 h-6 lg:h-8 lg:w-8"
            src={logo}
            alt="云雀台logo"
            width={32}
            height={32}
          />
        </div>
        <span>云雀台</span>
      </LinkWithParams>
      <div className="flex items-center gap-3 lg:gap-6">
        <div>
          <LinkWithParams
            href="/finance"
            className="flex items-center gap-1 lg:gap-2 rounded-4xl bg-[#E8F0FE] pl-2 lg:pl-3 cursor-pointer"
          >
            <span className="text-xs lg:text-sm text-[#1A73E8] font-semibold">
              产业金融
            </span>
            <span className="w-6 lg:w-8 h-6 lg:h-8 flex items-center justify-center bg-[#1A73E8] hover:bg-[#1765cc] text-white rounded-full transition-all duration-300">
              <FinanceIcon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
            </span>
          </LinkWithParams>
        </div>
        <Suspense>
          <EnterpriseSearch />
        </Suspense>
        <DropMenu />
        <div className="hidden lg:flex items-center gap-6">
          <LinkWithParams
            href="/about-us"
            className="block py-3 px-8 transition-all duration-200 hover:bg-[rgb(244,_244,_245)] font-semibold"
          >
            关于我们
          </LinkWithParams>
          <LinkWithParams
            href="/customer-service"
            className="block py-3 px-8 transition-all duration-200 hover:bg-[rgb(244,_244,_245)] font-semibold"
          >
            客户服务
          </LinkWithParams>
          <LinkWithParams
            href="/user-agreement"
            className="block py-3 px-8 transition-all duration-200 hover:bg-[rgb(244,_244,_245)] font-semibold"
          >
            用户协议
          </LinkWithParams>
          <LinkWithParams
            href="/privacy-policy"
            className="block py-3 px-8 transition-all duration-200 hover:bg-[rgb(244,_244,_245)] font-semibold"
          >
            隐私政策
          </LinkWithParams>
        </div>
      </div>
    </div>
  );
}
