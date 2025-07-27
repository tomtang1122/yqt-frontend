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
        title="关于云雀台"
        content={
          <div>
            中国科技产业商业信息融合数字化平台
            <br />
            <br />
            云雀台是中国科技产业采购与商业信息交互服务商，我们汇聚了众多中国知名的科技企业，包括：AI、教育、通讯、交通、电力、医疗、农业、公共安全、建筑等核心领域。
            <br />
            <br />
            我们的核心功能:
            <br />
            <br />
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                品牌展示与发现:
              </h2>
              我们为中国品牌科技企业全天候提供商业展示窗口，清晰呈现其核心科技成果、产品与服务能力，快速识别解决方案。
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                高效采购对接:
              </h2>
              采购商随时便捷浏览官网、筛选并直接联系平台厂商联系人，进行询价、洽谈与合作。
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                采购成本优化:
              </h2>
              通过云雀台与厂商采购，用户有机会获取专属优惠、折扣或优惠券，有效降低采购成本。
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                贸易财务与安全保障:
              </h2>
              我们携手合作全球一流银行与保险机构，为平台上的贸易商业活动提供高效的资金融通与交易安全保障，为贸易通畅保驾护航。
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                全球商业通讯服务:
              </h2>
              无论您身处全球何处，欢迎您随时通过云雀台官网或下载注册APP访问厂商官网并与之取得联系，云雀台为您提供365天x24小时的全球通讯服务。
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                云雀台致力于:
              </h2>
              构建高效、透明、安全的贸易桥梁，链接建设全球科技企业网络，促进全球科技贸易繁荣与科技进步。
              <br />
              <br />
            </div>
            欢迎全球采购商与科技企业访问云雀台官网:[官网链接]或下载注册APP，与我们取得联系，云雀台客户服务中心（ID
            10000）将竭力为您服务。
            <div className="border-[#EBEEF5] border-b-2 mt-2" />
            <br />
            <br />
            <br />
            {/* English Version */}
            Digital Platform for Integration of Business Information in
            China&apos;s Technology Industry
            <br />
            <br />
            Yunquetai is a procurement and business information exchange service
            provider in China&apos;s technology industry. We gather numerous
            well-known Chinese technology companies, including core areas: AI,
            education, communications, transportation, power, healthcare,
            agriculture, public security, construction, and more.
            <br />
            <br />
            Our Core Functions:
            <br />
            <br />
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                Brand Display and Discovery:
              </h2>
              We provide Chinese technology companies with 24/7 business display
              windows, clearly presenting their core technology achievements,
              product and service capabilities, enabling rapid solution
              identification.
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                Efficient Procurement Matching:
              </h2>
              Buyers can conveniently browse official websites anytime, filter
              and directly contact platform manufacturer contacts for quotes,
              negotiations, and cooperation.
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                Procurement Cost Optimization:
              </h2>
              Through purchasing from manufacturers via Yunquetai, users have
              the opportunity to obtain exclusive discounts, benefits, or
              coupons, effectively reducing procurement costs.
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                Trade Finance and Security:
              </h2>
              We collaborate with world-class banks and insurance institutions
              to provide efficient financing and transaction security for trade
              business activities on the platform, safeguarding trade.
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                Global Business Communication Services:
              </h2>
              Wherever you are in the world, you are welcome to visit the
              Yunquetai website or download and register the APP to access
              manufacturer websites and contact them anytime. Yunquetai provides
              you with 365 days x 24 hours global communication services.
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                Yunquetai is Committed to:
              </h2>
              Building an efficient, transparent, and secure trade bridge,
              connecting and building a global network of technology companies,
              promoting global technology trade prosperity and technological
              progress.
              <br />
              <br />
            </div>
            We welcome global buyers and technology companies to visit the
            Yunquetai website: [Website Link] or download and register the APP
            to contact us. The Yunquetai Customer Service Center (ID 10000) will
            strive to serve you.
            <div className="border-[#EBEEF5] border-b-2 mt-2" />
            <br />
            <br />
            <br />
            {/* Japanese Version */}
            中国科技産業商業情報融合デジタルプラットフォーム
            <br />
            <br />
            雲雀台は中国科技産業の調達と商業情報交換サービスプロバイダーです。私たちは多くの中国の有名な科技企業を集めており、AI、教育、通信、交通、電力、医療、農業、公共安全、建設などの核心分野を含みます。
            <br />
            <br />
            私たちの核心機能：
            <br />
            <br />
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                ブランド展示と発見：
              </h2>
              私たちは中国のブランド科技企業に24時間営業の商業展示窓口を提供し、その核心科技成果、製品とサービス能力を明確に提示し、ソリューションの迅速な識別を可能にします。
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                効率的な調達マッチング：
              </h2>
              バイヤーはいつでも便利に公式サイトを閲覧し、フィルタリングしてプラットフォームメーカーの連絡先に直接連絡し、見積もり、交渉、協力を行うことができます。
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                調達コスト最適化：
              </h2>
              雲雀台を通じてメーカーから調達することで、ユーザーは専用割引、優待、またはクーポンを取得する機会があり、調達コストを効果的に削減できます。
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                貿易財務と安全保障：
              </h2>
              私たちは世界一流の銀行と保険機関と協力し、プラットフォーム上の貿易商業活動に効率的な資金融通と取引安全保障を提供し、貿易の円滑化を保護します。
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                グローバル商業通信サービス：
              </h2>
              世界中のどこにいても、雲雀台の公式サイトを訪問するか、アプリをダウンロードして登録し、メーカーの公式サイトにアクセスして連絡を取ることを歓迎します。雲雀台は365日×24時間のグローバル通信サービスを提供します。
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                雲雀台は以下に取り組んでいます：
              </h2>
              効率的、透明、安全な貿易の橋を構築し、グローバル科技企業ネットワークを連結・構築し、グローバル科技貿易の繁栄と科技進歩を促進します。
              <br />
              <br />
            </div>
            グローバルバイヤーと科技企業が雲雀台の公式サイトを訪問することを歓迎します：[公式サイトリンク]またはアプリをダウンロードして登録し、私たちと連絡を取ってください。雲雀台カスタマーサービスセンター（ID
            10000）があなたにサービスを提供するよう努めます。
            <div className="border-[#EBEEF5] border-b-2 mt-2" />
            <br />
            <br />
            <br />
            {/* German Version */}
            Digitale Plattform für die Integration von Geschäftsinformationen
            der chinesischen Technologiebranche
            <br />
            <br />
            Yunquetai ist ein Dienstleister für Beschaffung und
            Geschäftsinformationsaustausch in der chinesischen
            Technologiebranche. Wir versammeln zahlreiche bekannte chinesische
            Technologieunternehmen, einschließlich der Kernbereiche: KI,
            Bildung, Kommunikation, Verkehr, Energie, Medizin, Landwirtschaft,
            öffentliche Sicherheit, Bauwesen und mehr.
            <br />
            <br />
            Unsere Kernfunktionen:
            <br />
            <br />
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                Markenpräsentation und -entdeckung:
              </h2>
              Wir bieten chinesischen Technologieunternehmen rund um die Uhr ein
              Geschäftspräsentationsfenster, präsentieren klar ihre
              Kern-Technologieerfolge, Produkt- und Servicefähigkeiten und
              ermöglichen eine schnelle Identifizierung von Lösungen.
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                Effiziente Beschaffungsvermittlung:
              </h2>
              Käufer können jederzeit bequem offizielle Websites durchsuchen,
              filtern und direkt Kontakt mit Plattform-Herstellern aufnehmen, um
              Angebote einzuholen, zu verhandeln und zusammenzuarbeiten.
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                Beschaffungskostenoptimierung:
              </h2>
              Durch den Einkauf über Yunquetai haben Benutzer die Möglichkeit,
              exklusive Rabatte, Vergünstigungen oder Gutscheine zu erhalten und
              die Beschaffungskosten effektiv zu senken.
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                Handelsfinanzierung und Sicherheit:
              </h2>
              Wir arbeiten mit erstklassigen Banken und Versicherungsinstituten
              weltweit zusammen, um effiziente Finanzierung und
              Transaktionssicherheit für Handelsaktivitäten auf der Plattform zu
              bieten und den Handel zu schützen.
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                Globale Geschäftskommunikationsdienste:
              </h2>
              Egal wo Sie sich auf der Welt befinden, Sie sind herzlich
              willkommen, jederzeit über die Yunquetai-Website oder durch
              Herunterladen und Registrierung der APP auf Herstellerwebsites
              zuzugreifen und Kontakt aufzunehmen. Yunquetai bietet Ihnen 365
              Tage x 24 Stunden globale Kommunikationsdienste.
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                Yunquetai widmet sich:
              </h2>
              Dem Aufbau einer effizienten, transparenten und sicheren
              Handelsbrücke, der Verbindung und dem Aufbau eines globalen
              Netzwerks von Technologieunternehmen und der Förderung des
              globalen Technologiehandels und des technologischen Fortschritts.
              <br />
              <br />
            </div>
            Wir laden globale Käufer und Technologieunternehmen ein, die
            Yunquetai-Website zu besuchen: [Website-Link] oder die APP
            herunterzuladen und sich zu registrieren, um mit uns in Kontakt zu
            treten. Das Yunquetai-Kundenservicezentrum (ID 10000) wird sich
            bemühen, Ihnen zu dienen.
            <div className="border-[#EBEEF5] border-b-2 mt-2" />
            <br />
            <br />
            <br />
            {/* Russian Version */}
            Цифровая платформа интеграции коммерческой информации китайской
            технологической отрасли
            <br />
            <br />
            Юнцюэтай - это поставщик услуг по закупкам и обмену коммерческой
            информацией в китайской технологической отрасли. Мы объединяем
            множество известных китайских технологических компаний, включая
            ключевые области: ИИ, образование, связь, транспорт, энергетика,
            медицина, сельское хозяйство, общественная безопасность,
            строительство и другие.
            <br />
            <br />
            Наши основные функции:
            <br />
            <br />
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                Презентация и обнаружение брендов:
              </h2>
              Мы предоставляем китайским технологическим компаниям
              круглосуточное окно коммерческой презентации, четко представляя их
              ключевые технологические достижения, возможности продуктов и
              услуг, обеспечивая быстрое выявление решений.
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                Эффективное посредничество в закупках:
              </h2>
              Покупатели могут в любое время удобно просматривать официальные
              веб-сайты, фильтровать и напрямую связываться с контактами
              производителей платформы для получения предложений, переговоров и
              сотрудничества.
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                Оптимизация затрат на закупки:
              </h2>
              Покупая через Юнцюэтай, пользователи имеют возможность получить
              эксклюзивные скидки, льготы или купоны, эффективно снижая затраты
              на закупки.
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                Торговое финансирование и безопасность:
              </h2>
              Мы сотрудничаем с ведущими банками и страховыми учреждениями мира,
              предоставляя эффективное финансирование и безопасность транзакций
              для торговой деятельности на платформе, защищая торговлю.
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                Глобальные услуги деловой связи:
              </h2>
              Где бы вы ни находились в мире, вы можете в любое время посетить
              веб-сайт Юнцюэтай или скачать и зарегистрировать приложение для
              доступа к веб-сайтам производителей и связи с ними. Юнцюэтай
              предоставляет вам глобальные услуги связи 365 дней x 24 часа.
              <br />
              <br />
            </div>
            <div className="pl-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute left-[-18px] top-1"></span>
                Юнцюэтай стремится:
              </h2>
              Строить эффективный, прозрачный и безопасный торговый мост,
              связывать и строить глобальную сеть технологических компаний,
              способствовать процветанию глобальной технологической торговли и
              технологическому прогрессу.
              <br />
              <br />
            </div>
            Мы приглашаем глобальных покупателей и технологические компании
            посетить веб-сайт Юнцюэтай: [ссылка на веб-сайт] или скачать и
            зарегистрировать приложение, чтобы связаться с нами. Центр
            обслуживания клиентов Юнцюэтай (ID 10000) будет стремиться служить
            вам.
            <div className="border-[#EBEEF5] border-b-2 mt-2" />
            <br />
            <br />
            <br />
            {/* Arabic Version */}
            منصة رقمية لدمج المعلومات التجارية لصناعة التكنولوجيا الصينية
            <br />
            <br />
            يونكيتاي هي مزود خدمات المشتريات وتبادل المعلومات التجارية في صناعة
            التكنولوجيا الصينية. نجمع العديد من شركات التكنولوجيا الصينية
            المعروفة، بما في ذلك المجالات الأساسية: الذكاء الاصطناعي، التعليم،
            الاتصالات، النقل، الطاقة، الطب، الزراعة، الأمن العام، البناء وغيرها.
            <br />
            <br />
            وظائفنا الأساسية:
            <br />
            <br />
            <div className="pr-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute right-[-18px] top-1"></span>
                عرض واكتشاف العلامات التجارية:
              </h2>
              نقدم للشركات التكنولوجية الصينية نافذة عرض تجارية على مدار الساعة،
              ونعرض بوضوح إنجازاتها التكنولوجية الأساسية وقدرات المنتجات
              والخدمات، مما يتيح التعرف السريع على الحلول.
              <br />
              <br />
            </div>
            <div className="pr-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute right-[-18px] top-1"></span>
                وساطة المشتريات الفعالة:
              </h2>
              يمكن للمشترين تصفح المواقع الرسمية بسهولة في أي وقت، والتصفية
              والاتصال المباشر بجهات الاتصال بالشركات المصنعة للمنصة للحصول على
              عروض الأسعار والتفاوض والتعاون.
              <br />
              <br />
            </div>
            <div className="pr-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute right-[-18px] top-1"></span>
                تحسين تكاليف المشتريات:
              </h2>
              من خلال الشراء عبر يونكيتاي، لدى المستخدمين فرصة للحصول على خصومات
              حصرية أو تفضيلات أو قسائم، مما يقلل بشكل فعال من تكاليف المشتريات.
              <br />
              <br />
            </div>
            <div className="pr-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute right-[-18px] top-1"></span>
                التمويل التجاري والأمان:
              </h2>
              نتعاون مع البنوك والمؤسسات التأمينية الرائدة في العالم لتوفير
              التمويل الفعال وأمان المعاملات للأنشطة التجارية على المنصة، وحماية
              التجارة.
              <br />
              <br />
            </div>
            <div className="pr-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute right-[-18px] top-1"></span>
                خدمات الاتصالات التجارية العالمية:
              </h2>
              أينما كنت في العالم، أنت مرحب بك في أي وقت لزيارة موقع يونكيتاي أو
              تحميل وتسجيل التطبيق للوصول إلى مواقع الشركات المصنعة والاتصال
              بها. يونكيتاي تقدم لك خدمات الاتصالات العالمية 365 يومًا × 24
              ساعة.
              <br />
              <br />
            </div>
            <div className="pr-4.5">
              <h2 className="text-xl font-bold mb-4 relative">
                <span className="w-1.5 h-5 bg-[#007DFE] absolute right-[-18px] top-1"></span>
                يونكيتاي ملتزمة بـ:
              </h2>
              بناء جسر تجاري فعال وشفاف وآمن، وربط وبناء شبكة عالمية من شركات
              التكنولوجيا، وتعزيز ازدهار التجارة التكنولوجية العالمية والتقدم
              التكنولوجي.
              <br />
              <br />
            </div>
            ندعو المشترين العالميين وشركات التكنولوجيا لزيارة موقع يونكيتاي:
            [رابط الموقع] أو تحميل وتسجيل التطبيق للتواصل معنا. مركز خدمة
            العملاء يونكيتاي (ID 10000) سيسعى لخدمتك.
          </div>
        }
      />
    </div>
  );
}
