"use client";

import { useEmbedApp } from "@lib/hook";
import Image from "next/image";
import gov from "@assets/gov.png";

export default function GlobalFooter() {
  const { isEmbedded } = useEmbedApp();

  return !isEmbedded ? (
    <div className="h-[var(--ep-footer-height)] bg-[#EBEEF5] text-[#434343] py-2 text-[10px] xl:text-sm flex flex-col gap-0.5 text-center items-center xl:flex-row xl:gap-2.5 justify-center">
      <div>网站标识码: bm14000001京ICP备.5002860号</div>
      <div className="flex items-center gap-2.5 justify-center">
        <div className="w-3 h-3 relative xl:w-3.5 xl:h-3.5">
          <Image src={gov} alt="云雀台logo" layout="fill" />
        </div>
        <div>京公网安备11010202000006号</div>
      </div>
    </div>
  ) : null;
}
