import './home.css'
import Opinion from "./components/opinion.tsx";
import Event from "./components/event.tsx";
import {mdiPlus, mdiSend} from '@mdi/js';
import Icon from "@mdi/react";
import {LineGraph} from "./components/graph.tsx";
import {useState} from "react";
import InputBoxHome from "./components/inputHome.tsx";
import {useNavigate} from "react-router-dom";


function Home() {
    const name = "Zatoka smaku";
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

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
                        <Opinion name={"Jarek S."} stars={4}
                                 description={"To zdecydowanie jedna z tych Zatok, do której trzeba przycumować, gdy organizm zaczyna dopominać się smacznego jedzonka po intensywnym treningu. Jedzenie przede wszystkim bardzo dobrej jakości i w całkiem sporych porcjach, żadne tam mrożonki z Biedro. "}/>
                        <Opinion name={"Ola B."} stars={5}
                                 description={"Przychodzę tutaj od trzech lat, średnio dwa razy w tygodniu. Żeby jako zmęczony i głodny student zjeść hot dogi i wypić kawę. Najczęściej na zmianę Dawida i Asi których serdecznie pozdrawiam bo są super i robią super kawę, kolejny powód dla którego warto tutaj przyjść."}/>
                        <Opinion name={"Adam C."} stars={4}
                                 description={"Jako studentka przychodzę często do Zatoki smaku na kawę. Uważam, że posiadają bardzo pyszne ziarna. Polecam dla smakoszy słodkiego Moche. Obsłuaga także bardzo zadawalająca, miła, komunikatywna i przyjemna. Najbardziej polecam zmianę Asi i Dawida ;)"}/>
                    </div>
                </div>
                <div className="second-column">
                    <h2>Oferty/Wydarzenia</h2>
                    <div className="events">
                        <Event name={"Duża kawa"} startDate={new Date(2024, 4, 15, 13, 0, 0, 0)}
                               endDate={new Date(2024, 4, 15, 14, 0, 0, 0)} image={"src/routes/home/img/kawa.jpg"}
                               description={"\n" +
                                   "Zanurz się w bogatym smaku i aromacie dużego kubka kawy za zaledwie 5 złotych, aby zacząć dzień pełen energii i radości."}/>
                    </div>

                    <button className="add-icon" onClick={() => navigate("/addEvent")}>
                        <Icon path={mdiPlus} size={1.5}/>
                    </button>


                </div>
                <div className="third-column">

                    <div className="first-row">
                        <h2>Czas wolny studentów</h2>
                        <div className="graph-container">
                            <LineGraph/>
                        </div>

                    </div>
                    <div className="second-row">
                        <h2>Napisz do admina</h2>
                        <InputBoxHome label="" value={message} onChange={(e) => setMessage(e.currentTarget.value)}/>
                        <div className="send-button-div">
                            <button className="send-button" onClick={() => setMessage("")}><Icon path={mdiSend} size={0.8} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;