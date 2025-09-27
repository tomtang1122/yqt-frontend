// 通用API响应结构
export interface ApiResponse<T = unknown> {
  errCode: number;
  errDlt?: string;
  errMsg?: string;
  data?: T;
}

// 成功响应的类型（有data字段）
export interface ApiSuccessResponse<T = unknown> extends ApiResponse<T> {
  errCode: 0;
  data: T;
}

// 失败响应的类型（没有data字段）
export interface ApiErrorResponse extends ApiResponse {
  errCode: number; // > 0
  errMsg: string;
  errDlt?: string;
}
