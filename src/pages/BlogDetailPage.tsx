import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
    Calendar,
    Clock,
    Eye,
    Heart,
    ArrowLeft,
    Share2,
    User,
} from "lucide-react";
import { blogPosts, blogCategories } from "../data/blogData";

const BlogDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const category = blogCategories.find((c) => c.id === post.category);
    const relatedPosts = blogPosts
        .filter((p) => p.id !== post.id && p.category === post.category)
        .slice(0, 3);

    // 将Markdown内容转换为HTML（简化版本）
    const formatContent = (content: string) => {
        return content
            .split("\n")
            .map((line, index) => {
                // 标题处理
                if (line.startsWith("# ")) {
                    return (
                        <h1
                            key={index}
                            className="text-3xl font-bold text-gray-900 mt-8 mb-4"
                        >
                            {line.slice(2)}
                        </h1>
                    );
                }
                if (line.startsWith("## ")) {
                    return (
                        <h2
                            key={index}
                            className="text-2xl font-bold text-gray-900 mt-6 mb-3"
                        >
                            {line.slice(3)}
                        </h2>
                    );
                }
                if (line.startsWith("### ")) {
                    return (
                        <h3
                            key={index}
                            className="text-xl font-bold text-gray-900 mt-4 mb-2"
                        >
                            {line.slice(4)}
                        </h3>
                    );
                }

                // 代码块处理
                if (line.startsWith("```")) {
                    return null; // 简化处理，实际项目中需要更复杂的解析
                }

                // 列表处理
                if (line.startsWith("- ")) {
                    return (
                        <li key={index} className="text-gray-700 mb-1">
                            {line.slice(2)}
                        </li>
                    );
                }

                // 粗体处理
                if (line.includes("**")) {
                    const parts = line.split("**");
                    return (
                        <p key={index} className="text-gray-700 mb-4">
                            {parts.map((part, i) =>
                                i % 2 === 1 ? (
                                    <strong key={i}>{part}</strong>
                                ) : (
                                    part
                                )
                            )}
                        </p>
                    );
                }

                // 普通段落
                if (line.trim()) {
                    return (
                        <p key={index} className="text-gray-700 mb-4">
                            {line}
                        </p>
                    );
                }

                return null;
            })
            .filter(Boolean);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* 返回按钮 */}
            <div className="bg-white border-b">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        返回博客列表
                    </Link>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <article className="bg-white rounded-lg shadow-sm overflow-hidden">
                    {/* 文章头部 */}
                    <div className="relative">
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-64 md:h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                            <div className="p-8 text-white">
                                <div className="flex items-center mb-4">
                                    <span
                                        className={`px-3 py-1 text-sm font-medium rounded-full ${
                                            category?.color || "bg-gray-500"
                                        } text-white`}
                                    >
                                        {category?.name}
                                    </span>
                                    {post.featured && (
                                        <span className="ml-2 px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                                            特色
                                        </span>
                                    )}
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                    {post.title}
                                </h1>
                                <p className="text-lg text-gray-200 mb-4">
                                    {post.excerpt}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 文章元信息 */}
                    <div className="px-8 py-6 border-b bg-gray-50">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center space-x-6 text-sm text-gray-600">
                                <div className="flex items-center">
                                    <User className="w-4 h-4 mr-2" />
                                    {post.author}
                                </div>
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {post.publishDate}
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-2" />
                                    {post.readTime} 分钟阅读
                                </div>
                                <div className="flex items-center">
                                    <Eye className="w-4 h-4 mr-2" />
                                    {post.views} 次阅读
                                </div>
                                <div className="flex items-center">
                                    <Heart className="w-4 h-4 mr-2" />
                                    {post.likes} 个赞
                                </div>
                            </div>
                            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                <Share2 className="w-4 h-4 mr-2" />
                                分享文章
                            </button>
                        </div>
                    </div>

                    {/* 文章内容 */}
                    <div className="px-8 py-8">
                        <div className="prose prose-lg max-w-none">
                            {formatContent(post.content)}
                        </div>

                        {/* 标签 */}
                        <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t">
                            <span className="text-sm font-medium text-gray-700 mr-2">
                                标签：
                            </span>
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 cursor-pointer transition-colors"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </article>

                {/* 相关文章 */}
                {relatedPosts.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            相关文章
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    to={`/blog/${relatedPost.id}`}
                                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
                                >
                                    <img
                                        src={relatedPost.coverImage}
                                        alt={relatedPost.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <div className="flex items-center mb-2">
                                            <span
                                                className={`px-2 py-1 text-xs font-medium rounded-full ${
                                                    category?.color ||
                                                    "bg-gray-500"
                                                } text-white`}
                                            >
                                                {category?.name}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2 line-clamp-2">
                                            {relatedPost.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                            {relatedPost.excerpt}
                                        </p>
                                        <div className="flex items-center text-xs text-gray-500">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {relatedPost.publishDate}
                                            <Clock className="w-3 h-3 ml-3 mr-1" />
                                            {relatedPost.readTime} 分钟
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* 返回顶部和导航 */}
                <div className="mt-12 flex justify-between items-center">
                    <Link
                        to="/blog"
                        className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        返回博客列表
                    </Link>
                    <button
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        返回顶部
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailPage;
