import {FormEvent, useState} from "react";

export interface Props {
    onLogin: (username: string, password: string) => void
}

export default function UnauthorizedApp({onLogin}: Props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function submitForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onLogin(username, password);
        setPassword('');
    }

    return (
        <div className="log-form">
            <h2>Sign In</h2>
            <form onSubmit={e => submitForm(e)}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn btn-block">Login</button>
            </form>
        </div>
    )
}
