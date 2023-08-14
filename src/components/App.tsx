import "../styles.css"
import UnauthorizedApp from "./UnauthorizedApp.tsx";
import AuthorisedApp from "./AuthorisedApp.tsx";
import {createContext, useEffect, useState} from "react";


export const AuthContext = createContext<User | null>(null);

export interface User {
    token?: string | null,
    username?: string,
}

export default function App() {

    const [user, setUser] = useState<User | null>(() => {
        const userAuthorised = localStorage.getItem("_auth");
        return userAuthorised ? JSON.parse(userAuthorised) : null;
    });
    useEffect(() => {
        localStorage.setItem("_auth", JSON.stringify(user))
    }, [user])
    const fakeAuth = (username: string, password: string) =>
        new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                (username === 'admin' && password === 'sakartvelo') ?
                    resolve('2342f2f1d131rf12') :
                    reject('Credentials Incorrect')
            }, 250);
        });
    const handleLogin = async (username: string, password: string) => {
        try {
            const token = await fakeAuth(username, password);
            setUser({username, token});
        } catch (error) {
            alert(error);
        }
    };

    const handleLogout = () => {
        setUser(null)
    }
    return (
        <AuthContext.Provider value={user}>
            {user ?
                <AuthorisedApp logOut={handleLogout}></AuthorisedApp> :
                <UnauthorizedApp onLogin={handleLogin}></UnauthorizedApp>
            }
        </AuthContext.Provider>

    )
}
