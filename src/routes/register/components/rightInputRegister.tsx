import React, { ChangeEvent } from 'react';
import "./inputRegister.css";

interface InputBoxProps {
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RightInputBox: React.FC<InputBoxProps> = ({ label, value, onChange }) => {
    return (
        <div className="right-input-reg">
            <label>{label}</label>
            <input className="right-input-box-reg" type="text" value={value} onChange={onChange} />
        </div>
    );
}


export default RightInputBox;