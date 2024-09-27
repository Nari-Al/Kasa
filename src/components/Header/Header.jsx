import React from 'react';
import './Header.module.scss'
import logo from '../../assets/LOGOCLASSIC.svg';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Main Kasa Logo" />
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/about">A Propos</a></li>
            </ul>
        </header>
    );
};

export default Header;