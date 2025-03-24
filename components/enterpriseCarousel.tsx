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
  const tempEnterprises = Array.from(
    { length: 70 },
    (_, i) => enterprises[i % enterprises.length]
  );
  const renderEnterprises = Array.from(
    { length: Math.ceil(tempEnterprises.length / 3) },
    (_, i) => tempEnterprises.slice(i * 3, i * 3 + 3)
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      axis: "y",
      // loop: true,
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
    <div
      className="overflow-hidden w-[1200px] mx-auto max-w-full"
      ref={emblaRef}
    >
      <div className="flex flex-col gap-3 xl:gap-6 h-[var(--ep-carousel-height)] min-h-[200px]">
        {renderEnterprises.map((enterpriseArray, index) => (
          <div key={index} className="flex flex-col gap-3 xl:gap-6 xl:flex-row">
            {enterpriseArray.map((enterprise) => (
              <div
                key={enterprise.enterpriseID}
                className="p-0.5 w-full xl:w-[384px] rounded-lg bg-[radial-gradient(circle,_rgba(255,_255,_108,_1),_rgba(71,_108,_241,_1),_rgba(108,_255,_152,_1),_rgba(254,_120,_245,_1),_rgba(58,_140,_229,_1),_rgba(68,_244,_253,_1),_rgba(71,_109,_239,_1))] bg-clip-border"
              >
                <div className="px-4 py-3 xl:px-5 xl:py-5 h-full overflow-hidden bg-white rounded-md bg-[linear-gradient(180deg,_#FFFBEF_0%,_#FFFFFF_100%)]">
                  <div className="flex items-center mb-2 xl:mb-4">
                    <div className="flex-1 h-8 relative xl:h-12">
                      {enterprise.logo && (
                        <Image
                          className="object-contain object-left"
                          src={getProxyImageUrl(enterprise.logo)}
                          alt="企业 logo"
                          sizes="100%"
                          fill
                        />
                      )}
                    </div>
                    <div className="relative w-6 h-6 xl:w-8 xl:h-8">
                      <Image
                        src={cashback}
                        alt="企业促销logo"
                        sizes="100%"
                        fill
                      />
                    </div>
                  </div>
                  <div className="text-[#E6A23C] text-base xl:text-xl mb-2 line-clamp-1">
                    {enterprise.name}
                  </div>
                  <div className="text-xs xl:text-sm text-[#434343] mb-3 xl:mb-6 line-clamp-1">
                    <a href={enterprise.website} target="_blank">
                      {enterprise.website}
                    </a>
                  </div>
                  <div className="flex gap-2">
                    {enterprise.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] xl:text-[12px] leading-[15px] xl:leading-4.5 py-0.5 px-1.5 text-[#8C8C8C] bg-[#F5F7FA] rounded-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
