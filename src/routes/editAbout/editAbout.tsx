import './editAbout.css';
import {useNavigate} from "react-router-dom";

function EditAboutPage() {

    const navigate = useNavigate();

    return (
        <div className="container-about">
            <div className="upper-row-about">
                <p>Zatoka Smaku</p>
            </div>
            <div className="lower-row-about">
                <div className="first-column-about">
                    <div className="adress-about">
                        Al. Politechniki 10<br/>
                        Budynek Zatoki Sportu Politechniki Łódzkiej,<br/>
                        93-590 Łódź
                    </div>
                    <div className="business-hours-about">
                        <div className="days-about">
                            Poniedziałek:<br/>
                            Wtorek:<br/>
                            Środa:<br/>
                            Czwartek:<br/>
                            Piątek:<br/>
                            Sobota:<br/>
                            Niedziela:<br/>
                        </div>
                        <div className="hours-about">
                            10:00 - 00:00<br/>
                            10:00 - 00:00<br/>
                            10:00 - 00:00<br/>
                            10:00 - 01:30<br/>
                            10:00 - 02:00<br/>
                            12:00 - 02:00<br/>
                            12:00 - 00:00<br/>
                        </div>

                    </div>
                </div>
                <div className="second-column-about">
                    <div className="upper-inner-row-about">
                        <div className="menu">
                            <h2>Menu</h2>
                            <div className="menu-list">
                                1. Kawa Czarna<br/>
                                2. Kawa Biała<br/>
                                3. Herbata<br/>
                                4. Ciasto<br/>
                                5. Zestaw Obiadowy<br/>
                            </div>
                        </div>
                    </div>
                    <div className="lower-inner-row-about">
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
                </div>
            </div>
        </div>
    );
}

export default EditAboutPage;