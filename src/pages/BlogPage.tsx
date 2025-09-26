import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, Eye, Heart, Search, Filter } from "lucide-react";
import { blogPosts, blogCategories } from "../data/blogData";
import { BlogFilter } from "../types/blog";
import {
    PageWrapper,
    FadeInUp,
    StaggerContainer,
    StaggerItem,
} from "../components/AnimatedComponents";

const BlogPage: React.FC = () => {
    const [filter, setFilter] = useState<BlogFilter>({});
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    // 过滤和搜索博客文章
    const filteredPosts = useMemo(() => {
        return blogPosts.filter((post) => {
            // 分类筛选
            if (
                selectedCategory !== "all" &&
                post.category !== selectedCategory
            ) {
                return false;
            }

            // 搜索筛选
            if (searchTerm) {
                const searchLower = searchTerm.toLowerCase();
                return (
                    post.title.toLowerCase().includes(searchLower) ||
                    post.excerpt.toLowerCase().includes(searchLower) ||
                    post.tags.some((tag) =>
                        tag.toLowerCase().includes(searchLower)
                    )
                );
            }

            return true;
        });
    }, [selectedCategory, searchTerm]);

    // 特色文章
    const featuredPosts = blogPosts.filter((post) => post.featured);

    return (
        <PageWrapper>
            <div className="min-h-screen bg-gray-50">
                {/* 页面头部 */}
                <div className="bg-white border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="text-center">
                            <FadeInUp>
                                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                    技术博客
                                </h1>
                            </FadeInUp>
                            <FadeInUp delay={0.2}>
                                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                    分享前端开发、后端架构、UI设计和职业成长的经验与思考
                                </p>
                            </FadeInUp>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* 侧边栏 */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-8 space-y-6">
                                {/* 搜索框 */}
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <Search className="w-5 h-5 mr-2" />
                                        搜索文章
                                    </h3>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="搜索标题、内容或标签..."
                                            value={searchTerm}
                                            onChange={(e) =>
                                                setSearchTerm(e.target.value)
                                            }
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                        <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                                    </div>
                                </div>

                                {/* 分类筛选 */}
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <Filter className="w-5 h-5 mr-2" />
                                        文章分类
                                    </h3>
                                    <div className="space-y-2">
                                        {blogCategories.map((category) => (
                                            <button
                                                key={category.id}
                                                onClick={() =>
                                                    setSelectedCategory(
                                                        category.id
                                                    )
                                                }
                                                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                                                    selectedCategory ===
                                                    category.id
                                                        ? "bg-blue-100 text-blue-700"
                                                        : "text-gray-600 hover:bg-gray-100"
                                                }`}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span>{category.name}</span>
                                                    <span
                                                        className={`px-2 py-1 text-xs rounded-full ${category.color} text-white`}
                                                    >
                                                        {category.postCount}
                                                    </span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* 特色文章 */}
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                        特色文章
                                    </h3>
                                    <div className="space-y-4">
                                        {featuredPosts
                                            .slice(0, 3)
                                            .map((post) => (
                                                <Link
                                                    key={post.id}
                                                    to={`/blog/${post.id}`}
                                                    className="block group"
                                                >
                                                    <div className="flex space-x-3">
                                                        <img
                                                            src={
                                                                post.coverImage
                                                            }
                                                            alt={post.title}
                                                            className="w-16 h-16 object-cover rounded-lg"
                                                        />
                                                        <div className="flex-1 min-w-0">
                                                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2">
                                                                {post.title}
                                                            </h4>
                                                            <div className="flex items-center mt-1 text-xs text-gray-500">
                                                                <Calendar className="w-3 h-3 mr-1" />
                                                                {
                                                                    post.publishDate
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 主内容区 */}
                        <div className="lg:col-span-3">
                            {/* 搜索结果提示 */}
                            {(searchTerm || selectedCategory !== "all") && (
                                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                                    <p className="text-blue-700">
                                        {searchTerm && `搜索 "${searchTerm}" `}
                                        {selectedCategory !== "all" &&
                                            `在 "${
                                                blogCategories.find(
                                                    (c) =>
                                                        c.id ===
                                                        selectedCategory
                                                )?.name
                                            }" 分类中 `}
                                        找到 {filteredPosts.length} 篇文章
                                    </p>
                                </div>
                            )}

                            {/* 文章列表 */}
                            <div className="space-y-8">
                                {filteredPosts.length > 0 ? (
                                    filteredPosts.map((post) => (
                                        <article
                                            key={post.id}
                                            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                                        >
                                            <div className="md:flex">
                                                <div className="md:w-1/3">
                                                    <img
                                                        src={post.coverImage}
                                                        alt={post.title}
                                                        className="w-full h-48 md:h-full object-cover"
                                                    />
                                                </div>
                                                <div className="md:w-2/3 p-6">
                                                    <div className="flex items-center mb-2">
                                                        <span
                                                            className={`px-3 py-1 text-xs font-medium rounded-full ${
                                                                blogCategories.find(
                                                                    (c) =>
                                                                        c.id ===
                                                                        post.category
                                                                )?.color ||
                                                                "bg-gray-500"
                                                            } text-white`}
                                                        >
                                                            {
                                                                blogCategories.find(
                                                                    (c) =>
                                                                        c.id ===
                                                                        post.category
                                                                )?.name
                                                            }
                                                        </span>
                                                        {post.featured && (
                                                            <span className="ml-2 px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                                                                特色
                                                            </span>
                                                        )}
                                                    </div>

                                                    <Link
                                                        to={`/blog/${post.id}`}
                                                        className="group"
                                                    >
                                                        <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-3 line-clamp-2">
                                                            {post.title}
                                                        </h2>
                                                    </Link>

                                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                                        {post.excerpt}
                                                    </p>

                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                                                            <div className="flex items-center">
                                                                <Calendar className="w-4 h-4 mr-1" />
                                                                {
                                                                    post.publishDate
                                                                }
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Clock className="w-4 h-4 mr-1" />
                                                                {post.readTime}{" "}
                                                                分钟阅读
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Eye className="w-4 h-4 mr-1" />
                                                                {post.views}
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Heart className="w-4 h-4 mr-1" />
                                                                {post.likes}
                                                            </div>
                                                        </div>

                                                        <Link
                                                            to={`/blog/${post.id}`}
                                                            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                                                        >
                                                            阅读全文 →
                                                        </Link>
                                                    </div>

                                                    {/* 标签 */}
                                                    <div className="flex flex-wrap gap-2 mt-4">
                                                        {post.tags.map(
                                                            (tag) => (
                                                                <span
                                                                    key={tag}
                                                                    className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                                                                >
                                                                    #{tag}
                                                                </span>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    ))
                                ) : (
                                    <div className="text-center py-12">
                                        <div className="text-gray-400 mb-4">
                                            <Search className="w-16 h-16 mx-auto" />
                                        </div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                                            没有找到相关文章
                                        </h3>
                                        <p className="text-gray-600">
                                            尝试调整搜索关键词或选择其他分类
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default BlogPage;
