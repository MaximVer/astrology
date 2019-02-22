import React from 'react';
import HeroImage from '../assets/img/hero_review.jpeg'
import Image from "react-bootstrap/es/Image";

const ReviewHero = () => {
    return (
        <div style={styles.container}>
            <Image src={HeroImage} fluid/>
            <h2 style={styles.text}>Reviews</h2>
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

export default ReviewHero;