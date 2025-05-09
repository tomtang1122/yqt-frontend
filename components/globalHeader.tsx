import Image from "next/image";
import logo from "@assets/logo.png";
import DropMenu from "@components/dropMenu";
import LinkWithParams from "@components/LinkWithParams";

export default function GlobalHeader() {
  return (
    <div className="h-[var(--ep-header-height)] flex items-center justify-between px-4 lg:pl-[120px] lg:justify-start text-[#141414] sticky top-0 bg-white z-1">
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
            sizes="(max-width: 1024px) 24px, 32px"
          />
        </div>
        <span>云雀台</span>
      </LinkWithParams>
      <DropMenu />
      <div className="hidden lg:flex items-center gap-6 ml-[200px]">
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
  );
}
