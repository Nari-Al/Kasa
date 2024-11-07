import React from 'react';
import '../Banner/Banner.scss'

const Banner = ({ title, imageUrl, darkenOpacity }) => {
    return (
        <div
            className='imageContainer'
            style={{
                '--darken-opacity': darkenOpacity,
                backgroundImage: `url(${imageUrl})`,
            }}
        >
            <h1 className='title'>{title}</h1>
        </div>
    );
};

export default Banner;