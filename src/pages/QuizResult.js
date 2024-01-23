import { useNavigate, Navigate } from "react-router-dom";
import { motion } from "framer-motion";

import { pageVariants } from "../utils/variants";

import Button from "../components/Button";
import { useContext, useMemo } from "react";
import { AuthContext } from "../providers/authProvider";
import { QuizContext } from "../providers/quizProvider";

function QuizResult(){
    const navigate = useNavigate();
    const { userData } = useContext(AuthContext);
    const { quizData } = useContext(QuizContext);
    const savedMsg = useMemo(() => {
        return quizData.isSaved ? 'Your result was saved!' : 'Your result was not save due to server error :(';
    }, [quizData])

    const handleHomeButtonClick = () => {
        navigate('/');
    }

    const handleSaveClick = () => {
        navigate('/auth/register');
    }

    if (!quizData) return <Navigate to="/"/>;

    return (
        <motion.div 
            variants={pageVariants}
            initial="initial"
            animate="final"
            exit="out"
            className="w-screen h-screen flex flex-col justify-around items-center">
            <h1 className="font-custom-main text-5xl hollow-text-white">RESULTS</h1>
            <h2 className="font-custom-main text-white text-3xl">
                {quizData?.rightAnswers} out of {quizData?.questions.length}
            </h2>
            <div className="mt-10 w-full flex flex-col items-center justify-around">
                {
                    userData ? 
                        <p className="font-custom-main text-white text-xl">{savedMsg}</p> : 
                        <Button text="SAVE RESULT" onClick={handleSaveClick}/>
                }
                <Button className="mt-5" text="RETURN TO HOME PAGE" onClick={handleHomeButtonClick}/>
            </div>
        </motion.div>
    )
}

export default QuizResult;