"use client";

import clsx from "clsx";
import Image from "next/image";
import menu from "@assets/menu.png";
import { useState, useEffect, useRef } from "react";
import LinkWithParams from "@components/LinkWithParams";
import { DownArrowIcon } from "@components/Icons/downArrowIcon";

export default function DropMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFinanceOpen, setIsFinanceOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setIsFinanceOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative h-6 block lg:hidden">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
      >
        <Image src={menu} alt="云雀台菜单" width={24} height={24} />
      </button>

      {/* 下拉菜单 - 从右上角开始向下展开 */}
      <div
        ref={menuRef}
        className={clsx(
          "absolute top-full right-0 bg-white rounded-sm shadow-[0_4px_6px_-1px_rgba(0,_0,_0,_.1),_0_2px_4px_-2px_rgba(0,_0,_0,_.1)] border-[rgb(228,_228,_231)] border-1 z-10 transition-all duration-200 ease-in-out origin-top-right min-w-[200px]",
          isOpen
            ? "opacity-100 visible scale-100 translate-y-0"
            : "opacity-0 invisible scale-95 -translate-y-2"
        )}
      >
        <div className="py-2">
          {/* 产业金融菜单 */}
          <div className="relative">
            <button
              onClick={() => setIsFinanceOpen(!isFinanceOpen)}
              className="flex items-center justify-between w-full py-3 px-4 text-left hover:bg-[rgb(244,_244,_245)] transition-colors duration-200 text-sm"
            >
              <span>产业金融</span>
              <DownArrowIcon
                className={clsx(
                  "w-4 h-4 transition-transform duration-200",
                  isFinanceOpen ? "rotate-180" : "rotate-0"
                )}
              />
            </button>

            {/* 产业金融子菜单 */}
            <div
              className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isFinanceOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="pl-4">
                <LinkWithParams
                  href="/finance/procurement"
                  className="block py-2 px-4 hover:bg-[rgb(244,_244,_245)] transition-colors duration-200 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  额度申请
                </LinkWithParams>
                <LinkWithParams
                  href="/finance/rebate"
                  className="block py-2 px-4 hover:bg-[rgb(244,_244,_245)] transition-colors duration-200 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  贴息申请
                </LinkWithParams>
              </div>
            </div>
          </div>

          {/* 其他菜单项 */}
          <LinkWithParams
            href="/about-us"
            className="block py-3 px-4 hover:bg-[rgb(244,_244,_245)] transition-colors duration-200 text-sm"
            onClick={() => setIsOpen(false)}
          >
            关于我们
          </LinkWithParams>
          <LinkWithParams
            href="/customer-service"
            className="block py-3 px-4 hover:bg-[rgb(244,_244,_245)] transition-colors duration-200 text-sm"
            onClick={() => setIsOpen(false)}
          >
            客户服务
          </LinkWithParams>
          <LinkWithParams
            href="/user-agreement"
            className="block py-3 px-4 hover:bg-[rgb(244,_244,_245)] transition-colors duration-200 text-sm"
            onClick={() => setIsOpen(false)}
          >
            用户协议
          </LinkWithParams>
          <LinkWithParams
            href="/privacy-policy"
            className="block py-3 px-4 hover:bg-[rgb(244,_244,_245)] transition-colors duration-200 text-sm"
            onClick={() => setIsOpen(false)}
          >
            隐私政策
          </LinkWithParams>
        </div>
      </div>
    </div>
  );
}
