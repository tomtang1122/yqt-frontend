// 采购申请表单数据类型
export interface ProcurementFormData {
  vendor: string;
  integrator: string;
  endCustomer: string;
  purchaseAmount: number;
  paymentTermDays: number;
  originOrgName: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  remark: string;
}

// API响应类型
export interface ProcurementResponse {
  orderID: string;
}
