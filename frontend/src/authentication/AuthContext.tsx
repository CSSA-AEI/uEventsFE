import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
    isLoggedIn: boolean;
    userRole: 'guest' | 'authenticated' | null;
    login: (role: 'guest' | 'authenticated') => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState<'guest' | 'authenticated' | null>(null); //allowing for the user to skip being logged in

    const login = (role: 'guest' | 'authenticated') => {
        setIsLoggedIn(true);
        setUserRole(role);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserRole(null);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
