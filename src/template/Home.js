import React from 'react';
import Carousel from '../components/Carousel';
import Featurette from '../components/Featurette';
import Services from '../components/Services';

const Home = () => {
    return (
        <div>
             <Carousel />
        <div className="container marketing">
        <Services />
        <Featurette />
        </div>
        </div>
    );
}

export default Home;
