import React from "react";
import { Parallax } from 'react-scroll-parallax';
import Image from '../components/Image'

const HeroBanner = () => (
    <Parallax
        className="custom-class"
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
        tag="figure"
    >
        <Image />
    </Parallax>
);

export default HeroBanner;