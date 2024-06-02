import './event.css';
import React from "react";
import {useNavigate} from "react-router-dom";
import Icon from '@mdi/react';
import { mdiDelete, mdiPencil} from '@mdi/js';


interface Props {
    name: string;
    startDate: Date;
    endDate: Date;
    image: string;
    description: string;
    price: number;
}

const Event: React.FC<Props> = (props) => {
    const navigate = useNavigate();
    const startDate = new Date(props.startDate);
    const endDate = new Date(props.endDate);
    // Use your props here
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
                    <img src={props.image} alt="event" />
                </div>
            </div>
            <div className="buttons">
                <button className="edit-btn" onClick={() => navigate("/editEvent")}><Icon path={mdiPencil} size={1} />
                </button>
                <button className="delete-btn"><Icon path={mdiDelete} size={1} />
                </button>

            </div>
        </div>
    );
}

export default Event;