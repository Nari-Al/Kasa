import React from 'react';
import '../components/RoundedImage/RoundedImage'
import RoundedImage from '../components/RoundedImage/RoundedImage';
import LogementCardContainer from '../components/LogementCardContainer/LogementCardContainer';

const Home = () => {
    return (
        <div>
            <RoundedImage />
            <LogementCardContainer />
        </div>
    );
};

export default Home;