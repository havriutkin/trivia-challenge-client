import { createContext, useState, useEffect } from "react";
import { logout, validateAuth } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({});

    const checkLoginStatus = async () => {
        try {
            const [valid, data] = await validateAuth();
            setIsLoggedIn(prev => valid);
            if (valid){
                setUserData(prev => data);
            } else {
                setUserData(prev => {});
            }
        } catch(err) {
            
        }
    }

    const logoutUser = async () => {
        const success = await logout();
        if (success) {
            setIsLoggedIn(prev => false);
            setUserData(prev => {});
        }
    }

    useEffect(() => {
        const check = async () => await checkLoginStatus();
        check();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, userData, checkLoginStatus, logoutUser }}>
            {children}
        </AuthContext.Provider>
    )
}
