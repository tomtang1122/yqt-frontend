import { Response } from "./common";

export interface Enterprise {
  logo?: string;
  name?: string;
  tags?: string[];
  website?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  isEligibleForCashback?: boolean;
  createTime?: number;
  enterpriseID?: string;
}

export type EnterpriseListResponse = Response<{
  total: number;
  enterprises: Enterprise[];
}>;
