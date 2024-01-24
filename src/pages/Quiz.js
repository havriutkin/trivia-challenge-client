import { useState, useEffect, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { motion } from "framer-motion";

import { QuizContext } from "../providers/quizProvider";
import { postQuizResult } from "../services/interactionAPI";

import { feedbackVariants } from "../utils/variants";

import Question from "../components/Question";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";

function Quiz(){
    // eslint-disable-next-line
    const [points, setPoints] = useState(0);
    const [current, setCurrent] = useState(0);
    const [answerFeedback, setAnswerFeedback] = useState(null);
    const [quizFinished, setQuizFinished] = useState(false);
    const { quizData, setRightAnswers } = useContext(QuizContext);
    const navigate = useNavigate();    

    useEffect(() => {
        const sendQuiz = async () => {
            if (!quizFinished) return;    
            try {
                await postQuizResult(quizData.difficulty, quizData.questions.length, points, quizData.topic);
                setRightAnswers(points);
                navigate('/results');
            } catch(err) {
                alert('Sever error occured when trying to save your result :(');
                navigate('/');
            }
        }
        sendQuiz();
    }, [quizFinished, points, quizData, setRightAnswers, navigate])

    const handleQuestionSubmit = async (answer) => {
        let isCorrect = (answer === quizData.questions[current].correctAnswer)
        if (isCorrect) setPoints(prev => prev + 1);  

        setAnswerFeedback(isCorrect ? 'correct' : 'incorrect');
        setTimeout(() => {
            (current === quizData.questions.length - 1) ? setQuizFinished(true) : setCurrent(prev => prev + 1);
            setAnswerFeedback(null);  
        }, 1000);
    }

    if (!quizData) return <Navigate to="/generate" />;

    if (answerFeedback) return (
        <motion.div
            variants={feedbackVariants}
            initial="hidden"
            animate="visible" 
            exit="hidden"
            className="w-screen h-screen flex flex-col justify-around items-center">
            {answerFeedback === 'correct' ? 
                <IoCheckmarkCircle className="text-green-600 text-3xl"/> :
                <RxCrossCircled className="text-red-600 text-3xl"/>}
        </motion.div>
    );

    return (
        <div className="w-screen h-screen flex flex-col justify-around items-center">
            <Question className="w-screen h-screen"
                    number={`${current+1}/${quizData.questions?.length}`}
                    question={quizData.questions[current]?.question}
                    options={quizData.questions[current]?.options}
                    onSubmit={handleQuestionSubmit}/>
        </div>
    );
}

export default Quiz;