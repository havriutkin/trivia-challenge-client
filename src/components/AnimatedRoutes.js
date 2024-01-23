import { useLocation, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion";

import Home from '../pages/Home';
import GenerateQuiz from '../pages/GenerateQuiz';
import Quiz from '../pages/Quiz';
import QuizResult from '../pages/QuizResult';
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

function AnimatedRoutes(){
    const location = useLocation();
    
    return (
        <AnimatePresence>
            <Routes location={location} key={location.key}>
                <Route path='/' element={<Home/>}/>
                <Route path='/generate' element={<GenerateQuiz/>}/>
                <Route path='/quiz' element={<Quiz/>}/>
                <Route path='/results' element={<QuizResult/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/auth/register' element={<Registration/>}/>
                <Route path='/auth/login' element={<Login/>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;