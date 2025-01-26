import React from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/Footer.css';
import giticon from '../assets/images/giticon.png';
import linkedinicon from '../assets/images/linkedinicon.png';
import twittericon from '../assets/images/twittericon.png';

function Footer() {
    return (
        <footer>
            <a href="https://github.com/Azugr" target="_blank" rel="noopener noreferrer">
                <img src={giticon} className="icon" alt="Github Icon" />
            </a>
            <a href="https://www.linkedin.com/in/draazucenagarcia" target="_blank" rel="noopener noreferrer">
                <img src={linkedinicon} className="icon" alt="LinkedIn Icon" />
            </a>
            <a href="https://x.com/AyudaRenal" target="_blank" rel="noopener noreferrer">
                <img src={twittericon} className="icon" alt="Twitter Icon" />
            </a>
        </footer>
    );
}

export default Footer;