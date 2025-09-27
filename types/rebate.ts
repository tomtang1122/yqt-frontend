// 贴息申请表单数据类型
export interface RebateFormData {
  procurementOrderID: string;
  contractNumber: string;
  invoiceAmount: number;
  invoiceDate: number;
  customerName: string;
  customerBankAccount: string;
  remark: string;
}

// API响应类型
export interface RebateResponse {
  orderID: string;
}
