import React from 'react';
import '../LogementCardContainer/LogementCardContainer.scss'
import LogementCard from '../LogementCard/LogementCard'
import logements from '../../assets/logements.json'


const LogementCardContainer = () => {
    return (
        <div className='logement-card-container'>
            {logements.map(logement => (
                <LogementCard
                    logementId={logement.id}
                    title={logement.title}
                    cover={logement.cover}
                />
            ))}
        </div>
    );
};

export default LogementCardContainer;