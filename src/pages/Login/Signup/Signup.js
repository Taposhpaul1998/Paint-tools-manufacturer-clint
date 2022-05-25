import React from 'react';
import Footer from '../../Shear/Footer/Footer';
import Socile from '../Socile/Socile';

const Signup = () => {
    return (
        <>
            <div className="flex h-screen justify-center items-center bg-hero-pattern bg-teal-600">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-xl font-semibold  text-center">Sign Up</h2>
                        <form>
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="name" placeholder=" Name" class="input input-bordered w-full max-w-xs" required />
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder=" Email" class="input input-bordered w-full max-w-xs" required />
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" required />

                            <input type="submit" value={"Login"} class="btn btn-accent w-full max-w-xs text-lg font-normal mt-3" />
                        </form>
                        <Socile></Socile>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Signup;