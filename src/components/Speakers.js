import SpeakersToolbar from './SpeakersToolbar';
import SpeakersList from './SpeakersList';
import { useContext, useState } from "react";
import {ThemeContext} from "./Layout";

function Speakers() {
    const [showSessions, setShowSessions] = useState(true);
    const { setTheme, theme } = useContext(ThemeContext)

    return (
        <>
            <SpeakersToolbar 
                theme={theme} 
                setTheme={setTheme}
                showSessions={showSessions}
                setShowSessions={setShowSessions}
            
            />
            <SpeakersList showSessions={showSessions}/>
        </>
    );
}

export default Speakers;