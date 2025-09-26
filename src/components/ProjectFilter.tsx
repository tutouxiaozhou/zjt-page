import React from "react";
import { projectCategories } from "../data/portfolioData";
import { ProjectFilter as ProjectFilterType } from "../types/portfolio";

interface ProjectFilterProps {
    activeFilter: ProjectFilterType;
    onFilterChange: (filter: ProjectFilterType) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
    activeFilter,
    onFilterChange,
}) => {
    const technologies = [
        "React",
        "Vue.js",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Python",
        "MongoDB",
        "PostgreSQL",
        "Firebase",
        "AWS",
        "React Native",
        "Figma",
    ];

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                筛选项目
            </h3>

            {/* 项目分类筛选 */}
            <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                    项目类型
                </h4>
                <div className="flex flex-wrap gap-2">
                    {projectCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() =>
                                onFilterChange({
                                    ...activeFilter,
                                    category:
                                        activeFilter.category === category.id
                                            ? undefined
                                            : category.id,
                                })
                            }
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                activeFilter.category === category.id
                                    ? `${category.color} text-white shadow-md`
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* 技术栈筛选 */}
            <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                    技术栈
                </h4>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <button
                            key={tech}
                            onClick={() =>
                                onFilterChange({
                                    ...activeFilter,
                                    technology:
                                        activeFilter.technology === tech
                                            ? undefined
                                            : tech,
                                })
                            }
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                activeFilter.technology === tech
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            {tech}
                        </button>
                    ))}
                </div>
            </div>

            {/* 项目状态筛选 */}
            <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                    项目状态
                </h4>
                <div className="flex flex-wrap gap-2">
                    {[
                        {
                            value: "completed",
                            label: "已完成",
                            color: "bg-green-600",
                        },
                        {
                            value: "in-progress",
                            label: "进行中",
                            color: "bg-blue-600",
                        },
                        {
                            value: "planned",
                            label: "计划中",
                            color: "bg-gray-600",
                        },
                    ].map((status) => (
                        <button
                            key={status.value}
                            onClick={() =>
                                onFilterChange({
                                    ...activeFilter,
                                    status:
                                        activeFilter.status === status.value
                                            ? undefined
                                            : status.value,
                                })
                            }
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                activeFilter.status === status.value
                                    ? `${status.color} text-white shadow-md`
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            {status.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* 清除筛选 */}
            {(activeFilter.category ||
                activeFilter.technology ||
                activeFilter.status) && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                    <button
                        onClick={() => onFilterChange({})}
                        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                    >
                        清除所有筛选
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectFilter;
