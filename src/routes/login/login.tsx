import React, { useState } from 'react';
import InputBox from "./components/inputLogin.tsx";
import "./login.css"
import {Link, useNavigate} from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (event: React.FormEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    };

    const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(`Username: ${email}, Password: ${password}`);
        navigate('/completeRegistration');
    };

    return (
        <div className="container">
            <div className="login-div">
                <h1>Zaloguj się</h1>
                <form className="input-boxes">
                    <InputBox label="Email" value={email} onChange={handleUsernameChange} pass={false}/>
                    <InputBox label="Hasło" value={password} onChange={handlePasswordChange} pass={true}/>
                    <button className="submit-btn" onClick={handleSubmit}>Zaloguj</button>
                    <p>Nie masz konta? <Link to="/register">Dołącz</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;