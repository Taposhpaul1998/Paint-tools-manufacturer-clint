import React from 'react';
import Footer from '../Shear/Footer/Footer';

const Portfolio = () => {
    return (
        <>
            <div className='p-10 bg-teal-600'>
                <h2 className='text-center font-semibold text-white text-xl'>My Portfolio</h2>
                <div>
                    <h2 className='text-white text-lg font-semibold'>Name : Taposh paul</h2>
                    <h2 className='text-white text-lg font-semibold'>Email : taposhp05@gmail.com</h2>
                    <p className='text-white font-semibold'>Educational : Diploma in Engineering (Food Technology)</p>
                    <p className='text-white font-semibold'>Skills :
                        <ul className='pl-4 font-normal'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                            <li>React</li>
                            <li>React Router</li>
                            <li>Node.js</li>
                            <li>BOOTSTRAB-5</li>
                            <li>Tailwindcss</li>
                            <li>Firebase</li>
                            <li>React-bootstrap</li>
                        </ul> </p>
                    <p className='text-white font-semibold'>Best Projects :
                        <ul className='pl-4 font-normal'>
                            <li>https://euphonious-belekoy-84d27e.netlify.app/</li>
                            <li>https://denton-dentel.web.app</li>
                            <li> https://cycle-house-bf827.web.app/</li>
                        </ul>
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Portfolio;