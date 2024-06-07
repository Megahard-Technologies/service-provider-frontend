import {useEffect, useState} from 'react';
import InputBoxAddEvent from "../addEvent/components/inputAddEvent.tsx";
import '../addEvent/addEvent.css';
import BigInputAddEvent from "../addEvent/components/bigInputAddEvent.tsx";
import {useNavigate} from "react-router-dom";
import dayjs, {Dayjs} from 'dayjs';
import {DateTimePicker} from "@mui/x-date-pickers";
import {useSelector} from "react-redux";
import {RootState} from "../../state/store.ts";
import axios from "axios";

import FileInputAddEvent from "../addEvent/components/fileInputAddEvent.tsx";

function EditEventPage() {
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

        if (price === '' || isNaN(Number(price))) {
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

    const editEventId = useSelector((state: RootState) => state.editEventId.editEventId);
    console.log(editEventId);


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
        // validate form
        if (!validateForm()) {
            console.log('form is not valid')
            return;
        }

        let base64Image;
        if (image.includes(',')) {
            base64Image = image.split(',')[1];
        } else {
            base64Image = image;
        }

        // save event
        axios.put(`http://localhost:3000/api/wydarzenia/${editEventId}`, {
            name: name,
            description: description,
            price: price,
            image: base64Image,
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
                        <button className="save-button" onClick={handleSave}>Zapisz</button>
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
                    <FileInputAddEvent onChange={(base64: string) => setImage(base64)} label="Nowy obraz" error={imageError}/>
                </form>
            </div>
        </div>
    );


}

export default EditEventPage;