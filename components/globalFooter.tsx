"use client";

import { useEmbedApp } from "@lib/hook";
import Image from "next/image";
import gov from "@assets/gov.png";

export default function GlobalFooter() {
  const { isEmbedded } = useEmbedApp();

  return !isEmbedded ? (
    <div className="h-[var(--ep-footer-height)] bg-[#EBEEF5] text-[#434343] py-2 text-[10px] lg:text-xs flex flex-col gap-0.5 text-center items-center lg:flex-row lg:gap-2.5 justify-center">
      <div>
        备案号：
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          粤ICP备2022110420号-1
        </a>
      </div>
      <div className="flex items-center gap-2.5 justify-center">
        <div>
          <Image
            className="w-3 h-3 lg:w-3.5 lg:h-3.5"
            src={gov}
            width={14}
            height={14}
            alt="政府公安图标"
            sizes="(max-width: 1024px) 12px, 14px"
          />
        </div>
        <div>
          <a
            href="https://beian.mps.gov.cn/#/query/webSearch?code=44010602010881"
            target="_blank"
            rel="noopener noreferrer"
          >
            粤公网安备44010602010881号
          </a>
        </div>
      </div>
    </div>
  ) : null;
}
