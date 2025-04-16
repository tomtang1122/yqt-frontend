import { Response } from "./common";

export type ClientConfigResponse = Response<{
  config: {
    mobileBanner?: string;
    pcBanner?: string;
    appFile?: string;
    appVersion?: string;
    bankQRCode?: string;
  };
}>;
