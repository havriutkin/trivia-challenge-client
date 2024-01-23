import { Link } from "react-router-dom";
import { AuthContext } from "../providers/authProvider";
import { useContext } from "react";

function Header(){
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <div className="w-screen h-10 mt-0 p-5 bg-main-purple
                        flex items-center justify-between
                      text-white text-center
                        border-b ">
            <h3 className="font-custom-main w-max text-lg">Trivia Challenge</h3>
            <nav className="w-1/3 inline-flex items-center justify-around
                        font-custom-main text-sm">
                <Link className="transition-colors duration-200 hover:text-gray-400" to="/">Home</Link>
                {
                isLoggedIn ?
                    <Link className="transition-colors duration-200 hover:text-gray-400" to='/profile'>Porfile</Link>
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