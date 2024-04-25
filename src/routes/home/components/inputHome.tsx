import "./inputHome.css";

interface InputBoxProps {
    label: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const InputBoxHome: React.FC<InputBoxProps> = ({ label, value, onChange }) => {
    return (
        <div className="input-home">
            <label>{label}</label>
            <textarea className="textarea-home" value={value} onChange={onChange} />
        </div>
    );
}

export default InputBoxHome;