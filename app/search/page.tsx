import Link from "next/link";
import { EnterpriseListResponse } from "@TS/enterprise";
import { post } from "@lib/fetch";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function SearchPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const query = searchParams?.q as string;

  // 获取所有企业数据
  const { data: { data } = {} } = await post<EnterpriseListResponse>(
    "/enterprise/query",
    { pagination: { pageNumber: 1, showNumber: 1000000 } }
  );

  // 根据搜索参数过滤企业
  let filteredEnterprises = data?.enterprises || [];
  
  if (query && query.trim()) {
    const searchTerm = query.toLowerCase().trim();
    filteredEnterprises = (data?.enterprises || []).filter((enterprise) => {
      return (
        enterprise.name?.toLowerCase().includes(searchTerm) ||
        enterprise.tags?.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        enterprise.address?.toLowerCase().includes(searchTerm) ||
        enterprise.phoneNumber?.includes(query) ||
        enterprise.email?.toLowerCase().includes(searchTerm)
      );
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* 导航栏 */}
        <div className="mb-6 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回首页
          </Link>
        </div>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            搜索结果
          </h1>
          {query && (
            <p className="text-gray-600">
              搜索关键词: <span className="font-medium">&ldquo;{query}&rdquo;</span>
            </p>
          )}
        </div>

        <div className="mb-6">
          <p className="text-gray-700">
            找到 <span className="font-bold text-blue-600">{filteredEnterprises.length}</span> 个企业
          </p>
        </div>

        <div className="space-y-4">
          {filteredEnterprises.length > 0 ? (
            filteredEnterprises.map((enterprise, index) => (
              <div key={enterprise.enterpriseID || index} className="bg-white rounded-lg shadow-sm border p-4">
                <div className="text-lg font-medium text-gray-900">
                  企业
                </div>
                {enterprise.name && (
                  <div className="text-sm text-gray-600 mt-1">
                    名称: {enterprise.name}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
              <div className="text-gray-500">
                {query ? (
                  <>
                    <p className="text-lg mb-2">未找到相关企业</p>
                    <p className="text-sm">请尝试其他搜索关键词</p>
                    <Link 
                      href="/" 
                      className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      返回首页重新搜索
                    </Link>
                  </>
                ) : (
                  <>
                    <p className="text-lg">请输入搜索关键词</p>
                    <Link 
                      href="/" 
                      className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      返回首页搜索
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 