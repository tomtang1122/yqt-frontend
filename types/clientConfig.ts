import { Response } from "./common";

export type ClientConfigResponse = Response<{
  config: {
    mobileBanner?: string;
    pcBanner?: string;
    appDownloadUrl?: string;
    [key: string]: string | undefined;
  };
}>;
