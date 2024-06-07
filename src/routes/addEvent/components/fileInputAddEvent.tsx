import './fileInputAddEvent.css';
import {ChangeEvent, FC} from 'react';

interface FileInputAddEventProps {
    onChange: (base64: string) => void;
    label: string;
    error: boolean;
}


const FileInputAddEvent: FC<FileInputAddEventProps> = (props) => {

    const inputClassName = props.error ? "input-file-error" : "input-file";

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result as string;
                props.onChange(base64);
            };
            reader.readAsDataURL(file);
        }
    };


    return (
        <div className="input-box-add-event-file">
            <label>{props.label}</label>
            <input className={inputClassName} type="file" onChange={handleFileChange}/>
        </div>
    );
};

export default FileInputAddEvent;