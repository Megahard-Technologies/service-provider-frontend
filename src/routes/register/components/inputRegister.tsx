import React, { ChangeEvent } from 'react';
import "./inputRegister.css";

interface InputBoxProps {
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ label, value, onChange }) => {
    return (
        <div className="input">
            <label>{label}</label>
            <input className="input-box" type="text" value={value} onChange={onChange} />
        </div>
    );
}

export default InputBox;