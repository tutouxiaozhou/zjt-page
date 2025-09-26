import React, { useState } from "react";
import { skillCategories } from "../data/skillsData";
import { SkillCategory } from "../types/skills";

const SkillsSection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>("frontend");

    const activeSkills = skillCategories.find(
        (cat) => cat.id === activeCategory
    );

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 标题 */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        技能专长
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        掌握现代化的技术栈，专注于创建高质量的数字产品和用户体验
                    </p>
                </div>

                {/* 技能分类选择器 */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {skillCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                activeCategory === category.id
                                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* 技能展示区域 */}
                {activeSkills && (
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {activeSkills.name}
                            </h3>
                            <p className="text-gray-600">
                                {activeSkills.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {activeSkills.skills.map((skill) => (
                                <div
                                    key={skill.id}
                                    className="bg-gray-50 rounded-xl p-6"
                                >
                                    <div className="flex justify-between items-center mb-4">
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            {skill.name}
                                        </h4>
                                        <span className="text-sm text-gray-500">
                                            {skill.yearsOfExperience}年经验
                                        </span>
                                    </div>

                                    {/* 技能进度条 */}
                                    <div className="mb-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-gray-600">
                                                熟练度
                                            </span>
                                            <span className="text-sm font-medium text-blue-600">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                                                style={{
                                                    width: `${skill.level}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>

                                    {skill.description && (
                                        <p className="text-sm text-gray-600">
                                            {skill.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 技能统计 */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                            15+
                        </div>
                        <div className="text-gray-600">掌握技能</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                            3+
                        </div>
                        <div className="text-gray-600">年开发经验</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">
                            30+
                        </div>
                        <div className="text-gray-600">完成项目</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-pink-600 mb-2">
                            3
                        </div>
                        <div className="text-gray-600">专业认证</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
