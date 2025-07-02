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
        title="关于我们 (About Us)"
        content={
          <div>
            中国，这片古老而充满活力的土地，正在以开放的胸怀、创新的动能和庞大的市场，向世界发出诚挚邀请，欢迎您来中国投资兴业，与我们共同书写合作共赢的新篇章
            <br />
            <br />
            中国作为世界最大经济体之一，信息化科技产业也在不断蓬勃发展，成功应用在：教育
            通讯 交通 电力 环保 医疗 农业 
            公共安全等领域，云雀台致力于向公众以及全球展示中国科技企业的科技成果，产品与服务，同时为全球用户提供全天候商务通讯服务，并通过我们的合作银行，保险等机构确保贸易安全与资金融通。欢迎全球企业访问我们的企业官网与商务联络，无论您在全球何处，欢迎您通过云雀台官网或APP与企业联系，同时为您提供365
            x24H服务，热诚欢迎您的访问！
            <div className="border-[#EBEEF5] border-b-2 mt-2" />
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
            <div className="border-[#EBEEF5] border-b-2 mt-2" />
            <br />
            الصين ، هذه الأرض القديمة والحيوية ، هو فتح العقل ، والطاقة
            الإبداعية وسوق ضخمة ، إلى العالم أن يرسل دعوة صادقة ، أرحب بكم في
            الصين للاستثمار في الأعمال التجارية ، ونحن معا كتابة التعاون المربح
            للجانبين الفصل الجديد .
            <br />
            <br />
            باعتبارها واحدة من أكبر الاقتصادات في العالم ، صناعة تكنولوجيا
            المعلومات هو النامية بسرعة ، وقد تم تطبيقها بنجاح في مجالات مثل
            التعليم ، والاتصالات ، والنقل ، والطاقة ، وحماية البيئة ، والأمن
            العام ، وما إلى ذلك ، يون كيو تاي ملتزمة عرض الإنجازات العلمية
            والتكنولوجية ، والمنتجات والخدمات من الشركات الصينية للعلوم
            والتكنولوجيا للجمهور في جميع أنحاء العالم ، وفي الوقت نفسه توفير
            خدمات الاتصالات التجارية في جميع الأحوال الجوية للمستخدمين في جميع
            أنحاء العالم ، من خلال التعاون المصرفي والتأمين وغيرها من المؤسسات
            لضمان سلامة التجارة والتمويل . نرحب الشركات في جميع أنحاء العالم
            لزيارة موقعنا الرسمي على شبكة الإنترنت ، والأعمال التجارية الاتصال ،
            لا يهم أين أنت في العالم ، نرحب بكم من خلال قبرة تايوان الموقع
            الرسمي أو تطبيق الاتصال مع الشركات ، وفي الوقت نفسه يوفر لك 365 يوما
            x24h الخدمة ، نرحب ترحيبا حارا زيارتك !
            <div className="border-[#EBEEF5] border-b-2 mt-2" />
            <br />
            中国、この古くて活気に満ちた土地は、開放的な心、革新的な運動エネルギー、巨大な市場で、世界に心からの招待を出しています。中国に来て興業に投資し、私たちと協力してウィンウィンの新しい一章を書くことを歓迎します。
            <br />
            <br />
            中国は世界最大の経済体の一つとして、情報化科学技術産業も絶えず盛んに発展しており、教育通信交通電力環境保護公共安全などの分野での応用に成功しており、Yun
            Que
            Taiは中国科学技術企業の科学技術成果、製品とサービスを公衆及び全世界に展示することに力を入れていると同時に、全世界のユーザーに全天候型ビジネス通信サービスを提供し、そして私たちの協力銀行、保険などの機構を通じて貿易安全と資金融通を確保している。グローバル企業の当社の企業公式サイトへのアクセスとビジネス連絡を歓迎します。世界中のどこにいても、雲雀台の公式サイトやアプリを通じて企業と連絡するとともに、365日x
            24 Hサービスを提供します。ご訪問を心から歓迎します。
            <div className="border-[#EBEEF5] border-b-2 mt-2" />
            <br />
            La Chine, cette terre ancienne et dynamique, avec un cœur ouvert,
            une énergie cinétique innovante et un vaste marché, envoie une
            invitation sincère au monde et vous souhaite la bienvenue en Chine
            pour investir dans la société et écrire avec nous un nouveau
            chapitre de coopération gagnant - gagnant.
            <br />
            <br />
            En tant que l&apos;une des plus grandes économies du monde,
            l&apos;industrie des technologies de l&apos;information est
            également en plein essor, avec des applications réussies dans:
            l&apos;éducation, la communication, les transports, l&apos;énergie,
            la protection de l&apos;environnement et la sécurité publique, Yun
            que Tai s&apos;engage à présenter les résultats scientifiques et
            technologiques, les produits et les services des entreprises
            technologiques chinoises au public et au monde entier, tout en
            fournissant des services de communication commerciale 24 heures sur
            24, 7 jours sur 7 aux utilisateurs du monde entier et en assurant la
            sécurité du commerce et le financement via nos banques partenaires,
            les assurances et d&apos;autres institutions. Bienvenue à
            l&apos;entreprise mondiale pour visiter notre site officiel de
            l&apos;entreprise pour la liaison commerciale, où que vous soyez
            dans le monde, vous êtes invités à contacter l&apos;entreprise via
            le site officiel d&apos;Alouette ou l&apos;application, tout en vous
            offrant 365 jours de service x24h, bienvenue chaleureusement à votre
            visite!
            <div className="border-[#EBEEF5] border-b-2 mt-2" />
            <br />
            China, dieses alte und lebendige Land, sendet eine aufrichtige
            Einladung an die Welt mit einem offenen Geist, innovativem Momentum
            und einem riesigen Markt. Wir begrüßen Sie, in China zu investieren
            und zu entwickeln, und arbeiten mit uns zusammen, um ein neues
            Kapitel der Win-Win-Zusammenarbeit zu schreiben.
            <br />
            <br />
            Als eine der größten Volkswirtschaften der Welt blüht Chinas
            Informationstechnologie-Industrie ständig und wird erfolgreich in
            Bereichen wie Bildung, Kommunikation, Transport, Strom, Umweltschutz
            und öffentliche Sicherheit angewendet. Yun Que Tai verpflichtet
            sich, die technologischen Errungenschaften, Produkte und
            Dienstleistungen chinesischer Technologieunternehmen der
            Öffentlichkeit und der Welt zu präsentieren. Gleichzeitig bieten wir
            24/7 Geschäftskommunikationsdienste für globale Benutzer und
            gewährleisten Handelssicherheit und finanzielle Integration durch
            unsere Genossenschaftsbanken, Versicherungen und andere
            Institutionen. Willkommen globale Unternehmen, um unsere offizielle
            Website zu besuchen und uns für Geschäfte zu kontaktieren. Egal, wo
            Sie auf der Welt sind, sind Sie herzlich eingeladen, Unternehmen
            über die offizielle Yunquetai Website oder APP zu kontaktieren. Wir
            bieten Ihnen auch 365-Tag x24H Service und begrüßen Sie herzlich
            Ihren Besuch!
          </div>
        }
      />
    </div>
  );
}
