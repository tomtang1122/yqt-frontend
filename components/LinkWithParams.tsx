"use client";

import Link, { LinkProps } from "next/link";
import { useEmbedApp } from "@lib/hook";
import { Suspense } from "react";

interface CustomLinkProps extends Omit<LinkProps, "href"> {
  href: string;
  children?: React.ReactNode;
  className?: string;
}

const LinkWithParamsCustom = (LinkProps: CustomLinkProps) => {
  const linkHref = LinkProps.href;
  const [path, rawQuery] = linkHref.split("?");
  const { embedAppSearchParams, isEmbedded } = useEmbedApp();

  return (
    <Link
      {...LinkProps}
      href={
        isEmbedded
          ? `${path}?${
              rawQuery ? `${rawQuery}&` : ""
            }embedApp=${embedAppSearchParams}`
          : linkHref
      }
    />
  );
};

export default function LinkWithParams(LinkProps: CustomLinkProps) {
  return (
    <Suspense>
      <LinkWithParamsCustom {...LinkProps} />
    </Suspense>
  );
}
