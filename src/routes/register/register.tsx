import React, {useState} from 'react';
import LeftInputBox from "./components/leftInputRegister.tsx";
import RightInputBox from "./components/rightInputRegister.tsx";
import './register.css';
import BigInputReg from "./components/bigInputRegister.tsx";
import {useNavigate} from "react-router-dom";

function RegisterPage() {
    const [name, setName] = useState(''); // [state, setState
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
        <div className="container-register">
            <div className="register-div">
                <h1>Zarejestruj</h1>
                <form className="input-boxes">
                    <div className="left-input-boxes">
                        <LeftInputBox value={name} onChange={(event) => setName(event.currentTarget.value)}
                                      label="Nazwa usługodawcy"/>
                        <LeftInputBox value={password} onChange={(event) => setPassword(event.currentTarget.value)}
                                      label="Hasło"/>
                        <BigInputReg value={description} onChange={(event) => setDescription(event.currentTarget.value)}
                                     label="Opis usług"/>
                    </div>
                    <div className="right-input-boxes-reg">
                        <RightInputBox value={email} onChange={(event) => setEmail(event.currentTarget.value)}
                                       label="Email"/>
                        <RightInputBox value={repeatPassword}
                                       onChange={(event) => setRepeatPassword(event.currentTarget.value)}
                                       label="Powtórz hasło"/>
                        <RightInputBox value={address} onChange={(event) => setAddress(event.currentTarget.value)}
                                       label="Adres"/>
                        <RightInputBox value={phone} onChange={(event) => setPhone(event.currentTarget.value)}
                                       label="Nr telefonu"/>
                    </div>
                </form>
                <div className="submit-button-register-div">
                    <button className="submit-btn-register" type="submit" onClick={handleSubmit}>Złóż wniosek
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;