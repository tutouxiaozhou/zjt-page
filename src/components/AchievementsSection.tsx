import React from "react";
import { certificates, achievements } from "../data/skillsData";

const AchievementsSection: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 标题 */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        认证与成就
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        持续学习和专业发展的见证
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* 专业认证 */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                <svg
                                    className="w-5 h-5 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            专业认证
                        </h3>

                        <div className="space-y-6">
                            {certificates.map((cert) => (
                                <div
                                    key={cert.id}
                                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            {cert.name}
                                        </h4>
                                        <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded">
                                            {cert.date}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-2">
                                        {cert.issuer}
                                    </p>
                                    {cert.credentialId && (
                                        <p className="text-sm text-gray-500">
                                            证书编号: {cert.credentialId}
                                        </p>
                                    )}
                                    {cert.url && (
                                        <a
                                            href={cert.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center mt-3 text-blue-600 hover:text-blue-800 text-sm font-medium"
                                        >
                                            查看证书
                                            <svg
                                                className="w-4 h-4 ml-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 成就展示 */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                                <svg
                                    className="w-5 h-5 text-yellow-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                    />
                                </svg>
                            </div>
                            重要成就
                        </h3>

                        <div className="space-y-6">
                            {achievements.map((achievement) => (
                                <div
                                    key={achievement.id}
                                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center">
                                            <div
                                                className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                                                    achievement.type === "award"
                                                        ? "bg-yellow-100"
                                                        : achievement.type ===
                                                          "certification"
                                                        ? "bg-blue-100"
                                                        : achievement.type ===
                                                          "milestone"
                                                        ? "bg-green-100"
                                                        : "bg-purple-100"
                                                }`}
                                            >
                                                {achievement.type ===
                                                    "award" && (
                                                    <svg
                                                        className="w-5 h-5 text-yellow-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                                        />
                                                    </svg>
                                                )}
                                                {achievement.type ===
                                                    "certification" && (
                                                    <svg
                                                        className="w-5 h-5 text-blue-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                )}
                                                {achievement.type ===
                                                    "milestone" && (
                                                    <svg
                                                        className="w-5 h-5 text-green-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                                        />
                                                    </svg>
                                                )}
                                                {achievement.type ===
                                                    "project" && (
                                                    <svg
                                                        className="w-5 h-5 text-purple-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                                        />
                                                    </svg>
                                                )}
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-900">
                                                {achievement.title}
                                            </h4>
                                        </div>
                                        <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded">
                                            {achievement.date}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 ml-13">
                                        {achievement.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
