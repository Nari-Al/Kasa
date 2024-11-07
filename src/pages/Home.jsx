import React from 'react';
import LogementCardContainer from '../components/LogementCardContainer/LogementCardContainer';
import Banner from '../components/Banner/Banner';
import ImgHome from '../assets/ImageSource1.png'

const Home = () => {
    return (
        <div>
            <Banner
                imageUrl={ImgHome}
                title="Chez vous, partout et ailleurs"
                darkenOpacity={0.6}
            />
            <LogementCardContainer />
        </div>
    );
};

export default Home;