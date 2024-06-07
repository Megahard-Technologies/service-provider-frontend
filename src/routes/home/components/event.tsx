import './event.css';
import React from "react";
import {useNavigate} from "react-router-dom";
import Icon from '@mdi/react';
import { mdiDelete, mdiPencil} from '@mdi/js';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../state/store.ts";
import {setEditEventId} from "../../../state/editEventId/editEventIdSlice.ts";


interface Props {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    image: string;
    description: string;
    price: number;
    setEventsUpdated: (updated: boolean) => void; // New prop

}

const Event: React.FC<Props> = (props) => {
    const navigate = useNavigate();
    const startDate = new Date(props.startDate);
    const endDate = new Date(props.endDate);

    const editEventId = useSelector((state: RootState) => state.editEventId.editEventId);
    const dispatch = useDispatch();

    const handleDelete = () => {
        //delete event
        axios.delete(`http://localhost:3000/api/wydarzenia/${props.id}`)
            .then(response => {
                console.log(response.data);
                props.setEventsUpdated(true); // Set eventsUpdated to true after deleting an event

            })
            .catch(error => {
                console.error('error deleting event: ', error)
            })
    }

    const handleEdit = () => {
        dispatch(setEditEventId(props.id));
        navigate("/editEvent");
    }


    return (
        <div className="event">
            <div className="content">
                <div className="first-column-event">
                    <h2>{props.name}</h2>
                    <p>{props.price} zł</p>
                    <p className="time">{startDate.getHours()}:{startDate.getMinutes() < 10 ? `0${startDate.getMinutes()}` : startDate.getMinutes()}
                        - {endDate.getHours()}:{endDate.getMinutes() < 10 ? `0${endDate.getMinutes()}` : endDate.getMinutes()}</p>
                    <p>{props.description}</p>
                </div>
                <div className="second-column-event">
                    <img src={"data:image/jpeg;base64," + props.image} alt="event" />
                </div>
            </div>
            <div className="buttons">
                <button className="edit-btn" onClick={handleEdit}><Icon path={mdiPencil} size={1} />
                </button>
                <button className="delete-btn" onClick={handleDelete}><Icon path={mdiDelete} size={1} />
                </button>

            </div>
        </div>
    );
}

export default Event;