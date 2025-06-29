"use client";

import clsx from "clsx";
import type { TouchEventHandler } from "react";
import cashback from "@assets/cashback.png";
import Image from "next/image";
import { Enterprise } from "@TS/enterprise";

interface EnterpriseCardProps {
  enterprise: Enterprise;
  handleTouchStart: TouchEventHandler<HTMLAnchorElement>;
  clearTimer: () => void;
}

export function EnterpriseCard({
  enterprise,
  handleTouchStart,
  clearTimer,
}: EnterpriseCardProps) {
  return (
    <a
      className="block select-none p-0.5 w-full lg:w-[384px] rounded-lg bg-[radial-gradient(circle,_rgba(255,_255,_108,_1),_rgba(71,_108,_241,_1),_rgba(108,_255,_152,_1),_rgba(254,_120,_245,_1),_rgba(58,_140,_229,_1),_rgba(68,_244,_253,_1),_rgba(71,_109,_239,_1))] bg-clip-border mb-3 lg:mb-6"
      href={enterprise.website}
      data-href={enterprise.website}
      onTouchStart={handleTouchStart}
      onTouchEnd={clearTimer}
      onTouchMove={clearTimer}
    >
      <div className="relative px-4 py-3 lg:px-5 lg:py-5 h-full overflow-hidden bg-white rounded-md bg-[linear-gradient(180deg,_#FFFBEF_0%,_#FFFFFF_100%)]">
        <div className="h-8 lg:h-12 mb-2 lg:mb-4 flex items-center">
          {enterprise.logo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="w-auto h-auto max-h-full"
              src={enterprise.logo}
              alt="企业 logo"
            />
          )}
        </div>
        <div className="text-[#E6A23C] text-base lg:text-xl mb-2 line-clamp-1">
          {enterprise.name}
        </div>
        <div className="flex gap-2 flex-wrap">
          {enterprise.tags?.map((tag, j) => (
            <span
              key={tag}
              className={clsx(
                "text-[12px] lg:text-[14px] py-0.5 px-1.5 rounded-xs",
                {
                  "text-[#141414] bg-[#f5f7fa]":
                    enterprise?.tagsTypes?.[j] === 0,
                  "text-[#188038] bg-[#E6F4EA]":
                    enterprise?.tagsTypes?.[j] === 1,
                  "text-[#1A73E8] bg-[#E8F0FE]":
                    enterprise?.tagsTypes?.[j] === 2,
                  "text-[#E37400] bg-[#FFF4E5]":
                    enterprise?.tagsTypes?.[j] === 3,
                  "text-[#9334E6] bg-[#F3E8FD]":
                    enterprise?.tagsTypes?.[j] === 4,
                }
              )}
            >
              {tag}
            </span>
          ))}
        </div>
        {enterprise.isEligibleForCashback && (
          <div className="absolute top-1 right-1">
            <Image
              className="w-6 h-6 lg:w-8 lg:h-8"
              src={cashback}
              alt="企业促销logo"
              width={32}
              height={32}
              sizes="(max-width: 1024px) 24px, 32px"
            />
          </div>
        )}
      </div>
    </a>
  );
}
