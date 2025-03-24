import Article from "@components/article";
import Breadcrumbs from "@components/breadcrumbs";
import homeBg from "@assets/home-bg.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "隐私政策",
};

export default async function PrivacyPolicy() {
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
        breadcrumbs={[{ name: "首页", href: "/" }, { name: "隐私政策" }]}
      />
      <Article
        title="隐私政策"
        content={
          <div>
            导言
            <br />
            欢迎你使用云雀台软件及服务！
            <br />
            为使用云雀台软件（以下简称“本软件”）及服务，你应当阅读并遵守《服务协议》（以下简称“本协议”）。请你务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款，以及开通或使用某项服务的单独协议，并选择接受或不接受。限制、免责条款可能以加粗等形式提示你注意。
            <br />
            除非你已阅读并接受本协议所有条款，否则你无权下载、安装或使用本软件及相关服务。你的下载、安装、使用、获取帐号、登录等行为即视为你已阅读并同意上述协议的约束。
            <br />
            <br />
            <div className="font-bold">一、协议的范围</div>
            <div className="pl-4.5">
              1.1 协议适用主体范围
              <br />
              本协议是你与云雀台之间关于你下载、安装、使用、复制本软件，以及使用云雀台相关服务所订立的协议。
              <br />
              1.2 协议关系及冲突条款
              <br />
              本协议被视为《服务协议》的补充协议，是其不可分割的组成部分，与其构成统一整体。本协议与上述内容存在冲突的，以本协议为准。
              <br />
              本协议内容同时包括云雀台可能不断发布的关于本服务的相关协议、业务规则等内容。上述内容一经正式发布，即为本协议不可分割的组成部分，你同样应当遵守。
              <br />
              <br />
            </div>
            <div className="font-bold">二、关于本服务</div>
            <div className="pl-4.5">
              2.1 本服务的内容
              <br />
              本服务内容是指云雀台向用户提供的跨平台的通讯商务工具，同时为用户提供包括但不限于关系链拓展、便捷工具、开放平台、与其他软件或硬件信息互通等功能或内容的软件许可及服务（以下简称“本服务”）。
              <br />
              2.2.1
              你使用本服务需要下载云雀台客户端软件，对于这些软件，云雀台给予你一项个人的、不可转让及非排他性的许可。网页版、Windows版、Mac版等需要通过二维码扫描登录。你仅可为访问或使用本服务的目的而使用这些软件及服务。
              <br />
              2.2.2 本服务中客户端软件可能提供包括但不限于iOS、Android、Windows
              Phone、Symbian、BlackBerry、Windows、Mac等多个应用版本，用户必须选择与所安装终端设备相匹配的软件版本。
            </div>
          </div>
        }
      />
    </div>
  );
}
