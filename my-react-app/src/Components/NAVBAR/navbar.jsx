
import './navbar.css'

import { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import LOGO from '../../media/LOGO.png';

import { LuPhoneCall } from "react-icons/lu";

const NAVBAR = () => {
    useEffect(() => {
        const handleScroll = () => {
            const navcontainer = document.getElementById('navbar');
            if (window.scrollY > 10) {
                navcontainer.classList.add('scrolled');
            } else {
                navcontainer.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className='navcontainer' id='navbar' >

            <div className='container'>
                <nav className='nav-bar ' >
                    <div className='navbar-contents'>
                        <div className='nav-logo'>
                            <a href='#'><img src={LOGO} alt='Company Logo with Name' /></a>
                        </div>
                        <div className='nav-links'>
                            <div className='nav-link1'>
                                <a href='#'> Home</a>
                            </div>
                            <div className='nav-link2'>
                                <a href='#'>About Us</a>
                            </div>
                            <div className='nav-link3'>
                                <a href='#'>Products</a>
                            </div>
                        </div>
                        <div className='nav-contact'>
                            <div className='phone-icon'><LuPhoneCall /></div>
                            <div className='phone-no'>
                                <span>Phone Number</span>
                                <span><a href='https://wa.me/1234567890' target='_blank' rel='noopener noreferrer'>12345 67890</a>
                                </span>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        </section>
    )
}

export default NAVBAR;