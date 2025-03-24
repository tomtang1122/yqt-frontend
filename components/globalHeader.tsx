import Image from "next/image";
import logo from "@assets/logo.png";
import DropMenu from "@components/dropMenu";
import Link from "next/link";

export default function GlobalHeader() {
  return (
    <div className="h-[var(--ep-header-height)] flex items-center justify-between px-4 xl:px-[246px] xl:justify-start text-[#141414] sticky top-0 bg-white z-1">
      <Link
        href="/"
        className="flex items-center gap-2 .5 font-bold text-lg xl:text-[32px]"
      >
        <div className="w-8 h-8 relative xl:w-11.5 xl:h-11.5">
          <Image src={logo} alt="云雀台logo" layout="fill" />
        </div>
        <span>云雀台</span>
      </Link>
      <DropMenu />
      <div className="hidden xl:flex items-center gap-6 ml-[200px]">
        <Link
          href="/about-us"
          className="block py-5 px-8 transition-all duration-200 hover:bg-[rgb(244,_244,_245)]"
        >
          关于我们
        </Link>
        <Link
          href="/customer-service"
          className="block py-5 px-8 transition-all duration-200 hover:bg-[rgb(244,_244,_245)]"
        >
          客户服务
        </Link>
        <Link
          href="/privacy-policy"
          className="block py-5 px-8 transition-all duration-200 hover:bg-[rgb(244,_244,_245)]"
        >
          隐私政策
        </Link>
      </div>
    </div>
  );
}
