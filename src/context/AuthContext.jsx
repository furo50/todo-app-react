import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // beim start token aus localstorage laden
    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        const savedUsername = localStorage.getItem('username');

        if (savedToken && savedUsername) {
            setToken(savedToken);
            setUser(savedUsername);
        }
        setIsLoading(false);
    }, []);

    // login
    const login = (token, username) => {
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        setToken(token);
        setUser(username);
    };

    // logout
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setToken(null);
        setUser(null);
    }

    return (
    <AuthContext.Provider value={{ user, token, login, logout, isLoading }}>
        {children}
    </AuthContext.Provider>
    );
}