import React, { ChangeEvent } from 'react';
import "./inputEditEvent.css";

interface InputBoxProps {
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputBoxAddEvent: React.FC<InputBoxProps> = ({ label, value, onChange }) => {
    return (
        <div className={label === "Cena" ? "input-price" : "input"}>
            <label>{label}</label>
            <input className="input-box" type="text" value={value} onChange={onChange} />
        </div>
    );
}

export default InputBoxAddEvent;