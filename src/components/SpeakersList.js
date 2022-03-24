import Speaker from "./Speaker";
import ReactPlaceholder from "react-placeholder/lib";
import 'react-placeholder/lib/reactPlaceholder.css';
import useRequestSpeakers, { REQUEST_STATUS } from "../hooks/useRequestSpeakers";

function SpeakersList({ showSessions }) {

    const {
        speakersData,
        requestStatus,
        error, 
        onFavoriteToggle,
    } = useRequestSpeakers(2000);


    if (requestStatus === REQUEST_STATUS.FAILURE) {
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
                ready={requestStatus === REQUEST_STATUS.SUCCESS}
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