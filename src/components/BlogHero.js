import React from 'react';
import HeroImage from '../assets/img/hero_sky.jpg'
import Image from "react-bootstrap/es/Image";

const BlogHero = () => {
    return (
        <div style={styles.container}>
            <Image src={HeroImage} fluid/>
            <h2 style={styles.text}>Blog</h2>
        </div>
    );
};

const styles = {
    container: {
        position: "relative"
    },
    text: {
        paddingLeft: "20px",
        paddingRight: "20px",
        position: "absolute",
        top: "30%",
        right: 0,
        left: 0,
        textAlign: "center",
    }
};

export default BlogHero;