import type { Metadata } from "next";
import "./globals.css";
import GlobalHeader from "@components/globalHeader";
import GlobalFooter from "@components/globalFooter";

export const metadata: Metadata = {
  title: {
    template: "云雀台 | %s",
    default: "云雀台",
  },
  description: "云雀台官方网站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <main>
          <GlobalHeader />
          {children}
          <GlobalFooter />
        </main>
      </body>
    </html>
  );
}
