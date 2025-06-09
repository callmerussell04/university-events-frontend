import { createContext, useContext, useState, useEffect } from 'react';
import AuthApiService from './service/AuthApiService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(AuthApiService.getCurrentUser());

    useEffect(() => {
        const handleStorageChange = () => {
            const updatedUser = AuthApiService.getCurrentUser();
            setUser(updatedUser?.token ? updatedUser : null);
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);