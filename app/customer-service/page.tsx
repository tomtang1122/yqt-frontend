import Article from "@components/article";
import Breadcrumbs from "@components/breadcrumbs";
import homeBg from "@assets/home-bg.png";
import { Metadata } from "next";
import Image from "next/image";
import cashback from "@assets/cashback.png";

export const metadata: Metadata = {
  title: "客户服务",
};

export default function CustomerService() {
  return (
    <div
      className="min-h-[var(--eq-article-height)]"
      style={{
        backgroundImage: `url(${homeBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Breadcrumbs
        breadcrumbs={[{ name: "首页", href: "/" }, { name: "客户服务" }]}
      />
      <Article
        title="客户服务"
        content={
          <div>
            尊敬的云雀台用户
            <br />
            云雀台竭力为您提供以下服务：
            <br />
            <br />
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                营销推广激励服务
              </h2>
              坚持数字化产业经济可持续发展，云雀台向中国境内外机构与个人征集厂商销售线索，拓宽企业市场销售半径与边界，对实现云雀台厂商包括高新技术企业、专精特新、小巨人企业与终端用户订单成功签约并顺利回款（包括境内但不限于一带一路国家以及全球）的线索提供人给予订单总额一定比例的现金激励，详情请咨询云雀台服务中心或品牌商。
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                产业金融服务
              </h2>
              云雀台积极协同金融机构为用户提供多种便捷金融产品服务用于向厂商采购，您的企业信息仅限于您和银行之间传递，任何其他第三方均无法得知您的企业隐私。平台合作银行与信息化产业深度融合，建设集合：产业研发、生产、营销全产业生命周期金融数据基础设施，云雀台建设产融机制举措包括：
              <br />
              1、平台全体成员企业紧密相连，从单一企业凝聚融合成为产业级生态集束，实现整体生产力数据具象化与银行互联互通，从研发、生产、营销全链实现可视化金融数据要素提取，建设:可信、可验、可据中后台底座能力
              <br />
              2、平台第一时间捕获先进生产力，努力与国有银行构建生产力转化金融生产体系
              <br />
              3、成员企业与银行紧密协同，倾力为全国电子信息化产业市场创业企业提供授信数据支撑，为上下游中小企业提供授信依据，扩大产业金融流动边界。
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                代理商激励服务
              </h2>
              <div className="leading-6 mb-1">
                <span>是指用户向带有</span>
                <Image
                  className="inline-block mx-2"
                  src={cashback}
                  alt="企业促销logo"
                  width={24}
                  height={24}
                />
                <span>
                  标注的企业采购价格之外，用户再额外向平台或厂商申请优惠券额度返还的促进销售服务，业务流程如下：
                </span>
              </div>
              1、采购人向厂商采购并支付相应货款
              <br />
              2、采购人注册云雀台并向云雀台服务中心提交以下示例业务订单信息：
            </div>
          </div>
        }
      />
    </div>
  );
}
