import { useState, useMemo, useEffect } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";


import Question from "../components/Question";
import { shuffleArray } from "../utils/helpers";
import { postQuiz } from "../services/interactionAPI";


function Quiz(){
    const [points, setPoints] = useState(0);
    const [current, setCurrent] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const location = useLocation();

    const navigate = useNavigate();    
    const data = location.state?.questions;
    const questions = useMemo(() => {
        if (!data) return [];
        const array = data.map(el => {
            return {
                question: el.question,
                correctAnswer: el.correct_answer,
                options: [...el.incorrect_answers, el.correct_answer],
            }
        });
        return shuffleArray(array);
    }, [data]);

    useEffect(() => {
        if (quizFinished){
            const data = {
                difficulty: location.state?.difficulty, 
                questionsTotal: questions.length, 
                rightAnswers: points, 
                topic: location.state?.topic
            }
            try {
                postQuiz(data).then(_ => navigate('/results', {
                    state: {points: points, 
                            total: questions.length, 
                            msg: 'Your result is saved!'}
                }))
            } catch {
                navigate('/results', {
                    state: {points: points, 
                            total: questions.length,
                            msg: 'Your result was not save due to server error'}});
            }
        }
    }, [quizFinished, points, questions, location.state, navigate]);

    const handleQuestionSubmit = (answer) => {
        if (answer === questions[current].correctAnswer) setPoints(prev => prev + 1);
        (current === questions.length - 1) ? setQuizFinished(true) : setCurrent(prev => prev + 1);
    }

    if (!data) return <Navigate to="/generate" />;

    return (
        <div className="w-screen h-screen flex flex-col justify-around items-center">
            <Question className="w-screen h-screen"
                    number={`${current+1}/${questions?.length}`}
                    question={questions[current]?.question}
                    options={questions[current]?.options}
                    onSubmit={handleQuestionSubmit}/>
        </div>
    );
}

export default Quiz;