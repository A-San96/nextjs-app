
const Session = ({ title, room }) => {
    return (
        <span className="session w-100">
            {title} <strong>Room: {room.name}</strong>
        </span>
    );
}

const Sessions = ({ sessions }) => {
    return (
        <div className="sessionBox card h-250">
            <Session {...sessions[0]}/>
        </div>
    );
}

const SpeakerImage = ({ id, first, last }) => {
    return (
        <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
            <img 
                src={`/images/speaker-${id}.jpg`} 
                alt={`${first} ${last}`}
                width="300"
                className="containt-fit" />
        </div>
    );
}

const SpeakerDemographics = ({ first, last, bio, company, twitterHandle, favorite }) => {
    return (
        <div className="speaker-info">
            <div className="d-flex justify-content-between mb-3">
                <h3 className="text-truncate w-200">
                    {first} {last}
                </h3>
            </div>
            <div>
                <p>{bio} {company} {twitterHandle} {favorite}</p>
            </div>
        </div>
    );
}

const Speaker = ({ speaker }) => {
    const {id, first, last, sessions,} = speaker;
    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
            <div className="card card-height p-4 mt-4">
                <SpeakerImage id={id} first={first} last={last} />
                <SpeakerDemographics {...speaker} />
                <Sessions sessions={sessions} />
            </div>
        </div>
    );
}

export default Speaker;