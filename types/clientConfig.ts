import { Response } from "./common";

export type ClientConfigResponse = Response<{
  config: {
    mobileBanner?: string;
    pcBanner?: string;
    [key: string]: string | undefined;
  };
}>;
