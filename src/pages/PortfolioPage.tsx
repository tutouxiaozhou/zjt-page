import React, { useState, useMemo } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectFilter from "../components/ProjectFilter";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/portfolioData";
import {
    Project,
    ProjectFilter as ProjectFilterType,
} from "../types/portfolio";
import {
    PageWrapper,
    FadeInUp,
    StaggerContainer,
    StaggerItem,
} from "../components/AnimatedComponents";

const PortfolioPage: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filter, setFilter] = useState<ProjectFilterType>({});

    // 筛选项目
    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            if (
                filter.category &&
                filter.category !== "all" &&
                project.category !== filter.category
            ) {
                return false;
            }
            if (
                filter.technology &&
                !project.technologies.includes(filter.technology)
            ) {
                return false;
            }
            if (filter.status && project.status !== filter.status) {
                return false;
            }
            return true;
        });
    }, [filter]);

    const handleViewDetails = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <PageWrapper className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* 页面标题 */}
                <FadeInUp className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        项目作品集
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        展示我在不同领域的项目经验，从Web应用到移动端开发，从UI设计到数据可视化
                    </p>
                </FadeInUp>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* 筛选侧边栏 */}
                    <div className="lg:col-span-1">
                        <ProjectFilter
                            activeFilter={filter}
                            onFilterChange={setFilter}
                        />
                    </div>

                    {/* 项目展示区域 */}
                    <div className="lg:col-span-3">
                        {/* 项目统计 */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    项目展示
                                </h2>
                                <span className="text-gray-500">
                                    共 {filteredProjects.length} 个项目
                                </span>
                            </div>
                        </div>

                        {/* 项目网格 */}
                        {filteredProjects.length > 0 ? (
                            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {filteredProjects.map((project) => (
                                    <StaggerItem key={project.id}>
                                        <ProjectCard
                                            project={project}
                                            onViewDetails={handleViewDetails}
                                        />
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        ) : (
                            <div className="text-center py-16">
                                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-12 h-12 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.816-6.207-2.175.193-.39.398-.778.618-1.158A8.962 8.962 0 0112 13.5c2.34 0 4.5-.816 6.207-2.175a8.962 8.962 0 01-.618 1.158A7.962 7.962 0 0112 15z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">
                                    没有找到匹配的项目
                                </h3>
                                <p className="text-gray-500 mb-4">
                                    请尝试调整筛选条件或清除所有筛选
                                </p>
                                <button
                                    onClick={() => setFilter({})}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    清除筛选
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* 项目详情模态框 */}
                <ProjectModal
                    project={selectedProject}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            </div>
        </PageWrapper>
    );
};

export default PortfolioPage;
