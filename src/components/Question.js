import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { decodeHTMLEntities } from "../utils/helpers";
import { questionVariants } from "../utils/variants";

import Button from "./Button";
import AnswerButton from "./AnswerButton";

function Question({className, number, question, options, onSubmit}){
    const [activeAnswer, setActiveAnswer] = useState(-1);
    
    const buttonText = useMemo(() => {
        const [current, total] = number.split('/').map(el => Number(el));
        if (current === total) return "FINISH TEST"
        return "NEXT QUESTION";
    }, [number]);

    const handleClick = (event) => {
        setActiveAnswer(prev => Number(event.target.value));
    }

    const handleSubmit = (event) => {
        if (activeAnswer !== -1) {
            setActiveAnswer(prev => -1);
            onSubmit(options[activeAnswer]);
        }
    }

    return(
        <motion.div 
            variants={questionVariants}
            initial="initial"
            animate="final"
            exit="out"
            className={className}>
            <div className="w-full h-full flex flex-col items-center justify-around">
                <h2 className="w-2/3 text-white text-center font-custom-main 
                            text-base md:text-2xl">{decodeHTMLEntities(question)}</h2>
                <div className="w-full
                                grid grid-cols-2 gap-5 place-items-center
                                lg:flex lg:items-center lg:justify-around">
                    {options.map((el, i) => {
                        return <AnswerButton 
                                    className={`w-2/3 text-sm md:text-lg`}
                                    key={i} index={i} text={el} 
                                    isActive={i === activeAnswer} 
                                    onClick={handleClick}/>
                    })}
                </div>
                <div className="w-screen flex flex-col items-center justify-center">
                    <h4 className="font-custom-main text-white text-sm">{number}</h4>
                    <Button className="text-xs md:text-lg" text={buttonText} onClick={handleSubmit}/>
                </div>
            </div>
        </motion.div>
    )
}

export default Question;