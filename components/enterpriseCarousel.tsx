"use client";

import { useEffect, useRef, type TouchEventHandler } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Enterprise } from "@TS/enterprise";
import cashback from "@assets/cashback.png";
import Image from "next/image";
import { copyToClipboard } from "@lib/utils";
import { toast } from "sonner";

export function EnterpriseCarousel({
  enterprises,
  isEmbedApp,
}: {
  enterprises: Enterprise[];
  isEmbedApp: boolean;
}) {
  const tempEnterprises = Array.from(
    { length: enterprises.length * 3 },
    (_, i) => enterprises[i % enterprises.length]
  );
  const renderEnterprises = Array.from(
    { length: Math.ceil(tempEnterprises.length / 3) },
    (_, i) => tempEnterprises.slice(i * 3, i * 3 + 3)
  );

  const timerRef = useRef<number | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      axis: "y",
      loop: true,
      dragFree: true,
    },
    [AutoScroll({ playOnInit: true, speed: 1, startDelay: 1500 })]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    // 监听滚动停止事件
    const handleScrollEnd = () => {
      console.log("scroll end");
      const progress = emblaApi.scrollProgress();
      if (
        progress < 0.99 &&
        autoScroll &&
        typeof autoScroll.play === "function"
      ) {
        autoScroll.play();
      }
    };

    emblaApi.on("settle", handleScrollEnd);
    return () => {
      emblaApi.off("settle", handleScrollEnd);
    };
  }, [emblaApi]);

  const handleTouchStart: TouchEventHandler<HTMLAnchorElement> = (e) => {
    if (
      !(typeof window !== "undefined" && "ontouchstart" in window) ||
      !isEmbedApp
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
    <div
      className="overflow-hidden w-[1200px] mx-auto max-w-full"
      ref={emblaRef}
    >
      <div className="flex flex-col h-[var(--ep-carousel-height)] min-h-[200px]">
        {renderEnterprises.map((enterpriseArray, index) => (
          <div key={index} className="flex flex-col lg:gap-6 lg:flex-row">
            {enterpriseArray.map((enterprise) => (
              <a
                key={enterprise.enterpriseID}
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
                    {enterprise.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[12px] lg:text-[14px] py-0.5 px-1.5 text-[#141414] bg-[#F5F7FA] rounded-xs"
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
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
