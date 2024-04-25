import "./inputCompleteRegistration.css"
import React from 'react';
interface InputBoxProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputCompleteRegistration: React.FC<InputBoxProps> = ({label, value, onChange}) => {
    return (
        <div className="input-big">
            <label>{label}</label>
            <textarea className="textarea-home" value={value} onChange={onChange}/>

        </div>
    );
}

export default InputCompleteRegistration;