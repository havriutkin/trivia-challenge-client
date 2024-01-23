import { createContext, useState } from "react";
import { requestQuiz, postQuizResult } from "../services/interactionAPI";
import { shuffleArray } from "../utils/helpers";

export const QuizContext = createContext();

export function QuizProvider({ children }){
    const [quizData, setQuizData] = useState({ isSaved: false, rightAnswers: 0 });

    const resetQuizData = async () => {
        setQuizData({ isSaved: false, rightAnswers: 0 });
    }

    const setRightAnswers = async (rightAnswers) => {
        setQuizData(prev => {
            return {...prev, rightAnswers: rightAnswers};
        })
    }

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

    const sendQuizResult = async (difficulty, questionsTotal, rightAnswers, topic) => {
        try {
            await postQuizResult(difficulty, questionsTotal, rightAnswers, topic);
            setQuizData(prev => {
                return {...prev, isSaved: true}
            });
        } catch {
            throw new Error('Error occured while posting quiz result.')
        }
    }

    return (
        <QuizContext.Provider value={{ quizData, resetQuizData, getQuiz, sendQuizResult, setRightAnswers }}>
            {children}
        </QuizContext.Provider>
    )
}