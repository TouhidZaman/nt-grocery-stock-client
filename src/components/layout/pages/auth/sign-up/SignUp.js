import React, { useEffect } from "react";
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../../firebase/firebase.init";
import Loading from "../../../../ui/loading/Loading";
import SocialAuth from "../social/SocialAuth";

const SignUp = () => {
    //to create new user
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    //to update user info
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    if(loading || updating) {
        return <Loading />
    }

    const onSubmit = async (data) => {
        const { name, email, password } = data;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        toast("A verification email has sent!");
    };

    return (
        <div className="bg-gray-900 py-8">
            <div className="shadow rounded-xl w-5/6 md:w-2/3 lg:w-2/5 mx-auto bg-gradient-to-r  p-6 sm:p-10 bg-gray-800">
                <h3 className="text-center sm:text-left  text-stone-400 text-2xl tex mb-8">
                    Sign Up Form
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                            type="text"
                            name="floating_name"
                            {...register("name", { required: "Name* is mandatory" })}
                            placeholder=" "
                        />
                        <label
                            htmlFor="floating_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Full name
                        </label>
                        {errors.name && (
                            <p className="mt-2 text-sm text-red-500">
                                <span className="font-medium">
                                    {errors.name?.message}
                                </span>
                            </p>
                        )}
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                            type="email"
                            name="floating_email"
                            {...register("email", { required: "Email* is mandatory" })}
                            placeholder=" "
                        />
                        <label
                            htmlFor="floating_email"
                            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Email address
                        </label>
                        {errors.email && (
                            <p className="mt-2 text-sm text-red-500">
                                <span className="font-medium">
                                    {errors.email?.message}
                                </span>
                            </p>
                        )}
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                            name="floating_password"
                            id="floating_password"
                            type="password"
                            {...register("password", {
                                required: "Password* is mandatory",
                            })}
                            placeholder=" "
                        />
                        <label
                            htmlFor="floating_password"
                            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Password
                        </label>
                        {errors.password && (
                            <p className="mt-2 text-sm text-red-500">
                                <span className="font-medium">
                                    {errors.password?.message}
                                </span>
                            </p>
                        )}
                    </div>
                    <div className="flex items-start mb-4">
                        <div className="flex items-center h-5">
                            <input
                                id="remember"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                            />
                        </div>
                        <label
                            htmlFor="remember"
                            className="ml-2 text-sm font-medium text-gray-300"
                        >
                            Accept terms and conditions ?
                        </label>
                    </div>
                    {/* {(loading || updating) && (
                        <p className="my-2 text-sm text-gray-500">
                            <span className="font-medium">Please wait ...</span>
                        </p>
                    )} */}
                    {(error || updateError) && (
                        <p className="my-2 text-sm text-red-500">
                            <span className="font-medium">Error: {error?.code || updateError?.code}</span>
                        </p>
                    )}
                    <div className="text-center sm:text-left">
                        <button
                            type="submit"
                            className="mt-2 py-2.5 px-10 mr-2 mb-2 text-sm font-medium focus:outline-none rounded-full border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-400 border-gray-600 hover:text-white"
                        >
                            Sign Up
                        </button>
                    </div>
                    <p className="text-center sm:text-left my-2 text-sm text-gray-400">
                        Already have an account ?
                        <Link className="px-2 font-medium text-blue-500" to={"/login"}>
                            please login
                        </Link>
                    </p>
                </form>
                <SocialAuth />
            </div>
        </div>
    );
};

export default SignUp;
