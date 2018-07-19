import React from 'react';
import Parallax from 'material-kit-react/src/components/Parallax/Parallax.jsx';



const HeroBanner = () => {
    return(
        <div>
            /* This Parallax Gabriel */
            <Parallax filter image={require("../assets/img/landing-bg.jpg")} />
        </div>
    );
}

export default HeroBanner;


