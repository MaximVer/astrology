import React, {Component} from 'react';
import PropTypes from 'prop-types';
import image from '../assets/img/landing-bg.jpg';

    const divStyle = {
        //backgroundImage: 'url(' + image + ')',
        //backgroundSize: 'auto',
        //backgroundRepeat: 'no-repeat',
        //minHeight: '400px',
        background: 'url(' + image + ') no-repeat center center fixed'
    };

class Image extends Component {


    static contextTypes = {
        parallaxController: PropTypes.object.isRequired,
    };

    handleLoad = () => {
        // updates cached values after image dimensions have loaded
        this.context.parallaxController.update();
    };


    render() {
        return(
            <div style={divStyle} >
                SOME TEXT
            </div>
        )
    }
}


export default Image;