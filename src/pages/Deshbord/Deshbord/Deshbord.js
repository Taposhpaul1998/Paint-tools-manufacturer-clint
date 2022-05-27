import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Deshbord = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <Outlet></Outlet>
            </div>
            <div class="drawer-side ">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-78 bg-teal-800 text-white">
                    <li><Link to="/deshbord/myorders">My Orders</Link></li>
                    <li><Link to="/deshbord/review">Add A Review</Link></li>
                    <li><Link to="/deshbord/profile">My Profile</Link></li>
                    <li><Link to="/deshbord/allorders">Manage All Orders</Link></li>
                    <li><Link to="/deshbord/addProduct">Add A Product</Link></li>
                    <li><Link to="/deshbord/admin">Make Admin</Link></li>
                    <li><Link to="/deshbord/manafeProducts">Manage Products</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Deshbord;