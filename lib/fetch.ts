interface FetchOptions extends Omit<RequestInit, "body"> {
  params?: Record<string, string>;
  timeout?: number; // 请求超时时间（毫秒）
  body?: unknown;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  code?: number;
}

/**
 * 封装的 fetch 函数
 * @param url 请求 URL
 * @param options 请求选项
 * @returns Promise<ApiResponse>
 */
async function fetchApi<T>(
  url: string,
  options: FetchOptions = {}
): Promise<ApiResponse<T>> {
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

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `请求失败: ${response.status}`);
    }

    return {
      data,
      success: true,
      code: response.status,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
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
