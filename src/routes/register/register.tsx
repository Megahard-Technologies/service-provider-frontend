import React, {useState} from 'react';
import InputBox from "./components/inputRegister.tsx";
import './register.css';
import BigInput from "./components/bigInputRegister.tsx";
import {useNavigate} from "react-router-dom";

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(`Name: ${name}, Email: ${email}, Password: ${password}, Repeat Password: ${repeatPassword}, Description: ${description}, Address: ${address}, Phone: ${phone}`);
        navigate('/login');
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h1>Zarejestruj</h1>
                <form className="input-boxes">
                    <div className="left-input-boxes">
                        <InputBox value={name} onChange={(event) => setName(event.currentTarget.value)} label="Nazwa usługodawcy"/>
                        <InputBox value={password} onChange={(event) => setPassword(event.currentTarget.value)}
                                  label="Hasło"/>
                        <BigInput value={description} onChange={(event) => setDescription(event.currentTarget.value)}
                                  label="Opis usług"/>
                    </div>
                    <div className="right-input-boxes">
                        <InputBox value={email} onChange={(event) => setEmail(event.currentTarget.value)}
                                  label="Email"/>
                        <InputBox value={repeatPassword}
                                  onChange={(event) => setRepeatPassword(event.currentTarget.value)}
                                  label="Powtórz hasło"/>
                        <InputBox value={address} onChange={(event) => setAddress(event.currentTarget.value)}
                                  label="Adres"/>
                        <InputBox value={phone} onChange={(event) => setPhone(event.currentTarget.value)}
                                  label="Nr telefonu"/>
                        <div className="register-submit-button-div">
                            <button className="register-submit-btn" type="submit" onClick={handleSubmit}>Złóż wniosek
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
