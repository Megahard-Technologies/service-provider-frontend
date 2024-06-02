import React, { ChangeEvent } from 'react';
import "./inputRegister.css";

interface InputBoxProps {
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const LeftInputBox: React.FC<InputBoxProps> = ({ label, value, onChange }) => {
    return (
        <div className="left-input-reg">
            <label>{label}</label>
            <input className="left-input-box-reg" type="text" value={value} onChange={onChange} />
        </div>
    );
}


export default LeftInputBox;