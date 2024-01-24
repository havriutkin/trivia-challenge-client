import { motion } from 'framer-motion' 
import { useNavigate } from 'react-router-dom';

import Button from "../components/Button";
import { pageVariants } from '../utils/variants';

function Home(){
    const navigate = useNavigate();

    // Define unique animations for each image
    const floating1 = { y: ["30%", "0%"], x: ["20%", "0%"] };
    const floating2 = { y: ["20%", "0%"], x: ["-30%", "0%"] };
    const floating3 = { y: ["-20%", "0%"], x: ["30%", "0%"] };
    const floating4 = { y: ["25%", "0%"], x: ["-25%", "0%"] };

    const transition = {
        duration: 3, // Adjust this as needed
        ease: "easeInOut",
    };

    const handleClick = (event) => {
        navigate('/generate');
    }

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="final"
            exit="out"
            className="w-screen h-screen flex flex-col justify-center items-center">
            {/* Background images */}
            <motion.img src="./shapes/Asterik.webp" alt="background shape" 
                className="absolute top-20 right-20 w-1/4 h-auto z-0"
                animate={floating1} transition={transition}/>
            <motion.img src="./shapes/Cube.webp" alt="background shape" 
                className="absolute top-10 left-20 w-1/6 h-auto z-0"
                animate={floating4} transition={transition}/>
            <motion.img src="./shapes/HexaSphere.webp" alt="background shape" 
                className="absolute bottom-20 right-20 w-1/6 h-auto z-0"
                animate={floating3} transition={transition}/>
            <motion.img src="./shapes/Ring.webp" alt="background shape" 
                className="absolute bottom-20 left-10 w-1/6 h-auto z-0"
                animate={floating2} transition={transition}/>


            <div className="flex flex-col text-center font-custom-main z-10">
                <h1 className="text-7xl hollow-text-white">TEST YOUR KNOWLEDGE</h1>
                <h3 className="text-3xl text-dark-pink">GENERATE AND COMPLETE QUIZZES</h3>
            </div>
            <Button className="mt-20 z-10" text="GENERATE QUIZ" onClick={handleClick}/>
        </motion.div>
    );
}

export default Home;