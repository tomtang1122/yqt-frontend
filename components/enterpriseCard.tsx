"use client";

import clsx from "clsx";
import { useRef, type TouchEventHandler, Suspense } from "react";
import { Enterprise } from "@TS/enterprise";
import { useEmbedApp } from "@lib/hook";
import { copyToClipboard } from "@lib/utils";
import { toast } from "sonner";

interface EnterpriseCardProps {
  enterprise: Enterprise;
  hasContacts?: boolean;
}

export function EnterpriseCard({
  enterprise,
  hasContacts,
}: EnterpriseCardProps) {
  const timerRef = useRef<number | null>(null);
  const { isEmbedded } = useEmbedApp();

  const handleTouchStart: TouchEventHandler<HTMLAnchorElement> = (e) => {
    if (
      !(typeof window !== "undefined" && "ontouchstart" in window) ||
      !isEmbedded
    )
      return;
    const linkElement = e.currentTarget;
    const linkUrl = linkElement?.dataset?.href;
    if (linkElement && linkUrl) {
      timerRef.current = window.setTimeout(() => {
        copyToClipboard(linkUrl);
        toast("复制成功");
      }, 600);
    }
  };

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <a
      className="relative block p-0.5 w-full rounded-lg bg-[radial-gradient(circle,_rgba(255,_255,_108,_1),_rgba(71,_108,_241,_1),_rgba(108,_255,_152,_1),_rgba(254,_120,_245,_1),_rgba(58,_140,_229,_1),_rgba(68,_244,_253,_1),_rgba(71,_109,_239,_1))] bg-clip-border"
      href={enterprise.website}
      data-href={enterprise.website}
      onTouchStart={handleTouchStart}
      onTouchEnd={clearTimer}
      onTouchMove={clearTimer}
    >
      <div className="flex flex-col lg:flex-row h-full overflow-hidden rounded-md bg-[linear-gradient(180deg,_#FFFBEF_0%,_#FFFFFF_100%)]">
        <div className="px-4 py-3 lg:px-5 lg:py-5 flex-1">
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
                    "text-[#BE123C] bg-[#FFE4E6]":
                      enterprise?.tagsTypes?.[j] === 4,
                  }
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {hasContacts &&
          enterprise.contacts &&
          enterprise.contacts.length > 0 && (
            <div className="px-4 pt-6 pb-3 lg:pl-8 lg:pr-5 lg:py-5 flex-1">
              <h2 className="text-lg lg:text-2xl font-semibold mb-4 text-[#141414]">
                企业联系人ID
              </h2>
              <ul>
                {enterprise.contacts.map((contact) => (
                  <li
                    key={contact}
                    className="text-[#141414] text-base lg:text-lg mb-2"
                  >
                    {contact}
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>
    </a>
  );
}

export function EnterpriseCardSuspense(props: EnterpriseCardProps) {
  return (
    <Suspense>
      <EnterpriseCard {...props} />
    </Suspense>
  );
}
