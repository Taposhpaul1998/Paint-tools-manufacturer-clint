import React, { useEffect, useState } from 'react';
import Myorder from './Myorder';

const Myorders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl text-center my-4">My Orders :{orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Payment</th>
                            <th>Remove Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <Myorder
                                key={order._id}
                                order={order}
                            ></Myorder>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myorders;