import { NextResponse } from "next/server";

export const IM_REQUEST_URL = "http://43.129.81.231:10002";

async function proxyImage(url: string) {
  const response = await fetch(url);
  const contentType = response.headers.get("Content-Type") || "image/png";
  const imageBuffer = await response.arrayBuffer();
  return { imageBuffer, contentType };
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ path: string }> }
) {
  const { path } = await params;
  const pathString = Array.isArray(path) ? path.join("/") : path;
  const imageUrl = `${IM_REQUEST_URL}/${pathString}`;

  try {
    const { imageBuffer, contentType } = await proxyImage(imageUrl);
    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) {
    console.error("代理图片失败:", error);
    return NextResponse.json({ error: "获取图片失败" }, { status: 500 });
  }
}
