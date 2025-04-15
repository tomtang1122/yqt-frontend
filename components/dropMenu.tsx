"use client";

import clsx from "clsx";
import Image from "next/image";
import menu from "@assets/menu.png";
import { useState, useEffect, useRef } from "react";
import LinkWithParams from "@components/LinkWithParams";

export default function GlobalHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
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
      <div
        className={clsx(
          "w-max absolute top-6 right-1 rounded-sm shadow-[0_4px_6px_-1px_rgba(0,_0,_0,_.1),_0_2px_4px_-2px_rgba(0,_0,_0,_.1)] border-[rgb(228,_228,_231)] border-1 bg-white transition-all duration-200 ease-in-out origin-top-right z-10",
          isOpen
            ? "opacity-100 scale-100 translate-y-0 visible"
            : "opacity-0 scale-95 translate-y-[-10px] pointer-events-none invisible"
        )}
      >
        <LinkWithParams
          href="/about-us"
          className="block py-3 px-6 transition-all duration-200 hover:bg-[rgb(244,_244,_245)]"
        >
          关于我们
        </LinkWithParams>
        <LinkWithParams
          href="/customer-service"
          className="block py-3 px-6 transition-all duration-200 hover:bg-[rgb(244,_244,_245)]"
        >
          客户服务
        </LinkWithParams>
        <LinkWithParams
          href="/user-agreement"
          className="block py-3 px-6 transition-all duration-200 hover:bg-[rgb(244,_244,_245)]"
        >
          用户协议
        </LinkWithParams>
        <LinkWithParams
          href="/privacy-policy"
          className="block py-3 px-6 transition-all duration-200 hover:bg-[rgb(244,_244,_245)]"
        >
          隐私政策
        </LinkWithParams>
      </div>
    </div>
  );
}
