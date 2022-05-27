import React from 'react';
import useProducts from '../../Hooks/useProducts';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [products] = useProducts();
    return (
        <div>
            <h2 className="text-2xl text-center my-4">All Products :{products.length}</h2>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Available quantity</th>
                            <th>Minimum order</th>
                            <th>Delete product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <ManageProduct
                                key={product._id}
                                product={product}
                            ></ManageProduct>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;