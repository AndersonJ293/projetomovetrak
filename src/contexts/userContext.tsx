'use client';
import { createContext, useEffect, useState } from "react";
import api from "@/app/api";
import { useRouter } from 'next/navigation';

export const UserContext = createContext({} as any)

export const UserStorage = ({ children }: any) => {
    const router = useRouter();

    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('token') as string;
        }
        return '';
    });
    const [userId, setUserId] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('movetrakUserId') as string;
        }
        return '';
    });

    const getUser = (userId: string) => {
        api.get(`/users/${userId}`).then(({ data }) => {
            setUser(data)
        }).catch((error) => {
            console.log('Usuario nao autenticado')
        });
    };

    // Aumentar segurança disso
    useEffect(() => {
        if (token) {
            setLogin(true);
            getUser(userId);
        } else {
            console.log("Sem token")
        }

    }, [token]);

    const handleLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('movetrakUserId');
        setLogin(false);
        setUser({});
        router.push('/');
    };

    const handleLogin = async (login: string, password: string) => {
        try {
            const { data } = await api.post('/token', { login, password });
            setLogin(true)
            localStorage.setItem('token', data.token);
            setToken(localStorage.getItem('token') as string)
            localStorage.setItem('movetrakUserId', data.user.id)
            setUserId(localStorage.getItem('movetrakUserId') as string)
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    };

    return (
        <UserContext.Provider value={{
            login,
            user,
            token,
            handleLogOut,
            handleLogin
        }}>
            {children}
        </UserContext.Provider>
    )
};