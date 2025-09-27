"use client";

import clsx from "clsx";
import { useState } from "react";
import { DownArrowIcon } from "@components/Icons/downArrowIcon";
import LinkWithParams from "@components/LinkWithParams";

export default function FinanceList() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative hidden lg:block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center gap-1 lg:gap-2 py-1.5 px-4 transition-all duration-200 hover:bg-[rgb(244,_244,_245)] font-semibold cursor-pointer">
        <span>业务工单</span>
        <DownArrowIcon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
      </div>

      {/* 下拉菜单 */}
      <div
        className={clsx(
          "absolute top-[42px] left-0 rounded-sm shadow-[0_4px_6px_-1px_rgba(0,_0,_0,_.1),_0_2px_4px_-2px_rgba(0,_0,_0,_.1)] border-[rgb(228,_228,_231)] border-1 bg-white transition-all duration-200 ease-in-out origin-top-right z-10 min-w-[160px]",
          {
            "opacity-100 visible translate-y-0": isOpen,
            "opacity-0 invisible -translate-y-2": !isOpen,
          }
        )}
      >
        <div className="py-2 px-1">
          <LinkWithParams
            href="/finance/procurement"
            className="block py-3 px-6 transition-all duration-200 hover:bg-[rgb(244,_244,_245)] text-sm"
          >
            额度申请
          </LinkWithParams>
          <LinkWithParams
            href="/finance/rebate"
            className="block py-3 px-6 transition-all duration-200 hover:bg-[rgb(244,_244,_245)] text-sm"
          >
            贴息申请
          </LinkWithParams>
        </div>
      </div>
    </div>
  );
}
