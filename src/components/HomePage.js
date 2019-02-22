import React from 'react';
import NavBar from "./NavBar";
import HeroBanner from "./HeroBanner";
import SubHeroSection from "./SubHeroSection";
import LearnMoreContr from "./LearnMoreContr";
import ParallaxBanner from "./ParallaxBanner";
import QA from "./QA";

const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <HeroBanner/>
            <SubHeroSection/>
            <LearnMoreContr/>
            <ParallaxBanner/>
            <QA/>
        </div>
    );
};
export default HomePage;