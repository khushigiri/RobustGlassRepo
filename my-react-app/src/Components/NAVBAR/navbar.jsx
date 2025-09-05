
import './navbar.css'

import { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import LOGO from '../../media/LOGO.png';

import { LuPhoneCall } from "react-icons/lu";
import { MdOutgoingMail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";


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
            <div className='nav-lower-bar'>

                <div className='lower-bar-text'>
                    <div className='mail-text'>
                        <a href='mailto:xyz@gmail.com' target='_blank'>
                            <p>
                                <MdOutgoingMail className='mail-text-icon' aria-label="Email icon" />
                                xyz@gmail.com
                            </p>
                        </a>
                    </div>
                    <div className='addr-text'>
                        <a href="https://www.google.com/maps?q=Ranchi" target="_blank">
                            <p>
                                <FaMapLocationDot className='addr-text-icon' aria-label="Location icon" />
                                Street, City, District, State - PINCODE
                            </p>
                        </a>
                    </div>

                </div>
            </div>

            <div className='container'>
                <nav className='nav-bar ' >
                    <div className='navbar-contents'>
                        <div className='nav-logo'>
                            <a href="https://wa.me/+911234567890" target="_blank">
                                <img src={LOGO} alt='Company Logo with Name' />
                            </a>
                        </div>
                        <div className='nav-links'>
                            <div className='nav-link1'>
                                <a href='/' aria-label="Navigate to Home"> Home</a>
                            </div>
                            <div className='nav-link2'>
                                <a href='#about-us' aria-label="Navigate to About Us">About Us</a>
                            </div>
                            <div className='nav-link3'>
                                <a href='#our-products' aria-label="Navigate to Products">Products</a>
                            </div>
                        </div>
                        <div className='nav-contact'>
                            <div className='phone-icon'><LuPhoneCall aria-label="Phone icon" />
                            </div>
                            <div className='phone-no'>
                                <span>Phone Number</span>
                                <span>
                                    <a href='https://wa.me/1234567890' target='_blank' rel='noopener noreferrer'>
                                        12345 67890
                                    </a>
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