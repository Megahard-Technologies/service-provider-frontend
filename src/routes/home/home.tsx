import './home.css';
import Opinion from "./components/opinion.tsx";
import Event from "./components/event.tsx";
import { mdiPlus, mdiSend } from '@mdi/js';
import Icon from "@mdi/react";
import { LineGraph } from "./components/graph.tsx";
import { useEffect, useState } from "react";
import InputBoxHome from "./components/inputHome.tsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../loading/LoadingSpinner"; // Import the spinner

interface event {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    image: string;
    description: string;
    price: number;
}

interface opinion {
    stars: number;
    description: string;
    date: Date;
}

function Home() {
    const name = "Zatoka smaku";
    const [message, setMessage] = useState('');
    const [events, setEvents] = useState<event[]>([]);
    const [opinions, setOpinions] = useState<opinion[]>([]); // New state
    const [loading, setLoading] = useState(true); // Single state for both sections
    const [eventsUpdated, setEventsUpdated] = useState(false); // State to track events updates
  
    const navigate = useNavigate();

    const serviceProviderId = 1;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/wydarzenia');
                setEvents(response.data);
            })
            .catch(error => {
                console.error('error fetching events: ', error)
            })
          
        axios.get(`http://localhost:3000/api/opinions/${serviceProviderId}`)
            .then(response => {
                setOpinions(response.data);
            })
            .catch(error => {
                console.error('error fetching opinions: ', error)
            })


        fetchData();
        setEventsUpdated(false); 

        // Set a timeout to ensure minimum loading time of 5 seconds
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        // Clean up the timeout if the component unmounts
        return () => clearTimeout(timer);
    }, [eventsUpdated]);

    return (
        <div className="container-home">
            <div className="upper-row">
                <div className="name-container" onClick={() => navigate("/about")}>
                    {name}
                </div>
            </div>
            <div className="lower-row">
                <div className="first-column">
                    <h2>Opinie klientów</h2>
                    <div className="opinions">
                        {loading ? (
                            <LoadingSpinner />
                        ) : (
                            {opinions.map((opinion, index) => {
                            return <Opinion key={index} stars={opinion.stars} description={opinion.description}
                                            date={opinion.date}/>
                        })}
                        )}
                    </div>
                </div>
                <div className="second-column">
                    <h2>Oferty/Wydarzenia</h2>
                    <div className="events">
                        {loading ? (
                            <LoadingSpinner />
                        ) : (
                            events.map((event, index) => {
                                return <Event key={index} id={event.id} name={event.name} startDate={event.startDate}
                                              endDate={event.endDate}
                                              image={event.image} description={event.description} price={event.price}
                                              setEventsUpdated={setEventsUpdated} />
                            })
                        )}
                    </div>

                    <button className="add-icon" onClick={() => navigate("/addEvent")}>
                        <Icon path={mdiPlus} size={1.5} />
                    </button>
                </div>
                <div className="third-column">
                    <div className="first-row">
                        <h2>Czas wolny studentów</h2>
                        <div className="graph-container">
                            <LineGraph />
                        </div>
                    </div>
                    <div className="second-row">
                        <h2>Napisz do admina</h2>
                        <InputBoxHome label="" value={message} onChange={(e) => setMessage(e.currentTarget.value)} />
                        <div className="send-button-div">
                            <button className="send-button" onClick={() => setMessage("")}><Icon path={mdiSend}
                                                                                                 size={0.8} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
