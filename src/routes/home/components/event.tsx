import './event.css';
import React from "react";
import {useNavigate} from "react-router-dom";
import Icon from '@mdi/react';
import { mdiDelete, mdiPencil, mdiSend } from '@mdi/js';


interface Props {
    name: string;
    startDate: Date;
    endDate: Date;
    image: string;
    description: string;
}

const Event: React.FC<Props> = (props) => {
    const navigate = useNavigate();
    // Use your props here
    console.log(props);
    return (
        <div className="event">
            <div className="content">
                <div className="first-column-event">
                    <h2>{props.name}</h2>
                    <p className="time">{props.startDate.getHours()}:{props.startDate.getMinutes() < 10 ? `0${props.startDate.getMinutes()}` : props.startDate.getMinutes()}
                        - {props.endDate.getHours()}:{props.endDate.getMinutes() < 10 ? `0${props.endDate.getMinutes()}` : props.endDate.getMinutes()}</p>
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