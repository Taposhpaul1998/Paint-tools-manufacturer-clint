import React from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebaseinit';
import Footer from '../../Shear/Footer/Footer';
import Loading from '../../Shear/Loading/Loading';
import Socile from '../Socile/Socile';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const { register, handleSubmit } = useForm();

    let errorElement;
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement = <p className="text-red-600">Error:{error?.message}</p>
    }

    const onSubmit = async (data) => {
        const email = data.email;
        const password = data.password;

        await signInWithEmailAndPassword(email, password);
    }
    const resetPassword = async (data) => {
        const email = data.email;
        await sendPasswordResetEmail(email);
        toast('Sent email');
    }

    return (
        <>
            <div className="flex h-screen justify-center items-center bg-hero-pattern bg-teal-600">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-xl font-semibold  text-center">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder=" Email" class="input input-bordered w-full max-w-xs" required {...register("email")} />
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" required {...register("password")} />
                            {errorElement}
                            <p className='mt-2'>Forgotten password? <span onClick={resetPassword} className='text-primary user-select-none'>Reset password</span></p>

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