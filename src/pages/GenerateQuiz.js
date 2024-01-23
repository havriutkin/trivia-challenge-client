import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { requestQuestions } from '../services/interactionAPI';
import { pageVariants } from "../utils/variants";

import Button from "../components/Button";
import CardForm from "../components/CardForm";

import { numberOptions, difficulties, categories } from "../utils/options";


function GenerateQuiz(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        numberOfQuestions: 10,
        topic: 'General Knowledge',
        difficulty: 'easy'
    });

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
        const data = await requestQuestions(formData.numberOfQuestions, formData.topic, formData.difficulty);
        if (data.length > 0) {
            navigate('/quiz', { state: {
                questions: data,
                topic: formData.topic,
                difficulty: formData.difficulty
            }});
        } else {
            alert('Error occured! Try choosing different options.');
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
            <h1 className="mt-10 text-7xl hollow-text-white">SET UP QUIZ</h1>
            <div className="w-full h-1/2 flex justify-around items-center">
                <CardForm className="w-1/6 h-2/3" formName="Number Of Questions" 
                        options={numberOptions} onChange={handleAmountChange}/>
                <CardForm className="w-1/6 h-2/3" formName="Category" 
                        options={categories} onChange={handleCategoryChange}/>
                <CardForm className="w-1/6 h-2/3" formName="Difficulty" 
                        options={difficulties} onChange={handleDifficultyChange}/>
            </div>
            <Button className="mb-20" text="START QUIZ" onClick={handleClick}/>
        </motion.div>
    );
}

export default GenerateQuiz;