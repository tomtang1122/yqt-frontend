import type { Metadata } from "next";
import "./globals.css";
import GlobalHeader from "@components/globalHeader";
import GlobalFooter from "@components/globalFooter";
import { Suspense } from "react";
import { Toaster } from "sonner";

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
          <Suspense>
            <GlobalFooter />
          </Suspense>
        </main>
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(11,27,50)",
              color: "rgb(255,255,255)",
              textAlign: "center",
              width: "fit-content",
              height: "fit-content",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              position: "fixed",
            },
          }}
        />
      </body>
    </html>
  );
}
