import "./inputLogin.css";

interface InputBoxProps {
    label: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    pass: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({ label, value, onChange , pass}) => {
    return (
        <div className="input">
            <label>{label}</label>
            <input className="input-box" value={value} onChange={onChange} type={pass ? "password" : "text"}/>
        </div>
    );
}

export default InputBox;