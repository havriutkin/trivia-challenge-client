import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { motion } from "framer-motion";

import { pageVariants } from "../utils/variants";

import Button from "../components/Button";
import { useContext } from "react";
import { AuthContext } from "../providers/authProvider";

function QuizResult(){
    const navigate = useNavigate();
    const location = useLocation();
    const { userData } = useContext(AuthContext);

    const handleHomeButtonClick = () => {
        navigate('/');
    }

    const handleSaveClick = () => {
        navigate('/auth/register');
    }

    if (!location.state) return <Navigate to="/"/>;

    return (
        <motion.div 
            variants={pageVariants}
            initial="initial"
            animate="final"
            exit="out"
            className="w-screen h-screen flex flex-col justify-around items-center">
            <h1 className="font-custom-main text-5xl hollow-text-white">RESULTS</h1>
            <h2 className="font-custom-main text-white text-3xl">
                {location.state?.points} out of {location.state?.total}
            </h2>
            <div className="mt-10 w-full flex flex-col items-center justify-around">
                {
                    userData ? 
                        <p className="font-custom-main text-white text-xl">{location.state?.msg}</p> : 
                        <Button text="SAVE RESULT" onClick={handleSaveClick}/>
                }
                <Button className="mt-5" text="RETURN TO HOME PAGE" onClick={handleHomeButtonClick}/>
            </div>
        </motion.div>
    )
}

export default QuizResult;