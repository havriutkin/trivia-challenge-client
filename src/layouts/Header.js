import { Link } from "react-router-dom";
import { AuthContext } from "../providers/authProvider";
import { useContext } from "react";

function Header(){
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <div className="w-screen h-10 mt-0 p-5 bg-main-purple
                        flex items-center justify-between
                        text-white text-center
                        border-b 
                        ">
            <h3 className="font-custom-main 
                        w-1/3 text-sm 
                        md:w-1/3 md:text-xl lg:text-2xl">
                Trivia Challenge
            </h3>
            <nav className="w-1/2 inline-flex items-center justify-around
                        font-custom-main text-xs
                        md:text-lg">
                <Link className="transition-colors duration-200 hover:text-gray-400" to="/">Home</Link>
                {
                isLoggedIn ?
                    <Link className="transition-colors duration-200 hover:text-gray-400" to='/profile'>Profile</Link>
                    :
                    <>
                        <Link className="transition-colors duration-200 hover:text-gray-400" to='/auth/register'>Sign In</Link>
                        <Link className="transition-colors duration-200 hover:text-gray-400" to='/auth/login'>Log In</Link>
                    </> 
                }
            </nav>
        </div>
    );
}

export default Header;