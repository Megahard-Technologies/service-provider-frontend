import {useState} from 'react';
import InputBoxAddEvent from "./components/inputEditEvent.tsx";
import './editEvent.css';
import BigInputAddEvent from "./components/bigInputEditEvent.tsx";
import {useNavigate} from "react-router-dom";
import dayjs, {Dayjs} from "dayjs";
import {DateTimePicker} from "@mui/x-date-pickers";

function AddEventPage() {
    const [name, setName] = useState('Duża kawa ');
    const [description, setDescription] = useState('Zanurz się w bogatym smaku i aromacie dużego kubka kawy za zaledwie 5 złotych, aby zacząć dzień pełen energii i radości.j');
    const [price, setPrice] = useState('5 zł');
    const [image, setImage] = useState('kawa.jpg');
    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs());

    const navigate = useNavigate();

    return (
        <div className="container-event">
            <div className="event-div">
                <div className="first-row-event">
                    <h1>Edytuj Ofertę/Event</h1>
                    <div className="buttons-save-discard">
                        <button className="save-button" onClick={() => {
                            navigate("/home")
                        }}>Zapisz
                        </button>
                        <button className="discard-button" onClick={() => {
                            navigate("/home")
                        }}>Odrzuć
                        </button>
                    </div>
                </div>
                <form className="input-boxes">
                    {/*<div className="left-input-boxes">*/}
                    <InputBoxAddEvent value={name} onChange={(event) => setName(event.currentTarget.value)}
                                      label="Nazwa"/>
                    <BigInputAddEvent value={description}
                                      onChange={(event) => setDescription(event.currentTarget.value)}
                                      label="Opis usług"/>

                    <div className="date-pickers">
                        <DateTimePicker
                            label="Data rozpoczęcia"
                            value={startDate}
                            onChange={(newDate) => setStartDate(newDate as Dayjs)}
                            format="DD/MM/YYYY HH:MM"
                            ampm={false}
                        />

                        <DateTimePicker
                            label="Data zakończenia"
                            value={endDate}
                            onChange={(newDate) => setEndDate(newDate as Dayjs)}
                            ampm={false}
                            format="DD/MM/YYYY HH:MM"
                        />
                    </div>

                    <InputBoxAddEvent value={price} onChange={(event) => setPrice(event.currentTarget.value)}
                                      label="Cena"/>
                    <InputBoxAddEvent value={image} onChange={(event) => setImage(event.currentTarget.value)}
                                      label="Dodaj zdjęcie"/>

                    {/*</div>*/}
                    {/*<div className="right-input-boxes">*/}

                    {/*</div>*/}
                </form>
            </div>
        </div>
    );
}

export default AddEventPage;