"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { post } from "@lib/fetch";
import { ProcurementResponse } from "@TS/procurement";

// Zod 验证模式
const formSchema = z.object({
  vendor: z.string().min(1, "品牌厂商名称不能为空"),
  integrator: z.string().optional(),
  endCustomer: z.string().optional(),
  purchaseAmount: z
    .number()
    .optional()
    .refine((val) => val !== undefined && val > 0, "采购金额必须大于0"),
  paymentTermDays: z
    .number()
    .optional()
    .refine(
      (val) => val !== undefined && val >= 0 && val <= 365,
      "付款期限必须在0-365天之间"
    ),
  originOrgName: z.string().min(1, "业务发起机构不能为空"),
  contactName: z.string().min(1, "联系人姓名不能为空"),
  contactPhone: z.string().min(1, "联系电话不能为空"),
  contactEmail: z.string().optional(),
  remark: z.string().optional(),
});

export default function ProcurementForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<{
    orderID: string;
    contactName: string;
    submitDate: string;
  } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vendor: "",
      integrator: "",
      endCustomer: "",
      purchaseAmount: undefined,
      paymentTermDays: undefined,
      originOrgName: "",
      contactName: "",
      contactPhone: "",
      contactEmail: "",
      remark: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      const response = await post<ProcurementResponse>(
        "/procurement/add",
        values
      );

      if (response.success && response.data) {
        setSubmitSuccess({
          orderID: response.data.orderID,
          contactName: values.contactName,
          submitDate: new Date().toLocaleString("zh-CN", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          }),
        });
      }
    } catch (error) {
      console.error("提交表单时出错:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  // 如果提交成功，显示成功提示信息
  if (submitSuccess) {
    return (
      <div className="min-h-[60dvh]">
        <div className="max-w-4xl mx-auto lg:my-12 p-6 bg-white rounded-lg shadow-none lg:shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#188038]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                提交成功
              </h2>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-left max-w-2xl mx-auto">
              <p className="text-gray-700 leading-relaxed">
                尊敬的云雀台用户{" "}
                <span className="font-semibold text-[#1A73E8]">
                  &quot;{submitSuccess.contactName}&quot;
                </span>{" "}
                您好：
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                您的业务工单编号为{" "}
                <span className="font-bold text-[#1A73E8] bg-blue-50 px-2 py-1 rounded">
                  {submitSuccess.orderID}
                </span>
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                提交日期为{" "}
                <span className="font-medium text-gray-900">
                  {submitSuccess.submitDate}
                </span>
                ，请您通过云雀台 APP 向客户服务中心（ID
                10000）提交工单编号查询业务进度与结果
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                在此期间云雀台工作人员或合作机构可能会与您取得联系，请您保持联系方式畅通。
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[60dvh]">
      <div className="max-w-4xl mx-auto lg:my-12 p-6 bg-white rounded-lg shadow-none lg:shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            额度申请表单
          </h2>
          <p className="text-gray-600">请填写以下信息提交额度申请</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="vendor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      品牌厂商名称 *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="请输入品牌厂商名称"
                        {...field}
                        className="mt-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="originOrgName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      业务发起机构 *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="请输入业务发起机构"
                        {...field}
                        className="mt-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="endCustomer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-gray-900">
                      终端客户名称
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="请输入终端客户名称"
                        {...field}
                        className="mt-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="integrator"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      集成（代理）商名称
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="请输入集成（代理）商名称"
                        {...field}
                        className="mt-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* 金额和付款期限 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="purchaseAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      采购金额（万元） *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="请输入采购金额"
                        value={field.value ?? ""}
                        onChange={(e) => {
                          const value = e.target.value;
                          field.onChange(
                            value === "" ? undefined : Number(value)
                          );
                        }}
                        className="mt-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="paymentTermDays"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      付款期限（天） *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="请输入付款期限（0-365天）"
                        value={field.value ?? ""}
                        onChange={(e) => {
                          const value = e.target.value;
                          field.onChange(
                            value === "" ? undefined : Number(value)
                          );
                        }}
                        className="mt-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* 联系人信息 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="contactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      联系人姓名 *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="请输入联系人姓名"
                        {...field}
                        className="mt-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      联系电话 *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="请输入联系电话"
                        {...field}
                        className="mt-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      联系邮箱
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="请输入联系邮箱"
                        {...field}
                        className="mt-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* 备注 */}
            <FormField
              control={form.control}
              name="remark"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    备注
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="请输入备注信息（可选）"
                      rows={4}
                      {...field}
                      className="mt-1 h-[6rem]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 提交按钮 */}
            <div className="flex justify-end pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-2 bg-[#1A73E8] hover:bg-[#1765cc] text-white font-medium rounded-md transition-colors duration-200 disabled:opacity-50"
              >
                {isSubmitting ? "提交中..." : "提交申请"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
