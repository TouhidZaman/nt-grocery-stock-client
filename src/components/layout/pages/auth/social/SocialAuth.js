import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import auth from "../../../../../firebase/firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const SocialAuth = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const handleGoogleAuth = () => signInWithGoogle();

    if (user) {
        navigate("/");
    }
    return (
        <div>
            <h3 className="text-stone-400 text-xl tex my-4">Or using social accounts</h3>
            <button
                onClick={handleGoogleAuth}
                type="button"
                className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
                <FontAwesomeIcon className="text-lg pr-2" icon={faGoogle} />
                Sign in with Google
            </button>
            {error && (
                <p className="mt-2 text-sm text-red-500">
                    <span className="font-medium">{error?.message}</span>
                </p>
            )}
        </div>
    );
};

export default SocialAuth;
