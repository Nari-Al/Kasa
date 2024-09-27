import React from 'react';
import '../LogementCard/LogementCard.scss'

const LogementCard = ({ logementId, title, cover }) => {
    return (
        <a href={`/logement/${logementId}`}>
            <div className="logement-card" data-logement-id={logementId} >
                <img src={cover} alt={title} />
                <p>{title}</p>
            </div>
        </a>
    );
};

export default LogementCard;