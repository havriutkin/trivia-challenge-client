import { motion } from "framer-motion"
import { useContext } from "react"
import { AuthContext } from "../providers/authProvider"
import { useNavigate } from "react-router-dom";

import { pageVariants } from "../utils/variants";
import Button from "../components/Button";
import UserStatistics from "../components/UserStatistics";

const emptyProfileUrl = '/img/blank-profile-img.webp';

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
            <div className="h-2/3 border p-5 flex flex-col justify-between items-center">
                <div className="flex justify-between items-center">
                    <div className="w-1/3">
                        <img src={userData?.profileImg ? userData.profileImg : emptyProfileUrl} alt="Profile"
                            className="mb-3"/>
                        <Button text="Add profile image"/>
                    </div>
                    <div className="w-full h-full m-3 flex flex-col items-center justify-around text-white">
                        <h1 className="font-custom-main text-3xl">{userData?.username}</h1>
                        <p className="font-custom-main">Member since: {userData?.joinDate ? userData?.joinDate.slice(0, 10) : ''}</p>
                        <UserStatistics userId={userData?.id} className="w-full h-1/3 text-center"/>
                    </div>
                </div>
                <Button text="Log out" onClick={handleLogOutClick}/>
            </div>
        </motion.div>
    )
}

export default Profile