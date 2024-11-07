import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import logementsData from '../assets/logements.json';
import '../pages/Logement.scss';
import Collapse from '../components/Collapse/Collapse';
import LogementRating from '../components/LogementRating/LogementRating';
import arrowCarousel from '../assets/ArrowCarousel.svg';

const Logement = () => {
    const { logement_id } = useParams(); // Get logement_id from the URL
    const [logement, setLogement] = useState(null); // State to hold logement data
    const [currentIndex, setCurrentIndex] = useState(0); // State to track current image index
    const navigate = useNavigate()

    useEffect(() => {
        // Data fetch simulation
        const fetchedLogement = logementsData.find(item => item.id === logement_id);
        // If fetchedLogement is found, set it in state
        if (fetchedLogement) {
            setLogement(fetchedLogement);
        } else {
            navigate('/error')
        }

    }, [logement_id, navigate]);

    // Handle going to the next image
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Handle going to the previous image
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
        );
    };

    // Ensure logement is loaded before accessing its properties
    if (!logement) {
        return <div>Loading...</div>;
    }

    const equipmentsList = logement.equipments.map((equipement, index) => (
        <li key={index}>{equipement}</li>
    ));

    return (
        <div className='logementContainer'>
            {/* CAROUSEL */}
            <div className='carouselContainer'>
                {logement.pictures.length > 1 && (
                    <button onClick={handlePrev} className='carouselButtonPrevious'><img src={arrowCarousel} alt="Image précédente" /></button>
                )}
                <img src={logement.pictures[currentIndex]} alt={logement.title} className='carouselImage' />
                {logement.pictures.length > 1 && (
                    <button onClick={handleNext} className='carouselButtonNext'><img src={arrowCarousel} alt="Image suivante" /></button>
                )}
                {logement.pictures.length > 1 && (
                    <div className='carouselNumerotation'>
                        {currentIndex + 1}/{logement.pictures.length}
                    </div>
                )}
            </div>
            {/* DETAILS */}
            <div className="logementDetails">
                <h1 className='logementTitle'>{logement.title}</h1>
                <p className='logementLocation'>{logement.location}</p>
                <ul className='tagsContainer'>
                    {logement.tags.map((tag, index) => (
                        <li key={index} className='tag'>
                            {tag}
                        </li>
                    ))}
                </ul>
                <div className='hostContainer'>
                    <p>{logement.host.name.split(' ').map((part, index) => (
                        <span key={index}>
                            {part}
                            {index === 0 && <br />} {/* Put <br /> between words */}
                        </span>
                    ))}</p>
                    <img src={logement.host.picture} alt="Photo de l'hôte" />
                </div>
                <LogementRating rating={logement.rating} />
                {/* COLLAPSES */}
                <div className="logementCollapseContainer">
                    <Collapse
                        title="Description"
                        content={logement.description}
                    />
                    <Collapse
                        title="Équipements"
                        content={<ul>{equipmentsList}</ul>}
                    />
                </div>
            </div>
        </div>
    );
};

export default Logement;
