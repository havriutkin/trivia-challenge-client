import { useState, useEffect, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import { QuizContext } from "../providers/quizProvider";

import Question from "../components/Question";

function Quiz(){
    const [points, setPoints] = useState(0);
    const [current, setCurrent] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const { quizData, sendQuizResult, resetQuizData, setRightAnswers } = useContext(QuizContext);
    const navigate = useNavigate();    

    useEffect(() => {
        if (!quizFinished) return;
        try {
            setRightAnswers(points);
            sendQuizResult(quizData.difficulty, quizData.questions.length, points, quizData.topic)
            navigate('/results')
        } catch {
            alert('Something went wrong! Sorry :(');
            resetQuizData().then(_ => navigate('/'));
        }
    }, [quizFinished, points, quizData, resetQuizData, sendQuizResult, setRightAnswers, navigate]);

    const handleQuestionSubmit = (answer) => {
        if (answer === quizData.questions[current].correctAnswer) setPoints(prev => prev + 1);
        (current === quizData.questions.length - 1) ? setQuizFinished(true) : setCurrent(prev => prev + 1);
    }

    if (!quizData) return <Navigate to="/generate" />;

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