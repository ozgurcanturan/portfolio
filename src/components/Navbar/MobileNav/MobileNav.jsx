import React from 'react'
import './MobileNav.css'

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}>
                <div className="mobile-menu-container">
                    <h1 className='logo'>DevÖzgür</h1>
                    <ul>
                        <li><a className="menu-item" href="#home" >Home</a></li>
                        <li><a className="menu-item" href="#skills" >Skills</a></li>
                        <li><a className="menu-item" href="#experience" >Work Experince</a></li>
                        <li><a className="menu-item" href="#contact" >Contact Me</a></li>
                        <button className='contact-btn'>Hire Me</button>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNav;
