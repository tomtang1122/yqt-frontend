"use client";

import { useRef, useEffect, type TouchEventHandler } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Enterprise } from "@TS/enterprise";
import { copyToClipboard } from "@lib/utils";
import { toast } from "sonner";
import type { Swiper as SwiperType } from "swiper/types";
import { useIsMobile } from "@lib/hook";
import { EnterpriseCard } from "./enterpriseCard";

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
                <EnterpriseCard
                  enterprise={enterprise}
                  handleTouchStart={handleTouchStart}
                  clearTimer={clearTimer}
                />
              </SwiperSlide>
            ))
          : renderEnterprises.map((enterpriseArray, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col lg:gap-6 lg:flex-row">
                  {enterpriseArray.map((enterprise) => (
                    <EnterpriseCard
                      key={enterprise.enterpriseID}
                      enterprise={enterprise}
                      handleTouchStart={handleTouchStart}
                      clearTimer={clearTimer}
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
