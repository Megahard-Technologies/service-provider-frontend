import {useState} from 'react';
import InputBoxAddEvent from "./components/inputAddEvent.tsx";
import './addEvent.css';
import BigInputAddEvent from "./components/bigInputAddEvent.tsx";
import {useNavigate} from "react-router-dom";
import dayjs, {Dayjs} from 'dayjs';
import {DateTimePicker} from "@mui/x-date-pickers";
import axios from "axios";
import FileInputAddEvent from "./components/fileInputAddEvent.tsx";

function AddEventPage() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs());

    const [nameError, setNameError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const [priceError, setPriceError] = useState(false);
    const [imageError, setImageError] = useState(false);


    const serviceProviderId = 1;
    const navigate = useNavigate();

    const validateForm = () => {
        let isValid = true;

        if (name.trim() === '') {
            setNameError(true);
            isValid = false;
        } else {
            setNameError(false);
        }

        if (description.trim() === '') {
            setDescriptionError(true);
            isValid = false;
        } else {
            setDescriptionError(false);
        }

        if (price.trim() === '' || isNaN(Number(price))) {
            setPriceError(true);
            isValid = false;
        } else {
            setPriceError(false);
        }


        if (image.trim() === '') {
            setImageError(true);
            isValid = false;
        } else {
            setImageError(false);
        }

        return isValid;
    };

    const postEvent = () => {
        if (!validateForm()) {
            console.log('form is not valid')
            return;
        }

        const event = {
            name: name,
            description: description,
            price: price,
            image: image,
            startDate: startDate,
            endDate: endDate,
            serviceProviderId: serviceProviderId
        }

        axios.post('http://localhost:3000/api/wydarzenia', event)
            .then(response => {
                console.log(response.data);
                navigate("/home")
            })
            .catch(error => {
                console.error('error posting event: ', error)
            })
    }

    return (
        <div className="container-event">
            <div className="event-div">
                <div className="first-row-event">
                    <h1>Dodaj Ofertę/Event</h1>
                    <div className="buttons-save-discard">
                        <button className="save-button" onClick={postEvent}>Zapisz</button>
                        <button className="discard-button" onClick={() => navigate("/home")}>Odrzuć</button>
                    </div>
                </div>
                <form className="input-boxes">
                    <InputBoxAddEvent value={name} onChange={(event) => setName(event.currentTarget.value)}
                                      label="Nazwa" error={nameError}/>
                    <BigInputAddEvent value={description}
                                      onChange={(event) => setDescription(event.currentTarget.value)}
                                      label="Opis usług" error={descriptionError}/>
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
                            minutesStep={1}
                        />
                    </div>

                    <InputBoxAddEvent value={price} onChange={(event) => setPrice(event.currentTarget.value)}
                                      label="Cena" error={priceError}/>
                    <FileInputAddEvent onChange={(base64: string) => setImage(base64)} label="Dodaj zdjęcie" error={imageError}/>
                </form>
            </div>
        </div>
    );
}

export default AddEventPage;