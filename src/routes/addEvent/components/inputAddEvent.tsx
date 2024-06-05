import React, {ChangeEvent} from 'react';
import "./inputAddEvent.css";

interface InputBoxProps {
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
}


const InputBoxAddEvent: React.FC<InputBoxProps> = (props: InputBoxProps) => {

    const inputClassName = props.error ? "input-box error" : "input-box";

    return (
        <div className={props.label === "Cena" ? "input-price" : "input"}>
            <label>{props.label}</label>
            <input className={inputClassName} type="text" value={props.value} onChange={props.onChange}/>

        </div>
    );
}

export default InputBoxAddEvent;