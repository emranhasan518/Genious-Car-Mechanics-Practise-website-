import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Servises from '../Servises/Servises';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Servises></Servises>
            <Experts></Experts>
        </div>
    );
};

export default Home;