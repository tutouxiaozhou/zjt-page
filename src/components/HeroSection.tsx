import React from "react";
import {
    FadeInUp,
    SlideInLeft,
    SlideInRight,
    AnimatedButton,
    FloatingElement,
    StaggerContainer,
    StaggerItem,
} from "./AnimatedComponents";

const HeroSection: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/* 头像 */}
                    <FloatingElement className="mb-8">
                        <FadeInUp delay={0.2}>
                            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-4xl font-bold text-primary-foreground">
                                周
                            </div>
                        </FadeInUp>
                    </FloatingElement>

                    {/* 主标题 */}
                    <FadeInUp delay={0.4}>
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            你好，我是
                            <span className="text-primary block mt-2">
                                周靖添
                            </span>
                        </h1>
                    </FadeInUp>

                    {/* 副标题 */}
                    <FadeInUp delay={0.6}>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            前端开发工程师 · 专注于现代化Web应用开发
                        </p>
                    </FadeInUp>

                    {/* 简介 */}
                    <FadeInUp delay={0.8}>
                        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                            拥有丰富的前端开发经验，熟练掌握React、Vue.js、TypeScript等现代前端技术栈。
                            热爱创造优雅的用户体验和高性能的Web应用程序。
                        </p>
                    </FadeInUp>

                    {/* 技能标签 */}
                    <StaggerContainer className="flex flex-wrap justify-center gap-3 mb-12">
                        {[
                            "React",
                            "TypeScript",
                            "Node.js",
                            "Python",
                            "Next.js",
                            "Vue.js",
                            "MongoDB",
                            "PostgreSQL",
                            "AWS",
                            "Docker",
                            "Git",
                            "Figma",
                        ].map((skill) => (
                            <StaggerItem key={skill}>
                                <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                                    {skill}
                                </span>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    {/* 行动按钮 */}
                    <FadeInUp
                        delay={1.2}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <AnimatedButton className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                            查看作品集
                        </AnimatedButton>
                        <AnimatedButton className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-colors">
                            联系我
                        </AnimatedButton>
                    </FadeInUp>

                    {/* 社交媒体链接 */}
                    <FadeInUp
                        delay={1.4}
                        className="flex justify-center gap-6 mt-12"
                    >
                        <a
                            href="#"
                            className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                            aria-label="GitHub"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                            aria-label="邮箱"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </a>
                    </FadeInUp>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
