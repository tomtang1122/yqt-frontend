import Article from "@components/article";
import Breadcrumbs from "@components/breadcrumbs";
import homeBg from "@assets/home-bg.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们",
};

export default function AboutUs() {
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
        breadcrumbs={[{ name: "首页", href: "/" }, { name: "关于我们" }]}
      />
      <Article
        title="关于我们"
        content={
          <div>
            中国，这片古老而充满活力的土地，正在以开放的胸怀、创新的动能和庞大的市场，向世界发出诚挚邀请，欢迎您来中国投资兴业，与我们共同书写合作共赢的新篇章
            <br />
            <br />
            中国作为世界最大经济体之一，信息化科技产业也在不断蓬勃发展，成功应用在：教育
            通讯 交通 电力 环保
            公共安全等领域，云雀台致力于向公众以及全球展示中国科技企业的科技成果，产品与服务，同时为全球用户提供全天候商务通讯服务，并通过我们的合作银行，保险等机构确保贸易安全与资金融通。欢迎全球企业访问我们的企业官网与商务联络，无论您在全球何处，欢迎您通过云雀台官网或APP与企业联系，同时为您提供365
            x24H服务，热诚欢迎您的访问！
            <br />
            <br />
            China, this ancient and vibrant land, is sending a sincere
            invitation to the world with an open mind, innovative momentum, and
            a huge market. We welcome you to invest and develop in China, and
            work together with us to write a new chapter of win-win cooperation
            <br />
            <br />
            As one of the world&apos;s largest economies, China&apos;s
            information technology industry is also constantly flourishing,
            successfully applied in fields such as education, communication,
            transportation, electricity, environmental protection, and public
            safety. Yunquetai is committed to showcasing the technological
            achievements, products, and services of Chinese technology
            enterprises to the public and the world, while providing 24/7
            business communication services to global users. Through our
            cooperative banks, insurance institutions, and other institutions,
            global users. Through our cooperative banks, insurance institutions,
            and other institutions, we ensure trade security and financial
            integration. Welcome global enterprises to visit our official
            website and contact us for business. No matter where you are in the
            world, you are welcome to contact enterprises through the Yunquetai
            official website or APP. We also provide you with 365 day x24H
            service and warmly welcome your visit!
          </div>
        }
      />
    </div>
  );
}
