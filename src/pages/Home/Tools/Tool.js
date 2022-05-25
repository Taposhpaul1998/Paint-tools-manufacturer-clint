import React from 'react';
import Button from '../../Shear/Button/Button';

const Tool = ({ product }) => {
    console.log(product);
    const { name, img, price, description, orderQuantity, quantity } = product;
    return (
        <div class="card card-compact w-96 bg-base-200 shadow-xl gap-4 mb-4">
            <figure><img className='max-h-[220px] rounded mt-6' src={img} alt={name} /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p className='font-bold text-sm'>Available quantity:{quantity}</p>
                <p className='font-bold text-sm'>Minimum order :{orderQuantity}</p>
                <p className='font-bold text-sm'>Price:{price}</p>
                <div class="card-actions justify-center">
                    <Button>Order now</Button>
                </div>
            </div>
        </div>
    );
};

export default Tool;