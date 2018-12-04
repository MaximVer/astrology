import React from 'react';
import LazyHero from 'react-lazy-hero';

const HeroBanner = () => {
    return (
        <div>
            <LazyHero imageSrc="https://astrostyle.com/wp-content/uploads/2013/10/learn-astrology-astrotwins.jpg"
                      parallaxOffset={100}
                      color="#AECBEE"
                      opacity={0.3}
                      minHeight="75vh">
                <h1 style={{color: '#ff726d'}}>Астро портал Лена-moon</h1>
            </LazyHero>
        </div>
    );
};
export default HeroBanner;