import React from 'react';
import './Footer.module.scss'
import logo from '../../assets/LOGO-NB.svg';

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="Logo N&B" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;