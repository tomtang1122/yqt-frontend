"use client";

import Link, { LinkProps } from "next/link";
import { useEmbedApp } from "@lib/hook";

export default function LinkWithParams(
  LinkProps: LinkProps & {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
  }
) {
  const { embedAppSearchParams, isEmbedded } = useEmbedApp();

  return (
    <Link
      {...LinkProps}
      href={
        isEmbedded
          ? `${LinkProps.href}?embedApp=${embedAppSearchParams}`
          : LinkProps.href
      }
    />
  );
}
