import {useEffect, useState} from 'react';
import InputBoxAddEvent from "./components/inputEditEvent.tsx";
import './editEvent.css';
import BigInputAddEvent from "./components/bigInputEditEvent.tsx";
import {useNavigate} from "react-router-dom";
import dayjs, {Dayjs} from "dayjs";
import {DateTimePicker} from "@mui/x-date-pickers";
import {useSelector} from "react-redux";
import {RootState} from "../../state/store.ts";
import axios from "axios";

function EditEventPage() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs());

    const editEventId = useSelector((state: RootState) => state.editEventId.editEventId);
    console.log(editEventId);

    const navigate = useNavigate();

    useEffect(() => {
        // fetch event data
        axios.get(`http://localhost:3000/api/wydarzenia/${editEventId}`)
            .then(response => {
                setName(response.data.name);
                setDescription(response.data.description);
                setPrice(response.data.price);
                setImage(response.data.image);
                setStartDate(dayjs(response.data.startDate));
                setEndDate(dayjs(response.data.endDate));
            })
            .catch(error => {
                console.error('error fetching event: ', error)
            })
    }, []);

    const handleSave = () => {
        // save event
        axios.put(`http://localhost:3000/api/wydarzenia/${editEventId}`, {
            name: name,
            description: description,
            price: price,
            image: image,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString()
        })
            .then(response => {
                console.log(response.data);
                navigate("/home");
            })
            .catch(error => {
                console.error('error saving event: ', error)
            })
    }


    return (
        <div className="container-event">
            <div className="event-div">
                <div className="first-row-event">
                    <h1>Edytuj Ofertę/Event</h1>
                    <div className="buttons-save-discard">
                        <button className="save-button" onClick={
                            handleSave
                        }>Zapisz
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

export default EditEventPage;