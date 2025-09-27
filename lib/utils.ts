import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const IM_REQUEST_URL = "https://yunquetai.com/api";
/**
 * 将原始图片URL转换为代理URL
 * 例如: ${host}/object/imAdmin/logo.png -> /api/proxy-image/object/imAdmin/logo.png
 * @param url 原始图片URL
 * @returns 代理后的图片URL
 */
export function getProxyImageUrl(url: string): string {
  if (!url || typeof url !== "string") {
    return url;
  }

  if (url.startsWith(IM_REQUEST_URL)) {
    const path = url.substring(IM_REQUEST_URL.length);
    const cleanPath = path.startsWith("/") ? path.substring(1) : path;
    return `/api/proxy-image/${cleanPath}`;
  }

  // 如果不是IM服务器的URL，则返回原始URL
  return url;
}

export const copyToClipboard = (text: string) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).catch(() => {
      console.log("copy failed");
    });
  }
};
