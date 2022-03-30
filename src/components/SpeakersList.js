import Speaker from "./Speaker";
import ReactPlaceholder from "react-placeholder/lib";
import 'react-placeholder/lib/reactPlaceholder.css';
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from "../../SpeakerData";

function SpeakersList({ showSessions }) {

    const {
        data: speakersData,
        requestStatus,
        error, 
        updateRecord,
    } = useRequestDelay(2000, data);


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
                                    onFavoriteToggle={(doneCallback) => {
                                        updateRecord({
                                            ...speaker,
                                            favorite: !speaker.favorite,
                                        }, doneCallback);
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