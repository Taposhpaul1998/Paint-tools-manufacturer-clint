import React from 'react';
import Footer from '../../Shear/Footer/Footer';
import Banner from '../Banner/Banner';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div className='bg-teal-800'>
            <Banner></Banner>
            <Tools></Tools>
            <Footer></Footer>
        </div>
    );
};

export default Home;