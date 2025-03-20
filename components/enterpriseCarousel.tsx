"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Enterprise } from "@TS/enterprise";
import cashback from "@assets/cashback.png";
import Image from "next/image";
import { getProxyImageUrl } from "@lib/utils";

export function EnterpriseCarousel({
  enterprises,
}: {
  enterprises: Enterprise[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      axis: "y",
      // loop: true,
      dragFree: true,
    },
    [AutoScroll({ playOnInit: true, speed: 1, startDelay: 2000 })]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    // 监听滚动停止事件
    const handleScrollEnd = () => {
      const progress = emblaApi.scrollProgress();
      if (
        progress < 0.99 &&
        autoScroll &&
        typeof autoScroll.play === "function"
      ) {
        autoScroll.play();
      }
    };

    // 防止边缘拖动出现空白
    // const preventEdgeScrolling = () => {
    //   const {
    //     limit,
    //     target,
    //     location,
    //     offsetLocation,
    //     scrollTo,
    //     translate,
    //     scrollBody,
    //   } = emblaApi.internalEngine();

    //   let edge: number | null = null;

    //   if (limit.reachedMax(target.get())) edge = limit.max;
    //   if (limit.reachedMin(target.get())) edge = limit.min;

    //   if (edge !== null) {
    //     offsetLocation.set(edge);
    //     location.set(edge);
    //     target.set(edge);
    //     translate.to(edge);
    //     translate.toggleActive(false);
    //     scrollBody.useDuration(0).useFriction(0);
    //     scrollTo.distance(0, false);
    //   } else {
    //     translate.toggleActive(true);
    //   }
    // };

    emblaApi.on("settle", handleScrollEnd);
    // .on("scroll", preventEdgeScrolling);
    return () => {
      emblaApi.off("settle", handleScrollEnd);
      // emblaApi.off("scroll", preventEdgeScrolling);
    };
  }, [emblaApi]);

  return (
    <div className="overflow-hidden w-[1200px] mx-auto" ref={emblaRef}>
      <div className="flex flex-col h-[400px]">
        {enterprises.map((enterprise) => (
          <div
            key={enterprise.enterpriseID}
            className="enterprise-card p-0.5 rounded-lg w-[400px] mb-6"
          >
            <div className="enterprise-card-container p-5 bg-white rounded-md bg-[linear-gradient(180deg,_#FFFBEF_0%,_#FFFFFF_100%)]">
              <div className="flex items-center mb-4">
                <div className="flex-1 h-12 relative">
                  {enterprise.logo && (
                    <Image
                      className="object-contain object-left"
                      src={getProxyImageUrl(enterprise.logo)}
                      alt="企业 logo"
                      fill
                    />
                  )}
                </div>
                <Image
                  src={cashback}
                  alt="企业促销logo"
                  width={32}
                  height={32}
                />
              </div>
              <div className="text-[#E6A23C] text-xl mb-2">
                {enterprise.name}
              </div>
              <div className="text-sm text-[#434343] mb-6">
                <a href={enterprise.website} target="_blank">
                  {enterprise.website}
                </a>
              </div>
              <div className="flex gap-2">
                {enterprise.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] leading-4.5 py-0.5 px-1.5 text-[#8C8C8C] bg-[#F5F7FA] rounded-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
