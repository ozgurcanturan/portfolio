import React, { useState } from "react";
import './Navbar.css';
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => setOpenMenu(!openMenu);

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}></MobileNav>

            <nav className="nav-wrapper">
                <div className="nav-content">
                    {/* <img className="logo" src="https://www.thesparksfoundationsingapore.org/images/logo_small.png" alt="logo" /> */}
                    <h1 className="logo">DevÖzgür</h1>
                    <ul>
                        <li><a className="menu-item" href="#home" >Home</a></li>
                        <li><a className="menu-item" href="#skills" >Skills</a></li>
                        <li><a className="menu-item" href="#experience" >Work Experince</a></li>
                        <li><a className="menu-item" href="#contact" >Contact Me</a></li>
                        <button className="contact-btn" onClick={() => (null)} >Hire Me</button>
                    </ul>
                    <button className="menu-btn" onClick={() => { toggleMenu() }} >
                        {/* <span className={"material-symbols-outlined"} style={{ fontSize: "1.8rem" }}>M</span> */}
                        {openMenu ? <AiOutlineClose /> : <CiMenuBurger />}
                    </button>
                </div>
            </nav >
        </>
    )
}
export default Navbar;