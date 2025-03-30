import LinkWithParams from "@components/LinkWithParams";
import { Fragment } from "react";

interface Breadcrumbs {
  breadcrumbs: {
    name: string;
    href?: string;
  }[];
}

export default async function Breadcrumbs({ breadcrumbs }: Breadcrumbs) {
  return (
    <div className="p-4 flex items-center gap-1 text-[#141414] text-xs leading-4.5 max-w-[1200px] mx-auto lg:px-0 lg:text-sm lg:leading-5">
      <div className="mr-1">当前位置:</div>
      {breadcrumbs.map((breadcrumb, index) => (
        <Fragment key={breadcrumb.name}>
          <div>
            {breadcrumb.href ? (
              <LinkWithParams href={breadcrumb.href}>
                {breadcrumb.name}
              </LinkWithParams>
            ) : (
              <span className="text-[#8C8C8C]">{breadcrumb.name}</span>
            )}
          </div>
          {index !== breadcrumbs.length - 1 && <div className="px-1">/</div>}
        </Fragment>
      ))}
    </div>
  );
}
