import React from 'react';
import LazyHero from 'react-lazy-hero';

const ParallaxBanner = () => {
    return (
        <div>
            <LazyHero imageSrc="http://www.suprabhata.net/wp-content/uploads/2015/01/astrology.jpg"
                      parallaxOffset={-100}
                      color="#AECBEE"
                      opacity={0.3}
                      minHeight="25vh"
                      isFixed={true}>
                <h1>Астро блог</h1>
            </LazyHero>
        </div>
    );
};
export default ParallaxBanner;