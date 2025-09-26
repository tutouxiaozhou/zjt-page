import React, { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Github,
    Linkedin,
    Twitter,
    MessageCircle,
} from "lucide-react";
import {
    PageWrapper,
    FadeInUp,
    SlideInLeft,
    SlideInRight,
    StaggerContainer,
    StaggerItem,
} from "../components/AnimatedComponents";

interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState<ContactForm>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle");

    // 表单验证
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        // 姓名验证
        if (!formData.name.trim()) {
            newErrors.name = "请输入您的姓名";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "姓名至少需要2个字符";
        }

        // 邮箱验证
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "请输入您的邮箱地址";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "请输入有效的邮箱地址";
        }

        // 主题验证
        if (!formData.subject.trim()) {
            newErrors.subject = "请输入邮件主题";
        } else if (formData.subject.trim().length < 5) {
            newErrors.subject = "主题至少需要5个字符";
        }

        // 消息验证
        if (!formData.message.trim()) {
            newErrors.message = "请输入您的消息内容";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "消息内容至少需要10个字符";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // 处理输入变化
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // 清除对应字段的错误
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: undefined,
            }));
        }
    };

    // 提交表单
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // 模拟API调用
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // 这里应该调用实际的API
            console.log("表单数据:", formData);

            setSubmitStatus("success");
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error("提交失败:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "邮箱地址",
            value: "312502983@qq.com",
            href: "mailto:312502983@qq.com",
        },
        // {
        //     icon: Phone,
        //     label: "电话号码",
        //     value: "+86 181 0237 6260",
        //     href: "tel:+8618102376260",
        // },
        {
            icon: MapPin,
            label: "所在地区",
            value: "中国 · 成都",
            href: null,
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/username",
            color: "hover:text-gray-900",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://linkedin.com/in/username",
            color: "hover:text-blue-600",
        },
        {
            icon: Twitter,
            label: "Twitter",
            href: "https://twitter.com/username",
            color: "hover:text-blue-400",
        },
        {
            icon: MessageCircle,
            label: "微信",
            href: "#",
            color: "hover:text-green-500",
        },
    ];

    return (
        <PageWrapper>
            <div className="min-h-screen bg-gray-50">
                {/* 页面头部 */}
                <div className="bg-white border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="text-center">
                            <FadeInUp>
                                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                    联系我
                                </h1>
                            </FadeInUp>
                            <FadeInUp delay={0.2}>
                                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                    有项目合作或技术交流的想法？欢迎随时与我联系，我会尽快回复您的消息。
                                </p>
                            </FadeInUp>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* 联系信息 */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    联系方式
                                </h2>
                                <div className="space-y-4">
                                    {contactInfo.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center space-x-4"
                                        >
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                                    <item.icon className="w-6 h-6 text-blue-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-500">
                                                    {item.label}
                                                </p>
                                                {item.href ? (
                                                    <a
                                                        href={item.href}
                                                        className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                                                    >
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-lg font-medium text-gray-900">
                                                        {item.value}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 社交媒体 */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    社交媒体
                                </h3>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-400 transition-colors ${social.color}`}
                                            title={social.label}
                                        >
                                            <social.icon className="w-6 h-6" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* 工作时间 */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    工作时间
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">
                                            周一 - 周五
                                        </span>
                                        <span className="font-medium text-gray-900">
                                            9:00 - 18:00
                                        </span>
                                    </div>
                                    {/* <div className="flex justify-between">
                                        <span className="text-gray-600">
                                            周六 - 周日
                                        </span>
                                        <span className="font-medium text-gray-900">
                                            10:00 - 16:00
                                        </span>
                                    </div> */}
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">
                                            响应时间
                                        </span>
                                        <span className="font-medium text-gray-900">
                                            24小时内
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* 合作类型 */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    合作类型
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                                        <div className="text-2xl font-bold text-blue-600 mb-1">
                                            前端开发
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            React/Vue项目
                                        </div>
                                    </div>
                                    <div className="text-center p-4 bg-green-50 rounded-lg">
                                        <div className="text-2xl font-bold text-green-600 mb-1">
                                            全栈开发
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            完整Web应用
                                        </div>
                                    </div>
                                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                                        <div className="text-2xl font-bold text-purple-600 mb-1">
                                            UI/UX设计
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            界面设计优化
                                        </div>
                                    </div>
                                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                                        <div className="text-2xl font-bold text-orange-600 mb-1">
                                            技术咨询
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            架构方案建议
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 联系表单 */}
                        <div className="bg-white rounded-lg shadow-sm p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                发送消息
                            </h2>

                            {/* 提交状态提示 */}
                            {submitStatus === "success" && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                                <svg
                                                    className="w-3 h-3 text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-green-800">
                                                消息发送成功！我会尽快回复您。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {submitStatus === "error" && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                                                <svg
                                                    className="w-3 h-3 text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-red-800">
                                                发送失败，请稍后重试或直接发送邮件。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* 姓名 */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        姓名 *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                                            errors.name
                                                ? "border-red-300 bg-red-50"
                                                : "border-gray-300"
                                        }`}
                                        placeholder="请输入您的姓名"
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                {/* 邮箱 */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        邮箱地址 *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                                            errors.email
                                                ? "border-red-300 bg-red-50"
                                                : "border-gray-300"
                                        }`}
                                        placeholder="请输入您的邮箱地址"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                {/* 主题 */}
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        邮件主题 *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                                            errors.subject
                                                ? "border-red-300 bg-red-50"
                                                : "border-gray-300"
                                        }`}
                                        placeholder="请输入邮件主题"
                                    />
                                    {errors.subject && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.subject}
                                        </p>
                                    )}
                                </div>

                                {/* 消息内容 */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        消息内容 *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                                            errors.message
                                                ? "border-red-300 bg-red-50"
                                                : "border-gray-300"
                                        }`}
                                        placeholder="请详细描述您的需求或想法..."
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.message}
                                        </p>
                                    )}
                                    <p className="mt-1 text-sm text-gray-500">
                                        {formData.message.length}/500 字符
                                    </p>
                                </div>

                                {/* 提交按钮 */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white transition-colors ${
                                        isSubmitting
                                            ? "bg-gray-400 cursor-not-allowed"
                                            : "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg
                                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            发送中...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 mr-2" />
                                            发送消息
                                        </>
                                    )}
                                </button>
                            </form>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-500 text-center">
                                    您也可以直接发送邮件至{" "}
                                    <a
                                        href="mailto:hello@example.com"
                                        className="text-blue-600 hover:text-blue-700"
                                    >
                                        hello@example.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default ContactPage;
