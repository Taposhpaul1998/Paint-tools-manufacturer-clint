import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shear/Footer/Footer';
import Socile from '../Socile/Socile';

const Login = () => {


    return (
        <>
            <div className="flex h-screen justify-center items-center bg-hero-pattern bg-teal-600">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-xl font-semibold  text-center">Login</h2>
                        <form>
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder=" Email" class="input input-bordered w-full max-w-xs" required />
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" required />

                            <p className='mt-2'><a className='text-primary'>Forgate password</a></p>

                            <input type="submit" value={"Login"} class="btn btn-accent w-full max-w-xs text-lg font-normal mt-3" />
                        </form>
                        <div className='mt-3'>
                            <p>New to Doctors Portal? <Link className='text-primary' to='/signup'>Create new account</Link></p>
                        </div>
                        <Socile></Socile>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;