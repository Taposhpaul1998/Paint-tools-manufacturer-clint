import React from 'react';

const Bestsell = ({ product }) => {
    const { img, name } = product

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-4">
            <figure><img className='max-h-[280px]' src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
            </div>
            <div className="card-actions justify-center mb-2">
                <button className="btn btn-accent bg-teal-900 text-white font-bold">Order now</button>
            </div>
        </div>
    );
};

export default Bestsell;