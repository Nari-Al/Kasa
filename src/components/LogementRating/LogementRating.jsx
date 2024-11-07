// LogementRating.jsx
import React from 'react';
import activeStar from '../../assets/ActiveStar.svg';
import inactiveStar from '../../assets/InactiveStar.svg';

const LogementRating = ({ rating }) => {
    return (
        <div className="logementRating">
            {[...Array(5)].map((_, index) => (
                <span key={index}>
                    <img
                        src={index < rating ? activeStar : inactiveStar} // Choose star based on rating
                        alt={`${index < rating ? 'Active' : 'Inactive'} Star`} // Provide appropriate alt text
                    />
                </span>
            ))}
        </div>
    );
};

export default LogementRating;