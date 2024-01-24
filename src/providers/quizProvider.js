import { createContext, useState } from "react";
import { requestQuiz } from "../services/interactionAPI";
import { shuffleArray } from "../utils/helpers";

export const QuizContext = createContext();

export function QuizProvider({ children }){
    const [quizData, setQuizData] = useState({});
    const [rightAnswers, setRightAnswers] = useState(0)

    const getQuiz = async (numberOfQuestions, topic, difficulty) => {
        try {
            const response = await requestQuiz(numberOfQuestions, topic, difficulty);
            if (response.length > 0){
                const questions = response.map(el => {
                    return {
                        question: el.question,
                        correctAnswer: el.correct_answer,
                        options: shuffleArray([...el.incorrect_answers, el.correct_answer]),
                    }
                });
                const data = {
                    questions: questions,
                    difficulty: difficulty,
                    topic: topic,
                    isSaved: false
                }
                setQuizData(data);
            }
            else throw new Error('Bad request.');
        } catch {
            throw new Error('Error occured while requesting quiz.');
        }
    }

    return (
        <QuizContext.Provider value={{ quizData, setQuizData, rightAnswers, setRightAnswers, getQuiz }}>
            {children}
        </QuizContext.Provider>
    )
}