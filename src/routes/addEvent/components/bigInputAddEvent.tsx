import React, {ChangeEvent} from 'react';
import './bigInputAddEvent.css';
interface InputBoxProps {
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;

}

const BigInputAddEvent: React.FC<InputBoxProps> = (props) => {
    const inputClassName = props.error ? "input-box-big error" : "input-box-big";
    return (
        <div className="input-big">
            <label>{props.label}</label>
            <input className={inputClassName} type="text" value={props.value} onChange={props.onChange}/>
        </div>
    );
}

export default BigInputAddEvent;