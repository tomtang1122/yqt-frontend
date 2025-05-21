"use client";

import { useRef, useEffect, type TouchEventHandler } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Enterprise } from "@TS/enterprise";
import cashback from "@assets/cashback.png";
import Image from "next/image";
import { copyToClipboard } from "@lib/utils";
import { toast } from "sonner";
import type { Swiper as SwiperType } from "swiper/types";
import { useIsMobile } from "@lib/hook";

import "swiper/css";

const AUTO_SPEED = 3000;

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

  const swiperRef = useRef<SwiperType | null>(null);
  const timerRef = useRef<number | null>(null);
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();

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

  const handleSwiperInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;

    const autoScroll = () => {
      swiper.slideNext(AUTO_SPEED);
      swiper.once("transitionEnd", () => {
        autoScroll();
      });
    };

    const stopAutoScroll = () => {
      swiper.off("transitionEnd");
      if (autoScrollTimerRef.current) {
        clearTimeout(autoScrollTimerRef.current);
      }
    };

    const startAutoScroll = () => {
      if (autoScrollTimerRef.current) {
        clearTimeout(autoScrollTimerRef.current);
      }
      autoScrollTimerRef.current = setTimeout(() => {
        autoScroll();
      }, 1500);
    };

    startAutoScroll();

    swiper.on("touchStart", stopAutoScroll);
    swiper.on("touchEnd", startAutoScroll);
  };

  // 清理定时器以及事件
  useEffect(() => {
    const swiper = swiperRef.current;

    return () => {
      if (autoScrollTimerRef.current) {
        clearTimeout(autoScrollTimerRef.current);
      }
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      if (swiper) {
        swiper.off("touchStart");
        swiper.off("touchEnd");
      }
    };
  }, []);

  return (
    <div className="overflow-hidden w-[1200px] mx-auto max-w-full">
      <Swiper
        slidesPerView="auto"
        direction={"vertical"}
        loop={true}
        loopAdditionalSlides={5} // 循环轮播图的额外数量，避免幻灯片切换时，瞬移。如果还是瞬移，需要继续增大此数值
        className="h-[var(--ep-carousel-height)] min-h-[200px] continuous-scroll"
        onSwiper={handleSwiperInit}
      >
        {isMobile
          ? enterprises.map((enterprise, index) => (
              <SwiperSlide key={index}>
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
              </SwiperSlide>
            ))
          : renderEnterprises.map((enterpriseArray, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col lg:gap-6 lg:flex-row">
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
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
