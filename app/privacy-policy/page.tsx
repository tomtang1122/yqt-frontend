import Article from "@components/article";
import Breadcrumbs from "@components/breadcrumbs";
import homeBg from "@assets/home-bg.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "隐私政策",
};

export default function PrivacyPolicy() {
  return (
    <div
      style={{
        backgroundImage: `url(${homeBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Breadcrumbs
        breadcrumbs={[{ name: "首页", href: "/" }, { name: "隐私政策" }]}
      />
      <Article
        title="隐私政策"
        content={
          <div>
            云雀台十分重视用户的隐私。您在使用我们的服务时，我们可能会收集和使用您的相关信息。我们希望通过本《隐私政策》向您说明，在使用我们的服务时，我们如何收集、使用、储存和分享这些信息，以及我们为您提供的访问、更新、控制和保护这些信息的方式。本《隐私政策》与您所使用的云雀台服务息息相关，希望您仔细阅读，在需要时，按照本《隐私政策》的指引，作出您认为适当的选择。本《隐私政策》中涉及的相关技术词汇，我们尽量以简明扼要的表述，并提供进一步说明的链接，以便您的理解。
            <br />
            您使用或继续使用我们的服务，即意味着同意我们按照本《隐私政策》收集、使用、储存和分享您的相关信息。
            <br />
            <br />
            <div className="font-bold">一、我们可能收集的信息</div>
            <div className="pl-4.5">
              我们提供服务时，可能会收集、储存和使用下列与您有关的信息。如果您不提供相关信息，可能无法注册成为我们的用户或无法享受我们提供的某些服务，或者无法达到相关服务拟达到的效果。
              <br />
              <br />
            </div>
            <div className="font-bold">二、您提供的信息</div>
            <div className="pl-4.5">
              您在注册账户或使用我们的服务时，向我们提供的相关个人信息，例如电话号码、电子邮件或银行卡号等；
              <br />
              您通过我们的服务向其他方提供的共享信息，以及您使用我们的服务时所储存的信息。其他方分享的您的信息
              <br />
              其他方使用我们的服务时所提供有关您的共享信息。
              <br />
              <br />
            </div>
            <div className="font-bold">三、我们获取的您的信息</div>
            <div className="pl-4.5">
              您使用服务时我们可能收集如下信息：
              <p className="mt-2">
                日志信息，指您使用我们的服务时，系统可能通过cookies、web
                beacon或其他方式自动采集的技术信息，包括：
              </p>
              1.
              设备或软件信息，例如您的移动设备、网页浏览器或用于接入我们服务的其他程序所提供的配置信息、您的IP地址和移动设备所用的版本和设备识别码；
              <br />
              2.
              在使用我们服务时搜索或浏览的信息，例如您使用的网页搜索词语、访问的社交媒体页面url地址，以及您在使用我们服务时浏览或要求提供的其他信息和内容详情；
              <br />
              3.
              有关您曾使用的移动应用（APP）和其他软件的信息，以及您曾经使用该等移动应用和软件的信息；
              <br />
              4.
              您通过我们的服务进行通讯的信息，例如曾通讯的账号，以及通讯时间、数据和时长；
              <br />
              5.
              您通过我们的服务分享的内容所包含的信息（元数据），例如拍摄或上传的共享照片或录像的日期、时间或地点等。
              <p className="mt-2">
                位置信息，指您开启设备定位功能并使用我们基于位置提供的相关服务时，收集的有关您位置的信息，包括：
              </p>
              1.
              您通过具有定位功能的移动设备使用我们的服务时，通过GPS或WiFi等方式收集的您的地理位置信息；
              <br />
              2.
              您或其他用户提供的包含您所处地理位置的实时信息，例如您提供的账户信息中包含的您所在地区信息，您或其他人上传的显示您当前或曾经所处地理位置的共享信息，您或其他人共享的照片包含的地理标记信息；
              <br />
              3. 您可以通过关闭定位功能，停止对您的地理位置信息的收集。
              <br />
              <br />
            </div>
            <div className="font-bold">四、我们可能如何使用信息</div>
            <div className="pl-4.5">
              我们可能将在向您提供服务的过程之中所收集的信息用作下列用途：
              <br />
              1. 向您提供服务；
              <br />
              2.
              在我们提供服务时，用于身份验证、客户服务、安全防范、诈骗监测、存档和备份用途，确保我们向您提供的产品和服务的安全性；
              <br />
              3. 帮助我们设计新服务，改善我们现有服务；
              <br />
              4.
              使我们更加了解您如何接入和使用我们的服务，从而针对性地回应您的个性化需求，例如语言设定、位置设定、个性化的帮助服务和指示，或对您和其他用户作出其他方面的回应；
              <br />
              5. 向您提供与您更加相关的广告以替代普遍投放的广告；
              <br />
              6. 评估我们服务中的广告和其他促销及推广活动的效果，并加以改善；
              <br />
              7. 软件认证或管理软件升级；
              <br />
              8. 让您参与有关我们产品和服务的调查。
              <br />
              为了让您有更好的体验、改善我们的服务或您同意的其他用途，在符合相关法律法规的前提下，我们可能将通过某一项服务所收集的信息，以汇集信息或者个性化的方式，用于我们的其他服务。例如，在您使用我们的一项服务时所收集的信息，可能在另一服务中用于向您提供特定内容，或向您展示与您相关的、非普遍推送的信息。如果我们在相关服务中提供了相应选项，您也可以授权我们将该服务所提供和储存的信息用于我们的其他服务。
              <br />
              <br />
            </div>
            <div className="font-bold">五、您如何访问和控制自己的个人信息</div>
            <div className="pl-4.5">
              我们将尽一切可能采取适当的技术手段，保证您可以访问、更新和更正自己的注册信息或使用我们的服务时提供的其他个人信息。在访问、更新、更正和删除前述信息时，我们可能会要求您进行身份验证，以保障账户安全。
              <br />
              <br />
            </div>
            <div className="font-bold">六、我们可能分享的信息</div>
            <div className="pl-4.5">
              除以下情形外，未经您同意，我们以及我们的关联公司不会与任何第三方分享您的个人信息：
              <p className="mt-2">
                我们以及我们的关联公司，可能将您的个人信息与我们的关联公司、合作伙伴及第三方服务供应商、承包商及代理（例如代表我们发出电子邮件或推送通知的通讯服务提供商、为我们提供位置数据的地图服务供应商）分享（他们可能并非位于您所在的法域），用作下列用途：
              </p>
              1. 向您提供我们的服务；
              <br />
              2. 实现“我们可能如何使用信息”部分所述目的；
              <br />
              3.
              履行我们在《腾讯服务协议》或本《隐私政策》中的义务和行使我们的权利；
              <br />
              4. 理解、维护和改善我们的服务。
              <p className="mt-2">
                如我们或我们的关联公司与任何上述第三方分享您的个人信息，我们将努力确保该等第三方在使用您的个人信息时遵守本《隐私政策》及我们要求其遵守的其他适当的保密和安全措施。
              </p>
              随着我们业务的持续发展，我们以及我们的关联公司有可能进行合并、收购、资产转让或类似的交易，您的个人信息有可能作为此类交易的一部分而被转移。我们将在转移前通知您。
              <br />
              随着我们业务的持续发展，我们以及我们的关联公司有可能进行合并、收购、资产转让或类似的交易，您的个人信息有可能作为此类交易的一部分而被转移。我们将在转移前通知您。
              <br />
              1. 遵守适用的法律法规；
              <br />
              2. 遵守法院命令或其他法律程序的规定；
              <br />
              3. 遵守相关政府机关的要求；
              <br />
              4.
              为遵守适用的法律法规、维护社会公共利益，或保护我们的客户、我们或我们的集团公司、其他用户或雇员的人身和财产安全或合法权益所合理必需的用途。
              <br />
              <br />
            </div>
            <div className="font-bold">七、信息安全</div>
            <div className="pl-4.5">
              我们仅在本《隐私政策》所述目的所必需的期间和法律法规要求的时限内保留您的个人信息。
              我们使用各种安全技术和程序，以防信息的丢失、不当使用、未经授权阅览或披露。例如，在某些服务中，我们将利用加密技术（例如SSL）来保护您提供的个人信息。但请您理解，由于技术的限制以及可能存在的各种恶意手段，在互联网行业，即便竭尽所能加强安全措施，也不可能始终保证信息百分之百的安全。您需要了解，您接入我们的服务所用的系统和通讯网络，有可能因我们可控范围外的因素而出现问题。
              <br />
              <br />
            </div>
            <div className="font-bold">八、您分享的信息</div>
            <div className="pl-4.5">
              我们的多项服务，可让您不仅与自己的社交商务网络，也与使用该服务的所有用户公开分享您的相关业务信息，例如，您在我们的服务中所上传或发布的信息（包括您公开的个人信息、您建立的名单）、您对其他人上传或发布的信息作出的回应，以及包括与这些信息有关的位置数据和日志信息。使用我们服务的其他用户也有可能分享与您有关的信息（包括位置数据和日志信息）。特别是，我们的社交媒体服务，是专为使您与世界各地的用户共享信息而设计，您可以使共享信息实时、广泛地传递。只要您不删除共享信息，有关信息会一直留存在公共领域；即使您删除共享信息，有关信息仍可能由其他用户或不受我们控制的非关联第三方独立地缓存、复制或储存，或由其他用户或该等第三方在公共领域保存。
              <br />
              我们的多项服务，可让您不仅与自己的社交商务网络，也与使用该服务的所有用户公开分享您的相关业务信息，例如，您在我们的服务中所上传或发布的信息（包括您公开的个人信息、您建立的名单）、您对其他人上传或发布的信息作出的回应，以及包括与这些信息有关的位置数据和日志信息。使用我们服务的其他用户也有可能分享与您有关的信息（包括位置数据和日志信息）。特别是，我们的社交媒体服务，是专为使您与世界各地的用户共享信息而设计，您可以使共享信息实时、广泛地传递。只要您不删除共享信息，有关信息会一直留存在公共领域；即使您删除共享信息，有关信息仍可能由其他用户或不受我们控制的非关联第三方独立地缓存、复制或储存，或由其他用户或该等第三方在公共领域保存。
              <br />
              <br />
            </div>
            <div className="font-bold">九、您分享的敏感个人信息</div>
            <div className="pl-4.5">
              某些个人信息因其特殊性可能被认为是敏感个人信息，例如您的种族、宗教、个人健康和医疗信息等。相比其他个人信息，敏感个人信息受到更加严格的保护。
              <br />
              请注意，您在使用我们的服务时所提供、上传或发布的内容和信息（例如有关您社交活动的照片等信息），可能会泄露您的敏感个人信息。您需要谨慎地考虑，是否在使用我们的服务时披露相关敏感个人信息。
              <br />
              您同意按本《隐私政策》所述的目的和方式来处理您的敏感个人信息。
              <br />
              <br />
            </div>
            <div className="font-bold">十、我们可能如何收集信息</div>
            <div className="pl-4.5">
              我们或我们的第三方合作伙伴，可能通过cookies和web
              beacon收集和使用您的信息，并将该等信息储存为日志信息。
              <br />
              我们使用自己的cookies和web
              beacon，目的是为您提供更个性化的用户体验和服务，并用于以下用途：
              <br />
              1. 记住您的身份。例如：cookies和web
              beacon有助于我们辨认您作为我们的注册用户的身份，或保存您向我们提供的有关您的喜好或其他信息；
              <br />
              2. 分析您使用我们服务的情况。例如，我们可利用cookies和web
              beacon来了解您使用我们的服务进行什么活动，或哪些网页或服务最受您的欢迎；
              <br />
              3. 广告优化。Cookies和web
              beacon有助于我们根据您的信息，向您提供与您相关的广告而非进行普遍的广告投放。
              <p className="mt-2">
                我们为上述目的使用cookies和web
                beacon的同时，可能将通过cookies和web
                beacon收集的非个人身份信息，经统计加工后提供给广告商或其他合作伙伴，用于分析用户如何使用我们的服务，并用于广告服务。
              </p>
              我们的产品和服务上可能会有广告商或其他合作方放置的cookies和web
              beacon。这些cookies和web
              beacon可能会收集与您相关的非个人身份信息，以用于分析用户如何使用该等服务、向您发送您可能感兴趣的广告，或用于评估广告服务的效果。这些第三方cookies和web
              beacon收集和使用该等信息，不受本《隐私政策》约束，而是受相关使用者的隐私政策约束，我们不对第三方的cookies或web
              beacon承担责任。
              <br />
              您可以通过浏览器设置拒绝或管理cookies或web
              beacon。但请注意，如果停用cookies或web
              beacon，您有可能无法享受最佳的服务体验，某些服务也可能无法正常使用。同时，您还会收到同样数量的广告，但这些广告与您的相关性会降低。
              <br />
              <br />
            </div>
            <div className="font-bold">十一、广告服务</div>
            <div className="pl-4.5">
              我们可能使用您的相关信息，向您提供与您更加相关的广告。
              <br />
              我们也可能使用您的信息，通过我们的服务、电子邮件或其他方式向您发送营销信息，提供或推广我们或第三方的如下商品和服务：
              <br />
              1.
              我们的商品或服务，我们的关联公司和合作伙伴的商品或服务，包括即时通讯服务、网上媒体服务、互动娱乐服务、社交网络服务、付款服务、互联网搜索服务、位置和地图服务、应用软件和服务、数据管理软件和服务、网上广告服务、互联网金融，以及其他社交媒体、娱乐、电子商务、资讯和通讯软件或服务（统称“互联网服务”）；
              <br />
              2.
              第三方互联网服务供应商，以及与下列有关的第三方商品或服务：食物和餐饮、体育、音乐、电影、电视、现场表演及其他艺术和娱乐、书册、杂志和其他刊物、服装和配饰、珠宝、化妆品、个人健康和卫生、电子、收藏品、家用器皿、电器、家居装饰和摆设、宠物、汽车、酒店、交通和旅游、银行、保险及其他金融服务、会员积分和奖励计划，以及我们认为可能与您相关的其他商品或服务。
              <p className="mt-2">
                如您不希望我们将您的个人信息用作前述广告用途，您可以通过我们在广告中提供的相关提示，或在特定服务中提供的指引，要求我们停止为上述用途使用您的个人信息。
              </p>
              <br />
              <br />
            </div>
            <div className="font-bold">十二、我们可能向您发送的邮件和信息</div>
            <div className="pl-4.5">
              邮件和信息推送
              <p className="ml-2">
                您在使用我们的服务时，我们可能使用您的信息向您的设备发送电子邮件、新闻或推送通知。如您不希望收到这些信息，可以按照我们的相关提示，在设备上选择取消订阅。
              </p>
              与服务有关的公告
              <p className="ml-2">
                我们可能在必要时（例如因系统维护而暂停某一项服务时）向您发出与服务有关的公告。您可能无法取消这些与服务有关、性质不属于推广的公告。
              </p>
              <br />
              <br />
            </div>
            <div className="font-bold">十三、隐私政策的适用例外</div>
            <div className="pl-4.5">
              我们的服务可能包括或链接至第三方提供的社交媒体或其他服务（包括网站）。例如：
              <br />
              1. 您利用
              “分享”键将某些内容分享到我们的服务，或您利用第三方连线服务登录我们的服务。这些功能可能会收集您的相关信息（包括您的日志信息），并可能在您的电脑装置cookies，从而正常运行上述功能；
              <br />
              2.
              我们通过广告或我们服务的其他方式向您提供链接，使您可以接入第三方的服务或网站。
              <p className="mt-2">
                该等第三方社交媒体或其他服务可能由相关的第三方或我们运营。您使用该等第三方的社交媒体服务或其他服务（包括您向该等第三方提供的任何个人信息），须受该第三方的服务条款及隐私政策约束，您需要仔细阅读其条款。本《隐私政策》仅适用于我们所收集的信息，并不适用于任何第三方提供的服务或第三方的信息使用规则，我们对任何第三方使用由您提供的信息不承担任何责任。
              </p>
              <br />
              <br />
            </div>
            <div className="font-bold">十四、隐私政策的适用范围</div>
            <div className="pl-4.5">
              除某些特定服务外，我们所有的服务均适用本《隐私政策》。这些特定服务将适用特定的隐私政策。针对某些特定服务的特定隐私政策，将更具体地说明我们在该等服务中如何使用您的信息。该特定服务的隐私政策构成本《隐私政策》的一部分。如相关特定服务的隐私政策与本《隐私政策》有不一致之处，适用该特定服务的隐私政策。
              <br />
              除本《隐私政策》另有规定外，本《隐私条款》所用词语将与《服务协议》所定义的词语具有相同的涵义。
              <br />
              请您注意，本《隐私政策》不适用于以下情况：
              <br />
              1.
              通过我们的服务而接入的第三方服务（包括任何第三方网站）收集的信息；
              <br />
              2. 通过在我们服务中进行广告服务的其他公司或机构所收集的信息。
              <br />
              <br />
            </div>
            <div className="font-bold">十五、变更</div>
            <div className="pl-4.5">
              我们可能适时修订本《隐私政策》的条款，该等修订构成本《隐私政策》的一部分。如该等修订造成您在本《隐私政策》下权利的实质减少，我们将在修订生效前通过在主页上显著位置提示或向您发送电子邮件或以其他方式通知您。在该种情况下，若您继续使用我们的服务，即表示同意受经修订的本《隐私政策》的约束。
              <br />
              <br />
            </div>
          </div>
        }
      />
    </div>
  );
}
