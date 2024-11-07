import React, { useState } from 'react';
import '../Collapse/Collapse.scss'
import ArrowIcon from '../../assets/Arrow.svg'

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapseContainer">
            <div className="titleContainer" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <img
                    src={ArrowIcon}
                    alt="Arrow"
                    className={`arrow ${isOpen ? 'open' : ''}`}
                />
            </div>
            <div className={`contentContainer ${isOpen ? 'open' : ''}`}>
                {content}
            </div>
        </div>
    );
};

export default Collapse;