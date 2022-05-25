import React from 'react';
import Button from '../../Shear/Button/Button';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-[url('https://i.ibb.co/ZGvd6Tk/painter-1937575-1280.jpg')]">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold text-white">Hero Paint Tools</h1>
                    <p class="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Button>Order now</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;