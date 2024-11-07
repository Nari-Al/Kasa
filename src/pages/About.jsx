import React from 'react';
import Banner from '../components/Banner/Banner';
import ImgAbout from '../assets/ImageSource2.png'
import Collapse from '../components/Collapse/Collapse';

const About = () => {
    return (
        <div>
            <Banner
                imageUrl={ImgAbout}
                title=""
                darkenOpacity={0.3}
            />
            <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régumièrement vérifiées par nos équipes." />
            <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kas. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
            <Collapse title="Service" content="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." />
            <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons éalement des ateliers sur la sécurité domestique pour nos hôtes." />

        </div>
    );
};

export default About;