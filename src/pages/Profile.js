import { motion } from "framer-motion"
import { useContext } from "react"
import { AuthContext } from "../providers/authProvider"
import { useNavigate } from "react-router-dom";

import { pageVariants } from "../utils/variants";

import Button from "../components/Button";
import UserStatistics from "../components/UserStatistics";

function Profile(){
    const navigate = useNavigate();
    const { userData, logoutUser } = useContext(AuthContext);

    const handleLogOutClick = async () => {
        await logoutUser();
        navigate('/');
    }

    return(
        <motion.div 
            variants={pageVariants}
            initial="initial"
            animate="final"
            exit="out"
            className="w-screen h-screen flex flex-col justify-around items-center">
            <div className="h-2/3 border p-5 flex flex-col justify-around items-center">
                <div className="flex justify-between items-center">
                    <div className="w-full h-full m-3 flex flex-col items-start justify-around text-white">
                        <h1 className="font-custom-main text-3xl md:text-4xl">{userData?.username}</h1>
                        <p className="font-custom-main text-base md:text-lg">Member since: {userData?.joinDate ? userData?.joinDate.slice(0, 10) : ''}</p>
                        <UserStatistics userId={userData?.id} className="w-full mt-3 h-min text-left"/>
                    </div>
                </div>
                <Button text="Log out" onClick={handleLogOutClick}/>
            </div>
        </motion.div>
    )
}

export default Profile