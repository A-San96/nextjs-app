import {ThemeContext} from "./Layout";
import { useContext } from "react";

function SpeakersToolbar({
    showSessions,
    setShowSessions
}) {    
     
    const {setTheme, theme} = useContext(ThemeContext);
    return (
        <section className="toolbar dark-theme-header">
            <div className="container">
                <div className="justify-content-between">
                    <ul className="toolrow d-flex flex-column flex-lg-row">
                        <li className="d-flex flex-column flex-md-row">
                            <b>Show sessions&nbsp;&nbsp;</b>
                            <label className="fav">
                                <input type="checkbox" 
                                checked={showSessions} 
                                onChange={(event) =>{
                                    setShowSessions(event.target.checked)
                                }}
                                />
                                <span className="switch"></span>
                            </label>
                        </li>
                        <li className="d-flex flex-column flex-md-row ml-sm-5 ml-0">
                            <select value={theme} 
                                className="form-control theme"
                                onChange={(event) => {
                                    setTheme(event.target.value)
                                }}
                                >
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default SpeakersToolbar;