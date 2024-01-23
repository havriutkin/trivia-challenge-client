import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import validate from "validate.js"

import Button from "../components/Button"
import InputField from "../components/InputField"

import { signInFormConstraints } from "../utils/validation.config"
import { createAccount } from "../services/interactionAPI"
import { pageVariants } from "../utils/variants"

function Registration(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: ''
    })
    const [warnings, setWarnings] = useState({
        username: '',
        password: '',
        email: ''
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
        const errors = validate(formData, signInFormConstraints);
        if (errors){
            setWarnings(prev => {
            return {
                username: (errors.username ? errors.username : ''),
                password: (errors.password ? errors.password : ''),
                email: (errors.email ? errors.email : ''),
            }}) 
        } else {
            // Make API call
            try {
                await createAccount(formData);
                alert('Accout created!');
                navigate('/auth/login');
            } catch(err){
                alert('err.message');
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
            <div className="h-2/3 flex flex-col items-center justify-around border p-10">
                <h1 className="font-custom-main text-3xl text-white">CREATE ACCOUNT</h1>
                <form className="h-full flex flex-col items-center justify-around">
                    <InputField fieldName="username" fieldPlaceholder="Others will see it!"
                                fieldValue={formData.username} 
                                fieldWarning={warnings.username}
                                onChange={e => handleChange('username', e.target.value)}/>
                    <InputField fieldName="password" fieldPlaceholder="At lest 8 characters"
                                fieldValue={formData.password}
                                fieldWarning={warnings.password}
                                onChange={e => handleChange('password', e.target.value)}/>
                    <InputField fieldName="email" fieldPlaceholder="Your email"
                                fieldValue={formData.email}
                                fieldWarning={warnings.email}
                                onChange={e => handleChange('email', e.target.value)}/>
                    <Button className="w-full" text="CREATE" onClick={handleSubmit}/>
                </form>
            </div>
        </motion.div>
    )
}

export default Registration