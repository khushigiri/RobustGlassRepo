
import './footer.css'

import LOGO from '../../media/LOGO.png'

import { FaArrowRight, FaPhoneVolume, FaLocationDot, FaClock, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

const FOOTER = () => {
    return (
        <div className='footer-container'>
            <div className='footer-content container'>
                <div className="row1">
                    <div className='footer-logo'>
                        <img src={LOGO} alt='Company Logo' />
                    </div>
                    <div className='footer-about-us'>
                        <p>Robust Glass Pvt. Ltd. offers premium toughened glass solutions for buildings, interiors, and industrial use — ensuring clarity, strength, and safety in every panel.</p>
                    </div>
                </div>
                <div className="row2">
                    <div>
                        <h4>Quick Link</h4>
                    </div>
                    <div className='footer-lists'>
                        <ul>
                            <li><a href='#'>About Us <FaArrowRight className='footer-arrow' /></a></li>
                            <li><a href='#'>Our Team <FaArrowRight className='footer-arrow' /></a></li>
                            <li><a href='#'>News & Updates <FaArrowRight className='footer-arrow' /></a></li>
                            <li><a href='#'>Our Projects <FaArrowRight className='footer-arrow' /></a></li>
                            <li><a href='#'>Contact <FaArrowRight className='footer-arrow' /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row3">
                    <div>
                        <h4>Industries</h4>
                    </div>
                    <div className='footer-lists'>
                        <ul>
                            <li><a href='#'>Architecture & Design  <FaArrowRight className='footer-arrow' /></a></li>
                            <li><a href='#'>Industrial Infrastructure <FaArrowRight className='footer-arrow' /></a></li>
                            <li><a href='#'>Real Estate & Interiors <FaArrowRight className='footer-arrow' /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row4">
                    <div>
                        <h4>Products</h4>
                    </div>
                    <div className='footer-lists'>
                        <ul>
                            <li><a href='#'>5mm Toughened Glass < FaArrowRight className='footer-arrow' /></a></li>
                            <li><a href='#'>6mm Toughened Glass <FaArrowRight className='footer-arrow' /></a></li>
                            <li><a href='#'>8mm Toughened Glass <FaArrowRight className='footer-arrow' /></a></li>
                            <li><a href='#'>10mm Toughened Glass <FaArrowRight className='footer-arrow' /></a></li>
                            <li><a href='#'>12mm Toughened Glass <FaArrowRight className='footer-arrow' /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row5">
                    <div>
                        <h4>Contact Us</h4>
                    </div>
                    <div className='footer-contact'>
                        <div className='contact-no'>
                            <a href="https://wa.me/911234567890" target="_blank">
                                <FaPhoneVolume /> +91 12345 67890 < FaArrowRight className='footer-arrow' />
                            </a>
                        </div>
                        <div className='contact-mail'>
                            <a href="mailto:xyz@gmail.com">
                                <IoMail /> xyz@gmail.com < FaArrowRight className='footer-arrow' />
                            </a>
                        </div>
                        <div className='contact-address'>
                            <div><FaLocationDot /> </div>
                            <div> XYZ Street, City, State, Pin</div>

                        </div>
                        <div className='open-hours'>
                            <span><FaClock /></span>
                            Mon-Sat: 9:00 AM - 8:00 PM
                        </div>
                        <div className='map'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=..."
                                width="100%"
                                height="100"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps Location"
                            ></iframe>
                        </div>
                        <div className='footer-socials'>
                            <div><a href="#"><FaFacebookF /></a></div>
                            <div><a href="#"><IoLogoWhatsapp /></a></div>
                            <div><a href="#"><FaInstagram /></a></div>
                            <div><a href="#"><FaYoutube /></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FOOTER;