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
                  width={24}
                  height={24}
                  alt="企业促销logo"
                />
                <span>
                  标注的企业采购价格之外，用户再额外向平台或厂商申请优惠券额度返还的促进销售服务，业务流程如下：
                </span>
              </div>
              1、采购人向厂商采购并支付相应货款
              <br />
              2、采购人注册云雀台并向云雀台服务中心提交以下示例业务订单信息：
              <table className="my-3">
                <tr className="text-center">
                  <td className="border-t border-l border-gray-300 p-2">
                    合同编号
                  </td>
                  <td className="border-t border-l border-r border-gray-300 p-2">
                    xxxxxxxxxx
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="border-t border-l border-gray-300 p-2">
                    发票总额
                  </td>
                  <td className="border-t border-l border-r border-gray-300 p-2">
                    xxx.xx万
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="border-t border-l border-gray-300 p-2">
                    发票日期
                  </td>
                  <td className="border-t border-l border-r border-gray-300 p-2">
                    xxxx年xx月xx日
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="border-t border-l border-gray-300 p-2">
                    客户名称
                  </td>
                  <td className="border-t border-l border-r border-gray-300 p-2">
                    xxx公司
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="border-t border-l border-b border-gray-300 p-2">
                    客户银行账户
                  </td>
                  <td className="border-t border-l border-b border-r border-gray-300 p-2">
                    xx银行 xxxxxxxxxxxxxx
                  </td>
                </tr>
              </table>
              3、平台向厂商确认交易订单信息，并与厂商核算优惠券额度，向厂商申请支付优惠券额度至平台账户
              <br />
              4、云雀台收到厂商优惠券额度款项后 7
              个工作日内向购买人支付优惠券额度款项
              <br />
              5、优惠券有效期为发票开票日期之日开始计算 60 天内有效，超过 60
              天平台不支持兑换
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                创新场景系统集成技术转化
              </h2>
              云雀台欢迎全球科学家以及科研院所对平台内企业现有产品科学技术（软硬件）进行技术提取改造，鼓励技术团队围绕国家战略需求开展技术攻关优化以及迭代，培育多环境场景应用与新业态创新能力，围绕前瞻性、战略性新兴技术集中，通过：以市场订单为导向、以科技含量为核心、以可持续发展描绘创新经济增长曲线。云雀台举措包括：
              <br />
              1、平台全天候接收战略性技术信息源
              <br />
              2、平台生态自研自衍
              <br />
              3、推动国有平台资本参与科技成果转化
              <br />
              4、常态化采集并推动平台成员企业加强研发生产
              <br />
              5、平台与成员企业全天候响应国家与社会调度需求
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                生产力创投
              </h2>
              云雀台坚定不移响应国家政策，与国有资本深度融合建立市场化运作的科创孵化平台，推动单一或多个成员企业参与国有资本与社会私人股权投资，通过成员之间的各自优势生产力更新商业价值，通过生产力重组重构科学技术水平，赋能新质生产力，推动平台企业进入资本市场
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                科技人文与社会责任
              </h2>
              云雀台成员企业代表各自领域先进生产力集合，亦是社会责任的践行者，100%为科技型企业并且拥有专精特新，小巨人等荣誉称号，每一个企业即是一本知识图谱，涵盖：电子计算机科学、数学、物理、化学、天文等众多基础科学，并成功应用在：教育、公共安全、交通、医疗等领域，云雀台成员企业家积极履行新时代企业家社会责任，对标全球一流企业奋进，成员企业分布在全国各地并拥有展厅，企业常态化向公众开放并科普科学知识应用，积极为教育薄弱地区捐资助学与公益事业，努力践行社会责任，是中国集合：商业、科普、产学研一体化最大规模的科教集群之一，欢迎公众访问企业
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                服务须知
              </h2>
              尊敬的云雀台企业用户，欢迎您使用云雀台，我们竭尽所能为您提供最好的服务，以及为用户提供良好的采购服务体验，我们欢迎您的企业入驻云雀台并具备如下其中之一能力或条件：
              <br />
              1、具有政府颁发的：专精特新 小巨人等荣誉称号
              <br />
              2、高等院校科技成果转化初创型企业
              <br />
              3、港澳台企业家以及在大陆设立的企业
              <br />
              4、掌握前沿先进生产力技术并具有颠覆性影响力的创新型业态企业
              <br />
              5、世界 500 强企业在中国投资或合资设立的企业
              <br />
              6、退役军人所创立的企业（为了最大限度避免市场风险，该企业将由平台企业高管给予创业指导）
              <br />
              <p className="mt-2">
                云雀台对以下情形的企业用户拒绝提供服务，具体方式包括但不限于移除、冻结、禁止登录企业相关信息与服务：
              </p>
              1、违反中华人民共和国相关法律法规，包括但不限于：《即时通信工具公众信息服务发展管理暂行规定》《中华人民共和国国家安全法》等法律法规
              <br />
              2、侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利
              <br />
              3、具有涉及重大诉讼、破产、欺诈、失信人、以及其他无法履约风险
              <br />
              4、企业官网信息无法展示或联络失败
              <br />
              5、客户服务意识淡薄、产品质量以及售后保障体系低下，用户体验差
              <p className="text-right font-bold">云雀台服务中心</p>
            </div>
          </div>
        }
      />
    </div>
  );
}
