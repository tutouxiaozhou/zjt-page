import React from "react";

const AboutSection: React.FC = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* 标题 */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            关于我
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            了解我的技术背景、工作经验和个人理念
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* 左侧：个人介绍 */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-foreground mb-4">
                                我的故事
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                我是一名充满热情的前端开发工程师，拥有计算机科学学士学位。
                                在过去的工作中，我专注于构建现代化的Web应用程序，
                                特别是在前端用户界面开发方面积累了丰富的实战经验。
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                我相信技术应该服务于人，因此我始终致力于创造直观、
                                高效且用户友好的数字体验。我喜欢学习前沿的前端技术，
                                并将它们应用到实际项目中，为用户创造更好的产品体验。
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                除了编程，我还热爱设计和摄影。
                                这些爱好让我能够从不同角度思考问题，
                                为我的前端开发工作带来更多创意和灵感。
                            </p>
                        </div>

                        {/* 右侧：技能和经验 */}
                        <div className="space-y-8">
                            {/* 技能分类 */}
                            <div>
                                <h4 className="text-lg font-semibold text-foreground mb-4">
                                    前端技术
                                </h4>
                                <div className="space-y-3">
                                    {[
                                        { name: "React/Next.js", level: 95 },
                                        { name: "TypeScript", level: 90 },
                                        { name: "Vue.js", level: 85 },
                                        { name: "Tailwind CSS", level: 92 },
                                    ].map((skill) => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm font-medium text-foreground">
                                                    {skill.name}
                                                </span>
                                                <span className="text-sm text-muted-foreground">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-secondary rounded-full h-2">
                                                <div
                                                    className="bg-primary h-2 rounded-full transition-all duration-1000"
                                                    style={{
                                                        width: `${skill.level}%`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-foreground mb-4">
                                    后端技术
                                </h4>
                                <div className="space-y-3">
                                    {[
                                        { name: "HTML/CSS", level: 95 },
                                        { name: "JavaScript/ES6", level: 90 },
                                        { name: "Webpack/Vite", level: 85 },
                                        { name: "Git/SVN", level: 88 },
                                    ].map((skill) => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm font-medium text-foreground">
                                                    {skill.name}
                                                </span>
                                                <span className="text-sm text-muted-foreground">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-secondary rounded-full h-2">
                                                <div
                                                    className="bg-primary h-2 rounded-full transition-all duration-1000"
                                                    style={{
                                                        width: `${skill.level}%`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 统计数据 */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
                        {[
                            { number: "30+", label: "完成项目" },
                            { number: "3+", label: "工作年限" },
                            { number: "15+", label: "技术栈" },
                            { number: "98%", label: "客户满意度" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-muted-foreground">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
