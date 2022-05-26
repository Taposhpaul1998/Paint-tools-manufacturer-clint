import React from 'react';
import Button from '../../Shear/Button/Button';


const Catagory = ({ product }) => {
    const { img, name } = product

    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='max-h-[280px]' src={img} alt={name} /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
            </div>
            <div class="card-actions justify-center mb-2">
                <Button>Order now</Button>
            </div>
        </div>
    );
};

export default Catagory;