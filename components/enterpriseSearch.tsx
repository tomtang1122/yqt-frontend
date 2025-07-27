"use client";

import { useState, useRef } from "react";
import { useRouterWithParams } from "@lib/hook";

const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-3.5 h-3.5 lg:w-4 lg:h-4"
    aria-hidden="true"
    role="img"
  >
    <path
      fill="currentColor"
      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
    />
  </svg>
);

export function EnterpriseSearch() {
  const [isExpanded, setIsExpanded] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouterWithParams();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsExpanded(false);
    const formData = new FormData(e.currentTarget);
    const searchTerm = formData.get("search") as string;
    if (searchTerm?.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 300);
    }
  };

  const closeSearch = () => {
    setIsExpanded(false);
  };

  return (
    <div className="search-container ml-0 lg:ml-6">
      <button
        type="button"
        onClick={toggleExpanded}
        className="flex items-center gap-1 lg:gap-2 rounded-4xl bg-[#E8F0FE] pl-2 lg:pl-3 cursor-pointer"
        aria-label={isExpanded ? "关闭搜索" : "打开搜索"}
        aria-expanded={isExpanded}
        aria-controls="search-form"
      >
        <span className="text-xs lg:text-sm text-[#1A73E8] font-semibold">
          品牌商询价
        </span>
        <span className="w-6 lg:w-8 h-6 lg:h-8 flex items-center justify-center bg-[#1A73E8] hover:bg-[#1765cc] text-white rounded-full transition-all duration-300">
          {searchIcon}
        </span>
      </button>

      {isExpanded && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-40 transition-all"
          onClick={closeSearch}
          aria-hidden="true"
        />
      )}

      <form
        id="search-form"
        onSubmit={handleSearch}
        className={`fixed max-w-[800px] top-[var(--ep-header-height)] transition-all duration-300 ease-in-out z-50 left-0 right-0 mx-auto ${
          isExpanded ? "h-10 lg:h-14 opacity-100" : "h-0 opacity-0"
        }`}
        role="search"
      >
        <div className="absolute left-4 top-1/2 translate-y-[-50%] w-6 h-6 flex items-center justify-center text-[#6a7282] pointer-events-none">
          {searchIcon}
        </div>
        <label htmlFor="search-input" className="sr-only">
          搜索品牌
        </label>
        <input
          ref={searchInputRef}
          id="search-input"
          name="search"
          type="search"
          placeholder="品牌品牌与产品..."
          className="w-full h-full py-2 pl-14 pr-4 text-sm placeholder-[#4a5565] focus:outline-none border-2 border-[#d1d5dc] focus:border-[#1765cc] rounded-4xl bg-white"
        />
        <button type="submit" className="sr-only">
          搜索
        </button>
      </form>
    </div>
  );
}
