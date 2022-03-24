import Speaker from "./Speaker";
import { data } from "../../SpeakerData";
import { useState, useEffect } from "react";
import ReactPlaceholder from "react-placeholder/lib";
import 'react-placeholder/lib/reactPlaceholder.css';

function SpeakersList({ showSessions }) {
    const [speakersData, setSpeakersData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasErrored, setHasErrored] = useState(false);
    const [error, setError] = useState("");

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        async function delayFunc(){
            try {
                await delay(2000);
                // throw " Had Error";
                setIsLoading(false);
                setSpeakersData(data);             
            } catch (e) {
                setIsLoading(false);
                setHasErrored(true);
                setError(e); 
            }
        }
        delayFunc()
    }, []);
    
    function onFavoriteToggle(id){
        const speakersRecPrevious = speakersData.find(function (rec) {
            return rec.id === id;
        });
        const speakersRecUpdated = {
            ...speakersRecPrevious,
            favorite : !speakersRecPrevious.favorite,
        };

        const speakersDataNew = speakersData.map(function (rec){
            return rec.id === id ? speakersRecUpdated : rec;
        });

        setSpeakersData(speakersDataNew)
    }

    if (hasErrored === true) {
        return (
            <div className="text-danger">
                ERROR: <b>loading Speaker Data Failed {error}</b>
            </div>
        );
    }

    //if (isLoading === true) return <div>Loading...</div>

    return (
        <div className="container speakers-list">
            <ReactPlaceholder
                showLoadingAnimation
                className="speakerslist-placeholder"
                type="media"
                rows={15}
                ready={isLoading === false}
            >
                <div className="row">
                    {speakersData.map( (speaker) => {
                            return (
                                <Speaker 
                                    key={speaker.id} 
                                    speaker={speaker} 
                                    showSessions={showSessions}
                                    onFavoriteToggle={() => {
                                        onFavoriteToggle(speaker.id);
                                    }}
                                />
                            );
                        }
                    )}
                </div>
            </ReactPlaceholder>
        </div>
    );
}

export default SpeakersList;