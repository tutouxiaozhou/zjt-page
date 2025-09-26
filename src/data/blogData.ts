import { BlogPost, BlogCategory } from "../types/blog";

export const blogCategories: BlogCategory[] = [
    {
        id: "all",
        name: "全部文章",
        description: "查看所有博客文章",
        color: "bg-gray-500",
        postCount: 12,
    },
    {
        id: "frontend",
        name: "前端开发",
        description: "前端技术、框架和最佳实践",
        color: "bg-blue-500",
        postCount: 5,
    },
    {
        id: "backend",
        name: "后端开发",
        description: "服务器端开发和架构设计",
        color: "bg-green-500",
        postCount: 3,
    },
    {
        id: "design",
        name: "UI/UX设计",
        description: "用户界面和体验设计心得",
        color: "bg-purple-500",
        postCount: 2,
    },
    {
        id: "career",
        name: "职业发展",
        description: "技术职业规划和成长经验",
        color: "bg-orange-500",
        postCount: 2,
    },
];

export const blogPosts: BlogPost[] = [
    {
        id: "react-hooks-best-practices",
        title: "React Hooks 最佳实践：从入门到精通",
        excerpt:
            "深入探讨React Hooks的使用技巧，包括useState、useEffect、useContext等核心Hook的最佳实践，以及如何创建自定义Hook来提升代码复用性。",
        content: `# React Hooks 最佳实践：从入门到精通

React Hooks 自2019年发布以来，已经彻底改变了我们编写React组件的方式。本文将深入探讨React Hooks的使用技巧和最佳实践。

## 什么是React Hooks？

React Hooks是一些特殊的函数，让你可以在函数组件中"钩入"React的特性。它们让你在不编写class的情况下使用state以及其他的React特性。

## 核心Hooks详解

### 1. useState Hook

useState是最基础也是最常用的Hook，用于在函数组件中添加状态。

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>你点击了 {count} 次</p>
      <button onClick={() => setCount(count + 1)}>
        点击我
      </button>
    </div>
  );
}
\`\`\`

**最佳实践：**
- 使用函数式更新避免闭包陷阱
- 合理拆分状态，避免单一状态过于复杂
- 使用对象展开运算符更新对象状态

### 2. useEffect Hook

useEffect让你能够在函数组件中执行副作用操作。

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('获取用户信息失败:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]); // 依赖数组

  if (loading) return <div>加载中...</div>;
  if (!user) return <div>用户不存在</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
\`\`\`

**最佳实践：**
- 正确设置依赖数组
- 清理副作用（如定时器、订阅）
- 使用多个useEffect分离关注点

## 自定义Hooks

自定义Hook是一个函数，其名称以"use"开头，函数内部可以调用其他的Hook。

\`\`\`javascript
// 自定义Hook：useLocalStorage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('读取localStorage失败:', error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('写入localStorage失败:', error);
    }
  };

  return [storedValue, setValue];
}
\`\`\`

## 总结

React Hooks为函数组件带来了强大的能力，让我们能够：

1. 在函数组件中使用状态和生命周期
2. 更好地复用状态逻辑
3. 将相关逻辑组织在一起
4. 避免class组件的复杂性

掌握这些最佳实践，将帮助你写出更清晰、更高效的React代码。`,
        category: "frontend",
        tags: ["React", "Hooks", "JavaScript", "前端开发"],
        author: "张三",
        publishDate: "2024-01-15",
        readTime: 8,
        coverImage:
            "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
        featured: true,
        status: "published",
        views: 1250,
        likes: 89,
    },
    {
        id: "typescript-advanced-types",
        title: "TypeScript 高级类型系统深度解析",
        excerpt:
            "探索TypeScript的高级类型特性，包括联合类型、交叉类型、条件类型、映射类型等，让你的代码更加类型安全和优雅。",
        content: `# TypeScript 高级类型系统深度解析

TypeScript的类型系统是其最强大的特性之一。本文将深入探讨TypeScript的高级类型特性。

## 联合类型 (Union Types)

联合类型表示一个值可以是几种类型之一。

\`\`\`typescript
type Status = 'loading' | 'success' | 'error';
type ID = string | number;

function handleResponse(status: Status) {
  switch (status) {
    case 'loading':
      return '加载中...';
    case 'success':
      return '成功！';
    case 'error':
      return '出错了！';
  }
}
\`\`\`

## 交叉类型 (Intersection Types)

交叉类型将多个类型合并为一个类型。

\`\`\`typescript
interface User {
  name: string;
  email: string;
}

interface Admin {
  permissions: string[];
}

type AdminUser = User & Admin;
\`\`\`

## 总结

掌握TypeScript的高级类型系统，能够让你写出更加类型安全和优雅的代码。`,
        category: "frontend",
        tags: ["TypeScript", "类型系统", "前端开发"],
        author: "张三",
        publishDate: "2024-01-10",
        readTime: 12,
        coverImage:
            "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
        featured: true,
        status: "published",
        views: 980,
        likes: 67,
    },
    {
        id: "nodejs-microservices-architecture",
        title: "Node.js 微服务架构设计与实践",
        excerpt:
            "详细介绍如何使用Node.js构建微服务架构，包括服务拆分、API网关、服务发现、负载均衡等关键技术点。",
        content: `# Node.js 微服务架构设计与实践

微服务架构已经成为现代应用开发的主流模式。本文将介绍如何使用Node.js构建微服务架构。

## 什么是微服务？

微服务是一种架构风格，将单一应用程序开发为一套小服务，每个服务运行在自己的进程中。

## 微服务的优势

1. **独立部署**：每个服务可以独立部署和扩展
2. **技术多样性**：不同服务可以使用不同技术栈
3. **故障隔离**：单个服务的故障不会影响整个系统
4. **团队自治**：小团队可以独立开发和维护服务

## 总结

微服务架构虽然带来了很多好处，但也增加了系统的复杂性。在选择微服务架构时，需要权衡其优缺点。`,
        category: "backend",
        tags: ["Node.js", "微服务", "架构设计", "后端开发"],
        author: "张三",
        publishDate: "2024-01-05",
        readTime: 15,
        coverImage:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
        featured: false,
        status: "published",
        views: 756,
        likes: 45,
    },
    {
        id: "ui-design-principles",
        title: "现代UI设计原则：创造优秀用户体验的关键",
        excerpt:
            "深入探讨现代UI设计的核心原则，包括视觉层次、色彩理论、排版设计、交互反馈等，帮助你设计出更优秀的用户界面。",
        content: `# 现代UI设计原则：创造优秀用户体验的关键

优秀的UI设计不仅仅是让界面看起来美观，更重要的是创造直观、高效的用户体验。

## 核心设计原则

### 1. 视觉层次

视觉层次帮助用户理解信息的重要性和阅读顺序。

**实现方法：**
- 使用不同的字体大小和粗细
- 运用颜色对比突出重点
- 合理使用留白分组相关内容
- 通过位置和对齐建立关系

### 2. 一致性

一致性让用户能够预测界面的行为，降低学习成本。

## 总结

优秀的UI设计需要平衡美观性和功能性。通过遵循这些设计原则，我们可以创造出既美观又实用的用户界面。`,
        category: "design",
        tags: ["UI设计", "UX设计", "设计原则", "用户体验"],
        author: "张三",
        publishDate: "2023-12-28",
        readTime: 10,
        coverImage:
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
        featured: false,
        status: "published",
        views: 634,
        likes: 52,
    },
    {
        id: "tech-career-growth",
        title: "技术人员职业发展路径：从初级到资深的成长指南",
        excerpt:
            "分享技术人员职业发展的经验和建议，包括技能提升、职业规划、团队协作、领导力培养等方面的实用指导。",
        content: `# 技术人员职业发展路径：从初级到资深的成长指南

作为一名技术人员，职业发展不仅仅是技术能力的提升，更是综合素质的全面发展。

## 职业发展阶段

### 初级工程师 (0-2年)

**核心任务：**
- 掌握基础技术栈
- 学会阅读和理解代码
- 培养良好的编程习惯
- 学习团队协作

### 中级工程师 (2-5年)

**核心任务：**
- 独立完成复杂功能
- 参与系统设计
- 指导初级工程师
- 提升代码质量

## 总结

技术人员的职业发展是一个持续的过程，需要在技术深度和广度之间找到平衡。`,
        category: "career",
        tags: ["职业发展", "技术成长", "职业规划", "软技能"],
        author: "张三",
        publishDate: "2023-12-20",
        readTime: 12,
        coverImage:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
        featured: false,
        status: "published",
        views: 892,
        likes: 76,
    },
    {
        id: "web-performance-optimization",
        title: "Web性能优化实战指南：让你的网站飞起来",
        excerpt:
            "全面介绍Web性能优化的策略和技巧，包括资源优化、代码分割、缓存策略、图片优化等实用方法，显著提升网站加载速度。",
        content: `# Web性能优化实战指南：让你的网站飞起来

网站性能直接影响用户体验和业务转化率。本文将分享实用的Web性能优化策略。

## 性能指标

### Core Web Vitals

Google定义的核心网页指标：

1. **LCP (Largest Contentful Paint)**
   - 最大内容绘制时间
   - 目标：< 2.5秒

2. **FID (First Input Delay)**
   - 首次输入延迟
   - 目标：< 100毫秒

3. **CLS (Cumulative Layout Shift)**
   - 累积布局偏移
   - 目标：< 0.1

## 总结

Web性能优化是一个持续的过程，需要建立性能意识，持续监控，渐进优化。`,
        category: "frontend",
        tags: ["性能优化", "Web开发", "用户体验", "前端工程"],
        author: "张三",
        publishDate: "2023-12-15",
        readTime: 18,
        coverImage:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        featured: true,
        status: "published",
        views: 1456,
        likes: 123,
    },
];
