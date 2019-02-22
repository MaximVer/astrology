import React from 'react';
import LazyHero from 'react-lazy-hero';
import HeroImage from '../assets/img/second-hero-paral-moon.jpg'

const ParallaxBanner = () => {
    return (
        <div>
            <LazyHero imageSrc={HeroImage}
                      parallaxOffset={-100}
                      color="#AECBEE"
                      opacity={0.3}
                      minHeight="25vh"
                      isFixed={true}>
                <h1>Часто задаваемые вопросы</h1>
            </LazyHero>
        </div>
    );
};
export default ParallaxBanner;