import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { pageVariants } from "../utils/variants";

import { numberOptions, difficulties, categories } from "../utils/options";

import Button from "../components/Button";
import CardForm from "../components/CardForm";
import { QuizContext } from "../providers/quizProvider";


function GenerateQuiz(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        numberOfQuestions: 10,
        topic: 'General Knowledge',
        difficulty: 'easy'
    });
    const { getQuiz } = useContext(QuizContext);
    
    const handleDifficultyChange = (event) => {
        const newDifficulty = event.target.value.toLowerCase();
        setFormData(prev => {
            return {
                ...prev,
                difficulty: newDifficulty
            }
        });
    }

    const handleCategoryChange = (event) => {
        setFormData(prev => {
            return {
                ...prev,
                topic: event.target.value
            }
        });
    }

    const handleAmountChange = (event) => {
        setFormData(prev => {
            return {
                ...prev,
                numberOfQuestions: event.target.value
            }
        })
    }

    const handleClick = async () => {
        try {
            await getQuiz(formData.numberOfQuestions, formData.topic, formData.difficulty);
            navigate('/quiz');
        } catch {
            alert('Error occured. Try different settings!');
        }
    }

    return(
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="final"
            exit="out"
            transition={{duration: 1}}
            className="w-screen h-screen flex flex-col justify-between items-center">
            <h1 className="mt-10 text-3xl md:text-6xl hollow-text-white">SET UP QUIZ</h1>
            <div className="w-full h-1/2 flex flex-col lg:flex-row justify-around items-center">
                <CardForm className="w-1/2 lg:w-1/6 h-full lg:h-1/2 m-3" formName="Number Of Questions" 
                        options={numberOptions} onChange={handleAmountChange}/>
                <CardForm className="w-1/2 lg:w-1/6 h-full lg:h-1/2 m-3" formName="Category" 
                        options={categories} onChange={handleCategoryChange}/>
                <CardForm className="w-1/2 lg:w-1/6 h-full lg:h-1/2 m-3" formName="Difficulty" 
                        options={difficulties} onChange={handleDifficultyChange}/>
            </div>
            <Button className="mb-20 md:text-xl" text="START QUIZ" onClick={handleClick}/>
        </motion.div>
    );
}

export default GenerateQuiz;