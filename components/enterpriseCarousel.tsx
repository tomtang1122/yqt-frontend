"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

export function EnterpriseCarousel() {
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
        <div className="bg-red-500 h-[200px] flex-[0_0_80%]">Slide 1</div>
        <div className="bg-blue-500 h-[200px] flex-[0_0_80%]">Slide 2</div>
        <div className="bg-green-500 h-[200px] flex-[0_0_80%]">Slide 3</div>
        <div className="bg-yellow-500 h-[200px] flex-[0_0_80%]">Slide 4</div>
        <div className="bg-purple-500 h-[200px] flex-[0_0_80%]">Slide 5</div>
        <div className="bg-pink-500 h-[200px] flex-[0_0_80%]">Slide 6</div>
      </div>
    </div>
  );
}
