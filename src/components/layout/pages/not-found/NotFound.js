import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex py-8">
            <div className="shadow rounded-xl w-5/6 md:w-2/3 lg:w-2/5 mx-auto bg-gradient-to-r  p-6 sm:p-10 bg-gray-800">
                <div className="text-center">
                    <h1 className="text-stone-400 text-4xl sm:text-8xl">404</h1>
                    <h3 className="text-stone-400">Ops ! Page Not Found</h3>
                    <p className="text-stone-500 my-3">
                        Sorry, the page your are looking for doesn't exist. if you think
                        something is brocken, report a problem
                    </p>
                    <button
                        onClick={()=> navigate("/")}
                        className="mt-2 py-2.5 px-10 sm:px-8 sm:mr-2 mb-2 text-sm font-medium focus:outline-none rounded-full border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-400 border-gray-600 hover:text-white"
                    >
                        Return home
                    </button>
                    <button
                        className="mt-2 py-2.5 px-10 sm:px-8 sm:ml-2 mb-2 text-sm font-medium focus:outline-none rounded-full border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-400 border-gray-600 hover:text-white"
                    >
                        Report a problem
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
