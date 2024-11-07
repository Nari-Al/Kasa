import React from 'react';

const Erreur = () => {
    return (
        <div className='centerFlex'>
            <h1 className='errorTitle'>404</h1>
            <p className='errorText'>Oups! La page que vous demandez n'existe pas.</p>
            <a className='errorLink' href="/">Retourner sur la page d'accueil</a>
        </div>
    );
};

export default Erreur;