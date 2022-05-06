import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import auth from "../../../../../firebase/firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../../../ui/spinner/Spinner";

const SocialAuth = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleGoogleAuth = () => signInWithGoogle();

    //dynamic user navigation area
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    //navigating user
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, navigate, from]);

    if (loading) {
        return <Spinner height="100px"/>;
    }

    return (
        <div className="text-center sm:text-left">
            <h3 className="text-stone-400 text-xl tex my-4">Or using social accounts</h3>
            <button
                onClick={handleGoogleAuth}
                type="button"
                className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
                <FontAwesomeIcon className="text-lg pr-2" icon={faGoogle} />
                Sign in with Google
            </button>
            {/* {loading && (
                <p className="mt-2 text-sm text-gray-500">
                    <span className="font-medium">Please wait ...</span>
                </p>
            )} */}
            {error && (
                <p className="mt-2 text-sm text-red-500">
                    <span className="font-medium">Error: {error?.code}</span>
                </p>
            )}
        </div>
    );
};

export default SocialAuth;
