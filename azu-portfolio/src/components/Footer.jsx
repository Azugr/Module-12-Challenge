import React from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './styles/Footer.css';

function Footer() {
    return (
        <div>
            <a href="https://github.com/Azugr" target="_blank" rel="noopener noreferrer">
                <img src="/images/giticon.png" className="icon" alt="Github Icon" />
            </a>
            <a href="https://www.linkedin.com/in/draazucenagarcia" target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedinicon.png" className="icon" alt="LinkedIn Icon" />
            </a>
            <a href="https://x.com/AyudaRenal" target="_blank" rel="noopener noreferrer">
                <img src="/images/twittericon.png" className="icon" alt="Twitter Icon" />
            </a>
        </div>
    );
}

export default Footer;