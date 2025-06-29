import { Response } from "./common";

export interface Enterprise {
  logo?: string;
  name?: string;
  tags?: string[];
  tagsTypes?: number[];
  website?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  isEligibleForCashback?: boolean;
  createTime?: number;
  enterpriseID?: string;
  invoice?: string;
  remark?: string;
  contacts?: string[];
}

export type EnterpriseListResponse = Response<{
  total: number;
  enterprises: Enterprise[];
}>;
