import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import AchievementsSection from "../components/AchievementsSection";
import { PageWrapper } from "../components/AnimatedComponents";

const HomePage: React.FC = () => {
    return (
        <PageWrapper className="min-h-screen">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            {/* <AchievementsSection /> */}
        </PageWrapper>
    );
};

export default HomePage;
