import React from 'react';
import './bigInputRegister.css';
interface InputBoxProps {
    label: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const BigInput: React.FC<InputBoxProps> = ({label, value, onChange}) => {
    return (
        <div className="input-big">
            <label>{label}</label>
            {/*<input className="input-box" type="text" value={value} onChange={onChange}/>*/}
            <textarea className="textarea-register" value={value} onChange={onChange}/>
        </div>
    );
}

export default BigInput;