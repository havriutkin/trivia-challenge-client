import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import validate from "validate.js"

import { pageVariants } from "../utils/variants";
import { logInFormConstaints } from "../utils/validation.config";
import { login } from "../services/authService";

import InputField from "../components/InputField";
import Button from "../components/Button";
import { AuthContext } from "../providers/authProvider";

function Login(){
    const {checkLoginStatus} = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })
    const [warnings, setWarnings] = useState({
        username: '',
        password: '',
    })

    const handleChange = (fieldName, value) => {
        setFormData(prev => {
            return {
                ...prev,
                [fieldName]: value
            }
        });
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = validate(formData, logInFormConstaints);
        if (errors){
            setWarnings(prev => {
            return {
                username: (errors.username ? errors.username : ''),
                password: (errors.password ? errors.password : ''),
            }}) 
        } else {
            // Make API call
            try {
                await login(formData);
                await checkLoginStatus();
                navigate('/');
            } catch(err) {
                setFormData({
                    username: '',
                    password: ''
                });
                setWarnings({
                    username: '',
                    password: ''
                })
                alert(err.message);
            }
        }
    }

    return (
        <motion.div 
            variants={pageVariants}
            initial="initial"
            animate="final"
            exit="out"
            className="w-screen h-screen flex flex-col justify-around items-center">
            <div className="h-2/3 w-1/2 flex flex-col items-center justify-around border p-10">
                <h1 className="font-custom-main text-2xl md:text-4xl text-white">LOG IN</h1>
                <form className="h-full flex flex-col items-center justify-around">
                    <InputField fieldName="username" fieldPlaceholder="Others will see it!"
                                fieldValue={formData.username} 
                                fieldWarning={warnings.username}
                                onChange={e => handleChange('username', e.target.value)}/>
                    <InputField fieldName="password" fieldPlaceholder="At lest 8 characters"
                                fieldValue={formData.password}
                                fieldWarning={warnings.password}
                                onChange={e => handleChange('password', e.target.value)}/>
                    <Button className="w-full text-sm md:text-lg" text="LOGIN" onClick={handleSubmit}/>
                </form>
            </div>
        </motion.div>
    )
}

export default Login;