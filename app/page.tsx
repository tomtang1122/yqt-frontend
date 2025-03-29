// tode
//1. 删除模拟增加的数据
//2. 删除token的传输
import { EnterpriseCarousel } from "@components/enterpriseCarousel";
import { EnterpriseListResponse } from "@TS/enterprise";
import { post } from "@lib/fetch";
import Image from "next/image";
import cashback from "@assets/cashback.png";
import HeroBanner from "@components/heroBanner";
import homeBg from "@assets/home-bg.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "云雀台 | 首页",
};

export const revalidate = 3600;

export default async function Home() {
  const { data: { data } = {} } = await post<EnterpriseListResponse>(
    "/enterprise/query",
    { pagination: { pageNumber: 1, showNumber: 1000000 } },
    {
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiJpbUFkbWluIiwiVXNlclR5cGUiOjIsIlBsYXRmb3JtSUQiOjAsImV4cCI6MTc1MDc3NTMzMSwibmJmIjoxNzQyOTk5MjcxLCJpYXQiOjE3NDI5OTkzMzF9.iUQ6dyAevqzK-btJz48yLOhZk9PaEqoId2jjvmPoYlM",
      },
    }
  );

  return (
    <div className="homepage">
      <HeroBanner />
      <div
        className="px-4 py-5 xl:pt-12 xl:pb-14"
        style={{
          backgroundImage: `url(${homeBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="h-[var(--ep-carousel-title-height)] flex items-center gap-2 justify-center text-center mb-4 xl:mb-8 text-sm xl:text-[20px] xl:leading-7.5 text-[##434343]">
          <span>向带有</span>
          <Image src={cashback} alt="企业促销logo" width={24} height={24} />
          <span>标识厂商采购将获得优惠券现金激励服务</span>
        </p>
        {data?.enterprises && (
          <EnterpriseCarousel enterprises={data.enterprises} />
        )}
      </div>
    </div>
  );
}
