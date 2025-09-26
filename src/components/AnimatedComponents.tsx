import React from "react";
import { motion, Transition } from "framer-motion";

// 页面进入动画配置
export const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    in: {
        opacity: 1,
        y: 0,
    },
    out: {
        opacity: 0,
        y: -20,
    },
};

export const pageTransition: Transition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
};

// 卡片动画组件
export const AnimatedCard: React.FC<{
    children: React.ReactNode;
    delay?: number;
    className?: string;
}> = ({ children, delay = 0, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
                y: -5,
                transition: { duration: 0.2 },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// 渐入动画组件
export const FadeInUp: React.FC<{
    children: React.ReactNode;
    delay?: number;
    className?: string;
}> = ({ children, delay = 0, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// 从左侧滑入动画
export const SlideInLeft: React.FC<{
    children: React.ReactNode;
    delay?: number;
    className?: string;
}> = ({ children, delay = 0, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// 从右侧滑入动画
export const SlideInRight: React.FC<{
    children: React.ReactNode;
    delay?: number;
    className?: string;
}> = ({ children, delay = 0, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// 缩放动画组件
export const ScaleIn: React.FC<{
    children: React.ReactNode;
    delay?: number;
    className?: string;
}> = ({ children, delay = 0, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// 交错动画容器
export const StaggerContainer: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className = "" }) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// 交错动画子项
export const StaggerItem: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className = "" }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// 按钮悬停动画
export const AnimatedButton: React.FC<{
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}> = ({
    children,
    onClick,
    className = "",
    type = "button",
    disabled = false,
}) => {
    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled}
            whileHover={{
                scale: disabled ? 1 : 1.05,
                transition: { duration: 0.2 },
            }}
            whileTap={{
                scale: disabled ? 1 : 0.95,
                transition: { duration: 0.1 },
            }}
            className={className}
        >
            {children}
        </motion.button>
    );
};

// 页面包装器组件
export const PageWrapper: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className = "" }) => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// 技能进度条动画
export const AnimatedProgressBar: React.FC<{
    percentage: number;
    delay?: number;
    className?: string;
}> = ({ percentage, delay = 0, className = "" }) => {
    return (
        <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{
                    duration: 1.5,
                    delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="bg-blue-600 h-2 rounded-full"
            />
        </div>
    );
};

// 数字计数动画
export const AnimatedCounter: React.FC<{
    from: number;
    to: number;
    duration?: number;
    delay?: number;
    className?: string;
}> = ({ from, to, duration = 2, delay = 0, className = "" }) => {
    const [count, setCount] = React.useState(from);
    
    React.useEffect(() => {
        let start = from;
        const increment = (to - from) / (duration * 60); // 60fps
        const timer = setInterval(() => {
            start += increment;
            if ((increment > 0 && start >= to) || (increment < 0 && start <= to)) {
                clearInterval(timer);
                setCount(to);
            } else {
                setCount(Math.round(start));
            }
        }, 1000 / 60); // 60fps
        
        return () => clearInterval(timer);
    }, [from, to, duration]);
    
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay }}
            className={className}
        >
            {count}
        </motion.span>
    );
};

// 浮动动画
export const FloatingElement: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className = "" }) => {
    return (
        <motion.div
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};