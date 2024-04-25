import React, {useState} from 'react';
import './completeRegistration.css'
import InputCompleteRegistration from "./components/inputCompleteRegistration.tsx";
import Icon from '@mdi/react';
import {mdiCheck} from '@mdi/js';
import {useNavigate} from "react-router-dom";

const CompleteRegistration: React.FC = () => {
    const [menu, setMenu] = useState('');
    const [openingHours, setOpeningHours] = useState('');

    const navigate = useNavigate();

    return (
        <div className="content-complete">
            <div className="form-complete">
                <div className="header-complete"> Uzupełnij rejestrację</div>
                <InputCompleteRegistration label="Menu" value={menu} onChange={(event) => {
                    setMenu(event.currentTarget.value)
                }}/>
                <InputCompleteRegistration label="Godziny otwarcia" value={openingHours} onChange={(event) => {
                    setOpeningHours(event.currentTarget.value)
                }}/>
                <div className="button-div-complete">
                    <button className="confirm-complete" onClick={
                        () => navigate('/home')}><Icon path={mdiCheck} size={1}/>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CompleteRegistration;