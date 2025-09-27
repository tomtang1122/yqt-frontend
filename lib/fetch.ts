interface FetchOptions extends Omit<RequestInit, "body"> {
  params?: Record<string, string>;
  timeout?: number; // 请求超时时间（毫秒）
  body?: unknown;
}

import { ApiResponse } from "@TS/api";

/**
 * 封装的 fetch 函数
 * @param url 请求 URL
 * @param options 请求选项
 * @returns Promise<ApiResponse>
 */
async function fetchApi<T>(
  url: string,
  options: FetchOptions = {}
): Promise<{ success: boolean; data?: T; message?: string }> {
  const {
    method = "GET",
    headers = {},
    params,
    body,
    timeout = 30000,
    ...restOptions
  } = options;

  // 构建完整 URL（添加查询参数）
  const queryParams = params
    ? `?${new URLSearchParams(params).toString()}`
    : "";
  const fullUrl = `https://yunquetai.com/complete_admin${url}${queryParams}`;

  // 构建请求头
  const requestHeaders: HeadersInit = {
    // "Content-Type": "application/json",
    operationID: Date.now().toString(),
    platform: "10",
    ...headers,
  };
  // 创建请求配置
  const requestOptions: RequestInit = {
    method,
    headers: requestHeaders,
    ...restOptions,
  };

  if (body && method !== "GET" && method !== "DELETE") {
    requestOptions.body = JSON.stringify(body);
  }

  try {
    // 创建超时 Promise
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => {
        reject(new Error(`请求超时: ${timeout}ms`));
      }, timeout);
    });

    const fetchPromise = fetch(fullUrl, requestOptions);

    const response = await Promise.race([fetchPromise, timeoutPromise]);

    const apiResponse: ApiResponse<T> = await response.json();

    // 根据接口返回的errCode和errMsg判断成功与否
    if (apiResponse.errCode === 0 && !apiResponse.errMsg) {
      // 成功：errCode为0且没有errMsg
      return {
        success: true,
        data: apiResponse.data,
      };
    } else {
      // 失败：errCode大于0或存在errMsg
      return {
        success: false,
        message: apiResponse.errMsg || `错误代码: ${apiResponse.errCode}`,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "网络请求失败",
    };
  }
}

/**
 * 使用示例:
 *
 * // GET 请求
 * const { data, success } = await get('/api/users', {
 *   params: { page: '1', limit: '10' },
 *   token: 'your-auth-token'
 * });
 *
 * // POST 请求
 * const result = await post('/api/users', {
 *   name: '张三',
 *   email: 'zhangsan@example.com'
 * });
 */
export function get<T>(url: string, options: FetchOptions = {}) {
  return fetchApi<T>(url, { ...options, method: "GET" });
}
export function post<T>(
  url: string,
  data?: unknown,
  options: FetchOptions = {}
) {
  return fetchApi<T>(url, {
    ...options,
    method: "POST",
    body: data,
  });
}
export function put<T>(
  url: string,
  data?: unknown,
  options: FetchOptions = {}
) {
  return fetchApi<T>(url, { ...options, method: "PUT", body: data });
}
export function del<T>(url: string, options: FetchOptions = {}) {
  return fetchApi<T>(url, { ...options, method: "DELETE" });
}
