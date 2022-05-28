import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Bestsell from './Bestsell';

const Bestsells = () => {
    const [products] = useProducts();
    return (
        <div className='my-10'>
            <h2 className='font-bold text-3xl text-white text-center my-8'>Best Sells Product</h2>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-3 m-10 mt-20'>
                {
                    products?.slice(-3).map(product => <Bestsell
                        key={product._id}
                        product={product}
                    ></Bestsell>)
                }
            </div>

        </div>
    );
};

export default Bestsells;