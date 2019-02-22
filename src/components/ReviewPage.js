import React from 'react';
import ReviewCards from "./ReviewCards";
import ReviewHero from "./ReviewHero";
import NavBar from "./NavBar";

const ReviewPage = () => {
    return (
        <div>
            <NavBar/>
            <ReviewHero/>
            <ReviewCards/>
        </div>
    );
};
export default ReviewPage;