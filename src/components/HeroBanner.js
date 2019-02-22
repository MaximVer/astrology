import React from 'react';
import LazyHero from 'react-lazy-hero';
import ContactForm from "./ContactForm";
import HeroImage from '../assets/img/hero-paral-astro.jpg';

const HeroBanner = () => {
    return (
        <div>
            <LazyHero imageSrc={HeroImage}
                      parallaxOffset={100}
                      color="#AECBEE"
                      opacity={0.3}
                      minHeight="75vh">
                <h1 style={{color: '#ff726d'}}>Астро портал Лена-moon</h1>
                <ContactForm/>
            </LazyHero>
        </div>
    );
};
export default HeroBanner;